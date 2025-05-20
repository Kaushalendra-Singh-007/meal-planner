import React, { useState } from 'react';
import { MealPlan, DayPlan } from '../types';
import { Calendar, ChevronLeft, ChevronRight } from 'lucide-react';

interface MealPlanDisplayProps {
  mealPlan: MealPlan;
}

const MealPlanDisplay: React.FC<MealPlanDisplayProps> = ({ mealPlan }) => {
  const [currentDay, setCurrentDay] = useState(0);
  
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const dayData = mealPlan.days[currentDay];
  
  const navigateDay = (direction: number) => {
    const newDay = (currentDay + direction + 7) % 7;
    setCurrentDay(newDay);
  };
  
  return (
    <div className="space-y-8 animate-fade-in">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white flex items-center">
          <Calendar className="h-6 w-6 mr-2 text-green-600 dark:text-green-400" />
          7-Day Meal Plan
        </h2>
        
        <div className="flex items-center space-x-1 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
          <button
            onClick={() => navigateDay(-1)}
            className="p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300 focus:outline-none"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          
          <select 
            value={currentDay}
            onChange={(e) => setCurrentDay(parseInt(e.target.value, 10))}
            className="bg-transparent focus:outline-none text-gray-700 dark:text-gray-300 font-medium px-2 py-1"
          >
            {days.map((day, index) => (
              <option key={day} value={index}>
                {day}
              </option>
            ))}
          </select>
          
          <button
            onClick={() => navigateDay(1)}
            className="p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300 focus:outline-none"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {Object.entries(dayData.meals).map(([mealType, meal]) => (
          <MealCard key={mealType} mealType={mealType} meal={meal} />
        ))}
      </div>
      
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 transition-colors duration-300">
        <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">Daily Nutrition Summary</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {Object.entries(dayData.nutritionSummary).map(([nutrient, value]) => (
            <div key={nutrient} className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
              <p className="text-sm text-gray-500 dark:text-gray-400">{formatNutrientName(nutrient)}</p>
              <p className="text-xl font-bold text-gray-800 dark:text-white">{value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const MealCard: React.FC<{ mealType: string; meal: any }> = ({ mealType, meal }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1">
      <div className="h-40 bg-gradient-to-r from-green-400 to-blue-500 flex items-center justify-center">
        <h3 className="text-xl font-bold text-white capitalize">
          {formatMealType(mealType)}
        </h3>
      </div>
      
      <div className="p-4">
        <h4 className="text-lg font-semibold mb-2 text-gray-800 dark:text-white">{meal.name}</h4>
        
        <div className="mb-3">
          <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400 mb-1">
            <span>Calories</span>
            <span className="font-medium">{meal.calories} kcal</span>
          </div>
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5">
            <div className="bg-green-600 h-1.5 rounded-full" style={{ width: `${Math.min(100, meal.calories / 10)}%` }}></div>
          </div>
        </div>
        
        <h5 className="font-medium text-gray-700 dark:text-gray-300 mb-1">Ingredients:</h5>
        <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1 mb-3">
          {meal.ingredients.slice(0, 3).map((ingredient: string, idx: number) => (
            <li key={idx} className="flex items-start">
              <span className="text-green-500 mr-1.5">•</span>
              {ingredient}
            </li>
          ))}
          {meal.ingredients.length > 3 && (
            <li className="text-green-600 dark:text-green-400 cursor-pointer">
              + {meal.ingredients.length - 3} more
            </li>
          )}
        </ul>
        
        <div className="flex flex-wrap gap-2 mt-3">
          {meal.tags.map((tag: string) => (
            <span key={tag} className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-full">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const formatMealType = (type: string): string => {
  return type.replace(/([A-Z])/g, ' $1').toLowerCase().replace(/^\w/, c => c.toUpperCase());
};

const formatNutrientName = (name: string): string => {
  const formatted = name.replace(/([A-Z])/g, ' $1');
  return formatted.charAt(0).toUpperCase() + formatted.slice(1);
};

export default MealPlanDisplay;