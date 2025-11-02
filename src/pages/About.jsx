import { useState, useEffect } from 'react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      icon: '📝',
      title: 'Quick Note Taking',
      description: 'Capture your thoughts instantly with our clean and intuitive interface.'
    },
    {
      icon: '🎨',
      title: 'Beautiful Sticky Notes',
      description: 'Enjoy realistic sticky note design with smooth animations and transitions.'
    },
    {
      icon: '🔍',
      title: 'Smart Search',
      description: 'Find your notes instantly with powerful search across titles and content.'
    },
    {
      icon: '🌙',
      title: 'Dark & Light Mode',
      description: 'Comfortable reading in any lighting condition with theme switching.'
    },
    {
      icon: '💾',
      title: 'Auto Save',
      description: 'Your notes are automatically saved and persist between sessions.'
    },
    {
      icon: '📱',
      title: 'Fully Responsive',
      description: 'Works perfectly on desktop, tablet, and mobile devices.'
    }
  ];

  const stats = [
    { number: '999+', label: 'Notes Created' },
    { number: '24/7', label: 'Accessibility' },
    { number: '100%', label: 'Free Forever' },
    { number: '🚀', label: 'Always Improving' }
  ];

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <div className={`text-center mb-16 transition-all duration-700 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl mb-6 shadow-2xl">
            <span className="text-3xl">📝</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
            About QuickNotes
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Your digital notebook for capturing ideas, organizing thoughts, and boosting productivity 
            with <span className="font-semibold text-blue-600 dark:text-blue-400">style and simplicity</span>.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className={`text-center p-6 rounded-2xl bg-white dark:bg-gray-800 shadow-lg border border-gray-100 dark:border-gray-700 transition-all duration-500 delay-${index * 100} transform ${isVisible ? 'scale-100 opacity-100' : 'scale-90 opacity-0'}`}
            >
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 dark:text-gray-400 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Features Grid */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-gray-800 to-gray-600 dark:from-gray-100 dark:to-gray-300 bg-clip-text text-transparent">
            Why Choose QuickNotes?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div 
                key={index}
                className={`group p-6 rounded-2xl bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 delay-${index * 100} ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-8'}`}
              >
                <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className={`transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Our Story
            </h2>
            <div className="space-y-4 text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
              <p>
                QuickNotes was born from a simple idea: note-taking should be joyful, not tedious. 
                We believe that the best tools are those that feel natural and inspire creativity.
              </p>
              <p>
                Built with modern web technologies and a focus on user experience, 
                QuickNotes combines the familiarity of physical sticky notes with the power of digital organization.
              </p>
              <p>
                Whether you're a student, professional, or creative thinker, 
                we're here to make your note-taking experience delightful and productive.
              </p>
            </div>
          </div>
          <div className={`transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl p-8 text-white shadow-2xl transform hover:scale-105 transition-transform duration-300">
              <div className="text-center">
                <div className="text-6xl mb-4">💡</div>
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                <p className="text-blue-100 leading-relaxed">
                  To create tools that simplify your life while sparking creativity. 
                  We're committed to building software that feels like magic but works like clockwork.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="bg-gray-50 dark:bg-gray-800 rounded-3xl p-8 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 bg-gradient-to-r from-gray-800 to-gray-600 dark:from-gray-100 dark:to-gray-300 bg-clip-text text-transparent">
            Built With Modern Technology
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {['React', 'Tailwind CSS', 'Vite', 'JavaScript'].map((tech, index) => (
              <div 
                key={tech}
                className="p-4 bg-white dark:bg-gray-700 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                <div className="text-2xl mb-2">⚡</div>
                <div className="font-bold text-gray-800 dark:text-white">{tech}</div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className={`bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl p-12 text-white shadow-2xl transition-all duration-700 delay-700 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Get Organized?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join thousands of users who have transformed their note-taking experience with QuickNotes.
            </p>
            <a 
              href="/"
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-xl font-bold text-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg"
            >
              🚀 Start Taking Notes Now
              <span className="ml-2">→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;