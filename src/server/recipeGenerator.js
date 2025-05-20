import { GoogleGenerativeAI } from '@google/generative-ai';
import dotenv from 'dotenv';
import { mockMealPlan, mockGroceryList } from './mockData.js';

dotenv.config();

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '');

export async function generateRecipes(userData, inventory) {
  if (!process.env.GEMINI_API_KEY) {
    console.log('Using mock data as GEMINI_API_KEY is not set');
    return {
      mealPlan: mockMealPlan,
      groceryList: mockGroceryList
    };
  }

  try {
    const model = genAI.getGenerativeModel({ model: 'gemini-pro' });

    const prompt = `
      Generate a 7-day meal plan for a person with the following preferences:
      - Age: ${userData.age}
      - Weight: ${userData.weight}kg
      - Health Goal: ${userData.healthGoal}
      - Dietary Restrictions: ${userData.dietRestrictions.join(', ')}
      - Weekly Budget: ₹${userData.budget}

      Available ingredients from inventory:
      ${JSON.stringify(inventory, null, 2)}

      Please provide:
      1. Detailed meal plan with breakfast, lunch, and dinner for each day
      2. Nutritional information for each meal
      3. Shopping list with quantities and estimated costs
      4. Weekly nutrition summary
    `;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const generatedText = response.text();
    
    // Parse the generated text and convert it to the required format
    // For now, return mock data as parsing needs to be implemented
    return {
      mealPlan: mockMealPlan,
      groceryList: mockGroceryList
    };
  } catch (error) {
    console.error('Error generating recipes:', error);
    return {
      mealPlan: mockMealPlan,
      groceryList: mockGroceryList
    };
  }
}