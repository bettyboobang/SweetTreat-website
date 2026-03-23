document.addEventListener('DOMContentLoaded', () => {
    renderRecipes(recipesData);
});

function renderRecipes(recipes) {//функція для відмальовки карток
    const grid = document.querySelector('.recipe-grid');
    grid.innerHTML = '';//очистка сітки перед завантаженням
    recipes.forEach(recipe => {
        const article = document.createElement('article');//створюємо картку
        article.className = 'card';
        article.onclick = () => openModal(recipe);//при кліку на картку дані конкретногоирецепту передаються в модлку
        article.innerHTML = `
            <img class="card-image-placeholder" src="${recipe.photo_url}" alt="${recipe.dessert_name}" style="object-fit: cover; width: 100%;">
            <h3 class="card-title">${recipe.dessert_name}</h3>
            <button class="btn-primary">Дивитись рецепт</button>
`;
        grid.appendChild(article);
    });
}

function openModal(recipe) {//функція для відкривання модільного вікна
    const modal = document.getElementById('recipeModal');
    document.getElementById('modalImage').src = recipe.photo_url; 
    modal.querySelector('h2').innerText = recipe.dessert_name;
    modal.querySelector('h2').innerText = recipe.dessert_name;
    modal.querySelector('.modal-header p').innerText = recipe.description;
    modal.querySelector('#oldDiameter').innerText = recipe.base_diameter;//заповнюємо модалку данми рецепту

    const ul = document.getElementById('ingredientList');//заповнення інгредієнтів
    ul.innerHTML = '';//очистка старих інгредієнтів
    recipe.ingredients.forEach(ing => {
        const li = document.createElement('li');
        li.setAttribute('data-base-amount', ing.amount);
        li.innerHTML = `${ing.product_name}: <span class="amount">${ing.amount}</span> ${ing.measurement_unit}`;
        ul.appendChild(li);
    });
    //заповнення інструкції, я ще не вирішила чи зробити кроками чи залишити текстом як є зараз(та всьо вже кроки зробила)
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
    document.getElementById('newDiameter').value = recipe.base_diameter;//скидаємо значення калькулятор ана базове
    modal.style.display = 'flex';
}

function closeModal() {
    document.getElementById('recipeModal').style.display = 'none';
}

function recalculate() {//калькулятор
    const oldD = parseFloat(document.getElementById('oldDiameter').innerText);
    const newD = parseFloat(document.getElementById('newDiameter').value);
    const coefficient = Math.pow((newD/oldD), 2);//формула (новий діаметр/старий діаметр)^2
    const items = document.querySelectorAll('#ingredientList li');
    items.forEach(item => {
        const baseAmount = parseFloat(item.getAttribute('data-base-amount'));
        const newAmount = Math.round(baseAmount * coefficient);
        item.querySelector('.amount').innerText = newAmount;
    });
}