import { initializeApp } from 'https://www.gstatic.com/firebasejs/12.7.0/firebase-app.js';
import { getFirestore, doc, getDoc, setDoc } from 'https://www.gstatic.com/firebasejs/12.7.0/firebase-firestore.js';
import { firebaseConfig, ADMIN_PASSWORD, ADMIN_USERNAME } from './firebase-config.js';

const MENU_DOCUMENT_PATH = ['menus', 'kissaki-sushi'];
const firebaseConfigured = Boolean(firebaseConfig?.apiKey && firebaseConfig.apiKey !== 'PASTE_YOUR_API_KEY_HERE');
const firebaseApp = firebaseConfigured ? initializeApp(firebaseConfig) : null;
const db = firebaseApp ? getFirestore(firebaseApp) : null;
const menuDocRef = db ? doc(db, ...MENU_DOCUMENT_PATH) : null;

const defaultMenuData = {
    meals: [
        { id: 'simple-zen', name: 'Simple Zen', price: 220, items: ['Nigri (2x)', 'Miso Soup (2x)', 'Capri Sun (2x)'], ingredients: { 'Uncooked Rice': 2, Water: 3, 'Fish Fillet': 2, 'Soy Sauce': 2, 'Fish Sauce': 1, 'Chopped Spring Onion': 2, Tofu: 1, 'Capri Sun': 2 } },
        { id: 'kimchi-snack', name: 'Kimchi Snack', price: 240, items: ['Kimchi (2x)', 'Miso Soup (2x)', 'Drinks (4x)'], ingredients: { Cabbage: 4, 'Fish Sauce': 3, Water: 1, 'Chopped Spring Onion': 2, Tofu: 1, Drinks: 4 } },
        { id: 'mochi-fruity', name: 'Mochi Munchies - Fruity Delight', price: 130, items: ['Mango Mochi (3x)', 'Strawberry Mochi (3x)', 'Capri Sun (2x)'], ingredients: { Mango: 1, Strawberry: 2, Sugar: 2, 'Uncooked Rice': 2, Water: 2, 'Capri Sun': 2 } },
        { id: 'mochi-choco', name: 'Mochi Munchies - Choco Harmony', price: 140, items: ['Chocolate Mochi (3x)', 'Green Tea Mochi (3x)', 'Capri Sun (2x)'], ingredients: { 'Cocoa Powder': 1, 'Green Tea': 1, Sugar: 3, 'Uncooked Rice': 2, Water: 3, 'Green Tea Leaves': 1, 'Capri Sun': 2 } },
        { id: 'ramen-feast', name: 'Ramen-tic Feast', price: 290, items: ['Ramen (2x)', 'Spicy Ramen (2x)', 'Kimchi (2x)', 'Green Tea (2x)'], ingredients: { Egg: 2, 'Uncooked Noodles': 2, 'Fish Fillet': 2, 'Chopped Spring Onion': 2, Water: 3, 'Chilli Pepper': 1, Cabbage: 4, 'Fish Sauce': 2, Sugar: 1, 'Green Tea Leaves': 1 } },
        { id: 'sushi-classic', name: 'Sushi Classic', price: 460, items: ['Sushi (2x)', 'Nigri (2x)', 'Kimchi (2x)', 'Drinks (4x)'], ingredients: { 'Uncooked Rice': 4, Water: 4, 'Fish Fillet': 4, 'Soy Sauce': 4, Nori: 2, Cabbage: 4, 'Fish Sauce': 2, Drinks: 4 } },
        { id: 'bento-box', name: 'Bento Box', price: 400, items: ['Bento Box (2x)', 'Miso Soup (2x)', 'Kimchi (2x)', 'Drinks (4x)'], ingredients: { 'Uncooked Rice': 2, Water: 3, 'Fish Fillet': 2, 'Soy Sauce': 2, Cabbage: 6, 'Fish Sauce': 3, 'Chopped Spring Onion': 2, Tofu: 1, Drinks: 4 } },
        { id: 'nigri-mochi', name: 'Nigri-Mochi Combo', price: 430, items: ['Nigri (2x)', 'Mango Mochi (3x)', 'Strawberry Mochi (3x)', 'Kimchi (2x)', 'Green Tea (4x)'], ingredients: { 'Uncooked Rice': 4, Water: 6, 'Fish Fillet': 2, 'Soy Sauce': 2, Mango: 1, Strawberry: 2, Sugar: 4, Cabbage: 4, 'Fish Sauce': 2, 'Green Tea Leaves': 2 } },
        { id: 'tokyo-tray', name: 'Tokyo Tray', price: 620, items: ['Sushi (2x)', 'Spicy Ramen (2x)', 'Bento Box (2x)', 'Nigri (2x)', 'Kimchi (2x)', 'Mango Mochi (3x)', 'Drinks (8x)'], ingredients: { 'Uncooked Rice': 7, Water: 8, 'Fish Fillet': 7, 'Soy Sauce': 6, Nori: 2, Egg: 1, 'Uncooked Noodles': 1, 'Chopped Spring Onion': 1, 'Chilli Pepper': 1, Cabbage: 6, 'Fish Sauce': 2, Mango: 1, Sugar: 1, Drinks: 8 } },
        { id: 'emergency-meal', name: 'PD/EMS/DOJ Emergency Meal', price: 500, items: ['Sushi (4x)', 'Kimchi (2x)', 'Drinks (6x)'], ingredients: { 'Uncooked Rice': 4, Water: 4, 'Fish Fillet': 4, 'Soy Sauce': 4, Cabbage: 4, Nori: 4, 'Fish Sauce': 2, Drinks: 6 } },
        { id: 'launch-event', name: 'Launch Event - The Murphy Wave', price: 500, items: ['Spicy Ramen (2x)', 'Miso Soup (2x)', 'Sushi (1x)', 'Green Tea (4x)', 'Wine (1x)'], ingredients: { Egg: 1, 'Uncooked Noodles': 1, 'Fish Fillet': 2, 'Chopped Spring Onion': 3, Water: 5, 'Chilli Pepper': 1, 'Fish Sauce': 1, Tofu: 1, 'Uncooked Rice': 1, 'Soy Sauce': 1, Nori: 1, Sugar: 2, 'Green Tea Leaves': 2, Wine: 1 } },
        { id: 'izakiya-set', name: 'Izakiya Set', price: 680, items: ['Miso Soup (4x)', 'Sushi (2x)', 'Nigri (2x)', 'Kimchi (2x)', 'Mochi (3x)', 'Ramen (2x)', 'Asahi Beer (6x) or Green Tea (6x)'], ingredients: { 'Uncooked Rice': 5, Water: 8, 'Fish Fillet': 5, 'Soy Sauce': 4, Nori: 2, 'Fish Sauce': 4, 'Chopped Spring Onion': 5, Tofu: 2, Cabbage: 4, Mango: 1, Sugar: 1, Egg: 1, 'Uncooked Noodles': 1, 'Asahi Beer': 6 } }
    ],
    foodItems: [
        { id: 'nigri', name: 'Nigri', icon: '\u{1F363}', servingSize: 1, ingredients: { 'Uncooked Rice': 1, Water: 1, 'Fish Fillet': 1, 'Soy Sauce': 1 } },
        { id: 'miso-soup', name: 'Miso Soup', icon: '\u{1F963}', servingSize: 2, ingredients: { Water: 1, 'Fish Sauce': 1, 'Chopped Spring Onion': 2, Tofu: 1 } },
        { id: 'kimchi', name: 'Kimchi', icon: '\u{1F96C}', servingSize: 1, ingredients: { Cabbage: 2, 'Fish Sauce': 1 } },
        { id: 'ramen', name: 'Ramen', icon: '\u{1F35C}', servingSize: 2, ingredients: { Egg: 1, 'Uncooked Noodles': 1, 'Fish Fillet': 1, 'Chopped Spring Onion': 1, Water: 1 } },
        { id: 'spicy-ramen', name: 'Spicy Ramen', icon: '\u{1F336}\uFE0F', servingSize: 2, ingredients: { Egg: 1, 'Uncooked Noodles': 1, 'Fish Fillet': 1, 'Chopped Spring Onion': 1, Water: 1, 'Chilli Pepper': 1 } },
        { id: 'sushi', name: 'Sushi', icon: '\u{1F363}', servingSize: 1, ingredients: { 'Uncooked Rice': 1, Water: 1, 'Fish Fillet': 1, 'Soy Sauce': 1, Nori: 1 } },
        { id: 'bento-box', name: 'Bento Box', icon: '\u{1F371}', servingSize: 2, ingredients: { 'Uncooked Rice': 1, Water: 1, 'Fish Fillet': 1, 'Soy Sauce': 1, Cabbage: 1 } },
        { id: 'mango-mochi', name: 'Mango Mochi', icon: '\u{1F96D}', servingSize: 3, ingredients: { Mango: 1, Sugar: 1, 'Uncooked Rice': 1, Water: 1 } },
        { id: 'strawberry-mochi', name: 'Strawberry Mochi', icon: '\u{1F353}', servingSize: 3, ingredients: { Strawberry: 2, Sugar: 1, 'Uncooked Rice': 1, Water: 1 } },
        { id: 'chocolate-mochi', name: 'Chocolate Mochi', icon: '\u{1F36B}', servingSize: 3, ingredients: { 'Cocoa Powder': 1, Sugar: 1, 'Uncooked Rice': 1, Water: 1 } },
        { id: 'green-tea-mochi', name: 'Green Tea Mochi', icon: '\u{1F375}', servingSize: 3, ingredients: { 'Green Tea': 1, Sugar: 1, 'Uncooked Rice': 1, Water: 1 } },
        { id: 'green-tea', name: 'Green Tea', icon: '\u{1F375}', servingSize: 1, ingredients: { Water: 1, Sugar: 1, 'Green Tea Leaves': 1 } },
        { id: 'capri-sun', name: 'Capri Sun', icon: '\u{1F9C3}', servingSize: 1, ingredients: { 'Capri Sun': 1 } },
        { id: 'drinks', name: 'Drinks', icon: '\u{1F964}', servingSize: 1, ingredients: { Drinks: 1 } },
        { id: 'wine', name: 'Wine', icon: '\u{1F377}', servingSize: 1, ingredients: { Wine: 1 } },
        { id: 'asahi-beer', name: 'Asahi Beer', icon: '\u{1F37A}', servingSize: 1, ingredients: { 'Asahi Beer': 1 } }
    ]
};

const ingredientIcons = {
    'Uncooked Rice': '\u{1F35A}', Water: '\u{1F4A7}', 'Fish Fillet': '\u{1F41F}', 'Soy Sauce': '\u{1F962}', 'Fish Sauce': '\u{1F41F}', 'Chopped Spring Onion': '\u{1F9C5}', Tofu: '\u{1F9C8}', 'Capri Sun': '\u{1F9C3}', Cabbage: '\u{1F96C}', Drinks: '\u{1F964}', Mango: '\u{1F96D}', Strawberry: '\u{1F353}', Sugar: '\u{1F36F}', 'Cocoa Powder': '\u{1F36B}', 'Green Tea': '\u{1F375}', 'Green Tea Leaves': '\u{1F343}', Nori: '\u{1F30A}', Egg: '\u{1F95A}', 'Uncooked Noodles': '\u{1F35C}', 'Chilli Pepper': '\u{1F336}\uFE0F', Wine: '\u{1F377}', 'Asahi Beer': '\u{1F37A}'
};

let menuData = clone(defaultMenuData);
let selectedMeals = {};
let selectedItems = {};
let currentMealId = menuData.meals[0]?.id || '';
let currentItemId = menuData.foodItems[0]?.id || '';
let activeAdminMealId = currentMealId;
let activeAdminItemId = currentItemId;
let adminUnlocked = false;

const $ = (id) => document.getElementById(id);
const parseLines = (value) => value.split('\n').map((line) => line.trim()).filter(Boolean);

function clone(value) {
    return JSON.parse(JSON.stringify(value));
}

async function loadMenuData() {
    if (!menuDocRef) {
        showAdminStatus('Add Firebase config to enable online menu data.');
        return clone(defaultMenuData);
    }

    try {
        const snapshot = await getDoc(menuDocRef);
        const stored = snapshot.exists() ? snapshot.data() : null;
        if (stored?.meals?.length && stored?.foodItems?.length) return clone(stored);
        showAdminStatus('Firestore is empty. Using built-in menu defaults.');
    } catch (error) {
        showAdminStatus(`Could not load Firestore menu: ${error.message}`);
    }
    return clone(defaultMenuData);
}

async function saveMenuData() {
    if (!menuDocRef) throw new Error('Firebase is not configured.');
    await setDoc(menuDocRef, {
        meals: menuData.meals,
        foodItems: menuData.foodItems,
        updatedAt: new Date().toISOString()
    });
}

function escapeHtml(value = '') {
    return String(value).replace(/[&<>"']/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[char]));
}

function formatIngredients(ingredients) {
    return Object.entries(ingredients || {}).map(([name, amount]) => `${name}: ${amount}`).join('\n');
}

function parseIngredients(value) {
    return parseLines(value).reduce((ingredients, line) => {
        const separatorIndex = line.lastIndexOf(':');
        const name = separatorIndex === -1 ? line : line.slice(0, separatorIndex);
        const amount = separatorIndex === -1 ? '1' : line.slice(separatorIndex + 1);
        const quantity = Number(amount.trim());
        if (name.trim() && Number.isFinite(quantity) && quantity > 0) ingredients[name.trim()] = quantity;
        return ingredients;
    }, {});
}

function populateSelect(select, items, getLabel) {
    if (!select) return;
    select.replaceChildren(...items.map((item) => {
        const option = document.createElement('option');
        option.value = item.id;
        option.textContent = getLabel(item);
        return option;
    }));
}

function initMenuPage() {
    if (!$('mealDropdown') || !$('itemDropdown')) return;
    renderMenuDropdowns();
    $('mealDropdown').addEventListener('change', (event) => {
        currentMealId = event.target.value;
        updateQuantityDisplays();
    });
    $('itemDropdown').addEventListener('change', (event) => {
        currentItemId = event.target.value;
        updateQuantityDisplays();
    });
    $('mealIncreaseBtn').addEventListener('click', () => updateSelection(selectedMeals, currentMealId, 1));
    $('mealDecreaseBtn').addEventListener('click', () => updateSelection(selectedMeals, currentMealId, -1));
    $('itemIncreaseBtn').addEventListener('click', () => updateSelection(selectedItems, currentItemId, 1));
    $('itemDecreaseBtn').addEventListener('click', () => updateSelection(selectedItems, currentItemId, -1));
    $('resetBtn').addEventListener('click', resetSelections);
    updateSummary();
}

function renderMenuDropdowns() {
    currentMealId = menuData.meals.some(({ id }) => id === currentMealId) ? currentMealId : menuData.meals[0]?.id || '';
    currentItemId = menuData.foodItems.some(({ id }) => id === currentItemId) ? currentItemId : menuData.foodItems[0]?.id || '';
    populateSelect($('mealDropdown'), menuData.meals, (meal) => `${meal.name} ($${meal.price})`);
    populateSelect($('itemDropdown'), menuData.foodItems, (item) => `${item.icon} ${item.name}`);
    $('mealDropdown').value = currentMealId;
    $('itemDropdown').value = currentItemId;
    updateQuantityDisplays();
}

function updateSelection(selection, id, delta) {
    if (!id) return;
    const quantity = Math.max((selection[id] || 0) + delta, 0);
    if (quantity) selection[id] = quantity;
    else delete selection[id];
    updateQuantityDisplays();
    updateSummary();
}

function updateQuantityDisplays() {
    if ($('mealDropdownQty')) $('mealDropdownQty').textContent = selectedMeals[currentMealId] || 0;
    if ($('itemDropdownQty')) $('itemDropdownQty').textContent = selectedItems[currentItemId] || 0;
}

function resetSelections() {
    selectedMeals = {};
    selectedItems = {};
    updateQuantityDisplays();
    updateSummary();
}

function updateSummary() {
    renderSelectedList();
    renderFoodItemsBreakdown();
    renderIngredientsBreakdown();
}

function renderSelectedList() {
    const rows = [
        ...Object.entries(selectedMeals).map(([id, quantity]) => {
            const meal = menuData.meals.find((item) => item.id === id);
            return meal && quantity > 0 ? { name: meal.name, quantity: `${quantity}x` } : null;
        }),
        ...Object.entries(selectedItems).map(([id, quantity]) => {
            const item = menuData.foodItems.find((food) => food.id === id);
            return item && quantity > 0 ? { name: `${item.icon} ${item.name}`, quantity: `${quantity}x` } : null;
        })
    ].filter(Boolean);
    $('selectedList').innerHTML = rows.length ? rows.map(({ name, quantity }) => summaryRow('selected-item', 'selected-item-name', 'selected-item-quantity', name, quantity)).join('') : '<div class="empty-state">No meals or items selected yet</div>';
}

function renderFoodItemsBreakdown() {
    const rows = Object.entries(calculateTotalFoodItems()).sort(([a], [b]) => a.localeCompare(b));
    $('foodItemsList').innerHTML = rows.length ? rows.map(([name, quantity]) => summaryRow('food-item-summary', 'food-item-name', 'food-item-quantity', `${getFoodItemIcon(name)} ${name}`, quantity)).join('') : '<div class="empty-state">No food items selected yet</div>';
}

function renderIngredientsBreakdown() {
    const rows = Object.entries(calculateTotalIngredients()).sort(([a], [b]) => a.localeCompare(b));
    $('ingredientsList').innerHTML = rows.length ? rows.map(([name, quantity]) => summaryRow('ingredient-item', 'ingredient-name', 'ingredient-quantity', `${getIngredientIcon(name)} ${name}`, quantity)).join('') : '<div class="empty-state">No ingredients needed</div>';
}

function summaryRow(rowClass, nameClass, quantityClass, name, quantity) {
    return `<div class="${rowClass}"><span class="${nameClass}">${escapeHtml(name)}</span><span class="${quantityClass}">${escapeHtml(quantity)}</span></div>`;
}

function calculateTotalFoodItems() {
    const totals = {};
    Object.entries(selectedMeals).forEach(([mealId, quantity]) => {
        const meal = menuData.meals.find(({ id }) => id === mealId);
        if (!meal || quantity <= 0) return;
        meal.items.forEach((line) => {
            const item = parseMealItem(line);
            totals[item.name] = (totals[item.name] || 0) + item.count * quantity;
        });
    });
    Object.entries(selectedItems).forEach(([itemId, quantity]) => {
        const item = menuData.foodItems.find(({ id }) => id === itemId);
        if (item && quantity > 0) totals[item.name] = (totals[item.name] || 0) + quantity * (item.servingSize || 1);
    });
    return totals;
}

function parseMealItem(line) {
    const match = line.match(/^(.*?)\s*\((\d+)x\)$/i);
    return match ? { name: match[1].trim(), count: Number(match[2]) } : { name: line.trim(), count: 1 };
}

function calculateTotalIngredients() {
    const totals = {};
    const addIngredients = (ingredients, multiplier) => {
        Object.entries(ingredients || {}).forEach(([name, amount]) => {
            totals[name] = (totals[name] || 0) + amount * multiplier;
        });
    };
    Object.entries(selectedMeals).forEach(([mealId, quantity]) => {
        const meal = menuData.meals.find(({ id }) => id === mealId);
        if (!meal || quantity <= 0) return;
        meal.items.forEach((line) => {
            const mealItem = parseMealItem(line);
            const foodItem = menuData.foodItems.find(({ name }) => name === mealItem.name);
            if (foodItem) addIngredients(foodItem.ingredients, quantity * mealItem.count);
        });
    });
    Object.entries(selectedItems).forEach(([itemId, quantity]) => {
        const item = menuData.foodItems.find(({ id }) => id === itemId);
        if (item && quantity > 0) addIngredients(item.ingredients, quantity);
    });
    return totals;
}

function getFoodItemIcon(foodName) {
    return menuData.foodItems.find(({ name }) => name === foodName)?.icon || '\u{1F37D}\uFE0F';
}

function getIngredientIcon(ingredient) {
    return ingredientIcons[ingredient] || '\u{1F95F}';
}

function initAdminPage() {
    if (!$('adminMealList')) return;
    renderAdmin();
    initAdminAuth();
    $('addMealBtn').addEventListener('click', addMeal);
    $('addFoodItemBtn').addEventListener('click', addFoodItem);
    $('addMealItemBtn').addEventListener('click', addMealItemRow);
    $('saveMealBtn').addEventListener('click', saveActiveMeal);
    $('deleteMealBtn').addEventListener('click', deleteActiveMeal);
    $('addIngredientBtn').addEventListener('click', addIngredientRow);
    $('saveFoodItemBtn').addEventListener('click', saveActiveFoodItem);
    $('deleteFoodItemBtn').addEventListener('click', deleteActiveFoodItem);
    $('resetMenuBtn').addEventListener('click', resetMenuData);
}

function initAdminAuth() {
    $('adminLoginBtn')?.addEventListener('click', signInAdmin);
    $('adminPasswordInput')?.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') signInAdmin();
    });
    $('adminLogoutBtn')?.addEventListener('click', () => {
        adminUnlocked = false;
        updateAdminAuthState();
    });
    updateAdminAuthState();
}

function signInAdmin() {
    const username = $('adminUsernameInput')?.value.trim();
    const password = $('adminPasswordInput')?.value;
    if (!username || !password) {
        showAdminStatus('Enter admin ID and password.');
        return;
    }
    if (username !== ADMIN_USERNAME) {
        showAdminStatus('Invalid admin ID.');
        return;
    }
    if (password !== ADMIN_PASSWORD) {
        showAdminStatus('Invalid password.');
        return;
    }

    adminUnlocked = true;
    if ($('adminPasswordInput')) $('adminPasswordInput').value = '';
    updateAdminAuthState();
    showAdminStatus('Admin unlocked.');
}

function updateAdminAuthState() {
    const canEdit = Boolean(menuDocRef && adminUnlocked);
    const loginForm = $('adminLoginForm');
    const userLabel = $('adminUserLabel');
    const logoutBtn = $('adminLogoutBtn');

    if (loginForm) loginForm.hidden = adminUnlocked;
    if (logoutBtn) logoutBtn.hidden = !adminUnlocked;
    if (userLabel) userLabel.textContent = adminUnlocked ? `Admin: ${ADMIN_USERNAME}` : '';

    document.querySelectorAll('[data-admin-write]').forEach((element) => {
        element.disabled = !canEdit;
    });

    if (!menuDocRef) showAdminStatus('Add Firebase config to enable online saves.');
    else if (!adminUnlocked) showAdminStatus('Enter admin/admin to save menu changes.');
}

function renderAdmin() {
    activeAdminMealId = menuData.meals.some(({ id }) => id === activeAdminMealId) ? activeAdminMealId : menuData.meals[0]?.id || '';
    activeAdminItemId = menuData.foodItems.some(({ id }) => id === activeAdminItemId) ? activeAdminItemId : menuData.foodItems[0]?.id || '';
    $('adminMealList').innerHTML = menuData.meals.map((meal) => adminListButton(meal, activeAdminMealId, 'meal')).join('');
    $('adminFoodItemList').innerHTML = menuData.foodItems.map((item) => adminListButton(item, activeAdminItemId, 'food')).join('');
    document.querySelectorAll('[data-admin-meal-id]').forEach((button) => button.addEventListener('click', () => {
        activeAdminMealId = button.dataset.adminMealId;
        renderAdmin();
    }));
    document.querySelectorAll('[data-admin-food-id]').forEach((button) => button.addEventListener('click', () => {
        activeAdminItemId = button.dataset.adminFoodId;
        renderAdmin();
    }));
    renderMealEditor();
    renderFoodItemEditor();
    renderIngredientSuggestions();
    updateAdminAuthState();
}

function adminListButton(item, activeId, type) {
    const attr = type === 'meal' ? 'data-admin-meal-id' : 'data-admin-food-id';
    const label = type === 'meal' ? `${item.name} - $${item.price}` : `${item.icon} ${item.name}`;
    return `<button class="admin-list-item ${item.id === activeId ? 'active' : ''}" ${attr}="${escapeHtml(item.id)}" type="button">${escapeHtml(label)}</button>`;
}

function renderMealEditor() {
    const meal = menuData.meals.find(({ id }) => id === activeAdminMealId);
    $('mealEditorEmpty').hidden = Boolean(meal);
    $('mealEditorForm').hidden = !meal;
    if (!meal) return;
    $('mealNameInput').value = meal.name;
    $('mealPriceInput').value = meal.price;
    renderMealItemRows(meal.items);
}

function renderMealItemRows(items) {
    const editor = $('mealItemsEditor');
    editor.innerHTML = '';
    const rows = items.length ? items.map(parseMealItem) : [{ name: menuData.foodItems[0]?.name || '', count: 1 }];
    rows.forEach((item) => editor.appendChild(createMealItemRow(item)));
}

function createMealItemRow(item = {}) {
    const row = document.createElement('div');
    row.className = 'meal-item-row';

    const select = document.createElement('select');
    select.className = 'meal-item-select';
    select.setAttribute('aria-label', 'Meal item');

    const knownNames = new Set(menuData.foodItems.map(({ name }) => name));
    if (item.name && !knownNames.has(item.name)) {
        const legacyOption = document.createElement('option');
        legacyOption.value = item.name;
        legacyOption.textContent = `${item.name} (missing recipe)`;
        select.appendChild(legacyOption);
    }

    menuData.foodItems.forEach((foodItem) => {
        const option = document.createElement('option');
        option.value = foodItem.name;
        option.textContent = `${foodItem.icon} ${foodItem.name}`;
        select.appendChild(option);
    });
    select.value = item.name || menuData.foodItems[0]?.name || '';

    const count = document.createElement('input');
    count.className = 'meal-item-count';
    count.type = 'number';
    count.min = '1';
    count.step = '1';
    count.value = Math.max(Number(item.count) || 1, 1);
    count.setAttribute('aria-label', 'Meal item quantity');

    const remove = document.createElement('button');
    remove.className = 'danger-btn compact-btn';
    remove.type = 'button';
    remove.textContent = 'Remove';
    remove.dataset.adminWrite = 'true';
    remove.addEventListener('click', () => {
        row.remove();
        if (!$('mealItemsEditor').children.length) addMealItemRow();
    });

    row.append(select, count, remove);
    return row;
}

function renderFoodItemEditor() {
    const item = menuData.foodItems.find(({ id }) => id === activeAdminItemId);
    $('foodItemEditorEmpty').hidden = Boolean(item);
    $('foodItemEditorForm').hidden = !item;
    if (!item) return;
    $('foodItemNameInput').value = item.name;
    $('foodItemIconInput').value = item.icon;
    $('foodItemServingInput').value = item.servingSize || 1;
    renderIngredientRows(item.ingredients);
}

function saveActiveMeal() {
    const meal = menuData.meals.find(({ id }) => id === activeAdminMealId);
    if (!meal) return;
    meal.name = $('mealNameInput').value.trim() || meal.name;
    meal.price = Math.max(Number($('mealPriceInput').value) || 0, 0);
    meal.items = getMealItemRows();
    delete meal.ingredients;
    persistAdminChange('Meal saved.');
}

function addMealItemRow() {
    $('mealItemsEditor').appendChild(createMealItemRow({ name: menuData.foodItems[0]?.name || '', count: 1 }));
}

function getMealItemRows() {
    return [...$('mealItemsEditor').querySelectorAll('.meal-item-row')]
        .map((row) => {
            const name = row.querySelector('.meal-item-select').value;
            const count = Math.max(Number(row.querySelector('.meal-item-count').value) || 1, 1);
            return name ? `${name} (${count}x)` : '';
        })
        .filter(Boolean);
}

function saveActiveFoodItem() {
    const item = menuData.foodItems.find(({ id }) => id === activeAdminItemId);
    if (!item) return;
    item.name = $('foodItemNameInput').value.trim() || item.name;
    item.icon = $('foodItemIconInput').value.trim() || '\u{1F37D}\uFE0F';
    item.servingSize = Math.max(Number($('foodItemServingInput').value) || 1, 1);
    item.ingredients = getIngredientRows();
    persistAdminChange('Food item saved.');
}

function renderIngredientSuggestions() {
    const suggestions = $('ingredientSuggestions');
    if (!suggestions) return;
    const names = new Set();
    menuData.foodItems.forEach((item) => {
        Object.keys(item.ingredients || {}).forEach((name) => names.add(name));
    });
    suggestions.replaceChildren(...[...names].sort((a, b) => a.localeCompare(b)).map((name) => {
        const option = document.createElement('option');
        option.value = name;
        return option;
    }));
}

function renderIngredientRows(ingredients) {
    const editor = $('foodItemIngredientsEditor');
    editor.innerHTML = '';
    const rows = Object.entries(ingredients || {});
    if (rows.length) {
        rows.forEach(([name, amount]) => editor.appendChild(createIngredientRow({ name, amount })));
    } else {
        editor.appendChild(createIngredientRow());
    }
}

function createIngredientRow(ingredient = {}) {
    const row = document.createElement('div');
    row.className = 'ingredient-row';

    const name = document.createElement('input');
    name.className = 'ingredient-name-input';
    name.type = 'text';
    name.value = ingredient.name || '';
    name.placeholder = 'Ingredient name';
    name.setAttribute('list', 'ingredientSuggestions');
    name.setAttribute('aria-label', 'Ingredient name');

    const amount = document.createElement('input');
    amount.className = 'ingredient-amount-input';
    amount.type = 'number';
    amount.min = '1';
    amount.step = '1';
    amount.value = Math.max(Number(ingredient.amount) || 1, 1);
    amount.setAttribute('aria-label', 'Ingredient quantity');

    const remove = document.createElement('button');
    remove.className = 'danger-btn compact-btn';
    remove.type = 'button';
    remove.textContent = 'Remove';
    remove.dataset.adminWrite = 'true';
    remove.addEventListener('click', () => {
        row.remove();
        if (!$('foodItemIngredientsEditor').children.length) addIngredientRow();
    });

    row.append(name, amount, remove);
    return row;
}

function addIngredientRow() {
    $('foodItemIngredientsEditor').appendChild(createIngredientRow());
}

function getIngredientRows() {
    return [...$('foodItemIngredientsEditor').querySelectorAll('.ingredient-row')].reduce((ingredients, row) => {
        const name = row.querySelector('.ingredient-name-input').value.trim();
        const amount = Math.max(Number(row.querySelector('.ingredient-amount-input').value) || 1, 1);
        if (name) ingredients[name] = (ingredients[name] || 0) + amount;
        return ingredients;
    }, {});
}

function addMeal() {
    const firstItemName = menuData.foodItems[0]?.name || 'New Item';
    const meal = { id: uniqueId('new-meal', menuData.meals), name: 'New Meal', price: 0, items: [`${firstItemName} (1x)`] };
    menuData.meals.push(meal);
    activeAdminMealId = meal.id;
    persistAdminChange('Meal added.');
}

function addFoodItem() {
    const item = { id: uniqueId('new-food-item', menuData.foodItems), name: 'New Food Item', icon: '\u{1F37D}\uFE0F', servingSize: 1, ingredients: {} };
    menuData.foodItems.push(item);
    activeAdminItemId = item.id;
    persistAdminChange('Food item added.');
}

function uniqueId(baseId, items) {
    const ids = new Set(items.map(({ id }) => id));
    let id = baseId;
    let counter = 2;
    while (ids.has(id)) id = `${baseId}-${counter++}`;
    return id;
}

function deleteActiveMeal() {
    if (!activeAdminMealId || !confirm('Delete this meal?')) return;
    menuData.meals = menuData.meals.filter(({ id }) => id !== activeAdminMealId);
    activeAdminMealId = menuData.meals[0]?.id || '';
    persistAdminChange('Meal deleted.');
}

function deleteActiveFoodItem() {
    if (!activeAdminItemId || !confirm('Delete this food item?')) return;
    menuData.foodItems = menuData.foodItems.filter(({ id }) => id !== activeAdminItemId);
    activeAdminItemId = menuData.foodItems[0]?.id || '';
    persistAdminChange('Food item deleted.');
}

function resetMenuData() {
    if (!confirm('Restore the original menu data?')) return;
    menuData = clone(defaultMenuData);
    selectedMeals = {};
    selectedItems = {};
    activeAdminMealId = menuData.meals[0]?.id || '';
    activeAdminItemId = menuData.foodItems[0]?.id || '';
    persistAdminChange('Menu restored.');
}

async function persistAdminChange(message) {
    try {
        await saveMenuData();
        renderAdmin();
        showAdminStatus(`${message} Firestore updated.`);
    } catch (error) {
        renderAdmin();
        updateAdminAuthState();
        showAdminStatus(`Save failed: ${error.message}`);
    }
}

function showAdminStatus(message) {
    const status = $('adminStatus');
    if (!status) return;
    status.textContent = message;
    window.clearTimeout(showAdminStatus.timer);
    showAdminStatus.timer = window.setTimeout(() => {
        status.textContent = '';
    }, 2500);
}

document.addEventListener('DOMContentLoaded', async () => {
    menuData = await loadMenuData();
    currentMealId = menuData.meals[0]?.id || '';
    currentItemId = menuData.foodItems[0]?.id || '';
    activeAdminMealId = currentMealId;
    activeAdminItemId = currentItemId;
    initMenuPage();
    initAdminPage();
});
