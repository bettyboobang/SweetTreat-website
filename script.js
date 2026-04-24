// Функція відмальовки
function renderRecipes(recipes) {
    const grid = document.querySelector('.recipe-grid');
    grid.innerHTML = ''; // очистка сітки перед завантаженням
    
    recipes.forEach(recipe => {
        const article = document.createElement('article');
        article.className = 'card';
        // Тепер тут буде правильна назва категорії
        article.setAttribute('data-category', recipe.category_name);
        article.onclick = () => openModal(recipe); 
        
        article.innerHTML = `
            <img class="card-image-placeholder" src="${recipe.photo_url}" alt="${recipe.dessert_name}" style="object-fit: cover; width: 100%; height: 150px; border-radius: 5px; margin-bottom: 15px;">
            <h3 class="card-title" style="margin-top: 0;">${recipe.dessert_name}</h3>
            <button class="btn-primary">Дивитись рецепт</button>
        `;
        grid.appendChild(article);
    });
}

// Вся логіка запуску сторінки
document.addEventListener('DOMContentLoaded', async () => {
    // 1. Ініціалізація EmailJS
    emailjs.init('Kq29wxOqOkavrp2lv');

    // 2. Запит даних з нашого сервера
    try {
        const response = await fetch('http://127.0.0.1:3000/api/recipes');
        if (!response.ok) throw new Error('Помилка мережі');
        const recipesData = await response.json();
        
        renderRecipes(recipesData);
        initSearchAndFilters();
    } catch (error) {
        console.error('Помилка завантаження рецептів:', error);
        document.querySelector('.recipe-grid').innerHTML = '<h3 style="text-align: center; width: 100%;">Не вдалося завантажити рецепти. Перевірте, чи запущено сервер.</h3>';
    }

    // 3. Підключення форми EmailJS
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault(); 
            
            const btn = this.querySelector('button');
            const originalText = btn.innerText;
            btn.innerText = 'Відправляємо...';

            emailjs.sendForm('service_qrq5knw', 'template_u0yck7e', this)
                .then(() => {
                    btn.innerText = 'Успішно відправлено! ✨';
                    btn.style.backgroundColor = '#4CAF50'; 
                    this.reset(); 
                    
                    setTimeout(() => {
                        btn.innerText = originalText;
                        btn.style.backgroundColor = ''; 
                    }, 3000);
                }, (error) => {
                    console.error('Помилка відправки:', error);
                    btn.innerText = 'Сталася помилка :(';
                    btn.style.backgroundColor = 'gray';
                });
        });
    }
});

// Знаходимо всі потрібні елементи меню
const menuBtn = document.getElementById('menu-btn');
const closeMenuBtn = document.getElementById('close-menu-btn');
const sideMenu = document.getElementById('side-menu');
const menuOverlay = document.getElementById('menu-overlay');

function openMenu() {
    sideMenu.classList.add('active');
    menuOverlay.classList.add('active');
    document.body.style.overflow = 'hidden'; 
}

function closeMenu() {
    sideMenu.classList.remove('active');
    menuOverlay.classList.remove('active');
    document.body.style.overflow = ''; 
}

menuBtn.addEventListener('click', openMenu);
closeMenuBtn.addEventListener('click', closeMenu);
menuOverlay.addEventListener('click', closeMenu);

function initSearchAndFilters() {
    const searchInput = document.querySelector('.search-bar input');
    const filterTags = document.querySelectorAll('.tag');
    const cards = document.querySelectorAll('.recipe-grid .card');

    // Логіка пошукового рядка
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const searchTerm = (e.target.value || '').toLowerCase().trim();

            cards.forEach(card => {
                const cardText = (card.innerText || '').toLowerCase(); 
                
                if (cardText.includes(searchTerm)) {
                    card.style.display = 'flex'; 
                } else {
                    card.style.display = 'none'; 
                }
            });
        });
    }

    // Логіка кнопок-фільтрів
    filterTags.forEach(tag => {
        tag.addEventListener('click', () => {
            filterTags.forEach(t => t.classList.remove('active')); 
            tag.classList.add('active'); 
            const filterValue = tag.innerText.trim();

            cards.forEach(card => {
                if (filterValue === 'Всі') {
                    card.style.display = 'flex'; 
                    return;
                }
                
                const cardCategory = card.getAttribute('data-category') || '';
                
                if (cardCategory === filterValue) {
                    card.style.display = 'flex';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
}

async function openModal(recipe) {
    try {
        const response = await fetch(`http://127.0.0.1:3000/api/recipes/${recipe.recipe_id}`);
        const fullRecipe = await response.json();

        const modal = document.getElementById('recipeModal');
        document.getElementById('modalImage').src = fullRecipe.photo_url; 
        modal.querySelector('h2').innerText = fullRecipe.dessert_name;
        modal.querySelector('.modal-header p').innerText = fullRecipe.description;
        modal.querySelector('#oldDiameter').innerText = fullRecipe.base_diameter;

        const ul = document.getElementById('ingredientList');
        ul.innerHTML = ''; 
        fullRecipe.ingredients.forEach(ing => {
            const li = document.createElement('li');
            li.setAttribute('data-base-amount', ing.amount);
            li.innerHTML = `${ing.product_name}: <span class="amount">${ing.amount}</span> ${ing.measurement_unit}`;
            ul.appendChild(li);
        });

        const stepsArray = fullRecipe.instructions.split(/\d+\.\s*/).filter(step => step.trim() !== '');
        let stepsHTML = '<ol>';
        stepsArray.forEach(step => {
            stepsHTML += `<li>${step.trim()}</li>`;
        });
        stepsHTML += '</ol>';

        modal.querySelector('.instructions').innerHTML = `
            <h3>Приготування</h3>
            ${stepsHTML}
        `;
        
        document.getElementById('newDiameter').value = fullRecipe.base_diameter; 
        modal.style.display = 'flex';
    } catch (error) {
        console.error('Помилка при відкритті рецепту:', error);
    }
}

function closeModal() {
    document.getElementById('recipeModal').style.display = 'none';
}

function recalculate() { 
    const oldD = parseFloat(document.getElementById('oldDiameter').innerText);
    const newD = parseFloat(document.getElementById('newDiameter').value);
    
    if (isNaN(newD) || newD <= 0) return; 

    const coefficient = Math.pow((newD/oldD), 2); 
    const items = document.querySelectorAll('#ingredientList li');
    
    items.forEach(item => {
        const baseAmount = parseFloat(item.getAttribute('data-base-amount'));
        const newAmount = Math.round(baseAmount * coefficient);
        item.querySelector('.amount').innerText = newAmount;
    });
}