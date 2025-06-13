import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  TrendingUp, 
  TrendingDown, 
  Eye, 
  Heart, 
  Share2, 
  MessageCircle,
  Calendar,
  Filter,
  Download,
  RefreshCw
} from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell } from 'recharts';

const performanceData = [
  { date: '01/15', views: 12000, engagement: 850, shares: 120, comments: 95 },
  { date: '01/16', views: 18500, engagement: 1200, shares: 180, comments: 145 },
  { date: '01/17', views: 25600, engagement: 1800, shares: 260, comments: 210 },
  { date: '01/18', views: 32400, engagement: 2100, shares: 320, comments: 275 },
  { date: '01/19', views: 28900, engagement: 1950, shares: 290, comments: 240 },
  { date: '01/20', views: 41200, engagement: 2800, shares: 410, comments: 350 },
  { date: '01/21', views: 38700, engagement: 2600, shares: 385, comments: 320 },
];

const contentTypeData = [
  { name: 'Controversial Hooks', value: 45, color: '#8b5cf6' },
  { name: 'Testimonial Style', value: 30, color: '#3b82f6' },
  { name: 'Curiosity Driven', value: 15, color: '#10b981' },
  { name: 'Direct Product', value: 10, color: '#f59e0b' },
];

const topPerformingVideos = [
  {
    id: 1,
    hook: "This $15 gadget is replacing $200 tools...",
    views: 2.4e6,
    engagement: 15.8,
    shares: 12400,
    comments: 8900,
    revenue: 3240,
    product: 'Multi-Tool Kit'
  },
  {
    id: 2,
    hook: "POV: You discover what rich people buy",
    views: 1.8e6,
    engagement: 12.3,
    shares: 9200,
    comments: 6700,
    revenue: 2150,
    product: 'Luxury Organizer'
  },
  {
    id: 3,
    hook: "Why is TikTok hiding this from you?",
    views: 1.5e6,
    engagement: 18.2,
    shares: 11800,
    comments: 9500,
    revenue: 1890,
    product: 'Smart Home Device'
  },
];

export default function Analytics() {
  const [timeRange, setTimeRange] = useState('7d');
  const [selectedMetric, setSelectedMetric] = useState('views');

  const formatNumber = (num: number) => {
    if (num >= 1e6) return (num / 1e6).toFixed(1) + 'M';
    if (num >= 1e3) return (num / 1e3).toFixed(1) + 'K';
    return num.toString();
  };

  return (
    <div className="p-8 h-full overflow-auto">
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-white to-dark-300 bg-clip-text text-transparent mb-2">
              Analytics Dashboard
            </h1>
            <p className="text-dark-400">Track your TikTok Shop video performance</p>
          </div>
          <div className="flex items-center gap-4">
            <select
              value={timeRange}
              onChange={(e) => setTimeRange(e.target.value)}
              className="bg-dark-800/50 border border-dark-700/50 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-purple-500/50"
            >
              <option value="7d">Last 7 days</option>
              <option value="30d">Last 30 days</option>
              <option value="90d">Last 90 days</option>
            </select>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-purple-500/20 hover:bg-purple-500/30 text-purple-400 p-2 rounded-lg transition-all"
            >
              <RefreshCw className="w-5 h-5" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-dark-700/50 hover:bg-dark-700/70 text-white p-2 rounded-lg transition-all"
            >
              <Download className="w-5 h-5" />
            </motion.button>
          </div>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {[
          { 
            label: 'Total Views', 
            value: '2.8M', 
            change: '+15.2%', 
            trend: 'up', 
            icon: Eye, 
            color: 'blue',
            previous: '2.4M'
          },
          { 
            label: 'Avg Engagement', 
            value: '14.8%', 
            change: '+2.3%', 
            trend: 'up', 
            icon: Heart, 
            color: 'red',
            previous: '12.5%'
          },
          { 
            label: 'Total Shares', 
            value: '156K', 
            change: '-3.1%', 
            trend: 'down', 
            icon: Share2, 
            color: 'green',
            previous: '161K'
          },
          { 
            label: 'Revenue Generated', 
            value: '$24.6K', 
            change: '+28.4%', 
            trend: 'up', 
            icon: TrendingUp, 
            color: 'purple',
            previous: '$19.2K'
          },
        ].map((metric, index) => (
          <motion.div
            key={metric.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-dark-800/30 backdrop-blur-sm border border-dark-700/50 rounded-xl p-6 hover:bg-dark-800/50 transition-all"
          >
            <div className="flex items-center justify-between mb-4">
              <div className={`w-12 h-12 bg-${metric.color}-500/20 rounded-lg flex items-center justify-center`}>
                <metric.icon className={`w-6 h-6 text-${metric.color}-400`} />
              </div>
              <div className={`flex items-center gap-1 ${
                metric.trend === 'up' ? 'text-green-400' : 'text-red-400'
              }`}>
                {metric.trend === 'up' ? (
                  <TrendingUp className="w-4 h-4" />
                ) : (
                  <TrendingDown className="w-4 h-4" />
                )}
                <span className="text-sm font-medium">{metric.change}</span>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-white mb-1">{metric.value}</h3>
            <p className="text-dark-400 text-sm">{metric.label}</p>
            <p className="text-xs text-dark-500 mt-2">Previous: {metric.previous}</p>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* Performance Chart */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-dark-800/30 backdrop-blur-sm border border-dark-700/50 rounded-xl p-6"
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold text-white">Performance Trends</h3>
            <div className="flex items-center gap-2">
              <select
                value={selectedMetric}
                onChange={(e) => setSelectedMetric(e.target.value)}
                className="bg-dark-700/50 border border-dark-600/50 rounded-lg px-3 py-1 text-sm text-white focus:outline-none focus:border-purple-500/50"
              >
                <option value="views">Views</option>
                <option value="engagement">Engagement</option>
                <option value="shares">Shares</option>
                <option value="comments">Comments</option>
              </select>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={performanceData}>
              <XAxis dataKey="date" stroke="#64748b" />
              <YAxis stroke="#64748b" />
              <Line
                type="monotone"
                dataKey={selectedMetric}
                stroke="#8b5cf6"
                strokeWidth={3}
                dot={{ fill: '#8b5cf6', strokeWidth: 2, r: 4 }}
                activeDot={{ r: 6, stroke: '#8b5cf6', strokeWidth: 2 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Content Type Performance */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-dark-800/30 backdrop-blur-sm border border-dark-700/50 rounded-xl p-6"
        >
          <h3 className="text-xl font-semibold text-white mb-6">Content Type Performance</h3>
          <div className="flex items-center justify-center mb-6">
            <ResponsiveContainer width="100%" height={200}>
              <PieChart>
                <Pie
                  data={contentTypeData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={90}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {contentTypeData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="space-y-3">
            {contentTypeData.map((item) => (
              <div key={item.name} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div 
                    className="w-3 h-3 rounded-full" 
                    style={{ backgroundColor: item.color }}
                  />
                  <span className="text-white text-sm">{item.name}</span>
                </div>
                <span className="text-dark-400 text-sm">{item.value}%</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Top Performing Videos */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="bg-dark-800/30 backdrop-blur-sm border border-dark-700/50 rounded-xl p-6"
      >
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-semibold text-white">Top Performing Videos</h3>
          <button className="text-purple-400 hover:text-purple-300 font-medium text-sm">
            View All
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-dark-700/50">
                <th className="text-left py-3 px-4 text-dark-300 font-medium">Hook / Caption</th>
                <th className="text-left py-3 px-4 text-dark-300 font-medium">Views</th>
                <th className="text-left py-3 px-4 text-dark-300 font-medium">Engagement</th>
                <th className="text-left py-3 px-4 text-dark-300 font-medium">Shares</th>
                <th className="text-left py-3 px-4 text-dark-300 font-medium">Revenue</th>
              </tr>
            </thead>
            <tbody>
              {topPerformingVideos.map((video, index) => (
                <motion.tr
                  key={video.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className="border-b border-dark-700/30 hover:bg-dark-700/20 transition-colors"
                >
                  <td className="py-4 px-4">
                    <div>
                      <p className="text-white font-medium mb-1 truncate max-w-xs">
                        {video.hook}
                      </p>
                      <p className="text-dark-400 text-sm">{video.product}</p>
                    </div>
                  </td>
                  <td className="py-4 px-4 text-white font-medium">
                    {formatNumber(video.views)}
                  </td>
                  <td className="py-4 px-4">
                    <span className="text-green-400 font-medium">{video.engagement}%</span>
                  </td>
                  <td className="py-4 px-4 text-white">
                    {formatNumber(video.shares)}
                  </td>
                  <td className="py-4 px-4">
                    <span className="text-purple-400 font-medium">${formatNumber(video.revenue)}</span>
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