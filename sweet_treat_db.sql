DROP DATABASE IF EXISTS sweet_treat_db;
CREATE DATABASE IF NOT EXISTS sweet_treat_db
CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

USE sweet_treat_db;
CREATE TABLE categories ( 
    category_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL UNIQUE
);
INSERT INTO categories (category_id, name) VALUES 
(1, 'Торти'), (2, 'Без цукру'), (3, 'Печиво');

CREATE TABLE ingredients (
    ingredient_id INT AUTO_INCREMENT PRIMARY KEY,
    product_name VARCHAR(200) NOT NULL,
    measurement_unit VARCHAR(20) NOT NULL -- Виправлено помилку тут!
);
INSERT INTO ingredients (ingredient_id, product_name, measurement_unit) VALUES 
(1, 'Печиво пісочне', 'г'), 
(2, 'Вершкове масло', 'г'), 
(3, 'Крем-сир або кисломолочний сир', 'г'),
(4, 'Свіжі ягоди', 'г'),
(5, 'Борошно пшеничне', 'г'),
(6, 'Какао-порошок', 'г'),
(7, 'Цукор', 'г'),
(8, 'Вівсяні пластівці', 'г'),
(9, 'Стевія (цукрозамінник)', 'г'),
(10, 'Родзинки', 'г');

CREATE TABLE recipes (
    recipe_id INT AUTO_INCREMENT PRIMARY KEY,
    category_id INT NOT NULL,
    dessert_name VARCHAR(255) NOT NULL,
    description TEXT,
    photo_url VARCHAR(255),
    base_diameter INT NOT NULL,
    instructions TEXT NOT NULL,
    FOREIGN KEY (category_id) REFERENCES categories(category_id) ON DELETE CASCADE
);
INSERT INTO recipes (recipe_id, category_id, dessert_name, description, photo_url, base_diameter, instructions) VALUES 
(1, 1, 'Ягідний Чізкейк', 'Ніжний сирковий десерт без випікання з основою з хрусткого печива.', 'img/cheesecake.jpg', 22, '1. Подрібніть печиво в крихту. 2. Викладіть масу у форму та утрамбуйте. 3. Збийте крем-сир і викладіть зверху. 4. Охолодіть мінімум 4 години та прикрасьте ягодами.'),
(2, 1, 'Шоколадний торт', 'Насичений вологий бісквіт з яскравим смаком какао.', 'img/cake.jpg', 20, '1. Змішайте всі сухі інгредієнти. 2. Додайте яйця та масло, ретельно перемішайте. 3. Вилийте тісто у форму та випікайте при 180°C близько 40 хвилин.'),
(3, 2, 'Вівсяне печиво', 'Корисний перекус без доданого цукру для тих, хто слідкує за фігурою.', 'img/cookie.jpg', 15, '1. Перебийте вівсяні пластівці у блендері. 2. Додайте стевію, масло та сформуйте невеликі кульки. 3. Випікайте 15 хвилин при 180°C.');


CREATE TABLE recipe_composition (
    composition_id INT AUTO_INCREMENT PRIMARY KEY,
    recipe_id INT NOT NULL,
    ingredient_id INT NOT NULL,
    amount DECIMAL(10, 2) NOT NULL,
    FOREIGN KEY(recipe_id) REFERENCES recipes(recipe_id) ON DELETE CASCADE,
    FOREIGN KEY(ingredient_id) REFERENCES ingredients(ingredient_id) ON DELETE CASCADE
);
INSERT INTO recipe_composition (recipe_id, ingredient_id, amount) VALUES 
(1, 1, 300), (1, 2, 100), (1, 3, 500), (1, 4, 150),
(2, 5, 250), (2, 6, 80), (2, 7, 200), (2, 2, 120),
(3, 8, 200), (3, 9, 20), (3, 2, 50);