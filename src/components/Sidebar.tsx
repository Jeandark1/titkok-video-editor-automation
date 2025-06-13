import React from 'react';
import { motion } from 'framer-motion';
import { LayoutDashboard, Video, Sparkles, BarChart3, BookTemplate as FileTemplate, Settings, Zap } from 'lucide-react';

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const menuItems = [
  { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { id: 'projects', label: 'Video Projects', icon: Video },
  { id: 'content', label: 'AI Content Gen', icon: Sparkles },
  { id: 'analytics', label: 'Analytics', icon: BarChart3 },
  { id: 'templates', label: 'Templates', icon: FileTemplate },
  { id: 'settings', label: 'Settings', icon: Settings },
];

export default function Sidebar({ activeTab, setActiveTab }: SidebarProps) {
  return (
    <div className="w-64 bg-dark-900/50 backdrop-blur-xl border-r border-dark-700/50 p-6">
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-blue-600 rounded-lg flex items-center justify-center">
            <Zap className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              TikTok Auto
            </h1>
            <p className="text-xs text-dark-400">Video Automation</p>
          </div>
        </div>
      </div>

      <nav className="space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          
          return (
            <motion.button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-all ${
                isActive 
                  ? 'bg-gradient-to-r from-purple-500/20 to-blue-500/20 text-white border border-purple-500/30' 
                  : 'text-dark-300 hover:text-white hover:bg-dark-800/50'
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Icon className={`w-5 h-5 ${isActive ? 'text-purple-400' : ''}`} />
              <span className="font-medium">{item.label}</span>
            </motion.button>
          );
        })}
      </nav>

      <div className="mt-8 p-4 bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-lg border border-purple-500/20">
        <div className="flex items-center gap-2 mb-2">
          <Sparkles className="w-4 h-4 text-purple-400" />
          <span className="text-sm font-medium text-purple-400">Pro Plan</span>
        </div>
        <p className="text-xs text-dark-300 mb-3">
          Unlimited videos, advanced AI features
        </p>
        <button className="w-full bg-gradient-to-r from-purple-500 to-blue-600 text-white py-2 px-4 rounded-lg text-sm font-medium hover:from-purple-600 hover:to-blue-700 transition-all">
          Upgrade Now
        </button>
      </div>
    </div>
  );
}