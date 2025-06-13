import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Sparkles, 
  RefreshCw, 
  Copy, 
  Wand2, 
  MessageSquare,
  Hash,
  Type,
  Zap,
  Settings,
  Download,
  Shuffle
} from 'lucide-react';

const contentTypes = [
  { id: 'hooks', label: 'Text Hooks', icon: Type, description: 'Controversial & engaging headlines' },
  { id: 'captions', label: 'Captions', icon: MessageSquare, description: 'First-person testimonial style' },
  { id: 'hashtags', label: 'Hashtags', icon: Hash, description: 'Trending & niche-specific tags' },
];

const hookExamples = [
  "This product is actually changing lives (and no one talks about it)",
  "POV: You find out this $12 item does what $200 items can't",
  "Why is everyone gate-keeping this product?? 🤫",
  "This is either genius or completely stupid... you decide",
  "TikTok shop finds that actually work (not sponsored)"
];

const captionExamples = [
  "Obsessed with these! Got them last week and literally can't stop using them 💯",
  "Ok but why did no one tell me about these sooner? Game changer fr",
  "These are flying off TikTok shop for a reason... just ordered 3 more",
  "Not me becoming that person who recommends this to everyone 😅",
  "This purchase was so worth it, my friends keep asking where I got it"
];

const hashtagExamples = [
  "#tiktokmademebuyit #musthave #viral #trending #shopnow",
  "#tiktokfinds #amazingproducts #worthit #obsessed #recommend",
  "#gamechanger #lifehack #bestpurchase #trending #fyp",
  "#tiktokviral #shophaul #amazing #cantlivewithout #musttry",
  "#discoverypage #shopfinds #wortheveryppenny #recommend #viral"
];

export default function ContentGenerator() {
  const [activeContentType, setActiveContentType] = useState('hooks');
  const [productInfo, setProductInfo] = useState('');
  const [generatedContent, setGeneratedContent] = useState<string[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);
  const [contentStyle, setContentStyle] = useState('controversial');

  const getContentExamples = () => {
    switch (activeContentType) {
      case 'hooks': return hookExamples;
      case 'captions': return captionExamples;
      case 'hashtags': return hashtagExamples;
      default: return hookExamples;
    }
  };

  const generateContent = async () => {
    setIsGenerating(true);
    // Simulate AI generation delay
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    const examples = getContentExamples();
    const shuffled = [...examples].sort(() => Math.random() - 0.5);
    setGeneratedContent(shuffled.slice(0, 3));
    setIsGenerating(false);
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    // You could add a toast notification here
  };

  return (
    <div className="p-8 h-full overflow-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-white to-dark-300 bg-clip-text text-transparent mb-2">
          AI Content Generator
        </h1>
        <p className="text-dark-400">Generate viral content for your TikTok Shop videos</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Content Type Selection */}
        <div className="lg:col-span-1">
          <h3 className="text-lg font-semibold text-white mb-4">Content Type</h3>
          <div className="space-y-3">
            {contentTypes.map((type) => {
              const Icon = type.icon;
              return (
                <motion.button
                  key={type.id}
                  onClick={() => setActiveContentType(type.id)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full p-4 rounded-lg border transition-all text-left ${
                    activeContentType === type.id
                      ? 'bg-purple-500/20 border-purple-500/50 text-white'
                      : 'bg-dark-800/30 border-dark-700/50 text-dark-300 hover:text-white hover:bg-dark-800/50'
                  }`}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <Icon className={`w-5 h-5 ${
                      activeContentType === type.id ? 'text-purple-400' : 'text-dark-400'
                    }`} />
                    <span className="font-medium">{type.label}</span>
                  </div>
                  <p className="text-sm text-dark-400">{type.description}</p>
                </motion.button>
              );
            })}
          </div>

          {/* Generation Settings */}
          <div className="mt-8 bg-dark-800/30 backdrop-blur-sm border border-dark-700/50 rounded-xl p-6">
            <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
              <Settings className="w-5 h-5 text-purple-400" />
              Settings
            </h4>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-white mb-2">
                  Content Style
                </label>
                <select
                  value={contentStyle}
                  onChange={(e) => setContentStyle(e.target.value)}
                  className="w-full bg-dark-700/50 border border-dark-600/50 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-purple-500/50"
                >
                  <option value="controversial">Controversial</option>
                  <option value="testimonial">Testimonial</option>
                  <option value="curiosity">Curiosity-driven</option>
                  <option value="casual">Casual & Friendly</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-white mb-2">
                  Product Category
                </label>
                <input
                  type="text"
                  placeholder="e.g., Electronics, Fashion, Home"
                  className="w-full bg-dark-700/50 border border-dark-600/50 rounded-lg px-3 py-2 text-white placeholder-dark-400 focus:outline-none focus:border-purple-500/50"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Content Generation */}
        <div className="lg:col-span-2 space-y-6">
          {/* Product Input */}
          <div className="bg-dark-800/30 backdrop-blur-sm border border-dark-700/50 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white mb-4">Product Information</h3>
            <textarea
              value={productInfo}
              onChange={(e) => setProductInfo(e.target.value)}
              placeholder="Describe your product (name, key features, benefits, target audience)..."
              className="w-full bg-dark-700/50 border border-dark-600/50 rounded-lg p-4 text-white placeholder-dark-400 focus:outline-none focus:border-purple-500/50 min-h-24 resize-none"
            />
            
            <div className="flex items-center gap-4 mt-4">
              <motion.button
                onClick={generateContent}
                disabled={isGenerating}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-6 py-3 rounded-lg font-medium flex items-center gap-2 hover:from-purple-600 hover:to-blue-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isGenerating ? (
                  <>
                    <RefreshCw className="w-5 h-5 animate-spin" />
                    Generating...
                  </>
                ) : (
                  <>
                    <Sparkles className="w-5 h-5" />
                    Generate Content
                  </>
                )}
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-dark-700/50 hover:bg-dark-700/70 text-white px-4 py-3 rounded-lg font-medium flex items-center gap-2 transition-all"
              >
                <Shuffle className="w-5 h-5" />
                Random
              </motion.button>
            </div>
          </div>

          {/* Generated Content */}
          <div className="bg-dark-800/30 backdrop-blur-sm border border-dark-700/50 rounded-xl p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-white">Generated Content</h3>
              <div className="flex items-center gap-2">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-dark-700/50 hover:bg-dark-700/70 text-white px-3 py-2 rounded-lg text-sm font-medium transition-all"
                >
                  <Download className="w-4 h-4" />
                </motion.button>
                <motion.button
                  onClick={generateContent}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-purple-500/20 hover:bg-purple-500/30 text-purple-400 px-3 py-2 rounded-lg text-sm font-medium transition-all"
                >
                  <RefreshCw className="w-4 h-4" />
                </motion.button>
              </div>
            </div>

            {generatedContent.length > 0 ? (
              <div className="space-y-4">
                {generatedContent.map((content, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-dark-700/30 rounded-lg p-4 border border-dark-600/30"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <p className="text-white flex-1">{content}</p>
                      <motion.button
                        onClick={() => copyToClipboard(content)}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="text-dark-400 hover:text-white transition-colors"
                      >
                        <Copy className="w-4 h-4" />
                      </motion.button>
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <Wand2 className="w-12 h-12 text-dark-500 mx-auto mb-4" />
                <h4 className="text-lg font-semibold text-white mb-2">Ready to Generate</h4>
                <p className="text-dark-400">
                  Add product information and click generate to create viral content
                </p>
              </div>
            )}
          </div>

          {/* Content Tips */}
          <div className="bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-purple-500/20 rounded-xl p-6">
            <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
              <Zap className="w-5 h-5 text-purple-400" />
              Pro Tips for Viral Content
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <h5 className="font-medium text-purple-400 mb-2">Hooks That Work:</h5>
                <ul className="text-dark-300 space-y-1">
                  <li>• Start with controversy or surprise</li>
                  <li>• Use "POV:" or "This is either..."</li>
                  <li>• Include intentional typos for engagement</li>
                  <li>• Ask provocative questions</li>
                </ul>
              </div>
              <div>
                <h5 className="font-medium text-blue-400 mb-2">Caption Best Practices:</h5>
                <ul className="text-dark-300 space-y-1">
                  <li>• Keep it conversational and authentic</li>
                  <li>• Use first-person testimonial style</li>
                  <li>• Include relatable emotions</li>
                  <li>• End with social proof hints</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}