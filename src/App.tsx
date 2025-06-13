import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import VideoProjects from './components/VideoProjects';
import ContentGenerator from './components/ContentGenerator';
import Analytics from './components/Analytics';
import Templates from './components/Templates';
import Settings from './components/Settings';

function App() {
  const [activeTab, setActiveTab] = useState('dashboard');

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard />;
      case 'projects':
        return <VideoProjects />;
      case 'content':
        return <ContentGenerator />;
      case 'analytics':
        return <Analytics />;
      case 'templates':
        return <Templates />;
      case 'settings':
        return <Settings />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-dark-950 text-white flex">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <main className="flex-1 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="h-full"
          >
            {renderContent()}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}

export default App;