import React, { useState } from 'react';
import { UserInputData } from '../types';
import { ArrowRight } from 'lucide-react';

interface UserInputFormProps {
  onSubmit: (data: UserInputData) => void;
  isLoading?: boolean;
}

const UserInputForm: React.FC<UserInputFormProps> = ({ onSubmit, isLoading = false }) => {
  const [formData, setFormData] = useState<UserInputData>({
    age: 30,
    weight: 70,
    healthGoal: 'maintain',
    dietRestrictions: [],
    budget: 5000,
  });

  const [customDiet, setCustomDiet] = useState('');

  const healthGoals = [
    { value: 'lose', label: 'Lose Weight' },
    { value: 'maintain', label: 'Maintain Weight' },
    { value: 'gain', label: 'Gain Weight' },
    { value: 'muscle', label: 'Build Muscle' },
  ];

  const dietOptions = [
    { value: 'vegetarian', label: 'Vegetarian' },
    { value: 'vegan', label: 'Vegan' },
    { value: 'gluten-free', label: 'Gluten-Free' },
    { value: 'keto', label: 'Keto' },
    { value: 'paleo', label: 'Paleo' },
    { value: 'dairy-free', label: 'Dairy-Free' },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target as HTMLInputElement;
    
    if (type === 'checkbox') {
      const isChecked = (e.target as HTMLInputElement).checked;
      
      setFormData(prev => ({
        ...prev,
        dietRestrictions: isChecked
          ? [...prev.dietRestrictions, value]
          : prev.dietRestrictions.filter(item => item !== value)
      }));
    } else if (type === 'range') {
      setFormData(prev => ({
        ...prev,
        [name]: parseInt(value, 10)
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleCustomDietAdd = () => {
    if (customDiet.trim() && !formData.dietRestrictions.includes(customDiet.trim())) {
      setFormData(prev => ({
        ...prev,
        dietRestrictions: [...prev.dietRestrictions, customDiet.trim()]
      }));
      setCustomDiet('');
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 transition-colors duration-300">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">Personalize Your Nutrition Plan</h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="age" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Age
            </label>
            <input
              type="number"
              id="age"
              name="age"
              value={formData.age}
              onChange={handleChange}
              min="1"
              max="120"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-green-500 transition-colors duration-200"
              required
            />
          </div>
          
          <div>
            <label htmlFor="weight" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Weight (kg)
            </label>
            <input
              type="number"
              id="weight"
              name="weight"
              value={formData.weight}
              onChange={handleChange}
              min="1"
              max="500"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-green-500 transition-colors duration-200"
              required
            />
          </div>
        </div>
        
        <div>
          <label htmlFor="healthGoal" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Health Goal
          </label>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {healthGoals.map(goal => (
              <div key={goal.value}>
                <input
                  type="radio"
                  id={goal.value}
                  name="healthGoal"
                  value={goal.value}
                  checked={formData.healthGoal === goal.value}
                  onChange={handleChange}
                  className="sr-only peer"
                />
                <label
                  htmlFor={goal.value}
                  className="flex items-center justify-center px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-600 cursor-pointer peer-checked:bg-green-100 peer-checked:border-green-500 peer-checked:text-green-800 dark:peer-checked:bg-green-900 dark:peer-checked:border-green-600 dark:peer-checked:text-green-300 transition-all duration-200 hover:bg-gray-200 dark:hover:bg-gray-600"
                >
                  {goal.label}
                </label>
              </div>
            ))}
          </div>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Diet Restrictions
          </label>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-2">
            {dietOptions.map(diet => (
              <div key={diet.value} className="flex items-center">
                <input
                  type="checkbox"
                  id={diet.value}
                  name="dietRestrictions"
                  value={diet.value}
                  checked={formData.dietRestrictions.includes(diet.value)}
                  onChange={handleChange}
                  className="h-4 w-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
                />
                <label htmlFor={diet.value} className="ml-2 text-sm text-gray-700 dark:text-gray-300">
                  {diet.label}
                </label>
              </div>
            ))}
          </div>
          
          <div className="mt-3 flex">
            <input
              type="text"
              value={customDiet}
              onChange={(e) => setCustomDiet(e.target.value)}
              placeholder="Add custom diet restriction"
              className="flex-grow px-4 py-2 rounded-l-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-green-500 transition-colors duration-200"
            />
            <button
              type="button"
              onClick={handleCustomDietAdd}
              className="px-4 py-2 bg-green-600 text-white rounded-r-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 transition-colors duration-200"
            >
              Add
            </button>
          </div>
          
          {formData.dietRestrictions.length > 0 && (
            <div className="mt-3 flex flex-wrap gap-2">
              {formData.dietRestrictions.map(diet => (
                <span key={diet} className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300">
                  {diet}
                  <button
                    type="button"
                    onClick={() => setFormData(prev => ({
                      ...prev,
                      dietRestrictions: prev.dietRestrictions.filter(d => d !== diet)
                    }))}
                    className="ml-1.5 inline-flex items-center justify-center h-4 w-4 rounded-full text-green-400 hover:text-green-600 dark:text-green-300 dark:hover:text-green-100 focus:outline-none"
                  >
                    ×
                  </button>
                </span>
              ))}
            </div>
          )}
        </div>
        
        <div>
          <label htmlFor="budget" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Weekly Budget (₹): {formData.budget}
          </label>
          <input
            type="range"
            id="budget"
            name="budget"
            min="1000"
            max="10000"
            step="500"
            value={formData.budget}
            onChange={handleChange}
            className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer accent-green-600"
          />
          <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mt-1">
            <span>₹1,000</span>
            <span>₹10,000</span>
          </div>
        </div>
        
        <button
          type="submit"
          disabled={isLoading}
          className={`w-full flex items-center justify-center space-x-2 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-colors duration-200 ${
            isLoading ? 'opacity-75 cursor-not-allowed' : ''
          }`}
        >
          <span>{isLoading ? 'Generating...' : 'Generate Meal Plan'}</span>
          <ArrowRight className="h-4 w-4" />
        </button>
      </form>
    </div>
  );
};

export default UserInputForm;