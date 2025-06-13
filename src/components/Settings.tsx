import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  User, 
  Settings as SettingsIcon, 
  Bell, 
  Shield, 
  CreditCard, 
  Link,
  Globe,
  Moon,
  Sun,
  Volume2,
  Mail,
  Smartphone,
  Key,
  Download,
  Upload,
  Trash2
} from 'lucide-react';

const settingsSections = [
  { id: 'profile', label: 'Profile', icon: User },
  { id: 'notifications', label: 'Notifications', icon: Bell },
  { id: 'integrations', label: 'Integrations', icon: Link },
  { id: 'billing', label: 'Billing', icon: CreditCard },
  { id: 'security', label: 'Security', icon: Shield },
  { id: 'preferences', label: 'Preferences', icon: SettingsIcon },
];

export default function Settings() {
  const [activeSection, setActiveSection] = useState('profile');
  const [darkMode, setDarkMode] = useState(true);
  const [notifications, setNotifications] = useState({
    email: true,
    push: true,
    sms: false,
    marketing: false
  });

  const renderContent = () => {
    switch (activeSection) {
      case 'profile':
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-white">Profile Settings</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-white mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  defaultValue="Alex Johnson"
                  className="w-full bg-dark-700/50 border border-dark-600/50 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500/50"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-white mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  defaultValue="alex@example.com"
                  className="w-full bg-dark-700/50 border border-dark-600/50 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500/50"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-white mb-2">
                  Business Name
                </label>
                <input
                  type="text"
                  defaultValue="Digital Marketing Agency"
                  className="w-full bg-dark-700/50 border border-dark-600/50 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500/50"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-white mb-2">
                  Time Zone
                </label>
                <select className="w-full bg-dark-700/50 border border-dark-600/50 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500/50">
                  <option>EST (UTC-5)</option>
                  <option>PST (UTC-8)</option>
                  <option>GMT (UTC+0)</option>
                </select>
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-white mb-2">
                Bio
              </label>
              <textarea
                rows={4}
                defaultValue="Digital marketing specialist focused on e-commerce growth and social media automation."
                className="w-full bg-dark-700/50 border border-dark-600/50 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500/50 resize-none"
              />
            </div>
            
            <div className="flex justify-end">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:from-purple-600 hover:to-blue-700 transition-all"
              >
                Save Changes
              </motion.button>
            </div>
          </div>
        );

      case 'notifications':
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-white">Notification Settings</h3>
            
            <div className="space-y-4">
              {[
                { key: 'email', label: 'Email Notifications', desc: 'Receive updates via email', icon: Mail },
                { key: 'push', label: 'Push Notifications', desc: 'Browser and desktop notifications', icon: Bell },
                { key: 'sms', label: 'SMS Notifications', desc: 'Text message alerts', icon: Smartphone },
                { key: 'marketing', label: 'Marketing Updates', desc: 'Product updates and tips', icon: Volume2 },
              ].map((item) => (
                <div key={item.key} className="flex items-center justify-between p-4 bg-dark-800/30 rounded-lg border border-dark-700/50">
                  <div className="flex items-center gap-3">
                    <item.icon className="w-5 h-5 text-purple-400" />
                    <div>
                      <p className="text-white font-medium">{item.label}</p>
                      <p className="text-dark-400 text-sm">{item.desc}</p>
                    </div>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={notifications[item.key as keyof typeof notifications]}
                      onChange={(e) => setNotifications(prev => ({ ...prev, [item.key]: e.target.checked }))}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-dark-600 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-500"></div>
                  </label>
                </div>
              ))}
            </div>
          </div>
        );

      case 'integrations':
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-white">Platform Integrations</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { name: 'TikTok', status: 'Connected', color: 'green', desc: 'Auto-upload and analytics' },
                { name: 'Instagram', status: 'Not Connected', color: 'gray', desc: 'Cross-platform posting' },
                { name: 'YouTube Shorts', status: 'Connected', color: 'green', desc: 'Multi-platform reach' },
                { name: 'Shopify', status: 'Not Connected', color: 'gray', desc: 'Product sync and tracking' },
              ].map((integration) => (
                <div key={integration.name} className="p-6 bg-dark-800/30 rounded-lg border border-dark-700/50">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-white font-semibold">{integration.name}</h4>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      integration.status === 'Connected' 
                        ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                        : 'bg-gray-500/20 text-gray-400 border border-gray-500/30'
                    }`}>
                      {integration.status}
                    </span>
                  </div>
                  <p className="text-dark-400 text-sm mb-4">{integration.desc}</p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-full py-2 px-4 rounded-lg font-medium transition-all ${
                      integration.status === 'Connected'
                        ? 'bg-red-500/20 text-red-400 border border-red-500/30 hover:bg-red-500/30'
                        : 'bg-purple-500/20 text-purple-400 border border-purple-500/30 hover:bg-purple-500/30'
                    }`}
                  >
                    {integration.status === 'Connected' ? 'Disconnect' : 'Connect'}
                  </motion.button>
                </div>
              ))}
            </div>
          </div>
        );

      case 'billing':
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-white">Billing & Subscription</h3>
            
            <div className="bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-purple-500/20 rounded-xl p-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h4 className="text-white font-semibold">Pro Plan</h4>
                  <p className="text-dark-400 text-sm">Unlimited videos, advanced AI features</p>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-white">$49</p>
                  <p className="text-dark-400 text-sm">/month</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-red-500/20 text-red-400 border border-red-500/30 py-2 px-4 rounded-lg font-medium hover:bg-red-500/30 transition-all"
                >
                  Cancel Subscription
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-purple-500/20 text-purple-400 border border-purple-500/30 py-2 px-4 rounded-lg font-medium hover:bg-purple-500/30 transition-all"
                >
                  Update Payment
                </motion.button>
              </div>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Billing History</h4>
              <div className="space-y-3">
                {[
                  { date: '2024-01-01', amount: '$49.00', status: 'Paid' },
                  { date: '2023-12-01', amount: '$49.00', status: 'Paid' },
                  { date: '2023-11-01', amount: '$49.00', status: 'Paid' },
                ].map((invoice, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-dark-800/30 rounded-lg border border-dark-700/50">
                    <div>
                      <p className="text-white font-medium">{invoice.date}</p>
                      <p className="text-dark-400 text-sm">Pro Plan Subscription</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="text-white font-semibold">{invoice.amount}</span>
                      <span className="bg-green-500/20 text-green-400 border border-green-500/30 px-3 py-1 rounded-full text-xs font-medium">
                        {invoice.status}
                      </span>
                      <button className="text-purple-400 hover:text-purple-300">
                        <Download className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'security':
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-white">Security Settings</h3>
            
            <div className="space-y-4">
              <div className="p-4 bg-dark-800/30 rounded-lg border border-dark-700/50">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <Key className="w-5 h-5 text-purple-400" />
                    <span className="text-white font-medium">Password</span>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="text-purple-400 hover:text-purple-300 text-sm font-medium"
                  >
                    Change
                  </motion.button>
                </div>
                <p className="text-dark-400 text-sm">Last changed 3 months ago</p>
              </div>
              
              <div className="p-4 bg-dark-800/30 rounded-lg border border-dark-700/50">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <Shield className="w-5 h-5 text-green-400" />
                    <span className="text-white font-medium">Two-Factor Authentication</span>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" defaultChecked className="sr-only peer" />
                    <div className="w-11 h-6 bg-dark-600 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-500"></div>
                  </label>
                </div>
                <p className="text-dark-400 text-sm">Enabled via authenticator app</p>
              </div>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Active Sessions</h4>
              <div className="space-y-3">
                {[
                  { location: 'New York, US', device: 'Chrome on MacOS', time: 'Current session' },
                  { location: 'London, UK', device: 'Firefox on Windows', time: '2 hours ago' },
                ].map((session, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-dark-800/30 rounded-lg border border-dark-700/50">
                    <div>
                      <p className="text-white font-medium">{session.location}</p>
                      <p className="text-dark-400 text-sm">{session.device}</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="text-dark-400 text-sm">{session.time}</span>
                      {index !== 0 && (
                        <button className="text-red-400 hover:text-red-300">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'preferences':
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-white">App Preferences</h3>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-dark-800/30 rounded-lg border border-dark-700/50">
                <div className="flex items-center gap-3">
                  {darkMode ? <Moon className="w-5 h-5 text-purple-400" /> : <Sun className="w-5 h-5 text-yellow-400" />}
                  <div>
                    <p className="text-white font-medium">Dark Mode</p>
                    <p className="text-dark-400 text-sm">Switch between light and dark themes</p>
                  </div>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={darkMode}
                    onChange={(e) => setDarkMode(e.target.checked)}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-dark-600 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-500"></div>
                </label>
              </div>
              
              <div className="p-4 bg-dark-800/30 rounded-lg border border-dark-700/50">
                <div className="flex items-center gap-3 mb-3">
                  <Globe className="w-5 h-5 text-blue-400" />
                  <span className="text-white font-medium">Language</span>
                </div>
                <select className="w-full bg-dark-700/50 border border-dark-600/50 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500/50">
                  <option>English (US)</option>
                  <option>Spanish</option>
                  <option>French</option>
                  <option>German</option>
                </select>
              </div>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Data Management</h4>
              <div className="space-y-3">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full flex items-center gap-3 p-4 bg-dark-800/30 hover:bg-dark-800/50 rounded-lg border border-dark-700/50 transition-all"
                >
                  <Download className="w-5 h-5 text-blue-400" />
                  <div className="text-left">
                    <p className="text-white font-medium">Export Data</p>
                    <p className="text-dark-400 text-sm">Download all your data</p>
                  </div>
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full flex items-center gap-3 p-4 bg-red-500/10 hover:bg-red-500/20 rounded-lg border border-red-500/30 transition-all"
                >
                  <Trash2 className="w-5 h-5 text-red-400" />
                  <div className="text-left">
                    <p className="text-red-400 font-medium">Delete Account</p>
                    <p className="text-red-400/70 text-sm">Permanently delete your account</p>
                  </div>
                </motion.button>
              </div>
            </div>
          </div>
        );

      default:
        return <div>Select a section</div>;
    }
  };

  return (
    <div className="p-8 h-full overflow-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-white to-dark-300 bg-clip-text text-transparent mb-2">
          Settings
        </h1>
        <p className="text-dark-400">Manage your account and application preferences</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Settings Navigation */}
        <div className="lg:col-span-1">
          <div className="space-y-2">
            {settingsSections.map((section) => {
              const Icon = section.icon;
              return (
                <motion.button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-all ${
                    activeSection === section.id
                      ? 'bg-purple-500/20 border border-purple-500/50 text-white'
                      : 'text-dark-300 hover:text-white hover:bg-dark-800/50'
                  }`}
                >
                  <Icon className={`w-5 h-5 ${
                    activeSection === section.id ? 'text-purple-400' : 'text-dark-400'
                  }`} />
                  <span className="font-medium">{section.label}</span>
                </motion.button>
              );
            })}
          </div>
        </div>

        {/* Settings Content */}
        <div className="lg:col-span-3">
          <div className="bg-dark-800/30 backdrop-blur-sm border border-dark-700/50 rounded-xl p-8">
            {renderContent()}
          </div>
        </div>
      </div>
    </div>
  );
}