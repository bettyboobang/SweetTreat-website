let currentOpenRecipeId = null; //зберігає ID відкритого рецепту

function renderRecipes(recipes) {//отримуємо контейнер сітки рецептів
    const grid = document.querySelector('.recipe-grid');
    if (!grid) return;
    
    grid.innerHTML = ''; //очистка сітки перед завантаженням
    recipes.forEach(recipe => {
        const article = document.createElement('article');
        article.className = 'card';
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
document.addEventListener('DOMContentLoaded', async () => {//коли сторінка повністю завантажиться, виконаємо цей код
    //ініціалізуємо авторизацію та перевіряємо, чи ми увійшли
    initAuth();
    updateAuthUI();

    //ініціалізація EmailJS
    emailjs.init('Kq29wxOqOkavrp2lv');

    //запит даних з сервера
    try {
        const response = await fetch(`/api/recipes`); //запит на всі рецепти
        if (!response.ok) throw new Error('Помилка мережі');
        const recipesData = await response.json();
        renderRecipes(recipesData);
        initSearchAndFilters();
    } catch (error) {
        console.error('Помилка завантаження рецептів:', error);
        const grid = document.querySelector('.recipe-grid');
        if (grid) {
            grid.innerHTML = '<h3 style="text-align: center; width: 100%;">Не вдалося завантажити рецепти. Перевірте, чи запущено сервер.</h3>';
        }
    }
    const showFavoritesBtn = document.getElementById('show-favorites');
    const showAllBtn = document.getElementById('show-all-recipes');

    if (showFavoritesBtn) {//кнопка "Мої закладки"
        showFavoritesBtn.addEventListener('click', async (e) => {
            e.preventDefault();
            const token = localStorage.getItem('token');

        if (!token) {
            alert('Будь ласка, увійдіть в акаунт, щоб побачити свої закладки.');
            return;
        }

        try {
            const response = await fetch(`/api/favorites`, {//запитуємо у сервера рецепти, які юзер зберіг у закладки
                headers: { 'Authorization': `Bearer ${token}` }
            });

            if (response.ok) {
                const favoriteRecipes = await response.json();//отримуємо масив улюблених рецептів
                
                //очищаємо заголовок
                const gridTitle = document.querySelector('.section-title');
                if (gridTitle) gridTitle.innerText = 'Мої улюблені рецепти';

                if (favoriteRecipes.length === 0) {
                    document.querySelector('.recipe-grid').innerHTML = 
                        '<p style="text-align: center; width: 100%;">У вас поки немає збережених рецептів. Час щось додати!</p>';
                } else {
                    renderRecipes(favoriteRecipes); //перевикористовуємо функцію
                }
                
                closeMenu(); //закриваємо меню після вибору
            }
        } catch (error) {
            console.error('Помилка завантаження закладок:', error);
        }
    });
}
//кнопка "Всі рецепти", щоб повернутися назад
if (showAllBtn) {
    showAllBtn.addEventListener('click', async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`/api/recipes`); //запитуємо всі рецепти знову
            const allRecipes = await response.json();
            
            const gridTitle = document.querySelector('.section-title');
            if (gridTitle) gridTitle.innerText = 'Наші десерти';

            renderRecipes(allRecipes);
            closeMenu();
        } catch (error) {
            console.error('Помилка завантаження всіх рецептів:', error);
        }
    });
}

    //підключення форми EmailJS
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault(); 
            const btn = this.querySelector('button');
            const originalText = btn.innerText;
            btn.innerText = 'Відправляємо...';
            
            emailjs.sendForm('service_qrq5knw', 'template_u0yck7e', this)
                .then(() => {
                    btn.innerText = 'Успішно відправлено!';
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
const menuBtn = document.getElementById('menu-btn');
const closeMenuBtn = document.getElementById('close-menu-btn');
const sideMenu = document.getElementById('side-menu');
const menuOverlay = document.getElementById('menu-overlay');

function openMenu() {
    if(sideMenu) sideMenu.classList.add('active');
    if(menuOverlay) menuOverlay.classList.add('active');
    document.body.style.overflow = 'hidden'; 
}

function closeMenu() {
    if(sideMenu) sideMenu.classList.remove('active');
    if(menuOverlay) menuOverlay.classList.remove('active');
    document.body.style.overflow = ''; 
}

if (menuBtn) menuBtn.addEventListener('click', openMenu);
if (closeMenuBtn) closeMenuBtn.addEventListener('click', closeMenu);
if (menuOverlay) menuOverlay.addEventListener('click', closeMenu);

function initSearchAndFilters() {
    const searchInput = document.querySelector('.search-bar input');
    const filterTags = document.querySelectorAll('.tag');
    
    //логіка пошукового рядка
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const searchTerm = (e.target.value || '').toLowerCase().trim();
            
            //знаходимо актуальні картки щоразу при введенні тексту
            const currentCards = document.querySelectorAll('.recipe-grid .card');

            currentCards.forEach(card => {
                const cardText = (card.innerText || '').toLowerCase(); 
                card.style.display = cardText.includes(searchTerm) ? 'flex' : 'none'; 
            });
        });
    }
    
    //логіка кнопок-фільтрів
    filterTags.forEach(tag => {
        tag.addEventListener('click', () => {
            filterTags.forEach(t => t.classList.remove('active')); 
            tag.classList.add('active'); 
            const filterValue = tag.innerText.trim();
            const currentCards = document.querySelectorAll('.recipe-grid .card');

            currentCards.forEach(card => {
                if (filterValue === 'Всі') {
                    card.style.display = 'flex'; 
                    return;
                }
                const cardCategory = card.getAttribute('data-category') || '';
                card.style.display = (cardCategory === filterValue) ? 'flex' : 'none';
            });
        });
    });
}
window.openModal = async function(recipe) {
    try {
        //запам'ятовуємо ID рецепту, який відкрили
        currentOpenRecipeId = recipe.recipe_id;

        const response = await fetch(`/api/recipes/${recipe.recipe_id}`);
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
        const favBtn = document.getElementById('favorite-btn');
        const token = localStorage.getItem('token');
        
        if (favBtn) {
            favBtn.classList.remove('saved'); //скидаємо колір за замовчуванням
            favBtn.title = 'Додати в закладки';
            
            if (token) {
                try {
                    //питаємо у сервера, чи є цей рецепт у нашого юзера в закладках
                    const favRes = await fetch(`/api/favorites/check/${currentOpenRecipeId}`, {
                        headers: { 'Authorization': `Bearer ${token}` }
                    });
                    if (favRes.ok) {
                        const favData = await favRes.json();
                        if (favData.isFavorite) {
                            favBtn.classList.add('saved');
                            favBtn.title = 'Видалити з закладок';
                        }
                    }
                } catch (e) {
                    console.error('Помилка перевірки закладок:', e);
                }
            }
        }
        modal.style.display = 'flex';
    } catch (error) {
        console.error('Помилка при відкритті рецепту:', error);
    }
}

window.closeModal = function() {
    document.getElementById('recipeModal').style.display = 'none';
}
//знаходимо модальне вікно рецепту за його ID
const recipeModal = document.getElementById('recipeModal');

//додаємо слідкувача за кліками по всьому вікну
window.addEventListener('click', (event) => {
    //якщо елемент, по якому ми клікнули,є самим затемненим фоном, а не білим контейнером всередині
    if (event.target === recipeModal) {
        closeModal(); //викликаємо існуючу функцію закриття
    }
});

window.recalculate = function() { 
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
function initAuth() {
    let isLoginMode = true; 
    
    const authModal = document.getElementById('authModal');
    const headerLoginBtn = document.getElementById('login-btn');
    const menuLoginBtn = document.getElementById('menu-login-btn');
    
    const authForm = document.getElementById('auth-form');
    const authTitle = document.getElementById('auth-title');
    const authSubmitBtn = document.getElementById('auth-submit-btn');
    const authSwitchLink = document.getElementById('auth-switch-link');
    const authSwitchText = document.getElementById('auth-switch-text');
    const usernameInput = document.getElementById('auth-username');
    const emailInput = document.getElementById('auth-email');
    const passwordInput = document.getElementById('auth-password');

    //якщо модалки немає — не ламаємо код
    if (!authModal || !authSwitchLink) return;

    function openAuthModal(e) {
        if (e) e.preventDefault(); 
        
        if (localStorage.getItem('token')) {
            logout();
        } else {
            authModal.style.display = 'flex';
            setLoginMode();
            closeMenu(); //закриваємо меню, щоб модалка була на передньому плані
        }
    }

    if (headerLoginBtn) headerLoginBtn.addEventListener('click', openAuthModal);
    if (menuLoginBtn) menuLoginBtn.addEventListener('click', openAuthModal);

    //хрестик закриття вікна авторизації
    const closeAuthBtn = authModal.querySelector('.close-btn');
    if (closeAuthBtn) {
        closeAuthBtn.addEventListener('click', () => {
            authModal.style.display = 'none';
            authForm.reset();
        });
    }

    authSwitchLink.addEventListener('click', (e) => {//запобігаємо переходу за посиланням
        e.preventDefault();
        //просто перевіряємо, який режим зараз, і вмикаємо протилежний
        if (isLoginMode) {//якщо зараз режим логіну, перемикаємо на реєстрацію
            setRegisterMode();
        } else {//якщо зараз режим реєстрації, перемикаємо на логін
            setLoginMode();
        }
    });
    function setLoginMode() {//налаштовуємо вікно для логіну
        isLoginMode = true;
        authTitle.innerText = 'Увійти';
        usernameInput.style.display = 'none';
        usernameInput.removeAttribute('required');
        authSubmitBtn.innerText = 'Увійти';
        authSwitchText.innerText = 'Немає акаунту?';
        authSwitchLink.innerText = 'Зареєструватися';
    }
    function setRegisterMode() {//налаштовуємо вікно для реєстрації
        isLoginMode = false;
        authTitle.innerText = 'Реєстрація';
        usernameInput.style.display = 'block';
        usernameInput.setAttribute('required', 'true');
        authSubmitBtn.innerText = 'Зареєструватися';
        authSwitchText.innerText = 'Вже є акаунт?';
        authSwitchLink.innerText = 'Увійти';
    }

    authForm.addEventListener('submit', async (e) => {//запобігаємо стандартній відправці форми
        e.preventDefault(); //
    
        const email = emailInput.value;
        const password = passwordInput.value;
        const username = usernameInput.value;
        
        const endpoint = isLoginMode ? '/api/login' : '/api/register';//визначаємо, куди відправляти дані в залежності від режиму
        const payload = isLoginMode ? { email, password } : { username, email, password };

        try {
            const response = await fetch(endpoint, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });

            const data = await response.json();

            if (!response.ok) {
                alert(data.error || 'Сталася помилка');
                return;
            }

            if (isLoginMode) {//якщо це був логін, зберігаємо токен та ім'я користувача в localStorage
                localStorage.setItem('token', data.token);
                localStorage.setItem('username', data.username);
                alert(`Вітаємо, ${data.username}!`);
                authModal.style.display = 'none';
                authForm.reset();
                updateAuthUI(); 
            } else {//якщо це була реєстрація, просто показуємо повідомлення та перемикаємо на логін
                alert(data.message);
                setLoginMode(); 
            }
        } catch (error) {
            console.error('Помилка авторизації:', error);
            alert('Помилка з\'єднання з сервером');
        }
    });
}

//глобальні функції для оновлення кнопок та виходу
window.updateAuthUI = function() {
    const token = localStorage.getItem('token');
    const username = localStorage.getItem('username');
    
    const headerLoginBtn = document.getElementById('login-btn');
    const menuLoginBtn = document.getElementById('menu-login-btn');
    const adminAddBtn = document.getElementById('admin-add-recipe-btn'); //знаходимо кнопку адміна
    
    if (token && username) {//якщо токен є, вважаємо, що користувач авторизований
        if (headerLoginBtn) {
            headerLoginBtn.innerText = `Вийти (${username})`;
            headerLoginBtn.classList.replace('btn-secondary', 'btn-primary'); 
        }
        if (menuLoginBtn) {
            menuLoginBtn.innerText = `Вийти з акаунту (${username})`;
        }
        
        if (adminAddBtn && username === 'Детектив Шерлок Холмс') {
            adminAddBtn.style.display = 'inline-block'; //показуємо кнопку лише для цього користувача
        } else if (adminAddBtn) {
            adminAddBtn.style.display = 'none'; //ховаємо від звичайних юзерів
        }

    } else {
        if (headerLoginBtn) {
            headerLoginBtn.innerText = 'Увійти';
            headerLoginBtn.classList.replace('btn-primary', 'btn-secondary');
        }
        if (menuLoginBtn) {
            menuLoginBtn.innerText = 'Увійти в кабінет';
        }
        if (adminAddBtn) {
            adminAddBtn.style.display = 'none'; //ховаємо, якщо ніхто не авторизований
        }
    }
}

window.logout = function() {
    if(confirm('Ви дійсно хочете вийти з акаунту?')) {
        localStorage.removeItem('token');
        localStorage.removeItem('username');
        updateAuthUI();
        alert('Ви успішно вийшли.');
    }
}

const addRecipeBtn = document.getElementById('admin-add-recipe-btn');
const addRecipeModal = document.getElementById('addRecipeModal');
const closeAddRecipeBtn = document.getElementById('close-add-recipe-btn');

//відкриваємо вікно при кліку на кнопку
if (addRecipeBtn) {
    addRecipeBtn.addEventListener('click', () => {
        addRecipeModal.style.display = 'flex';
        //якщо кнопка була в боковому меню, одразу закриваємо меню, щоб воно не заважало
        if (typeof closeMenu === 'function') closeMenu(); 
    });
}
//закриваємо вікно при кліку на хрестик
if (closeAddRecipeBtn) {
    closeAddRecipeBtn.addEventListener('click', () => {
        addRecipeModal.style.display = 'none';
    });
}

//закриваємо вікно, якщо клікнути мишкою десь поза білим фоном
window.addEventListener('click', (e) => {
    if (e.target === addRecipeModal) {
        addRecipeModal.style.display = 'none';
    }
});

const favBtn = document.getElementById('favorite-btn');

if (favBtn) {
    favBtn.addEventListener('click', async () => {
        const token = localStorage.getItem('token');
        
        if (!token) {
            alert('Зачекайте! Спочатку увійдіть в акаунт, щоб зберігати рецепти у свої закладки.');
            return;
        }

        //якщо з якихось причин ID рецепту немає
        if (!currentOpenRecipeId) return;
        const isSaved = favBtn.classList.contains('saved');
        const method = isSaved ? 'DELETE' : 'POST'; 

        try {
            //відправляємо запит на сервер
            const response = await fetch(`/api/favorites/${currentOpenRecipeId}`, {
                method: method,
                headers: {
                    'Authorization': `Bearer ${token}`, //обов'язково передаємо токен-перепустку
                    'Content-Type': 'application/json'
                }
            });

            if (response.ok) {
                //якщо сервер успішно все зберіг, змінюємо вигляд кнопки
                favBtn.classList.toggle('saved');
                favBtn.title = isSaved ? 'Додати в закладки' : 'Видалити з закладок';
            } else {
                console.error('Помилка сервера при збереженні закладки');
            }
        } catch (error) {
            console.error('Помилка запиту:', error);
        }
    });
}