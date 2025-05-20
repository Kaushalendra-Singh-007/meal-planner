import express from 'express';
import cors from 'cors';
import { config } from 'dotenv';
import { scrapeBlinkitInventory } from './scraper';
import { generateRecipes } from './recipeGenerator';
import { UserInputData } from '../types';

config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

let inventory: any[] = [];

app.post('/api/scrape', async (req, res) => {
  try {
    inventory = await scrapeBlinkitInventory();
    res.json({ success: true, message: 'Inventory updated successfully' });
  } catch (error) {
    console.error('Error in /api/scrape:', error);
    res.status(500).json({ success: false, error: 'Failed to scrape inventory' });
  }
});

app.post('/api/generate-plan', async (req, res) => {
  try {
    const userData: UserInputData = req.body;
    
    if (inventory.length === 0) {
      inventory = await scrapeBlinkitInventory();
    }

    const { mealPlan, groceryList } = await generateRecipes(userData, inventory);
    res.json({ mealPlan, groceryList });
  } catch (error) {
    console.error('Error in /api/generate-plan:', error);
    res.status(500).json({ success: false, error: 'Failed to generate meal plan' });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});