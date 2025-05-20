import { MealPlan, GroceryList } from '../types/index.js';

export const mockMealPlan = {
  userProfile: {
    age: 30,
    weight: 70,
    healthGoal: 'maintain',
    dietRestrictions: ['vegetarian'],
    budget: 5000
  },
  days: [
    {
      day: 'Monday',
      meals: {
        breakfast: {
          name: 'Oatmeal with Fruits',
          calories: 350,
          proteins: 12,
          carbs: 45,
          fats: 15,
          ingredients: ['Oats', 'Banana', 'Almonds'],
          estimatedCost: 80,
          tags: ['healthy', 'quick']
        },
        lunch: {
          name: 'Lentil Curry',
          calories: 450,
          proteins: 18,
          carbs: 40,
          fats: 22,
          ingredients: ['Dal', 'Rice', 'Vegetables'],
          estimatedCost: 120,
          tags: ['protein-rich']
        },
        dinner: {
          name: 'Vegetable Stir-Fry',
          calories: 400,
          proteins: 15,
          carbs: 35,
          fats: 18,
          ingredients: ['Mixed Vegetables', 'Tofu', 'Rice'],
          estimatedCost: 150,
          tags: ['healthy']
        }
      },
      nutritionSummary: {
        calories: '1200 kcal',
        proteins: '45g',
        carbs: '120g',
        fats: '55g'
      }
    }
  ],
  weeklyNutrition: {
    averageCalories: '1200 kcal/day',
    averageProteins: '45g/day',
    averageCarbs: '120g/day',
    averageFats: '55g/day'
  }
};

export const mockGroceryList = {
  items: {
    'staples': [
      { name: 'Rice', quantity: '2 kg', price: 100 },
      { name: 'Dal', quantity: '1 kg', price: 200 }
    ],
    'vegetables': [
      { name: 'Mixed Vegetables', quantity: '1 kg', price: 120 },
      { name: 'Tomatoes', quantity: '500g', price: 40 }
    ],
    'dairy': [
      { name: 'Milk', quantity: '2 L', price: 130 },
      { name: 'Yogurt', quantity: '500g', price: 50 }
    ]
  },
  totalCost: 640,
  budget: 1000,
  savings: 360
};