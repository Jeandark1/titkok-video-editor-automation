import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Search, 
  Filter, 
  Star, 
  Download, 
  Eye, 
  Heart, 
  TrendingUp,
  Play,
  Copy,
  Bookmark,
  MoreVertical
} from 'lucide-react';

const templateCategories = [
  { id: 'all', label: 'All Templates', count: 24 },
  { id: 'controversial', label: 'Controversial', count: 8 },
  { id: 'testimonial', label: 'Testimonial', count: 6 },
  { id: 'curiosity', label: 'Curiosity', count: 5 },
  { id: 'trending', label: 'Trending Now', count: 5 },
];

const templates = [
  {
    id: 1,
    title: 'Controversial Product Reveal',
    category: 'controversial',
    description: 'Perfect for products that solve common problems in unexpected ways',
    hook: 'This $12 item is replacing $200 products (and companies hate it)',
    caption: 'I was skeptical at first but this literally changed everything for me. Got mine from TikTok shop and now I understand the hype 💯',
    hashtags: '#tiktokmademebuyit #gamechanger #musthave #viral #shopnow',
    performance: {
      avgViews: '2.3M',
      avgEngagement: '15.2%',
      conversionRate: '8.9%'
    },
    rating: 4.8,
    uses: 1420,
    thumbnail: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1',
    trending: true
  },
  {
    id: 2,
    title: 'First Person Experience',
    category: 'testimonial',
    description: 'Authentic testimonial style that builds trust and relatability',
    hook: 'POV: You find the product everyone\'s been gatekeeping',
    caption: 'Okay but why did nobody tell me about this sooner?? Been using it for a week and I\'m obsessed. Friends keep asking where I got it 😅',
    hashtags: '#obsessed #hiddengem #worthit #recommend #tiktokviral',
    performance: {
      avgViews: '1.8M',
      avgEngagement: '12.7%',
      conversionRate: '11.3%'
    },
    rating: 4.9,
    uses: 892,
    thumbnail: 'https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1',
    trending: false
  },
  {
    id: 3,
    title: 'Mystery Hook Builder',
    category: 'curiosity',
    description: 'Creates intrigue and drives engagement through curiosity gaps',
    hook: 'The reason everyone\'s buying this (and not talking about it)',
    caption: 'I finally understand why this keeps selling out. Not even sponsored, just genuinely impressed by how well this works',
    hashtags: '#mystery #sellout #impressed #genuine #tiktokmademebuyit',
    performance: {
      avgViews: '2.1M',
      avgEngagement: '18.4%',
      conversionRate: '7.2%'
    },
    rating: 4.7,
    uses: 756,
    thumbnail: 'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1',
    trending: true
  },
  {
    id: 4,
    title: 'Problem-Solution Reveal',
    category: 'trending',
    description: 'Highlights a common problem and presents your product as the solution',
    hook: 'This is either genius or completely stupid... you decide',
    caption: 'Took a chance on this and honestly? Best purchase I\'ve made this year. The results speak for themselves',
    hashtags: '#genius #bestpurchase #results #tookachance #speakforthemselves',
    performance: {
      avgViews: '1.9M',
      avgEngagement: '14.8%',
      conversionRate: '9.7%'
    },
    rating: 4.6,
    uses: 634,
    thumbnail: 'https://images.pexels.com/photos/2113855/pexels-photo-2113855.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1',
    trending: true
  }
];

export default function Templates() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTemplate, setSelectedTemplate] = useState<number | null>(null);

  const filteredTemplates = templates.filter(template => {
    const matchesCategory = selectedCategory === 'all' || template.category === selectedCategory;
    const matchesSearch = template.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         template.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="p-8 h-full overflow-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-white to-dark-300 bg-clip-text text-transparent mb-2">
          Content Templates
        </h1>
        <p className="text-dark-400">Pre-built viral content templates for your TikTok Shop videos</p>
      </div>

      {/* Search and Filter */}
      <div className="flex items-center gap-4 mb-8">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-dark-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search templates..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-dark-800/50 border border-dark-700/50 rounded-lg pl-10 pr-4 py-3 text-white placeholder-dark-400 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/30"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Categories Sidebar */}
        <div className="lg:col-span-1">
          <h3 className="text-lg font-semibold text-white mb-4">Categories</h3>
          <div className="space-y-2">
            {templateCategories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full flex items-center justify-between p-3 rounded-lg transition-all ${
                  selectedCategory === category.id
                    ? 'bg-purple-500/20 border border-purple-500/50 text-white'
                    : 'bg-dark-800/30 border border-dark-700/50 text-dark-300 hover:text-white hover:bg-dark-800/50'
                }`}
              >
                <span className="font-medium">{category.label}</span>
                <span className={`text-xs px-2 py-1 rounded-full ${
                  selectedCategory === category.id 
                    ? 'bg-purple-500/30 text-purple-300' 
                    : 'bg-dark-600/50 text-dark-400'
                }`}>
                  {category.count}
                </span>
              </motion.button>
            ))}
          </div>

          {/* Featured Template */}
          <div className="mt-8 bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-purple-500/20 rounded-xl p-6">
            <div className="flex items-center gap-2 mb-3">
              <Star className="w-5 h-5 text-yellow-400" />
              <span className="text-sm font-medium text-purple-400">Featured Template</span>
            </div>
            <h4 className="text-white font-semibold mb-2">Viral Hook Generator</h4>
            <p className="text-dark-300 text-sm mb-4">
              Our highest-performing template with 15M+ total views
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full bg-gradient-to-r from-purple-500 to-blue-600 text-white py-2 px-4 rounded-lg text-sm font-medium hover:from-purple-600 hover:to-blue-700 transition-all"
            >
              Try Now
            </motion.button>
          </div>
        </div>

        {/* Templates Grid */}
        <div className="lg:col-span-3">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredTemplates.map((template, index) => (
              <motion.div
                key={template.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-dark-800/30 backdrop-blur-sm border border-dark-700/50 rounded-xl overflow-hidden hover:bg-dark-800/50 transition-all group"
              >
                {/* Template Header */}
                <div className="relative">
                  <img
                    src={template.thumbnail}
                    alt={template.title}
                    className="w-full h-32 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute top-3 left-3 flex items-center gap-2">
                    {template.trending && (
                      <span className="bg-red-500/20 text-red-400 border border-red-500/30 px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1">
                        <TrendingUp className="w-3 h-3" />
                        Trending
                      </span>
                    )}
                  </div>
                  <div className="absolute top-3 right-3">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="bg-white/20 backdrop-blur-sm rounded-full p-2 hover:bg-white/30 transition-colors opacity-0 group-hover:opacity-100"
                    >
                      <MoreVertical className="w-4 h-4 text-white" />
                    </motion.button>
                  </div>
                </div>

                {/* Template Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">{template.title}</h3>
                      <p className="text-dark-400 text-sm">{template.description}</p>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-white text-sm font-medium">{template.rating}</span>
                    </div>
                  </div>

                  {/* Performance Stats */}
                  <div className="grid grid-cols-3 gap-3 mb-4">
                    <div className="text-center">
                      <div className="flex items-center justify-center gap-1 mb-1">
                        <Eye className="w-3 h-3 text-blue-400" />
                        <span className="text-white font-medium text-xs">{template.performance.avgViews}</span>
                      </div>
                      <p className="text-dark-400 text-xs">Avg Views</p>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center justify-center gap-1 mb-1">
                        <Heart className="w-3 h-3 text-red-400" />
                        <span className="text-white font-medium text-xs">{template.performance.avgEngagement}</span>
                      </div>
                      <p className="text-dark-400 text-xs">Engagement</p>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center justify-center gap-1 mb-1">
                        <TrendingUp className="w-3 h-3 text-green-400" />
                        <span className="text-white font-medium text-xs">{template.performance.conversionRate}</span>
                      </div>
                      <p className="text-dark-400 text-xs">Conversion</p>
                    </div>
                  </div>

                  {/* Content Preview */}
                  <div className="space-y-3 mb-4">
                    <div>
                      <p className="text-xs text-purple-400 font-medium mb-1">Hook:</p>
                      <p className="text-white text-sm bg-dark-700/30 rounded-lg p-2 relative group/copy">
                        {template.hook}
                        <button
                          onClick={() => copyToClipboard(template.hook)}
                          className="absolute top-2 right-2 opacity-0 group-hover/copy:opacity-100 transition-opacity"
                        >
                          <Copy className="w-3 h-3 text-dark-400 hover:text-white" />
                        </button>
                      </p>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-2">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 bg-purple-500/20 hover:bg-purple-500/30 text-purple-400 py-2 px-3 rounded-lg font-medium transition-all border border-purple-500/30 text-sm"
                    >
                      Use Template
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-dark-700/50 hover:bg-dark-700/70 text-white p-2 rounded-lg transition-all"
                    >
                      <Play className="w-4 h-4" />
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-dark-700/50 hover:bg-dark-700/70 text-white p-2 rounded-lg transition-all"
                    >
                      <Bookmark className="w-4 h-4" />
                    </motion.button>
                  </div>

                  <div className="mt-4 pt-4 border-t border-dark-700/50 flex items-center justify-between">
                    <p className="text-xs text-dark-400">
                      Used by {template.uses.toLocaleString()} creators
                    </p>
                    <button className="text-purple-400 hover:text-purple-300 text-xs font-medium">
                      View Details
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Empty State */}
          {filteredTemplates.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <Search className="w-16 h-16 text-dark-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">No templates found</h3>
              <p className="text-dark-400 mb-6">
                Try adjusting your search or browse different categories
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}