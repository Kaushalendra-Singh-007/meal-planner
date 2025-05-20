import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Header from './components/Header';
import UserInputForm from './components/UserInputForm';
import MealPlanDisplay from './components/MealPlanDisplay';
import GroceryList from './components/GroceryList';
import Footer from './components/Footer';
import { generateMealPlan } from './services/mealPlanService';
import { UserInputData } from './types';
import LoadingState from './components/LoadingState';

function App() {
  const [mealPlan, setMealPlan] = useState(null);
  const [groceryList, setGroceryList] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [activeTab, setActiveTab] = useState('mealPlan');

  const handleGeneratePlan = async (userData: UserInputData) => {
    setIsLoading(true);
    
    // Simulate API call
    try {
      const { mealPlan, groceryList } = await generateMealPlan(userData);
      setMealPlan(mealPlan);
      setGroceryList(groceryList);
    } catch (error) {
      console.error('Error generating meal plan:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-8">
          <UserInputForm onSubmit={handleGeneratePlan} />
          
          {isLoading ? (
            <LoadingState />
          ) : (
            <>
              {mealPlan && groceryList && (
                <div className="mt-10">
                  <div className="flex border-b border-gray-200 dark:border-gray-700 mb-6">
                    <button 
                      className={`py-2 px-4 font-medium text-sm ${activeTab === 'mealPlan' ? 'border-b-2 border-green-500 text-green-600 dark:text-green-400' : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'}`}
                      onClick={() => setActiveTab('mealPlan')}
                    >
                      Meal Plan
                    </button>
                    <button 
                      className={`py-2 px-4 font-medium text-sm ${activeTab === 'groceryList' ? 'border-b-2 border-green-500 text-green-600 dark:text-green-400' : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'}`}
                      onClick={() => setActiveTab('groceryList')}
                    >
                      Grocery List
                    </button>
                  </div>
                  
                  {activeTab === 'mealPlan' ? (
                    <MealPlanDisplay mealPlan={mealPlan} />
                  ) : (
                    <GroceryList groceryList={groceryList} />
                  )}
                </div>
              )}
            </>
          )}
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;