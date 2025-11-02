import PropTypes from 'prop-types';

const Header = ({ toggleTheme, isDarkMode, searchTerm, setSearchTerm, notesCount }) => {
  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 backdrop-blur-md ${
      isDarkMode 
        ? 'bg-gray-900/80 border-gray-700' 
        : 'bg-white/80 border-gray-200'
    } border-b shadow-lg`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          {/* Logo and Navigation */}
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">📝</span>
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                QuickNotes
              </h1>
            </div>
            
            <nav className="hidden md:flex space-x-1">
              <a 
                href="/" 
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                  isDarkMode 
                    ? 'hover:bg-gray-700 text-blue-400' 
                    : 'hover:bg-blue-50 text-blue-600'
                }`}
              >
                Home
              </a>
              <a 
                href="/about" 
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                  isDarkMode 
                    ? 'hover:bg-gray-700 text-gray-300' 
                    : 'hover:bg-gray-100 text-gray-600'
                }`}
              >
                About
              </a>
            </nav>
          </div>
          
          {/* Search and Controls */}
          <div className="flex items-center space-x-4 w-full sm:w-auto">
            {/* Notes Counter */}
            <div className={`hidden sm:flex items-center space-x-2 px-3 py-2 rounded-lg ${
              isDarkMode ? 'bg-gray-800' : 'bg-gray-100'
            }`}>
              <span className="text-sm font-medium">
                {notesCount} notes
              </span>
            </div>

            {/* Search Bar */}
            <div className="relative flex-1 sm:flex-initial sm:w-80">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <span className={isDarkMode ? 'text-gray-400' : 'text-gray-500'}>🔍</span>
              </div>
              <input
                type="text"
                placeholder="Search in titles and details..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className={`w-full pl-10 pr-4 py-3 rounded-xl border transition-all duration-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                  isDarkMode 
                    ? 'bg-gray-800 border-gray-600 placeholder-gray-400' 
                    : 'bg-white border-gray-300 placeholder-gray-500'
                }`}
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                >
                  <span className={isDarkMode ? 'text-gray-400 hover:text-gray-200' : 'text-gray-500 hover:text-gray-700'}>
                    ✕
                  </span>
                </button>
              )}
            </div>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className={`p-3 rounded-xl transition-all duration-200 transform hover:scale-105 ${
                isDarkMode 
                  ? 'bg-gray-800 hover:bg-gray-700 text-yellow-400' 
                  : 'bg-gray-200 hover:bg-gray-300 text-gray-700'
              }`}
              aria-label="Toggle theme"
            >
              {isDarkMode ? '☀️' : '🌙'}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  toggleTheme: PropTypes.func.isRequired,
  isDarkMode: PropTypes.bool.isRequired,
  searchTerm: PropTypes.string.isRequired,
  setSearchTerm: PropTypes.func.isRequired,
  notesCount: PropTypes.number.isRequired,
};

export default Header;