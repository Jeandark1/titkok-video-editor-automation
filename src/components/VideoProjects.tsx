import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Plus, 
  Upload, 
  Video, 
  Play, 
  Pause, 
  Download,
  Settings,
  Eye,
  Heart,
  Share2,
  MoreVertical,
  Filter,
  Search
} from 'lucide-react';

const projects = [
  {
    id: 1,
    name: 'Summer Collection Launch',
    product: 'Fashion Items',
    status: 'Published',
    views: '45.2K',
    engagement: '12.8%',
    videos: 8,
    thumbnail: 'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1',
    createdAt: '2024-01-15',
    lastUpdated: '2 hours ago'
  },
  {
    id: 2,
    name: 'Tech Gadgets Promo',
    product: 'Electronics',
    status: 'Processing',
    views: '28.7K',
    engagement: '9.4%',
    videos: 12,
    thumbnail: 'https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1',
    createdAt: '2024-01-14',
    lastUpdated: '5 minutes ago'
  },
  {
    id: 3,
    name: 'Home & Garden Essentials',
    product: 'Home Decor',
    status: 'Draft',
    views: '0',
    engagement: '0%',
    videos: 6,
    thumbnail: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1',
    createdAt: '2024-01-13',
    lastUpdated: '1 day ago'
  },
  {
    id: 4,
    name: 'Beauty Must-Haves',
    product: 'Cosmetics',
    status: 'Scheduled',
    views: '0',
    engagement: '0%',
    videos: 15,
    thumbnail: 'https://images.pexels.com/photos/2113855/pexels-photo-2113855.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1',
    createdAt: '2024-01-12',
    lastUpdated: '3 hours ago'
  }
];

export default function VideoProjects() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');

  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.product.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterStatus === 'all' || project.status.toLowerCase() === filterStatus.toLowerCase();
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="p-8 h-full overflow-auto">
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-white to-dark-300 bg-clip-text text-transparent mb-2">
              Video Projects
            </h1>
            <p className="text-dark-400">Manage your TikTok video automation projects</p>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-6 py-3 rounded-lg font-medium flex items-center gap-2 hover:from-purple-600 hover:to-blue-700 transition-all"
          >
            <Plus className="w-5 h-5" />
            New Project
          </motion.button>
        </div>

        {/* Search and Filter Bar */}
        <div className="flex items-center gap-4 mb-6">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-dark-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search projects..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-dark-800/50 border border-dark-700/50 rounded-lg pl-10 pr-4 py-3 text-white placeholder-dark-400 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/30"
            />
          </div>
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="bg-dark-800/50 border border-dark-700/50 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500/50"
          >
            <option value="all">All Status</option>
            <option value="published">Published</option>
            <option value="processing">Processing</option>
            <option value="draft">Draft</option>
            <option value="scheduled">Scheduled</option>
          </select>
          <button className="bg-dark-800/50 border border-dark-700/50 rounded-lg p-3 text-dark-400 hover:text-white transition-colors">
            <Filter className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-dark-800/30 backdrop-blur-sm border border-dark-700/50 rounded-xl overflow-hidden hover:bg-dark-800/50 transition-all group"
          >
            {/* Project Thumbnail */}
            <div className="relative">
              <img
                src={project.thumbnail}
                alt={project.name}
                className="w-full h-48 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute top-4 right-4">
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                  project.status === 'Published' 
                    ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                    : project.status === 'Processing'
                    ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                    : project.status === 'Scheduled'
                    ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                    : 'bg-gray-500/20 text-gray-400 border border-gray-500/30'
                }`}>
                  {project.status}
                </span>
              </div>
              <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="flex items-center gap-2">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="bg-white/20 backdrop-blur-sm rounded-full p-3 hover:bg-white/30 transition-colors"
                  >
                    <Play className="w-5 h-5 text-white" />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="bg-white/20 backdrop-blur-sm rounded-full p-3 hover:bg-white/30 transition-colors"
                  >
                    <Settings className="w-5 h-5 text-white" />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="bg-white/20 backdrop-blur-sm rounded-full p-3 hover:bg-white/30 transition-colors ml-auto"
                  >
                    <MoreVertical className="w-5 h-5 text-white" />
                  </motion.button>
                </div>
              </div>
            </div>

            {/* Project Info */}
            <div className="p-6">
              <div className="mb-4">
                <h3 className="text-xl font-semibold text-white mb-1">{project.name}</h3>
                <p className="text-dark-400 text-sm">{project.product}</p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mb-4">
                <div className="text-center">
                  <div className="flex items-center justify-center gap-1 mb-1">
                    <Eye className="w-4 h-4 text-blue-400" />
                    <span className="text-white font-semibold text-sm">{project.views}</span>
                  </div>
                  <p className="text-dark-400 text-xs">Views</p>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center gap-1 mb-1">
                    <Heart className="w-4 h-4 text-red-400" />
                    <span className="text-white font-semibold text-sm">{project.engagement}</span>
                  </div>
                  <p className="text-dark-400 text-xs">Engagement</p>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center gap-1 mb-1">
                    <Video className="w-4 h-4 text-purple-400" />
                    <span className="text-white font-semibold text-sm">{project.videos}</span>
                  </div>
                  <p className="text-dark-400 text-xs">Videos</p>
                </div>
              </div>

              {/* Actions */}
              <div className="flex items-center gap-2">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex-1 bg-purple-500/20 hover:bg-purple-500/30 text-purple-400 py-2 px-4 rounded-lg font-medium transition-all border border-purple-500/30"
                >
                  Edit Project
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-dark-700/50 hover:bg-dark-700/70 text-white p-2 rounded-lg transition-all"
                >
                  <Share2 className="w-4 h-4" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-dark-700/50 hover:bg-dark-700/70 text-white p-2 rounded-lg transition-all"
                >
                  <Download className="w-4 h-4" />
                </motion.button>
              </div>

              <div className="mt-4 pt-4 border-t border-dark-700/50">
                <p className="text-xs text-dark-400">
                  Last updated: {project.lastUpdated}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Empty State */}
      {filteredProjects.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-16"
        >
          <Video className="w-16 h-16 text-dark-500 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-white mb-2">No projects found</h3>
          <p className="text-dark-400 mb-6">
            {searchTerm || filterStatus !== 'all' 
              ? 'Try adjusting your search or filter criteria'
              : 'Create your first video project to get started'
            }
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:from-purple-600 hover:to-blue-700 transition-all"
          >
            Create Project
          </motion.button>
        </motion.div>
      )}
    </div>
  );
}