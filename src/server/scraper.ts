import puppeteer from 'puppeteer';
import { GroceryItem } from '../types';

export async function scrapeBlinkitInventory(): Promise<GroceryItem[]> {
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  try {
    const page = await browser.newPage();
    await page.goto('https://blinkit.com/');

    // Wait for the products to load
    await page.waitForSelector('.product-card', { timeout: 5000 });

    const items = await page.evaluate(() => {
      const products = document.querySelectorAll('.product-card');
      return Array.from(products).map(product => {
        const name = product.querySelector('.product-name')?.textContent?.trim() || '';
        const price = parseFloat(product.querySelector('.price')?.textContent?.replace('₹', '').trim() || '0');
        const quantity = product.querySelector('.quantity')?.textContent?.trim() || '1 unit';

        return {
          name,
          price,
          quantity
        };
      });
    });

    return items;
  } catch (error) {
    console.error('Error scraping Blinkit:', error);
    throw error;
  } finally {
    await browser.close();
  }
}