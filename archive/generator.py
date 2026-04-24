import mysql.connector
import json
import os
from dotenv import load_dotenv

load_dotenv()

def generate_data():
    try:
        db = mysql.connector.connect(
            host=os.getenv("DB_HOST"),
            user=os.getenv("DB_USER"),
            password=os.getenv("DB_PASSWORD"),
            database=os.getenv("DB_NAME")
        )
        cursor = db.cursor(dictionary=True)
        cursor.execute("""
            SELECT r.*, c.name AS category_name 
            FROM recipes r
            LEFT JOIN categories c ON r.category_id = c.category_id
        """)
        recipes = cursor.fetchall()
        
        for recipe in recipes:
            query = """
                SELECT i.product_name, i.measurement_unit, rc.amount
                FROM recipe_composition rc
                JOIN ingredients i ON rc.ingredient_id = i.ingredient_id
                WHERE rc.recipe_id = %s
            """
            cursor.execute(query, (recipe['recipe_id'],))
            
            ingredients = cursor.fetchall()
            for ing in ingredients:
                ing['amount'] = float(ing['amount'])
                
            recipe['ingredients'] = ingredients
    
        with open('data.js', 'w', encoding='utf-8') as file:
            js_content = f"const recipesData = {json.dumps(recipes, ensure_ascii=False, indent=4)};\n"
            file.write(js_content)
        print("Супер! Файл data.js успішно оновлено новими рецептами з бази даних.")
        
    except mysql.connector.Error as err:
        print(f"Помилка підключення до БД: {err}")
    finally:
        if 'db' in locals() and db.is_connected():
            cursor.close()
            db.close()

if __name__ == "__main__":
    generate_data()