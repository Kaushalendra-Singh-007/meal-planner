import { MealPlan, GroceryList } from '../types';

export const mockMealPlan: MealPlan = {
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
          name: 'Oatmeal with Fruits and Nuts',
          calories: 350,
          proteins: 12,
          carbs: 45,
          fats: 15,
          ingredients: [
            'Rolled oats', 
            'Almond milk', 
            'Banana', 
            'Blueberries', 
            'Almonds', 
            'Honey'
          ],
          tags: ['vegetarian', 'high-fiber', 'quick']
        },
        lunch: {
          name: 'Chickpea Salad with Avocado',
          calories: 450,
          proteins: 18,
          carbs: 40,
          fats: 22,
          ingredients: [
            'Chickpeas', 
            'Mixed greens', 
            'Cherry tomatoes', 
            'Red onion', 
            'Avocado', 
            'Lemon dressing'
          ],
          tags: ['vegetarian', 'protein-rich', 'no-cook']
        },
        dinner: {
          name: 'Vegetable Stir-Fry with Tofu',
          calories: 480,
          proteins: 25,
          carbs: 35,
          fats: 18,
          ingredients: [
            'Firm tofu', 
            'Broccoli', 
            'Carrots', 
            'Bell peppers', 
            'Brown rice', 
            'Soy sauce'
          ],
          tags: ['vegetarian', 'high-protein', 'balanced']
        }
      },
      nutritionSummary: {
        calories: '1280 kcal',
        proteins: '55g',
        carbs: '120g',
        fats: '55g'
      }
    },
    {
      day: 'Tuesday',
      meals: {
        breakfast: {
          name: 'Greek Yogurt Parfait',
          calories: 320,
          proteins: 20,
          carbs: 40,
          fats: 12,
          ingredients: [
            'Greek yogurt', 
            'Granola', 
            'Mixed berries', 
            'Chia seeds', 
            'Honey'
          ],
          tags: ['vegetarian', 'protein-rich', 'quick']
        },
        lunch: {
          name: 'Quinoa Bowl with Roasted Vegetables',
          calories: 440,
          proteins: 16,
          carbs: 58,
          fats: 18,
          ingredients: [
            'Quinoa', 
            'Roasted sweet potatoes', 
            'Zucchini', 
            'Red onion', 
            'Feta cheese', 
            'Olive oil dressing'
          ],
          tags: ['vegetarian', 'gluten-free', 'meal-prep-friendly']
        },
        dinner: {
          name: 'Lentil Soup with Crusty Bread',
          calories: 420,
          proteins: 22,
          carbs: 60,
          fats: 10,
          ingredients: [
            'Red lentils', 
            'Carrots', 
            'Celery', 
            'Onion', 
            'Tomatoes', 
            'Whole grain bread'
          ],
          tags: ['vegetarian', 'high-fiber', 'comfort-food']
        }
      },
      nutritionSummary: {
        calories: '1180 kcal',
        proteins: '58g',
        carbs: '158g',
        fats: '40g'
      }
    },
    {
      day: 'Wednesday',
      meals: {
        breakfast: {
          name: 'Avocado Toast with Poached Eggs',
          calories: 380,
          proteins: 16,
          carbs: 30,
          fats: 22,
          ingredients: [
            'Whole grain bread', 
            'Avocado', 
            'Eggs', 
            'Cherry tomatoes', 
            'Microgreens', 
            'Red pepper flakes'
          ],
          tags: ['vegetarian', 'high-protein', 'quick']
        },
        lunch: {
          name: 'Mediterranean Pasta Salad',
          calories: 420,
          proteins: 15,
          carbs: 65,
          fats: 16,
          ingredients: [
            'Whole wheat pasta', 
            'Cherry tomatoes', 
            'Cucumber', 
            'Red onion', 
            'Olives', 
            'Feta cheese'
          ],
          tags: ['vegetarian', 'meal-prep-friendly', 'mediterranean']
        },
        dinner: {
          name: 'Vegetable Curry with Rice',
          calories: 450,
          proteins: 14,
          carbs: 70,
          fats: 18,
          ingredients: [
            'Mixed vegetables', 
            'Coconut milk', 
            'Curry paste', 
            'Basmati rice', 
            'Coriander'
          ],
          tags: ['vegetarian', 'spicy', 'comfort-food']
        }
      },
      nutritionSummary: {
        calories: '1250 kcal',
        proteins: '45g',
        carbs: '165g',
        fats: '56g'
      }
    },
    {
      day: 'Thursday',
      meals: {
        breakfast: {
          name: 'Smoothie Bowl',
          calories: 340,
          proteins: 12,
          carbs: 55,
          fats: 12,
          ingredients: [
            'Banana', 
            'Frozen berries', 
            'Spinach', 
            'Almond milk', 
            'Protein powder', 
            'Granola'
          ],
          tags: ['vegetarian', 'refreshing', 'customizable']
        },
        lunch: {
          name: 'Stuffed Bell Peppers',
          calories: 380,
          proteins: 20,
          carbs: 45,
          fats: 14,
          ingredients: [
            'Bell peppers', 
            'Quinoa', 
            'Black beans', 
            'Corn', 
            'Onion', 
            'Mexican spices'
          ],
          tags: ['vegetarian', 'high-protein', 'gluten-free']
        },
        dinner: {
          name: 'Mushroom Risotto',
          calories: 480,
          proteins: 12,
          carbs: 65,
          fats: 18,
          ingredients: [
            'Arborio rice', 
            'Mixed mushrooms', 
            'Onion', 
            'Vegetable broth', 
            'Parmesan cheese', 
            'White wine'
          ],
          tags: ['vegetarian', 'comfort-food', 'italian']
        }
      },
      nutritionSummary: {
        calories: '1200 kcal',
        proteins: '44g',
        carbs: '165g',
        fats: '44g'
      }
    },
    {
      day: 'Friday',
      meals: {
        breakfast: {
          name: 'Chia Seed Pudding',
          calories: 320,
          proteins: 10,
          carbs: 35,
          fats: 18,
          ingredients: [
            'Chia seeds', 
            'Almond milk', 
            'Maple syrup', 
            'Vanilla extract', 
            'Mixed berries', 
            'Coconut flakes'
          ],
          tags: ['vegetarian', 'meal-prep-friendly', 'omega-3-rich']
        },
        lunch: {
          name: 'Falafel Wrap',
          calories: 450,
          proteins: 18,
          carbs: 55,
          fats: 20,
          ingredients: [
            'Falafel', 
            'Whole wheat wrap', 
            'Hummus', 
            'Lettuce', 
            'Tomato', 
            'Tahini sauce'
          ],
          tags: ['vegetarian', 'high-protein', 'mediterranean']
        },
        dinner: {
          name: 'Eggplant Parmesan',
          calories: 520,
          proteins: 22,
          carbs: 40,
          fats: 28,
          ingredients: [
            'Eggplant', 
            'Marinara sauce', 
            'Mozzarella cheese', 
            'Parmesan cheese', 
            'Breadcrumbs', 
            'Fresh basil'
          ],
          tags: ['vegetarian', 'comfort-food', 'italian']
        }
      },
      nutritionSummary: {
        calories: '1290 kcal',
        proteins: '50g',
        carbs: '130g',
        fats: '66g'
      }
    },
    {
      day: 'Saturday',
      meals: {
        breakfast: {
          name: 'Vegetable Omelette',
          calories: 380,
          proteins: 24,
          carbs: 15,
          fats: 26,
          ingredients: [
            'Eggs', 
            'Bell peppers', 
            'Spinach', 
            'Onion', 
            'Cheddar cheese', 
            'Whole grain toast'
          ],
          tags: ['vegetarian', 'high-protein', 'keto-friendly']
        },
        lunch: {
          name: 'Buddha Bowl',
          calories: 420,
          proteins: 16,
          carbs: 55,
          fats: 18,
          ingredients: [
            'Brown rice', 
            'Roasted sweet potatoes', 
            'Chickpeas', 
            'Avocado', 
            'Kale', 
            'Tahini dressing'
          ],
          tags: ['vegetarian', 'balanced', 'customizable']
        },
        dinner: {
          name: 'Vegetable Pizza',
          calories: 550,
          proteins: 20,
          carbs: 70,
          fats: 22,
          ingredients: [
            'Whole wheat pizza dough', 
            'Tomato sauce', 
            'Mozzarella cheese', 
            'Bell peppers', 
            'Mushrooms', 
            'Red onion'
          ],
          tags: ['vegetarian', 'comfort-food', 'weekend-treat']
        }
      },
      nutritionSummary: {
        calories: '1350 kcal',
        proteins: '60g',
        carbs: '140g',
        fats: '66g'
      }
    },
    {
      day: 'Sunday',
      meals: {
        breakfast: {
          name: 'Pancakes with Fresh Fruits',
          calories: 420,
          proteins: 12,
          carbs: 65,
          fats: 16,
          ingredients: [
            'Whole wheat flour', 
            'Eggs', 
            'Milk', 
            'Mixed berries', 
            'Banana', 
            'Maple syrup'
          ],
          tags: ['vegetarian', 'weekend-treat', 'family-friendly']
        },
        lunch: {
          name: 'Caprese Sandwich',
          calories: 380,
          proteins: 18,
          carbs: 40,
          fats: 22,
          ingredients: [
            'Ciabatta bread', 
            'Fresh mozzarella', 
            'Tomatoes', 
            'Basil', 
            'Balsamic glaze', 
            'Olive oil'
          ],
          tags: ['vegetarian', 'quick', 'italian']
        },
        dinner: {
          name: 'Bean and Vegetable Chili',
          calories: 420,
          proteins: 22,
          carbs: 60,
          fats: 12,
          ingredients: [
            'Kidney beans', 
            'Black beans', 
            'Bell peppers', 
            'Onion', 
            'Tomatoes', 
            'Mexican spices'
          ],
          tags: ['vegetarian', 'high-protein', 'meal-prep-friendly']
        }
      },
      nutritionSummary: {
        calories: '1220 kcal',
        proteins: '52g',
        carbs: '165g',
        fats: '50g'
      }
    }
  ],
  weeklyNutrition: {
    averageCalories: '1253 kcal/day',
    averageProteins: '52g/day',
    averageCarbs: '149g/day',
    averageFats: '54g/day'
  }
};

export const mockGroceryList: GroceryList = {
  items: {
    'fruits and vegetables': [
      { name: 'Bananas', quantity: '1 dozen', price: 60 },
      { name: 'Blueberries', quantity: '1 pack', price: 180 },
      { name: 'Avocados', quantity: '3 pcs', price: 210 },
      { name: 'Mixed Berries', quantity: '500g', price: 230 },
      { name: 'Cherry Tomatoes', quantity: '2 packs', price: 120 },
      { name: 'Spinach', quantity: '200g', price: 50 },
      { name: 'Kale', quantity: '1 bunch', price: 70 },
      { name: 'Bell Peppers', quantity: '6 pcs', price: 120 },
      { name: 'Carrots', quantity: '500g', price: 40 },
      { name: 'Broccoli', quantity: '2 heads', price: 90 },
      { name: 'Zucchini', quantity: '3 pcs', price: 75 },
      { name: 'Sweet Potatoes', quantity: '1kg', price: 90 },
      { name: 'Eggplant', quantity: '2 pcs', price: 60 },
      { name: 'Mushrooms', quantity: '250g', price: 80 },
    ],
    'grains and legumes': [
      { name: 'Rolled Oats', quantity: '500g', price: 120 },
      { name: 'Quinoa', quantity: '500g', price: 180 },
      { name: 'Brown Rice', quantity: '1kg', price: 90 },
      { name: 'Whole Wheat Pasta', quantity: '500g', price: 85 },
      { name: 'Whole Wheat Bread', quantity: '1 loaf', price: 45 },
      { name: 'Chickpeas', quantity: '2 cans', price: 100 },
      { name: 'Black Beans', quantity: '2 cans', price: 120 },
      { name: 'Red Lentils', quantity: '500g', price: 80 },
      { name: 'Arborio Rice', quantity: '500g', price: 150 },
      { name: 'Whole Wheat Wraps', quantity: '6 pcs', price: 75 },
    ],
    'dairy and alternatives': [
      { name: 'Greek Yogurt', quantity: '500g', price: 110 },
      { name: 'Almond Milk', quantity: '2 liters', price: 180 },
      { name: 'Feta Cheese', quantity: '200g', price: 150 },
      { name: 'Mozzarella Cheese', quantity: '200g', price: 140 },
      { name: 'Cheddar Cheese', quantity: '200g', price: 160 },
      { name: 'Parmesan Cheese', quantity: '100g', price: 170 },
      { name: 'Eggs', quantity: '1 dozen', price: 120 },
      { name: 'Tofu', quantity: '2 blocks', price: 100 },
      { name: 'Coconut Milk', quantity: '400ml', price: 90 },
    ],
    'nuts and seeds': [
      { name: 'Almonds', quantity: '200g', price: 180 },
      { name: 'Chia Seeds', quantity: '100g', price: 120 },
      { name: 'Granola', quantity: '400g', price: 150 },
      { name: 'Coconut Flakes', quantity: '100g', price: 85 },
    ],
    'condiments and others': [
      { name: 'Olive Oil', quantity: '500ml', price: 320 },
      { name: 'Soy Sauce', quantity: '250ml', price: 90 },
      { name: 'Honey', quantity: '250g', price: 140 },
      { name: 'Maple Syrup', quantity: '250ml', price: 280 },
      { name: 'Tomato Sauce', quantity: '500g', price: 75 },
      { name: 'Curry Paste', quantity: '100g', price: 95 },
      { name: 'Hummus', quantity: '200g', price: 90 },
      { name: 'Tahini', quantity: '150g', price: 180 },
      { name: 'Protein Powder', quantity: '250g', price: 450 },
    ]
  },
  totalCost: 5730,
  budget: 6000,
  savings: 270
};