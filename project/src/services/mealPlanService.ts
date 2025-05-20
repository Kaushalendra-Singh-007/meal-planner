import { UserInputData, MealPlan, GroceryList } from '../types';

export const generateMealPlan = async (userData: UserInputData): Promise<{ mealPlan: MealPlan; groceryList: GroceryList }> => {
  try {
    // First, trigger the scraper to get fresh inventory
    const scrapeResponse = await fetch('/api/scrape', {
      method: 'POST'
    });
    
    if (!scrapeResponse.ok) {
      throw new Error('Failed to scrape inventory');
    }

    // Then, generate the meal plan using Python backend
    const planResponse = await fetch('/api/generate-plan', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userData)
    });

    if (!planResponse.ok) {
      throw new Error('Failed to generate meal plan');
    }

    const { mealPlan, groceryList } = await planResponse.json();
    return { mealPlan, groceryList };
  } catch (error) {
    console.error('Error generating meal plan:', error);
    throw error;
  }
};