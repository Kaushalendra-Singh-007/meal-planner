import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { Utensils, Sun, Moon, Share2 } from 'lucide-react';

const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="bg-white dark:bg-gray-800 shadow-sm sticky top-0 z-10 transition-colors duration-300">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Utensils className="h-6 w-6 text-green-600 dark:text-green-400" />
          <h1 className="text-xl font-bold text-gray-800 dark:text-white">NutriPlan</h1>
        </div>
        
        <div className="flex items-center space-x-4">
          <button 
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
            title="Share plan"
          >
            <Share2 className="h-5 w-5 text-gray-600 dark:text-gray-300" />
          </button>
          <button 
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
            onClick={toggleTheme}
            title={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
          >
            {theme === 'light' ? (
              <Moon className="h-5 w-5 text-gray-600" />
            ) : (
              <Sun className="h-5 w-5 text-yellow-300" />
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;