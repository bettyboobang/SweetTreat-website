function renderRecipes(recipes) {
    const grid = document.querySelector('.recipe-grid');
    grid.innerHTML = ''; //очистка сітки перед завантаженням
    
    recipes.forEach(recipe => {
        const article = document.createElement('article'); //створюємо картку
        article.className = 'card';
        //етикетка з категорією
        article.setAttribute('data-category', recipe.category_name);
        article.onclick = () => openModal(recipe); //при кліку відкриваємо модалку
        
        article.innerHTML = `
            <img class="card-image-placeholder" src="${recipe.photo_url}" alt="${recipe.dessert_name}" style="object-fit: cover; width: 100%; border-radius: 5px; margin-bottom: 15px;">
            <h3 class="card-title" style="margin-top: 0;">${recipe.dessert_name}</h3>
            <button class="btn-primary">Дивитись рецепт</button>
        `;
        grid.appendChild(article);
    });
}

//знаходимо головний контейнер для карток
const recipeGrid = document.querySelector('.recipe-grid');

//функція для відмальовки всіх карток
function renderCards(recipes) {
    //очищаємо контейнер перед заповненням
    recipeGrid.innerHTML = '';

    //проходимося по кожному рецепту з масиву recipesData
    recipes.forEach(recipe => {
        const card = document.createElement('article');
        card.className = 'card';
        
        //вішаємо подію кліку: при натисканні передаємо ID рецепта в модалку
        card.onclick = () => openModal(recipe.recipe_id);
        const recipeName = recipe.dessert_name || recipe.name || "Назва безіменна";

        //заповнюємо картку HTML-розміткою
        card.innerHTML = `
            <div class="card-image-placeholder">Фото</div>
            <h3 class="card-title">${recipeName}</h3>
            <button class="btn-primary">Дивитись рецепт</button>
        `;

        //додаємо готову картку в сітку на сторінці
        recipeGrid.appendChild(card);
    });
}
document.addEventListener('DOMContentLoaded', () => {
    //спочатку відмальовуємо картки
    renderRecipes(recipesData);
    //коли картки існують, підключаємо пошук і фільтри
    initSearchAndFilters();
});
// Знаходимо всі потрібні елементи
const menuBtn = document.getElementById('menu-btn');
const closeMenuBtn = document.getElementById('close-menu-btn');
const sideMenu = document.getElementById('side-menu');
const menuOverlay = document.getElementById('menu-overlay');

//Функція для відкриття меню
function openMenu() {
    sideMenu.classList.add('active');
    menuOverlay.classList.add('active');
    document.body.style.overflow = 'hidden'; // Забороняємо прокрутку головного сайту
}

//Функція для закриття меню
function closeMenu() {
    sideMenu.classList.remove('active');
    menuOverlay.classList.remove('active');
    document.body.style.overflow = ''; // Повертаємо прокрутку
}

//Вішаємо події на кліки
menuBtn.addEventListener('click', openMenu);
closeMenuBtn.addEventListener('click', closeMenu);

//Закриття меню при кліку на темний фон позаду
menuOverlay.addEventListener('click', closeMenu);

function initSearchAndFilters() {
    const searchInput = document.querySelector('.search-bar input');
    const filterTags = document.querySelectorAll('.tag');
    
    //шукаємо картки, коли вони вже створені
    const cards = document.querySelectorAll('.card');

    //логіка пошуку
    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase().trim();

        cards.forEach(card => {
            const cardText = card.innerText.toLowerCase(); //беремо текст картки
            
            if (cardText.includes(searchTerm)) {
                card.style.display = 'flex'; //показати
            } else {
                card.style.display = 'none'; //сховати
            }
        });
    });

    //логіка кнопок фільтрів
    filterTags.forEach(tag => {
        tag.addEventListener('click', () => {
            //забираємо стиль активної кнопки у всіх
            filterTags.forEach(t => t.classList.remove('active')); 
            //даємо стиль активної кнопки тій, на яку клікнули
            tag.classList.add('active'); 
            const filterValue = tag.innerText.trim();

            cards.forEach(card => {
                if (filterValue === 'Всі') {
                    card.style.display = 'flex'; 
                    return;
                }
                
                //читаємо категорію з невидимої етикетки
                const cardCategory = card.getAttribute('data-category');
                
                if (cardCategory === filterValue) {
                    card.style.display = 'flex';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
}

function openModal(recipe) {
    const modal = document.getElementById('recipeModal');
    document.getElementById('modalImage').src = recipe.photo_url; 
    modal.querySelector('h2').innerText = recipe.dessert_name;
    modal.querySelector('.modal-header p').innerText = recipe.description;
    modal.querySelector('#oldDiameter').innerText = recipe.base_diameter;

    //заповнення інгредієнтів
    const ul = document.getElementById('ingredientList');
    ul.innerHTML = ''; 
    recipe.ingredients.forEach(ing => {
        const li = document.createElement('li');
        li.setAttribute('data-base-amount', ing.amount);
        li.innerHTML = `${ing.product_name}: <span class="amount">${ing.amount}</span> ${ing.measurement_unit}`;
        ul.appendChild(li);
    });

    //заповнення інструкції кроками
    const stepsArray = recipe.instructions.split(/\d+\.\s*/).filter(step => step.trim() !== '');
    let stepsHTML = '<ol>';
    stepsArray.forEach(step => {
        stepsHTML += `<li>${step.trim()}</li>`;
    });
    stepsHTML += '</ol>';

    modal.querySelector('.instructions').innerHTML = `
        <h3>Приготування</h3>
        ${stepsHTML}
    `;
    
    //скидаємо значення калькулятора на базове
    document.getElementById('newDiameter').value = recipe.base_diameter; 
    modal.style.display = 'flex';
}

function closeModal() {
    document.getElementById('recipeModal').style.display = 'none';
}

function recalculate() { //калькулятор
    const oldD = parseFloat(document.getElementById('oldDiameter').innerText);
    const newD = parseFloat(document.getElementById('newDiameter').value);
    
    //якщо користувач ввів щось не те (наприклад, стер цифру), зупиняємо функцію
    if (isNaN(newD) || newD <= 0) return; 

    const coefficient = Math.pow((newD/oldD), 2); //формула
    const items = document.querySelectorAll('#ingredientList li');
    
    items.forEach(item => {
        const baseAmount = parseFloat(item.getAttribute('data-base-amount'));
        const newAmount = Math.round(baseAmount * coefficient);
        item.querySelector('.amount').innerText = newAmount;
    });
}

document.addEventListener('DOMContentLoaded', () => {
    //ініціалізація EmailJS 
    emailjs.init('Kq29wxOqOkavrp2lv');

    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault(); //зупиняємо перезавантаження сторінки
            
            const btn = this.querySelector('button');
            const originalText = btn.innerText;
            btn.innerText = 'Відправляємо...';

            //відправка даних форми
            emailjs.sendForm('service_qrq5knw', 'template_u0yck7e', this)
                .then(() => {
                    //якщо успішно
                    btn.innerText = 'Успішно відправлено! ✨';
                    btn.style.backgroundColor = '#4CAF50'; 
                    this.reset(); //очищаємо форму
                    
                    //повертаємо кнопку в початковий стан через 3 секунди
                    setTimeout(() => {
                        btn.innerText = originalText;
                        btn.style.backgroundColor = ''; 
                    }, 3000);
                }, (error) => {
                    //якщо помилка
                    console.error('Помилка відправки:', error);
                    btn.innerText = 'Сталася помилка :(';
                    btn.style.backgroundColor = 'gray';
                });
        });
    }
});