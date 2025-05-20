import React from 'react';

const LoadingState: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center py-12 mt-8 animate-fade-in">
      <div className="w-20 h-20 mb-8">
        <svg className="w-full h-full animate-spin" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path opacity="0.2" d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20Z" fill="currentColor" className="text-gray-300 dark:text-gray-600" />
          <path d="M12 2C6.48 2 2 6.48 2 12C2 12.69 2.1 13.36 2.26 14H4.3C4.11 13.36 4 12.69 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 12.69 19.89 13.36 19.7 14H21.74C21.9 13.36 22 12.69 22 12C22 6.48 17.52 2 12 2Z" fill="currentColor" className="text-green-600 dark:text-green-400" />
        </svg>
      </div>
      
      <div className="text-center">
        <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
          Creating your personalized nutrition plan
        </h3>
        <p className="text-gray-600 dark:text-gray-400 max-w-md mx-auto">
          Our AI is analyzing your preferences and optimizing a weekly meal plan that matches your health goals and budget.
        </p>
      </div>
      
      <div className="mt-8 w-full max-w-md bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 overflow-hidden">
        <div className="h-full bg-green-600 rounded-full animate-progress-bar"></div>
      </div>
      
      <div className="mt-8 grid grid-cols-3 gap-4">
        {[1, 2, 3].map(idx => (
          <div key={idx} className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 animate-pulse">
            <div className="h-20 bg-gray-200 dark:bg-gray-700 rounded mb-4"></div>
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded mb-2 w-3/4"></div>
            <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded mb-2 w-1/2"></div>
            <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-5/6"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LoadingState;