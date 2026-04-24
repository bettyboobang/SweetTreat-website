require('dotenv').config();
const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.static(__dirname));

//Підключення до БД
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

db.connect((err) => {
    if (err) {
        console.error('Помилка доступу до бази:', err);
        return;
    }
    console.log('Зв\'язок з базою встановлено через секретні змінні оточення!');
});

//Отримати всі категорії
app.get('/api/categories', (req, res) => {
    db.query('SELECT * FROM categories', (err, results) => {
        if (err) return res.status(500).json({ error: 'Помилка завантаження категорій' });
        res.json(results);
    });
});

// Отримати всі рецепти з назвами категорій
app.get('/api/recipes', (req, res) => {
    const sql = `
        SELECT recipes.*, categories.name AS category_name 
        FROM recipes 
        JOIN categories ON recipes.category_id = categories.category_id
    `;
    db.query(sql, (err, results) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: 'Не вдалося завантажити рецепти' });
        }
        res.json(results);
    });
});

//Отримати деталі одного рецепту + його інгредієнти
app.get('/api/recipes/:id', (req, res) => {
    const recipeId = req.params.id;
    const sqlRecipe = 'SELECT * FROM recipes WHERE recipe_id = ?';
    
    db.query(sqlRecipe, [recipeId], (err, recipeResults) => {
        if (err || recipeResults.length === 0) return res.status(404).json({ error: 'Рецепт не знайдено' });

        const recipe = recipeResults[0];
        const sqlIngredients = `
            SELECT i.product_name, i.measurement_unit, rc.amount 
            FROM recipe_composition rc
            JOIN ingredients i ON rc.ingredient_id = i.ingredient_id
            WHERE rc.recipe_id = ?
        `;

        db.query(sqlIngredients, [recipeId], (err, ingredientsResults) => {
            if (err) return res.status(500).json({ error: 'Помилка бази даних' });
            recipe.ingredients = ingredientsResults;
            res.json(recipe);
        });
    });
});

app.listen(port, () => {
    console.log(`Сервер працює на http://localhost:${port}`);
});