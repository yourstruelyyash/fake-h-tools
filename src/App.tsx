import React, { useState } from 'react';
import { Download, Shield, Smartphone, MessageCircle, Camera, Apple, Cuboid as Android, Star, Users, Clock, ArrowLeft, User, Phone, AlertTriangle } from 'lucide-react';

interface Tool {
  id: string;
  name: string;
  description: string;
  category: string;
  icon: React.ReactNode;
  price: string;
  originalPrice: string;
  rating: number;
  downloads: string;
  features: string[];
  tags: string[];
  difficulty: string;
}

const tools: Tool[] = [
  {
    id: '1',
    name: 'Facebook Hacker Pro',
    description: 'Advanced social media penetration testing tool for educational purposes. Demonstrates common vulnerabilities in social platforms and security assessment techniques.',
    category: 'Social Media Tools',
    icon: <Shield className="w-8 h-8" />,
    price: '$0',
    originalPrice: '$99',
    rating: 4.8,
    downloads: '2.1M',
    features: ['Account Analysis', 'Security Assessment', 'Vulnerability Scanner', 'Educational Reports'],
    tags: ['Social', 'Security', 'Educational'],
    difficulty: 'Intermediate'
  },
  {
    id: '2',
    name: 'Insta Hacker Pro',
    description: 'Instagram security analysis toolkit for cybersecurity education. Learn about social media vulnerabilities and protection methods through hands-on simulation.',
    category: 'Social Media Tools',
    icon: <Camera className="w-8 h-8" />,
    price: '$0',
    originalPrice: '$99',
    rating: 4.7,
    downloads: '1.8M',
    features: ['Profile Analysis', 'Security Testing', 'Privacy Assessment', 'Learning Modules'],
    tags: ['Instagram', 'Security', 'Analysis'],
    difficulty: 'Beginner'
  },
  {
    id: '3',
    name: 'WhatsApp Breaker Pro',
    description: 'Messaging security research tool for educational cybersecurity training. Understand encryption, security protocols, and messaging app vulnerabilities.',
    category: 'Messaging Tools',
    icon: <MessageCircle className="w-8 h-8" />,
    price: '$0',
    originalPrice: '$99',
    rating: 4.6,
    downloads: '1.5M',
    features: ['Protocol Analysis', 'Encryption Study', 'Security Research', 'Educational Framework'],
    tags: ['Messaging', 'Encryption', 'Research'],
    difficulty: 'Advanced'
  },
  {
    id: '4',
    name: 'Snapchat Spy Pro',
    description: 'Premium social media security research platform for advanced cybersecurity education. Comprehensive analysis of ephemeral messaging security.',
    category: 'Social Media Tools',
    icon: <Camera className="w-8 h-8" />,
    price: '$0',
    originalPrice: '$799',
    rating: 4.9,
    downloads: '950K',
    features: ['Advanced Analytics', 'Security Research', 'Privacy Studies', 'Professional Training'],
    tags: ['Snapchat', 'Advanced', 'Research'],
    difficulty: 'Expert'
  },
  {
    id: '5',
    name: 'iOS Hacker Pro',
    description: 'iOS security testing suite for mobile cybersecurity education. Learn about mobile device security, iOS vulnerabilities, and protection mechanisms.',
    category: 'Mobile Security',
    icon: <Apple className="w-8 h-8" />,
    price: '$0',
    originalPrice: '$99',
    rating: 4.8,
    downloads: '1.3M',
    features: ['iOS Security Analysis', 'Mobile Testing', 'Device Assessment', 'Educational Content'],
    tags: ['iOS', 'Mobile', 'Security'],
    difficulty: 'Intermediate'
  },
  {
    id: '6',
    name: 'Android Killer Pro',
    description: 'Android security analysis toolkit for mobile cybersecurity training. Comprehensive Android security testing and vulnerability assessment platform.',
    category: 'Mobile Security',
    icon: <Android className="w-8 h-8" />,
    price: '$0',
    originalPrice: '$99',
    rating: 4.7,
    downloads: '1.6M',
    features: ['Android Analysis', 'Security Testing', 'Vulnerability Scanner', 'Learning Platform'],
    tags: ['Android', 'Mobile', 'Testing'],
    difficulty: 'Intermediate'
  }
];

const categories = ['All', 'Social Media Tools', 'Messaging Tools', 'Mobile Security'];

function App() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [showUserForm, setShowUserForm] = useState(false);
  const [selectedTool, setSelectedTool] = useState<Tool | null>(null);
  const [userInfo, setUserInfo] = useState({ name: '', phone: '' });
  const [contactMethod, setContactMethod] = useState<'name' | 'phone'>('name');

  const filteredTools = tools.filter(tool => {
    const matchesCategory = selectedCategory === 'All' || tool.category === selectedCategory;
    const matchesSearch = tool.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         tool.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         tool.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const handleDownload = (tool: Tool) => {
    setSelectedTool(tool);
    setShowUserForm(true);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const requiredField = contactMethod === 'name' ? userInfo.name : userInfo.phone;
    
    if (!requiredField.trim()) {
      alert(`Please enter your ${contactMethod === 'name' ? 'name' : 'phone number'}`);
      return;
    }

    // Simulate download process
    alert(`Thank you! Starting educational demo of ${selectedTool?.name}...`);
    
    // Reset form and close modal
    setShowUserForm(false);
    setSelectedTool(null);
    setUserInfo({ name: '', phone: '' });
  };

  const handleBackToTools = () => {
    setShowUserForm(false);
    setSelectedTool(null);
    setUserInfo({ name: '', phone: '' });
  };

  if (showUserForm && selectedTool) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-900 via-gray-900 to-black">
        {/* Header */}
        <header className="bg-black/30 backdrop-blur-sm border-b border-red-500/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="bg-gradient-to-r from-red-600 to-orange-600 p-2 rounded-lg">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-white">CyberSec Academy</h1>
                  <p className="text-gray-300 text-sm">Educational Security Tools</p>
                </div>
              </div>
              <button
                onClick={handleBackToTools}
                className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
                <span>Back to Tools</span>
              </button>
            </div>
          </div>
        </header>

        {/* User Information Form */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-red-500/20">
              {/* Educational Warning */}
              <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4 mb-6">
                <div className="flex items-start space-x-3">
                  <AlertTriangle className="w-6 h-6 text-yellow-400 mt-0.5" />
                  <div className="text-sm text-yellow-200">
                    <p className="font-bold mb-2">EDUCATIONAL PURPOSE ONLY</p>
                    <p>This is a simulation tool for cybersecurity education and ethical hacking training. Not for actual unauthorized access.</p>
                  </div>
                </div>
              </div>

              {/* Tool Info Header */}
              <div className="text-center mb-8">
                <div className="flex items-center justify-center space-x-3 mb-4">
                  <div className="bg-gradient-to-r from-red-600 to-orange-600 p-3 rounded-lg">
                    {selectedTool.icon}
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-white">{selectedTool.name}</h2>
                    <p className="text-gray-400">{selectedTool.category}</p>
                  </div>
                </div>
                <p className="text-gray-300 mb-6">
                  You're about to access <span className="text-red-400 font-semibold">{selectedTool.name}</span> 
                  {' '}(Educational Value: <span className="text-green-400 font-semibold">{selectedTool.originalPrice}</span>) for FREE!
                </p>
              </div>

              {/* Contact Method Selection */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-white mb-4">Target Information Required</h3>
                <div className="flex space-x-4">
                  <button
                    type="button"
                    onClick={() => setContactMethod('name')}
                    className={`flex-1 flex items-center justify-center space-x-2 py-3 px-4 rounded-lg border transition-all ${
                      contactMethod === 'name'
                        ? 'bg-red-600 border-red-500 text-white'
                        : 'bg-white/10 border-white/20 text-gray-300 hover:bg-white/20'
                    }`}
                  >
                    <User className="w-5 h-5" />
                    <span>By Name</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setContactMethod('phone')}
                    className={`flex-1 flex items-center justify-center space-x-2 py-3 px-4 rounded-lg border transition-all ${
                      contactMethod === 'phone'
                        ? 'bg-red-600 border-red-500 text-white'
                        : 'bg-white/10 border-white/20 text-gray-300 hover:bg-white/20'
                    }`}
                  >
                    <Phone className="w-5 h-5" />
                    <span>By Phone</span>
                  </button>
                </div>
              </div>

              {/* Form */}
              <form onSubmit={handleFormSubmit} className="space-y-6">
                {contactMethod === 'name' ? (
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Target Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={userInfo.name}
                      onChange={(e) => setUserInfo({ ...userInfo, name: e.target.value })}
                      placeholder="Enter your full name"
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      required
                    />
                  </div>
                ) : (
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                      Contact Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      value={userInfo.phone}
                      onChange={(e) => setUserInfo({ ...userInfo, phone: e.target.value })}
                      placeholder="Enter your phone number"
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      required
                    />
                  </div>
                )}

                <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
                  <div className="flex items-start space-x-3">
                    <Shield className="w-5 h-5 text-red-400 mt-0.5" />
                    <div className="text-sm text-red-200">
                      <p className="font-medium mb-1">Educational Use Agreement</p>
                      <p>By proceeding, you confirm this tool will be used solely for educational purposes and ethical security research.</p>
                    </div>
                  </div>
                </div>

                <div className="flex space-x-4">
                  <button
                    type="button"
                    onClick={handleBackToTools}
                    className="flex-1 bg-white/10 hover:bg-white/20 text-white font-medium py-3 px-6 rounded-lg transition-all duration-200 border border-white/20"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-200 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl"
                  >
                    <Download className="w-5 h-5" />
                    <span>Access Tool</span>
                  </button>
                </div>
              </form>

              {/* Tool Features Reminder */}
              <div className="mt-8 pt-6 border-t border-white/10">
                <h4 className="text-white font-medium mb-3">Educational Features:</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {selectedTool.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2 text-sm text-gray-300">
                      <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 text-sm text-gray-400">
                  <span className="font-medium">Difficulty Level:</span> {selectedTool.difficulty}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-900 via-gray-900 to-black">
      {/* Educational Warning Banner */}
      <div className="bg-yellow-600/20 border-b border-yellow-500/30 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center space-x-3 text-yellow-200">
            <AlertTriangle className="w-5 h-5" />
            <span className="text-sm font-medium">
              EDUCATIONAL DEMONSTRATION ONLY - For Cybersecurity Training & Ethical Hacking Education
            </span>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="bg-black/30 backdrop-blur-sm border-b border-red-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-r from-red-600 to-orange-600 p-2 rounded-lg">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-white">CyberSec Academy</h1>
                <p className="text-gray-300 text-sm">Educational Security Tools</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-green-400">
                <Shield className="w-5 h-5" />
                <span className="text-sm font-medium">Educational Use</span>
              </div>
              <div className="flex items-center space-x-2 text-red-400">
                <Clock className="w-5 h-5" />
                <span className="text-sm font-medium">Demo Access</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold text-white mb-6">
            Cybersecurity Education Platform
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-600">
              Ethical Hacking Training Tools
            </span>
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Learn cybersecurity through hands-on simulation tools. Educational demonstrations for understanding security vulnerabilities and protection methods.
          </p>
          <div className="flex items-center justify-center space-x-8 text-gray-300">
            <div className="flex items-center space-x-2">
              <Users className="w-5 h-5 text-red-400" />
              <span>50K+ Targets</span>
            </div>
            <div className="flex items-center space-x-2">
              <Star className="w-5 h-5 text-yellow-400" />
              <span>Educational Grade</span>
            </div>
            <div className="flex items-center space-x-2">
              <Shield className="w-5 h-5 text-green-400" />
              <span>Safe Learning</span>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="px-4 sm:px-6 lg:px-8 mb-12">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-red-500/20">
            <div className="flex flex-col lg:flex-row gap-6">
              <div className="flex-1">
                <input
                  type="text"
                  placeholder="Search educational tools..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                />
              </div>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                      selectedCategory === category
                        ? 'bg-red-600 text-white shadow-lg'
                        : 'bg-white/10 text-gray-300 hover:bg-white/20'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tools Grid */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTools.map((tool) => (
              <div
                key={tool.id}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-red-500/20 hover:border-red-500/40 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="bg-gradient-to-r from-red-600 to-orange-600 p-2 rounded-lg">
                      {tool.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{tool.name}</h3>
                      <p className="text-gray-400 text-sm">{tool.category}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-green-400">{tool.price}</div>
                    <div className="text-sm text-gray-400 line-through">{tool.originalPrice}</div>
                  </div>
                </div>

                <p className="text-gray-300 mb-4 text-sm leading-relaxed">{tool.description}</p>

                <div className="flex items-center space-x-4 mb-4 text-sm text-gray-400">
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span>{tool.rating}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Download className="w-4 h-4" />
                    <span>{tool.downloads}</span>
                  </div>
                  <div className="text-xs bg-red-500/20 text-red-300 px-2 py-1 rounded">
                    {tool.difficulty}
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="text-white font-medium mb-2">Learning Features:</h4>
                  <ul className="text-sm text-gray-300 space-y-1">
                    {tool.features.map((feature, index) => (
                      <li key={index} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-red-400 rounded-full"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {tool.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-red-500/20 text-red-300 text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => handleDownload(tool)}
                  className="w-full bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-200 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl"
                >
                  <Download className="w-5 h-5" />
                  <span>Access Demo</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/30 backdrop-blur-sm border-t border-red-500/20 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <div className="bg-gradient-to-r from-red-600 to-orange-600 p-2 rounded-lg">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white">CyberSec Academy</h3>
            </div>
            <p className="text-gray-400 mb-6">
              Educational cybersecurity platform for ethical hacking training. All tools are simulations for learning purposes only.
            </p>
            <div className="flex items-center justify-center space-x-8 text-sm text-gray-400">
              <span>© 2025 CyberSec Academy</span>
              <span>•</span>
              <span>Educational Use Only</span>
              <span>•</span>
              <span>Ethical Training Platform</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;