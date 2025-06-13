import React from 'react';
import { motion } from 'framer-motion';
import { 
  TrendingUp, 
  Video, 
  Eye, 
  Heart, 
  Users, 
  DollarSign,
  Play,
  Clock,
  Zap
} from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, AreaChart, Area } from 'recharts';

const statsData = [
  { name: 'Mon', views: 1200, engagement: 85 },
  { name: 'Tue', views: 1900, engagement: 92 },
  { name: 'Wed', views: 2800, engagement: 78 },
  { name: 'Thu', views: 3900, engagement: 95 },
  { name: 'Fri', views: 4800, engagement: 88 },
  { name: 'Sat', views: 6200, engagement: 96 },
  { name: 'Sun', views: 7500, engagement: 89 },
];

const recentVideos = [
  { id: 1, product: 'Wireless Earbuds', views: '24.5K', engagement: '8.9%', status: 'Published', thumbnail: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1' },
  { id: 2, product: 'Smart Watch', views: '18.2K', engagement: '12.1%', status: 'Processing', thumbnail: 'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1' },
  { id: 3, product: 'Phone Case', views: '32.1K', engagement: '6.7%', status: 'Published', thumbnail: 'https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1' },
  { id: 4, product: 'LED Strip Lights', views: '45.8K', engagement: '15.3%', status: 'Scheduled', thumbnail: 'https://images.pexels.com/photos/1112598/pexels-photo-1112598.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1' },
];

export default function Dashboard() {
  return (
    <div className="p-8 h-full overflow-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-white to-dark-300 bg-clip-text text-transparent mb-2">
          Dashboard
        </h1>
        <p className="text-dark-400">Monitor your TikTok Shop automation performance</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {[
          { label: 'Total Views', value: '284.5K', change: '+12.5%', icon: Eye, color: 'blue' },
          { label: 'Engagement Rate', value: '9.2%', change: '+2.1%', icon: Heart, color: 'red' },
          { label: 'Videos Created', value: '156', change: '+8', icon: Video, color: 'purple' },
          { label: 'Revenue Generated', value: '$3,248', change: '+18.9%', icon: DollarSign, color: 'green' },
        ].map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-dark-800/30 backdrop-blur-sm border border-dark-700/50 rounded-xl p-6 hover:bg-dark-800/50 transition-all"
          >
            <div className="flex items-center justify-between mb-4">
              <div className={`w-12 h-12 bg-${stat.color}-500/20 rounded-lg flex items-center justify-center`}>
                <stat.icon className={`w-6 h-6 text-${stat.color}-400`} />
              </div>
              <span className="text-green-400 text-sm font-medium">{stat.change}</span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-1">{stat.value}</h3>
            <p className="text-dark-400 text-sm">{stat.label}</p>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* Performance Chart */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-dark-800/30 backdrop-blur-sm border border-dark-700/50 rounded-xl p-6"
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold text-white">Performance Overview</h3>
            <TrendingUp className="w-5 h-5 text-green-400" />
          </div>
          <ResponsiveContainer width="100%" height={250}>
            <AreaChart data={statsData}>
              <defs>
                <linearGradient id="colorViews" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <XAxis dataKey="name" stroke="#64748b" />
              <YAxis stroke="#64748b" />
              <Area
                type="monotone"
                dataKey="views"
                stroke="#8b5cf6"
                strokeWidth={2}
                fillOpacity={1}
                fill="url(#colorViews)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-dark-800/30 backdrop-blur-sm border border-dark-700/50 rounded-xl p-6"
        >
          <h3 className="text-xl font-semibold text-white mb-6">Quick Actions</h3>
          <div className="space-y-4">
            {[
              { label: 'Create New Video Project', icon: Video, color: 'purple' },
              { label: 'Generate AI Content', icon: Zap, color: 'blue' },
              { label: 'Schedule Posts', icon: Clock, color: 'green' },
              { label: 'View Analytics', icon: TrendingUp, color: 'orange' },
            ].map((action, index) => (
              <motion.button
                key={action.label}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full flex items-center gap-4 p-4 bg-dark-700/30 hover:bg-dark-700/50 rounded-lg transition-all border border-dark-600/30"
              >
                <div className={`w-10 h-10 bg-${action.color}-500/20 rounded-lg flex items-center justify-center`}>
                  <action.icon className={`w-5 h-5 text-${action.color}-400`} />
                </div>
                <span className="text-white font-medium">{action.label}</span>
              </motion.button>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Recent Videos */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="bg-dark-800/30 backdrop-blur-sm border border-dark-700/50 rounded-xl p-6"
      >
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-semibold text-white">Recent Videos</h3>
          <button className="text-purple-400 hover:text-purple-300 font-medium">View All</button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-dark-700/50">
                <th className="text-left py-3 px-4 text-dark-300 font-medium">Product</th>
                <th className="text-left py-3 px-4 text-dark-300 font-medium">Views</th>
                <th className="text-left py-3 px-4 text-dark-300 font-medium">Engagement</th>
                <th className="text-left py-3 px-4 text-dark-300 font-medium">Status</th>
                <th className="text-left py-3 px-4 text-dark-300 font-medium">Action</th>
              </tr>
            </thead>
            <tbody>
              {recentVideos.map((video) => (
                <motion.tr
                  key={video.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="border-b border-dark-700/30 hover:bg-dark-700/20 transition-colors"
                >
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-3">
                      <img
                        src={video.thumbnail}
                        alt={video.product}
                        className="w-12 h-12 rounded-lg object-cover"
                      />
                      <span className="text-white font-medium">{video.product}</span>
                    </div>
                  </td>
                  <td className="py-4 px-4 text-white">{video.views}</td>
                  <td className="py-4 px-4 text-white">{video.engagement}</td>
                  <td className="py-4 px-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      video.status === 'Published' 
                        ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                        : video.status === 'Processing'
                        ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                        : 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                    }`}>
                      {video.status}
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    <button className="text-purple-400 hover:text-purple-300 transition-colors">
                      <Play className="w-4 h-4" />
                    </button>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  );
}