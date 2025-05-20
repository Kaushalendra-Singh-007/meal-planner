import React, { useState } from 'react';
import { GroceryList as GroceryListType } from '../types';
import { ShoppingBag, Search, Check, Download } from 'lucide-react';

interface GroceryListProps {
  groceryList: GroceryListType;
}

const GroceryList: React.FC<GroceryListProps> = ({ groceryList }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  
  const categories = Object.keys(groceryList.items);
  
  const toggleItem = (category: string, itemName: string) => {
    setCheckedItems(prev => ({
      ...prev,
      [`${category}-${itemName}`]: !prev[`${category}-${itemName}`]
    }));
  };
  
  const filteredCategories = searchTerm.trim() === ''
    ? categories
    : categories.filter(category => 
        groceryList.items[category].some(item => 
          item.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
  
  const getFilteredItems = (category: string) => {
    return groceryList.items[category].filter(item => 
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };
  
  const getTotalItems = () => {
    return categories.reduce((acc, category) => acc + groceryList.items[category].length, 0);
  };
  
  const getCheckedItemsCount = () => {
    return Object.values(checkedItems).filter(Boolean).length;
  };
  
  const downloadList = () => {
    let content = "My Grocery List\n\n";
    
    categories.forEach(category => {
      content += `${category.toUpperCase()}:\n`;
      groceryList.items[category].forEach(item => {
        const isChecked = checkedItems[`${category}-${item.name}`];
        content += `${isChecked ? '✓' : '☐'} ${item.name} - ${item.quantity} (₹${item.price})\n`;
      });
      content += '\n';
    });
    
    content += `\nTotal Budget: ₹${groceryList.totalCost}`;
    
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'grocery-list.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };
  
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white flex items-center">
          <ShoppingBag className="h-6 w-6 mr-2 text-green-600 dark:text-green-400" />
          Optimized Grocery List
        </h2>
        
        <div className="flex items-center">
          <div className="relative flex-grow md:w-64">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-4 w-4 text-gray-400" />
            </div>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search items..."
              className="pl-10 pr-4 py-2 w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-green-500 transition-colors duration-200"
            />
          </div>
          
          <button
            onClick={downloadList}
            className="ml-2 p-2 bg-green-600 text-white rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 transition-colors duration-200"
            title="Download grocery list"
          >
            <Download className="h-5 w-5" />
          </button>
        </div>
      </div>
      
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 md:p-6 transition-colors duration-300">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-2">
            <div className="bg-green-100 dark:bg-green-900 p-2 rounded-full">
              <Check className="h-5 w-5 text-green-600 dark:text-green-400" />
            </div>
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Progress</p>
              <p className="text-lg font-semibold text-gray-800 dark:text-white">
                {getCheckedItemsCount()} / {getTotalItems()} items
              </p>
            </div>
          </div>
          
          <div className="text-right">
            <p className="text-sm text-gray-600 dark:text-gray-400">Total Cost</p>
            <p className="text-xl font-bold text-gray-800 dark:text-white">₹{groceryList.totalCost}</p>
          </div>
        </div>
        
        <div className="flex overflow-x-auto pb-2 mb-4 gap-2 scrollbar-hide">
          <button
            className={`px-4 py-1.5 rounded-full whitespace-nowrap text-sm font-medium ${
              activeCategory === null
                ? 'bg-green-600 text-white'
                : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
            }`}
            onClick={() => setActiveCategory(null)}
          >
            All Items
          </button>
          
          {filteredCategories.map(category => (
            <button
              key={category}
              className={`px-4 py-1.5 rounded-full whitespace-nowrap text-sm font-medium ${
                activeCategory === category
                  ? 'bg-green-600 text-white'
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
        
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          {filteredCategories
            .filter(category => activeCategory === null || activeCategory === category)
            .map(category => (
              <React.Fragment key={category}>
                {getFilteredItems(category).length > 0 && (
                  <>
                    <li className="py-3">
                      <h3 className="text-lg font-medium text-gray-800 dark:text-white capitalize">{category}</h3>
                    </li>
                    
                    {getFilteredItems(category).map((item) => (
                      <li key={`${category}-${item.name}`} className="py-3 flex items-center">
                        <div className="flex-shrink-0 mr-3">
                          <input
                            type="checkbox"
                            id={`${category}-${item.name}`}
                            checked={!!checkedItems[`${category}-${item.name}`]}
                            onChange={() => toggleItem(category, item.name)}
                            className="h-5 w-5 text-green-600 border-gray-300 rounded focus:ring-green-500"
                          />
                        </div>
                        
                        <label
                          htmlFor={`${category}-${item.name}`}
                          className={`flex-grow cursor-pointer ${
                            checkedItems[`${category}-${item.name}`]
                              ? 'line-through text-gray-400 dark:text-gray-500'
                              : 'text-gray-700 dark:text-gray-300'
                          }`}
                        >
                          <div className="flex justify-between">
                            <span>{item.name}</span>
                            <span className="text-gray-600 dark:text-gray-400">
                              {item.quantity} - ₹{item.price}
                            </span>
                          </div>
                        </label>
                      </li>
                    ))}
                  </>
                )}
              </React.Fragment>
            ))}
            
          {filteredCategories.length === 0 && (
            <li className="py-8 text-center text-gray-500 dark:text-gray-400">
              No items found matching "{searchTerm}"
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default GroceryList;