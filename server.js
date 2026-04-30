require('dotenv').config();
const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.static(__dirname));

//підключення до БД
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
//реєстрація нового користувача
app.post('/api/register', async (req, res) => {
    const { username, email, password } = req.body;
    
    try {
        //шифруємо пароль перед збереженням у базу
        const hashedPassword = await bcrypt.hash(password, 10);
        
        const sql = 'INSERT INTO users (username, email, password_hash) VALUES (?, ?, ?)';
        db.query(sql, [username, email, hashedPassword], (err, results) => {
            if (err) {
                //якщо такий email або ім'я вже є
                if (err.code === 'ER_DUP_ENTRY') {
                    return res.status(400).json({ error: 'Користувач з таким Email або Іменем вже існує' });
                }
                return res.status(500).json({ error: 'Помилка бази даних' });
            }
            res.json({ message: 'Реєстрація успішна! Тепер ви можете увійти.' });
        });
    } catch (error) {
        res.status(500).json({ error: 'Помилка сервера' });
    }
});
//вхід
app.post('/api/login', (req, res) => {
    const { email, password } = req.body;
    
    const sql = 'SELECT * FROM users WHERE email = ?';
    db.query(sql, [email], async (err, results) => {
        if (err || results.length === 0) {
            return res.status(401).json({ error: 'Невірний email або пароль' });
        }
        const user = results[0];
        //порівняння введеного паролю із зашифрованим з бази
        const match = await bcrypt.compare(password, user.password_hash);
        if (!match) {
            return res.status(401).json({ error: 'Невірний email або пароль' });
        }
        //JWT токен перепустка
        const token = jwt.sign(
            { id: user.user_id, role: user.role }, 
            process.env.JWT_SECRET, 
            { expiresIn: '24h' } //токен діє 24 години
        );
        res.json({ 
            message: 'Вхід успішний', 
            token: token, 
            username: user.username,
            role: user.role 
        });
    });
});
//отримати всі категорії
app.get('/api/categories', (req, res) => {
    db.query('SELECT * FROM categories', (err, results) => {
        if (err) return res.status(500).json({ error: 'Помилка завантаження категорій' });
        res.json(results);
    });
});
//отримати всі рецепти з назвами категорій
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
//отримати деталі одного рецепту + його інгредієнти
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
const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1]; // Беремо токен з "Bearer <token>"
    
    if (!token) return res.status(401).json({ error: 'Потрібна авторизація' });

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) return res.status(403).json({ error: 'Токен недійсний або протермінований' });
        req.user = user; // Зберігаємо дані юзера (id, role) з токена у req.user
        next(); // Пропускаємо далі
    });
};
//Перевірити, чи рецепт у закладках
app.get('/api/favorites/check/:recipeId', authenticateToken, (req, res) => {
    const userId = req.user.id; //Беремо ID юзера з розшифрованого токена
    const recipeId = req.params.recipeId;
    const sql = 'SELECT * FROM favorites WHERE user_id = ? AND recipe_id = ?';
    db.query(sql, [userId, recipeId], (err, results) => {
        if (err) return res.status(500).json({ error: 'Помилка БД' });
        //Якщо є хоч один запис - повертаємо true
        res.json({ isFavorite: results.length > 0 }); 
    });
});
//Додати рецепт у закладки
app.post('/api/favorites/:recipeId', authenticateToken, (req, res) => {
    const userId = req.user.id;
    const recipeId = req.params.recipeId;
    //не видасть помилку, якщо така закладка вже є
    const sql = 'INSERT IGNORE INTO favorites (user_id, recipe_id) VALUES (?, ?)';
    db.query(sql, [userId, recipeId], (err, results) => {
        if (err) return res.status(500).json({ error: 'Помилка бази даних' });
        res.json({ message: 'Рецепт додано до закладок!' });
    });
});
//Видалити рецепт із закладок
app.delete('/api/favorites/:recipeId', authenticateToken, (req, res) => {
    const userId = req.user.id;
    const recipeId = req.params.recipeId;
    const sql = 'DELETE FROM favorites WHERE user_id = ? AND recipe_id = ?';
    db.query(sql, [userId, recipeId], (err, results) => {
        if (err) return res.status(500).json({ error: 'Помилка бази даних' });
        res.json({ message: 'Рецепт видалено із закладок!' });
    });
});

// Отримати всі збережені рецепти користувача
app.get('/api/favorites', authenticateToken, (req, res) => {
    const userId = req.user.id;
    const sql = `
        SELECT r.*, c.name AS category_name 
        FROM favorites f
        JOIN recipes r ON f.recipe_id = r.recipe_id
        JOIN categories c ON r.category_id = c.category_id
        WHERE f.user_id = ?
    `;

    db.query(sql, [userId], (err, results) => {
        if (err) return res.status(500).json({ error: 'Помилка бази даних' });
        res.json(results);
    });
});

app.listen(port, () => {
    console.log(`Сервер працює на http://localhost:${port}`);
});