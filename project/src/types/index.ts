export interface UserInputData {
  age: number;
  weight: number;
  healthGoal: string;
  dietRestrictions: string[];
  budget: number;
}

export interface GroceryItem {
  name: string;
  quantity: string;
  price: number;
}

export interface Meal {
  name: string;
  calories: number;
  proteins: number;
  carbs: number;
  fats: number;
  ingredients: string[];
  recipe?: string;
  instructions?: string;
  estimatedCost: number;
  tags: string[];
}

export interface DayPlan {
  day: string;
  meals: {
    breakfast: Meal;
    lunch: Meal;
    dinner: Meal;
    snacks?: Meal[];
  };
  nutritionSummary: {
    calories: string;
    proteins: string;
    carbs: string;
    fats: string;
  };
}

export interface MealPlan {
  userProfile: UserInputData;
  days: DayPlan[];
  weeklyNutrition: {
    averageCalories: string;
    averageProteins: string;
    averageCarbs: string;
    averageFats: string;
  };
}

export interface GroceryList {
  items: {
    [category: string]: Array<{
      name: string;
      quantity: string;
      price: number;
    }>;
  };
  totalCost: number;
  budget: number;
  savings: number;
}

export interface BlinkitInventory {
  items: GroceryItem[];
  lastUpdated: string;
}