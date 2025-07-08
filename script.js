// Meal data structure
const meals = [
    {
        id: 'simple-zen',
        name: '🥢 Simple Zen',
        price: 220,
        items: ['Nigri (2x)', 'Miso Soup (2x)', 'Capri Sun (2x)'],
        ingredients: {
            'Uncooked Rice': 2,
            'Water': 3,
            'Fish Fillet': 2,
            'Soy Sauce': 2,
            'Fish Sauce': 1,
            'Chopped Spring Onion': 2,
            'Tofu': 1,
            'Capri Sun': 2
        }
    },
    {
        id: 'kimchi-snack',
        name: '🥬 Kimchi Snack',
        price: 240,
        items: ['Kimchi (2x)', 'Miso Soup (2x)', 'Drinks (4x)'],
        ingredients: {
            'Cabbage': 4,
            'Fish Sauce': 3,
            'Water': 1,
            'Chopped Spring Onion': 2,
            'Tofu': 1,
            'Drinks': 4
        }
    },
    {
        id: 'mochi-fruity',
        name: '🍡 Mochi Munchies - Fruity Delight',
        price: 130,
        items: ['Mango Mochi (3x)', 'Strawberry Mochi (3x)', 'Capri Sun (2x)'],
        ingredients: {
            'Mango': 1,
            'Strawberry': 2,
            'Sugar': 2,
            'Uncooked Rice': 2,
            'Water': 2,
            'Capri Sun': 2
        }
    },
    {
        id: 'mochi-choco',
        name: '🍫 Mochi Munchies - Choco Harmony',
        price: 140,
        items: ['Chocolate Mochi (3x)', 'Green Tea Mochi (3x)', 'Capri Sun (2x)'],
        ingredients: {
            'Cocoa Powder': 1,
            'Green Tea': 1,
            'Sugar': 3,
            'Uncooked Rice': 2,
            'Water': 3,
            'Green Tea Leaves': 1,
            'Capri Sun': 2
        }
    },
    {
        id: 'ramen-feast',
        name: '🍜 Ramen-tic Feast',
        price: 290,
        items: ['Ramen (2x)', 'Spicy Ramen (2x)', 'Kimchi (2x)', 'Green Tea (2x)'],
        ingredients: {
            'Egg': 2,
            'Uncooked Noodles': 2,
            'Fish Fillet': 2,
            'Chopped Spring Onion': 2,
            'Water': 3,
            'Chilli Pepper': 1,
            'Cabbage': 4,
            'Fish Sauce': 2,
            'Sugar': 1,
            'Green Tea Leaves': 1
        }
    },
    {
        id: 'sushi-classic',
        name: '🍣 Sushi Classic',
        price: 460,
        items: ['Sushi (2x)', 'Nigri (2x)', 'Kimchi (2x)', 'Drinks (4x)'],
        ingredients: {
            'Uncooked Rice': 4,
            'Water': 4,
            'Fish Fillet': 4,
            'Soy Sauce': 4,
            'Nori': 2,
            'Cabbage': 4,
            'Fish Sauce': 2,
            'Drinks': 4
        }
    },
    {
        id: 'bento-box',
        name: '🍱 Bento Box',
        price: 400,
        items: ['Bento Box (2x)', 'Miso Soup (2x)', 'Kimchi (2x)', 'Drinks (4x)'],
        ingredients: {
            'Uncooked Rice': 2,
            'Water': 3,
            'Fish Fillet': 2,
            'Soy Sauce': 2,
            'Cabbage': 6,
            'Fish Sauce': 3,
            'Chopped Spring Onion': 2,
            'Tofu': 1,
            'Drinks': 4
        }
    },
    {
        id: 'nigri-mochi',
        name: '🍣 Nigri-Mochi Combo',
        price: 430,
        items: ['Nigri (2x)', 'Mango Mochi (3x)', 'Strawberry Mochi (3x)', 'Kimchi (2x)', 'Green Tea (4x)'],
        ingredients: {
            'Uncooked Rice': 4,
            'Water': 6,
            'Fish Fillet': 2,
            'Soy Sauce': 2,
            'Mango': 1,
            'Strawberry': 2,
            'Sugar': 4,
            'Cabbage': 4,
            'Fish Sauce': 2,
            'Green Tea Leaves': 2
        }
    },
    {
        id: 'tokyo-tray',
        name: '🍱 Tokyo Tray',
        price: 620,
        items: ['Sushi (2x)', 'Spicy Ramen (2x)', 'Bento Box (2x)', 'Nigri (2x)', 'Kimchi (2x)', 'Mango Mochi (3x)', 'Drinks (8x)'],
        ingredients: {
            'Uncooked Rice': 7,
            'Water': 8,
            'Fish Fillet': 7,
            'Soy Sauce': 6,
            'Nori': 2,
            'Egg': 1,
            'Uncooked Noodles': 1,
            'Chopped Spring Onion': 1,
            'Chilli Pepper': 1,
            'Cabbage': 6,
            'Fish Sauce': 2,
            'Mango': 1,
            'Sugar': 1,
            'Drinks': 8
        }
    },
    {
        id: 'emergency-meal',
        name: '🚓 PD/EMS/DOJ Emergency Meal',
        price: 450,
        items: ['Bento Box (2x)', 'Kimchi (2x)', 'Mango Mochi (3x)', 'Strawberry Mochi (3x)', 'Drinks (8x)'],
        ingredients: {
            'Uncooked Rice': 4,
            'Water': 4,
            'Fish Fillet': 2,
            'Soy Sauce': 2,
            'Cabbage': 6,
            'Fish Sauce': 2,
            'Mango': 1,
            'Strawberry': 2,
            'Sugar': 2,
            'Drinks': 8
        }
    },
    {
        id: 'launch-event',
        name: '🎈 Launch Event - The Murphy Wave',
        price: 500,
        items: ['Spicy Ramen (2x)', 'Miso Soup (2x)', 'Sushi (1x)', 'Green Tea (4x)', 'Wine (1x)'],
        ingredients: {
            'Egg': 1,
            'Uncooked Noodles': 1,
            'Fish Fillet': 2,
            'Chopped Spring Onion': 3,
            'Water': 5,
            'Chilli Pepper': 1,
            'Fish Sauce': 1,
            'Tofu': 1,
            'Uncooked Rice': 1,
            'Soy Sauce': 1,
            'Nori': 1,
            'Sugar': 2,
            'Green Tea Leaves': 2,
            'Wine': 1
        }
    },
    {
        id: 'izakiya-set',
        name: '🍱 Izakiya Set',
        price: 680,
        items: ['Miso Soup (4x)', 'Sushi (2x)', 'Nigri (2x)', 'Kimchi (2x)', 'Mochi (3x)', 'Ramen (2x)', 'Asahi Beer (6x) or Green Tea (6x)'],
        ingredients: {
            'Uncooked Rice': 5,
            'Water': 8,
            'Fish Fillet': 5,
            'Soy Sauce': 4,
            'Nori': 2,
            'Fish Sauce': 4,
            'Chopped Spring Onion': 5,
            'Tofu': 2,
            'Cabbage': 4,
            'Mango': 1,
            'Sugar': 1,
            'Egg': 1,
            'Uncooked Noodles': 1,
            'Asahi Beer': 6
        }
    }
];

// Global state
let selectedMeals = {};

// Individual food items (with their ingredient breakdowns)
const foodItems = [
    {
        id: 'nigri',
        name: 'Nigri',
        icon: '🍣',
        ingredients: {
            'Uncooked Rice': 1,
            'Water': 1,
            'Fish Fillet': 1,
            'Soy Sauce': 1
        }
    },
    {
        id: 'miso-soup',
        name: 'Miso Soup',
        icon: '🥣',
        ingredients: {
            'Water': 1,
            'Fish Sauce': 1,
            'Chopped Spring Onion': 2,
            'Tofu': 1
        }
    },
    {
        id: 'kimchi',
        name: 'Kimchi',
        icon: '🥬',
        ingredients: {
            'Cabbage': 2,
            'Fish Sauce': 1
        }
    },
    {
        id: 'ramen',
        name: 'Ramen',
        icon: '🍜',
        ingredients: {
            'Egg': 1,
            'Uncooked Noodles': 1,
            'Fish Fillet': 1,
            'Chopped Spring Onion': 1,
            'Water': 1
        }
    },
    {
        id: 'spicy-ramen',
        name: 'Spicy Ramen',
        icon: '🌶️',
        ingredients: {
            'Egg': 1,
            'Uncooked Noodles': 1,
            'Fish Fillet': 1,
            'Chopped Spring Onion': 1,
            'Water': 1,
            'Chilli Pepper': 1
        }
    },
    {
        id: 'sushi',
        name: 'Sushi',
        icon: '🍣',
        ingredients: {
            'Uncooked Rice': 1,
            'Water': 1,
            'Fish Fillet': 1,
            'Soy Sauce': 1,
            'Nori': 1
        }
    },
    {
        id: 'bento-box',
        name: 'Bento Box',
        icon: '🍱',
        ingredients: {
            'Uncooked Rice': 1,
            'Water': 1,
            'Fish Fillet': 1,
            'Soy Sauce': 1,
            'Cabbage': 1
        }
    },
    {
        id: 'mango-mochi',
        name: 'Mango Mochi',
        icon: '🥭',
        ingredients: {
            'Mango': 1,
            'Sugar': 1,
            'Uncooked Rice': 1,
            'Water': 1
        }
    },
    {
        id: 'strawberry-mochi',
        name: 'Strawberry Mochi',
        icon: '🍓',
        ingredients: {
            'Strawberry': 2,
            'Sugar': 1,
            'Uncooked Rice': 1,
            'Water': 1
        }
    },
    {
        id: 'chocolate-mochi',
        name: 'Chocolate Mochi',
        icon: '🍫',
        ingredients: {
            'Cocoa Powder': 1,
            'Sugar': 1,
            'Uncooked Rice': 1,
            'Water': 1
        }
    },
    {
        id: 'green-tea-mochi',
        name: 'Green Tea Mochi',
        icon: '🍵',
        ingredients: {
            'Green Tea': 1,
            'Sugar': 1,
            'Uncooked Rice': 1,
            'Water': 1
        }
    },
    {
        id: 'green-tea',
        name: 'Green Tea',
        icon: '🍵',
        ingredients: {
            'Water': 1,
            'Sugar': 1,
            'Green Tea Leaves': 1
        }
    },
    {
        id: 'capri-sun',
        name: 'Capri Sun',
        icon: '🧃',
        ingredients: {
            'Capri Sun': 1
        }
    },
    {
        id: 'drinks',
        name: 'Drinks',
        icon: '🥤',
        ingredients: {
            'Drinks': 1
        }
    },
    {
        id: 'wine',
        name: 'Wine',
        icon: '🍷',
        ingredients: {
            'Wine': 1
        }
    },
    {
        id: 'asahi-beer',
        name: 'Asahi Beer',
        icon: '🍺',
        ingredients: {
            'Asahi Beer': 1
        }
    }
];

// Track selected individual food items
let selectedItems = {};

// DOM elements
const mealGrid = document.getElementById('mealGrid');
const selectedList = document.getElementById('selectedList');
const ingredientsList = document.getElementById('ingredientsList');
const resetBtn = document.getElementById('resetBtn');
const foodItemsList = document.getElementById('foodItemsList');

// DOM elements for dropdowns and controls
const mealDropdown = document.getElementById('mealDropdown');
const mealDropdownQty = document.getElementById('mealDropdownQty');
const mealIncreaseBtn = document.getElementById('mealIncreaseBtn');
const mealDecreaseBtn = document.getElementById('mealDecreaseBtn');

const itemDropdown = document.getElementById('itemDropdown');
const itemDropdownQty = document.getElementById('itemDropdownQty');
const itemIncreaseBtn = document.getElementById('itemIncreaseBtn');
const itemDecreaseBtn = document.getElementById('itemDecreaseBtn');

// Track selected meal/item in dropdown
let currentMealId = meals[0]?.id || '';
let currentItemId = foodItems[0]?.id || '';

// Initialize the app
function init() {
    renderMealDropdown();
    renderItemDropdown();
    updateSummary();
    setupEventListeners();
}

// Populate meal dropdown
function renderMealDropdown() {
    mealDropdown.innerHTML = meals.map(meal =>
        `<option value="${meal.id}">${meal.name} ($${meal.price})</option>`
    ).join('');
    currentMealId = meals[0]?.id || '';
    updateMealDropdownQty();
}

// Populate item dropdown
function renderItemDropdown() {
    itemDropdown.innerHTML = foodItems.map(item =>
        `<option value="${item.id}">${item.icon} ${item.name}</option>`
    ).join('');
    currentItemId = foodItems[0]?.id || '';
    updateItemDropdownQty();
}

// Update meal dropdown quantity display
function updateMealDropdownQty() {
    mealDropdownQty.textContent = selectedMeals[currentMealId] || 0;
}

// Update item dropdown quantity display
function updateItemDropdownQty() {
    itemDropdownQty.textContent = selectedItems[currentItemId] || 0;
}

// Meal dropdown change
mealDropdown.addEventListener('change', e => {
    currentMealId = e.target.value;
    updateMealDropdownQty();
});

// Item dropdown change
itemDropdown.addEventListener('change', e => {
    currentItemId = e.target.value;
    updateItemDropdownQty();
});

// Meal quantity controls
mealIncreaseBtn.addEventListener('click', () => {
    selectedMeals[currentMealId] = (selectedMeals[currentMealId] || 0) + 1;
    updateMealDropdownQty();
    updateSummary();
});
mealDecreaseBtn.addEventListener('click', () => {
    if (selectedMeals[currentMealId] && selectedMeals[currentMealId] > 0) {
        selectedMeals[currentMealId] -= 1;
        if (selectedMeals[currentMealId] === 0) delete selectedMeals[currentMealId];
        updateMealDropdownQty();
        updateSummary();
    }
});

// Item quantity controls
itemIncreaseBtn.addEventListener('click', () => {
    selectedItems[currentItemId] = (selectedItems[currentItemId] || 0) + 1;
    updateItemDropdownQty();
    updateSummary();
});
itemDecreaseBtn.addEventListener('click', () => {
    if (selectedItems[currentItemId] && selectedItems[currentItemId] > 0) {
        selectedItems[currentItemId] -= 1;
        if (selectedItems[currentItemId] === 0) delete selectedItems[currentItemId];
        updateItemDropdownQty();
        updateSummary();
    }
});

// Update summary sections (override to include food items)
function updateSummary() {
    updateSelectedMeals();
    updateSelectedItems();
    updateFoodItemsBreakdown();
    updateIngredientsBreakdown();
}

// Update selected meals list
function updateSelectedMeals() {
    const selectedMealsArray = Object.entries(selectedMeals)
        .filter(([_, quantity]) => quantity > 0)
        .map(([mealId, quantity]) => {
            const meal = meals.find(m => m.id === mealId);
            return { ...meal, quantity };
        });

    if (selectedMealsArray.length === 0 && Object.keys(selectedItems).length === 0) {
        selectedList.innerHTML = '<div class="empty-state">No meals or items selected yet</div>';
        return;
    }

    selectedList.innerHTML = selectedMealsArray.map(meal => `
        <div class="selected-item">
            <span class="selected-item-name">${meal.name}</span>
            <span class="selected-item-quantity">${meal.quantity}x</span>
        </div>
    `).join('');
}

// Update selected individual items list (append to selected meals)
function updateSelectedItems() {
    const selectedItemsArray = Object.entries(selectedItems)
        .filter(([_, quantity]) => quantity > 0)
        .map(([itemId, quantity]) => {
            const item = foodItems.find(i => i.id === itemId);
            return { ...item, quantity };
        });

    if (selectedItemsArray.length === 0) return;

    // Append to selectedList
    selectedList.innerHTML += selectedItemsArray.map(item => `
        <div class="selected-item">
            <span class="selected-item-name">${item.icon} ${item.name}</span>
            <span class="selected-item-quantity">${item.quantity}x</span>
        </div>
    `).join('');
}

// Calculate and display total food items
function updateFoodItemsBreakdown() {
    const totalFoodItems = calculateTotalFoodItems();
    if (Object.keys(totalFoodItems).length === 0) {
        foodItemsList.innerHTML = '<div class="empty-state">No food items selected yet</div>';
        return;
    }
    foodItemsList.innerHTML = Object.entries(totalFoodItems)
        .sort(([a], [b]) => a.localeCompare(b))
        .map(([food, qty]) => {
            const icon = getFoodItemIcon(food);
            return `<div class="food-item-summary">
                <span class="food-item-name">${icon} ${food}</span>
                <span class="food-item-quantity">${qty}</span>
            </div>`;
        }).join('');
}

// Calculate total food items (from meals and individual items)
function calculateTotalFoodItems() {
    const total = {};

    // From meals
    Object.entries(selectedMeals).forEach(([mealId, quantity]) => {
        const meal = meals.find(m => m.id === mealId);
        if (meal && quantity > 0 && Array.isArray(meal.items)) {
            meal.items.forEach(itemStr => {
                // Parse like 'Nigri (2x)'
                const match = itemStr.match(/^(.*?) \((\d+)x\)$/);
                if (match) {
                    const name = match[1].trim();
                    const count = parseInt(match[2], 10) * quantity;
                    total[name] = (total[name] || 0) + count;
                } else {
                    // fallback: treat as 1x per meal
                    const name = itemStr.trim();
                    total[name] = (total[name] || 0) + quantity;
                }
            });
        }
    });

    // Standard servings per food item (used when selected individually)
    const servingSizes = {
        'Nigri': 1,
        'Miso Soup': 2,
        'Capri Sun': 1,
        'Kimchi': 1,
        'Drinks': 1,
        'Mango Mochi': 3,
        'Strawberry Mochi': 3,
        'Chocolate Mochi': 3,
        'Green Tea Mochi': 3,
        'Green Tea': 1,
        'Asahi Beer': 1,
        'Ramen': 2,
        'Spicy Ramen': 2,
        'Sushi': 1,
        'Bento Box': 2,
        'Wine': 1
    };

    // From individual items
    Object.entries(selectedItems).forEach(([itemId, quantity]) => {
        const item = foodItems.find(i => i.id === itemId);
        if (item && quantity > 0) {
            const servingSize = servingSizes[item.name] || 1;
            total[item.name] = (total[item.name] || 0) + (quantity * servingSize);
        }
    });

    return total;
}

// Update ingredients breakdown (override to include items)
function updateIngredientsBreakdown() {
    const totalIngredients = calculateTotalIngredients();

    if (Object.keys(totalIngredients).length === 0) {
        ingredientsList.innerHTML = '<div class="empty-state">No ingredients needed</div>';
        return;
    }

    ingredientsList.innerHTML = Object.entries(totalIngredients)
        .sort(([a], [b]) => a.localeCompare(b))
        .map(([ingredient, quantity]) => `
            <div class="ingredient-item">
                <span class="ingredient-name">
                    ${getIngredientIcon(ingredient)} ${ingredient}
                </span>
                <span class="ingredient-quantity">${quantity}</span>
            </div>
        `).join('');
}

// Calculate total ingredients needed (override to include items)
function calculateTotalIngredients() {
    const totalIngredients = {};

    // From meals
    Object.entries(selectedMeals).forEach(([mealId, quantity]) => {
        const meal = meals.find(m => m.id === mealId);
        if (meal && quantity > 0) {
            Object.entries(meal.ingredients).forEach(([ingredient, amount]) => {
                totalIngredients[ingredient] = (totalIngredients[ingredient] || 0) + (amount * quantity);
            });
        }
    });
    // From individual items
    Object.entries(selectedItems).forEach(([itemId, quantity]) => {
        const item = foodItems.find(i => i.id === itemId);
        if (item && quantity > 0) {
            Object.entries(item.ingredients).forEach(([ingredient, amount]) => {
                totalIngredients[ingredient] = (totalIngredients[ingredient] || 0) + (amount * quantity);
            });
        }
    });
    return totalIngredients;
}

// Get ingredient icon
function getIngredientIcon(ingredient) {
    const icons = {
        'Uncooked Rice': '🍚',
        'Water': '💧',
        'Fish Fillet': '🐟',
        'Soy Sauce': '🥢',
        'Fish Sauce': '🐟',
        'Chopped Spring Onion': '🧅',
        'Tofu': '🧈',
        'Capri Sun': '🧃',
        'Cabbage': '🥬',
        'Drinks': '🥤',
        'Mango': '🥭',
        'Strawberry': '🍓',
        'Sugar': '🍯',
        'Cocoa Powder': '🍫',
        'Green Tea': '🍵',
        'Green Tea Leaves': '🍃',
        'Nori': '🌊',
        'Egg': '🥚',
        'Uncooked Noodles': '🍜',
        'Chilli Pepper': '🌶️',
        'Wine': '🍷',
        'Asahi Beer': '🍺'
    };
    
    return icons[ingredient] || '🥄';
}

// Get food item icon (from foodItems array)
function getFoodItemIcon(foodName) {
    const found = foodItems.find(i => i.name === foodName);
    return found ? found.icon : '🍽️';
}

// Reset all selections (override)
function resetAll() {
    selectedMeals = {};
    selectedItems = {};
    updateMealDropdownQty();
    updateItemDropdownQty();
    updateSummary();
}

// Setup event listeners (override)
function setupEventListeners() {
    resetBtn.addEventListener('click', resetAll);
}

// Initialize when DOM is loaded (override)
document.addEventListener('DOMContentLoaded', () => {
    init();
}); 