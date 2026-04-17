const recipesData = [
    {
        "recipe_id": 1,
        "category_id": 4,
        "dessert_name": "Класична Паска",
        "description": "Ароматна здобна паска з родзинками та цукатами.",
        "photo_url": "img/paska_classic.jpg",
        "base_diameter": 15,
        "instructions": "1. Приготуйте опару з дріжджів, теплого молока та частини борошна.\n2. Додайте збиті яйця, жовтки, цукор та розтоплене масло.\n3. Вмішайте родзинки та вимісіть тісто.\n4. Випікайте при 180°C до сухої палички.",
        "category_name": "Великдень",
        "ingredients": [
            {
                "product_name": "Борошно пшеничне",
                "measurement_unit": "г",
                "amount": 600.0
            },
            {
                "product_name": "Молоко",
                "measurement_unit": "мл",
                "amount": 200.0
            },
            {
                "product_name": "Дріжджі (сухі/свіжі)",
                "measurement_unit": "г",
                "amount": 25.0
            },
            {
                "product_name": "Яйця",
                "measurement_unit": "шт",
                "amount": 3.0
            },
            {
                "product_name": "Жовтки яєчні",
                "measurement_unit": "шт",
                "amount": 2.0
            },
            {
                "product_name": "Цукор",
                "measurement_unit": "г",
                "amount": 150.0
            },
            {
                "product_name": "Вершкове масло",
                "measurement_unit": "г",
                "amount": 100.0
            },
            {
                "product_name": "Родзинки",
                "measurement_unit": "г",
                "amount": 150.0
            }
        ]
    },
    {
        "recipe_id": 2,
        "category_id": 4,
        "dessert_name": "Сирна Паска (без випічки)",
        "description": "Ніжний сирний десерт з вершками та горіхами.",
        "photo_url": "img/paska_curd.jpg",
        "base_diameter": 12,
        "instructions": "1. Перетріть кисломолочний сир через дрібне сито двічі.\n2. Збийте жирні вершки з пудрою до щільності.\n3. Додайте розм'якшене масло, цукати та горіхи, обережно перемішайте.\n4. Покладіть масу у пасочницю під гніт у холодильник на ніч.",
        "category_name": "Великдень",
        "ingredients": [
            {
                "product_name": "Кисломолочний сир",
                "measurement_unit": "г",
                "amount": 500.0
            },
            {
                "product_name": "Вершкове масло",
                "measurement_unit": "г",
                "amount": 100.0
            },
            {
                "product_name": "Цукрова пудра",
                "measurement_unit": "г",
                "amount": 100.0
            },
            {
                "product_name": "Вершки 33%",
                "measurement_unit": "мл",
                "amount": 100.0
            },
            {
                "product_name": "Цукати",
                "measurement_unit": "г",
                "amount": 100.0
            },
            {
                "product_name": "Ванільний цукор",
                "measurement_unit": "г",
                "amount": 10.0
            }
        ]
    },
    {
        "recipe_id": 3,
        "category_id": 4,
        "dessert_name": "Шоколадна Паска",
        "description": "Сучасна версія традиційної паски з насиченим смаком шоколаду.",
        "photo_url": "img/paska_choc.jpg",
        "base_diameter": 14,
        "instructions": "1. Розчиніть какао в теплому молоці та додайте в основне здобне тісто.\n2. Перед вистоюванням вмішайте всередину шоколадні краплі.\n3. Випікайте до готовності.\n4. Повністю охолодіть і полийте розтопленою шоколадною глазур'ю.",
        "category_name": "Великдень",
        "ingredients": [
            {
                "product_name": "Борошно пшеничне",
                "measurement_unit": "г",
                "amount": 450.0
            },
            {
                "product_name": "Какао-порошок",
                "measurement_unit": "г",
                "amount": 50.0
            },
            {
                "product_name": "Молоко",
                "measurement_unit": "мл",
                "amount": 150.0
            },
            {
                "product_name": "Дріжджі (сухі/свіжі)",
                "measurement_unit": "г",
                "amount": 20.0
            },
            {
                "product_name": "Яйця",
                "measurement_unit": "шт",
                "amount": 3.0
            },
            {
                "product_name": "Цукор",
                "measurement_unit": "г",
                "amount": 120.0
            },
            {
                "product_name": "Вершкове масло",
                "measurement_unit": "г",
                "amount": 100.0
            },
            {
                "product_name": "Шоколад чорний",
                "measurement_unit": "г",
                "amount": 150.0
            }
        ]
    },
    {
        "recipe_id": 4,
        "category_id": 4,
        "dessert_name": "Панеттоне",
        "description": "Італійська святкова випічка з великою кількістю цукатів.",
        "photo_url": "img/panettone.jpg",
        "base_diameter": 16,
        "instructions": "1. Зробіть опару і залиште для тривалого бродіння (мінімум 12 годин).\n2. Додайте велику кількість вершкового масла та жовтків, вимішуйте до \"глютенового вікна\".\n3. Вмішайте цукати.\n4. Після випікання обов'язково охолоджуйте догори ногами на шпажках.",
        "category_name": "Великдень",
        "ingredients": [
            {
                "product_name": "Борошно пшеничне",
                "measurement_unit": "г",
                "amount": 500.0
            },
            {
                "product_name": "Жовтки яєчні",
                "measurement_unit": "шт",
                "amount": 6.0
            },
            {
                "product_name": "Цукор",
                "measurement_unit": "г",
                "amount": 150.0
            },
            {
                "product_name": "Вершкове масло",
                "measurement_unit": "г",
                "amount": 150.0
            },
            {
                "product_name": "Вода",
                "measurement_unit": "мл",
                "amount": 150.0
            },
            {
                "product_name": "Дріжджі (сухі/свіжі)",
                "measurement_unit": "г",
                "amount": 15.0
            },
            {
                "product_name": "Цукати",
                "measurement_unit": "г",
                "amount": 200.0
            }
        ]
    },
    {
        "recipe_id": 5,
        "category_id": 4,
        "dessert_name": "Великодні Зайчики",
        "description": "Медове печиво у формі зайчиків для дітей.",
        "photo_url": "img/bunnies.jpg",
        "base_diameter": 10,
        "instructions": "1. Нагрійте мед з маслом та спеціями.\n2. Замісіть еластичне медове тісто з содою та борошном.\n3. Розкачайте тісто та виріжте фігурки зайчиків.\n4. Випікайте 8-10 хвилин і розпишіть білковою глазур'ю.",
        "category_name": "Великдень",
        "ingredients": [
            {
                "product_name": "Борошно пшеничне",
                "measurement_unit": "г",
                "amount": 350.0
            },
            {
                "product_name": "Мед натуральний",
                "measurement_unit": "г",
                "amount": 100.0
            },
            {
                "product_name": "Цукор",
                "measurement_unit": "г",
                "amount": 100.0
            },
            {
                "product_name": "Вершкове масло",
                "measurement_unit": "г",
                "amount": 80.0
            },
            {
                "product_name": "Яйця",
                "measurement_unit": "шт",
                "amount": 1.0
            },
            {
                "product_name": "Розпушувач / сода",
                "measurement_unit": "г",
                "amount": 5.0
            }
        ]
    },
    {
        "recipe_id": 6,
        "category_id": 4,
        "dessert_name": "Лимонний Великодній Кекс",
        "description": "Легкий кекс з цедрою та лимонним курдом.",
        "photo_url": "img/lemon_cake.jpg",
        "base_diameter": 20,
        "instructions": "1. Збийте м'яке масло з цукром та натертою цедрою до побіління.\n2. По одному введіть яйця та лимонний сік.\n3. Вмішайте борошно з розпушувачем.\n4. Випікайте 45 хвилин при 170°C.",
        "category_name": "Великдень",
        "ingredients": [
            {
                "product_name": "Борошно пшеничне",
                "measurement_unit": "г",
                "amount": 200.0
            },
            {
                "product_name": "Вершкове масло",
                "measurement_unit": "г",
                "amount": 150.0
            },
            {
                "product_name": "Цукор",
                "measurement_unit": "г",
                "amount": 150.0
            },
            {
                "product_name": "Яйця",
                "measurement_unit": "шт",
                "amount": 3.0
            },
            {
                "product_name": "Лимон (сік/цедра)",
                "measurement_unit": "шт",
                "amount": 2.0
            },
            {
                "product_name": "Розпушувач / сода",
                "measurement_unit": "г",
                "amount": 5.0
            }
        ]
    },
    {
        "recipe_id": 7,
        "category_id": 4,
        "dessert_name": "Сирник \"Сльози Ангела\"",
        "description": "Класичний сирник з ніжною меренгою зверху.",
        "photo_url": "img/angel_tears.jpg",
        "base_diameter": 22,
        "instructions": "1. Замісіть пісочне тісто та викладіть його як основу.\n2. Збийте сирну масу з жовтками та сметаною, вилийте на основу і запікайте.\n3. За 10-15 хвилин до кінця випікання викладіть зверху збиті з пудрою білки.\n4. Охолоджуйте в духовці, щоб з'явилися \"сльозинки\" (крапельки карамелі).",
        "category_name": "Великдень",
        "ingredients": [
            {
                "product_name": "Борошно пшеничне",
                "measurement_unit": "г",
                "amount": 150.0
            },
            {
                "product_name": "Вершкове масло",
                "measurement_unit": "г",
                "amount": 80.0
            },
            {
                "product_name": "Жовтки яєчні",
                "measurement_unit": "шт",
                "amount": 1.0
            },
            {
                "product_name": "Цукор",
                "measurement_unit": "г",
                "amount": 120.0
            },
            {
                "product_name": "Кисломолочний сир",
                "measurement_unit": "г",
                "amount": 500.0
            },
            {
                "product_name": "Жовтки яєчні",
                "measurement_unit": "шт",
                "amount": 3.0
            },
            {
                "product_name": "Сметана",
                "measurement_unit": "г",
                "amount": 100.0
            },
            {
                "product_name": "Білки яєчні",
                "measurement_unit": "шт",
                "amount": 4.0
            },
            {
                "product_name": "Цукрова пудра",
                "measurement_unit": "г",
                "amount": 100.0
            }
        ]
    },
    {
        "recipe_id": 8,
        "category_id": 4,
        "dessert_name": "Маковий рулет святковий",
        "description": "Традиційний рулет з великою кількістю макової начинки.",
        "photo_url": "img/poppy_roll.jpg",
        "base_diameter": 25,
        "instructions": "1. Запарьте мак окропом, злийте воду та перетріть його з цукром і білком.\n2. Розкачайте тонкий пласт дріжджового тіста.\n3. Викладіть макову начинку, відступаючи від країв, і щільно скрутіть рулет.\n4. Випікайте при 180°C близько 35-40 хвилин.",
        "category_name": "Великдень",
        "ingredients": [
            {
                "product_name": "Борошно пшеничне",
                "measurement_unit": "г",
                "amount": 350.0
            },
            {
                "product_name": "Молоко",
                "measurement_unit": "мл",
                "amount": 200.0
            },
            {
                "product_name": "Дріжджі (сухі/свіжі)",
                "measurement_unit": "г",
                "amount": 15.0
            },
            {
                "product_name": "Яйця",
                "measurement_unit": "шт",
                "amount": 1.0
            },
            {
                "product_name": "Цукор",
                "measurement_unit": "г",
                "amount": 120.0
            },
            {
                "product_name": "Вершкове масло",
                "measurement_unit": "г",
                "amount": 50.0
            },
            {
                "product_name": "Мак",
                "measurement_unit": "г",
                "amount": 200.0
            },
            {
                "product_name": "Білки яєчні",
                "measurement_unit": "шт",
                "amount": 1.0
            }
        ]
    },
    {
        "recipe_id": 9,
        "category_id": 4,
        "dessert_name": "Морквяний торт з горіхами",
        "description": "Пряний десерт, який ідеально підходить до весняного свята.",
        "photo_url": "img/carrot_cake.jpg",
        "base_diameter": 20,
        "instructions": "1. Натріть моркву на дуже дрібній тертці.\n2. Змішайте збиті з цукром яйця, олію, борошно, горіхи та корицю.\n3. Випікайте коржі при 180°C.\n4. Перемажте охолоджені коржі кремом із збитого маскарпоне з пудрою.",
        "category_name": "Великдень",
        "ingredients": [
            {
                "product_name": "Борошно пшеничне",
                "measurement_unit": "г",
                "amount": 200.0
            },
            {
                "product_name": "Морква",
                "measurement_unit": "г",
                "amount": 200.0
            },
            {
                "product_name": "Яйця",
                "measurement_unit": "шт",
                "amount": 3.0
            },
            {
                "product_name": "Цукор",
                "measurement_unit": "г",
                "amount": 150.0
            },
            {
                "product_name": "Олія рослинна",
                "measurement_unit": "мл",
                "amount": 100.0
            },
            {
                "product_name": "Горіхи (волоські/мигдаль)",
                "measurement_unit": "г",
                "amount": 100.0
            },
            {
                "product_name": "Маскарпоне / крем-сир",
                "measurement_unit": "г",
                "amount": 300.0
            },
            {
                "product_name": "Вершкове масло",
                "measurement_unit": "г",
                "amount": 100.0
            },
            {
                "product_name": "Цукрова пудра",
                "measurement_unit": "г",
                "amount": 80.0
            }
        ]
    },
    {
        "recipe_id": 10,
        "category_id": 4,
        "dessert_name": "Шоколадні \"Гнізда\"",
        "description": "Десерт без випічки з пластівців та шоколаду.",
        "photo_url": "img/nests.jpg",
        "base_diameter": 8,
        "instructions": "1. Розтопіть темний шоколад на водяній бані разом з маслом.\n2. Обережно вмішайте кукурудзяні пластівці, щоб вони повністю покрилися шоколадом.\n3. Сформуйте невеликі гнізда на пергаменті.\n4. Охолодіть і покладіть всередину шоколадні яйця або драже.",
        "category_name": "Великдень",
        "ingredients": [
            {
                "product_name": "Шоколад чорний",
                "measurement_unit": "г",
                "amount": 150.0
            },
            {
                "product_name": "Вершкове масло",
                "measurement_unit": "г",
                "amount": 30.0
            },
            {
                "product_name": "Вівсяні пластівці/борошно",
                "measurement_unit": "г",
                "amount": 100.0
            }
        ]
    },
    {
        "recipe_id": 11,
        "category_id": 1,
        "dessert_name": "Тірамісу Класичне",
        "description": "Легендарний італійський десерт на основі кави.",
        "photo_url": "img/tiramisu.jpg",
        "base_diameter": 20,
        "instructions": "1. Заваріть міцний еспресо та дайте йому охолонути.\n2. Збийте маскарпоне з жовтками та цукром до густого крему.\n3. Швидко занурюйте печиво савоярді в каву та викладайте у форму шарами, чергуючи з кремом.\n4. Перед подачею посипте какао-порошком.",
        "category_name": "Торти",
        "ingredients": [
            {
                "product_name": "Печиво Савоярді",
                "measurement_unit": "шт",
                "amount": 20.0
            },
            {
                "product_name": "Маскарпоне / крем-сир",
                "measurement_unit": "г",
                "amount": 250.0
            },
            {
                "product_name": "Яйця",
                "measurement_unit": "шт",
                "amount": 3.0
            },
            {
                "product_name": "Цукор",
                "measurement_unit": "г",
                "amount": 100.0
            },
            {
                "product_name": "Кава (еспресо)",
                "measurement_unit": "мл",
                "amount": 250.0
            }
        ]
    },
    {
        "recipe_id": 12,
        "category_id": 1,
        "dessert_name": "Наполеон домашній",
        "description": "Багатошаровий торт з ніжним заварним кремом.",
        "photo_url": "img/napoleon.jpg",
        "base_diameter": 24,
        "instructions": "1. Посічіть холодне масло з борошном, додайте крижану воду і замісіть тісто. Охолодіть.\n2. Розкачайте і випечіть 10-12 дуже тонких коржів при 200°C.\n3. Зваріть заварний крем на молоці та жовтках.\n4. Перемажте коржі гарячим кремом і залиште торт настоюватися мінімум 12 годин.",
        "category_name": "Торти",
        "ingredients": [
            {
                "product_name": "Борошно пшеничне",
                "measurement_unit": "г",
                "amount": 400.0
            },
            {
                "product_name": "Вершкове масло",
                "measurement_unit": "г",
                "amount": 300.0
            },
            {
                "product_name": "Вода",
                "measurement_unit": "мл",
                "amount": 100.0
            },
            {
                "product_name": "Оцет",
                "measurement_unit": "мл",
                "amount": 15.0
            },
            {
                "product_name": "Молоко",
                "measurement_unit": "мл",
                "amount": 500.0
            },
            {
                "product_name": "Жовтки яєчні",
                "measurement_unit": "шт",
                "amount": 4.0
            },
            {
                "product_name": "Цукор",
                "measurement_unit": "г",
                "amount": 150.0
            },
            {
                "product_name": "Крохмаль кукурудзяний",
                "measurement_unit": "г",
                "amount": 40.0
            }
        ]
    },
    {
        "recipe_id": 13,
        "category_id": 1,
        "dessert_name": "Медовик зі сметаною",
        "description": "Ароматні медові коржі та кислинка сметанного крему.",
        "photo_url": "img/medovik.jpg",
        "base_diameter": 22,
        "instructions": "1. Розтопіть мед, масло і цукор на водяній бані. Додайте соду (маса має спінитися).\n2. Вмішайте яйця і борошно, замісіть тісто.\n3. Розкачайте тонкі коржі і випікайте по 3-4 хвилини.\n4. Перемажте коржі кремом із жирної сметани, збитої з пудрою.",
        "category_name": "Торти",
        "ingredients": [
            {
                "product_name": "Борошно пшеничне",
                "measurement_unit": "г",
                "amount": 400.0
            },
            {
                "product_name": "Мед натуральний",
                "measurement_unit": "г",
                "amount": 60.0
            },
            {
                "product_name": "Цукор",
                "measurement_unit": "г",
                "amount": 100.0
            },
            {
                "product_name": "Вершкове масло",
                "measurement_unit": "г",
                "amount": 50.0
            },
            {
                "product_name": "Яйця",
                "measurement_unit": "шт",
                "amount": 2.0
            },
            {
                "product_name": "Розпушувач / сода",
                "measurement_unit": "г",
                "amount": 5.0
            },
            {
                "product_name": "Сметана",
                "measurement_unit": "г",
                "amount": 600.0
            },
            {
                "product_name": "Цукрова пудра",
                "measurement_unit": "г",
                "amount": 150.0
            }
        ]
    },
    {
        "recipe_id": 14,
        "category_id": 1,
        "dessert_name": "Празький торт",
        "description": "Шоколадний торт з насиченим масляним кремом.",
        "photo_url": "img/prague.jpg",
        "base_diameter": 20,
        "instructions": "1. Збийте яйця з цукром, обережно вмішайте борошно, какао та розтоплене масло. Випечіть бісквіт.\n2. Для крему заваріть жовток з водою і згущеним молоком, охолодіть і збийте з маслом та какао.\n3. Розріжте бісквіт, промажте кремом.\n4. Обмажте торт абрикосовим джемом і залийте шоколадною глазур'ю.",
        "category_name": "Торти",
        "ingredients": [
            {
                "product_name": "Яйця",
                "measurement_unit": "шт",
                "amount": 6.0
            },
            {
                "product_name": "Цукор",
                "measurement_unit": "г",
                "amount": 150.0
            },
            {
                "product_name": "Борошно пшеничне",
                "measurement_unit": "г",
                "amount": 115.0
            },
            {
                "product_name": "Какао-порошок",
                "measurement_unit": "г",
                "amount": 35.0
            },
            {
                "product_name": "Вершкове масло",
                "measurement_unit": "г",
                "amount": 240.0
            },
            {
                "product_name": "Згущене молоко",
                "measurement_unit": "г",
                "amount": 120.0
            },
            {
                "product_name": "Жовтки яєчні",
                "measurement_unit": "шт",
                "amount": 1.0
            },
            {
                "product_name": "Вода",
                "measurement_unit": "мл",
                "amount": 20.0
            },
            {
                "product_name": "Джем / Варення",
                "measurement_unit": "г",
                "amount": 50.0
            }
        ]
    },
    {
        "recipe_id": 15,
        "category_id": 1,
        "dessert_name": "Чізкейк Нью-Йорк",
        "description": "Класичний запечений чізкейк з вершкового сиру.",
        "photo_url": "img/ny_cheesecake.jpg",
        "base_diameter": 22,
        "instructions": "1. Подрібніть пісочне печиво в крихту, змішайте з розтопленим маслом і утрамбуйте на дно форми.\n2. Крем-сир перемішайте (не збивайте!) з цукром, яйцями та вершками.\n3. Вилийте начинку на основу.\n4. Випікайте на водяній бані при 130°C близько 1.5 години. Охолоджуйте в духовці.",
        "category_name": "Торти",
        "ingredients": [
            {
                "product_name": "Печиво пісочне",
                "measurement_unit": "г",
                "amount": 150.0
            },
            {
                "product_name": "Вершкове масло",
                "measurement_unit": "г",
                "amount": 70.0
            },
            {
                "product_name": "Маскарпоне / крем-сир",
                "measurement_unit": "г",
                "amount": 600.0
            },
            {
                "product_name": "Яйця",
                "measurement_unit": "шт",
                "amount": 3.0
            },
            {
                "product_name": "Цукор",
                "measurement_unit": "г",
                "amount": 150.0
            },
            {
                "product_name": "Вершки 33%",
                "measurement_unit": "мл",
                "amount": 150.0
            },
            {
                "product_name": "Лимон (сік/цедра)",
                "measurement_unit": "шт",
                "amount": 1.0
            }
        ]
    },
    {
        "recipe_id": 16,
        "category_id": 1,
        "dessert_name": "Червоний оксамит",
        "description": "Яскраво-червоні коржі з легким присмаком какао.",
        "photo_url": "img/red_velvet.jpg",
        "base_diameter": 18,
        "instructions": "1. Змішайте кефір, олію, яйця та харчовий червоний барвник.\n2. Додайте сухі інгредієнти: борошно, трохи какао, цукор і соду.\n3. Випечіть коржі при 170°C.\n4. Перемажте торт стабільним кремом на основі крем-сиру та вершкового масла.",
        "category_name": "Торти",
        "ingredients": [
            {
                "product_name": "Борошно пшеничне",
                "measurement_unit": "г",
                "amount": 250.0
            },
            {
                "product_name": "Какао-порошок",
                "measurement_unit": "г",
                "amount": 15.0
            },
            {
                "product_name": "Вершкове масло",
                "measurement_unit": "г",
                "amount": 200.0
            },
            {
                "product_name": "Цукор",
                "measurement_unit": "г",
                "amount": 200.0
            },
            {
                "product_name": "Яйця",
                "measurement_unit": "шт",
                "amount": 2.0
            },
            {
                "product_name": "Олія рослинна",
                "measurement_unit": "мл",
                "amount": 150.0
            },
            {
                "product_name": "Кефір / Йогурт",
                "measurement_unit": "мл",
                "amount": 200.0
            },
            {
                "product_name": "Маскарпоне / крем-сир",
                "measurement_unit": "г",
                "amount": 400.0
            },
            {
                "product_name": "Цукрова пудра",
                "measurement_unit": "г",
                "amount": 80.0
            }
        ]
    },
    {
        "recipe_id": 17,
        "category_id": 1,
        "dessert_name": "Три шоколади",
        "description": "Мусовий торт з трьох видів шоколаду.",
        "photo_url": "img/three_choc.jpg",
        "base_diameter": 18,
        "instructions": "1. Спечіть тонкий шоколадний бісквіт для основи.\n2. Зробіть заварну базу на жовтках, розділіть на три частини і додайте в кожну різний шоколад та желатин.\n3. Вмішайте збиті вершки в кожен мус.\n4. Заливайте муси у кільце почергово, чекаючи застигання кожного шару в морозилці.",
        "category_name": "Торти",
        "ingredients": [
            {
                "product_name": "Яйця",
                "measurement_unit": "шт",
                "amount": 2.0
            },
            {
                "product_name": "Цукор",
                "measurement_unit": "г",
                "amount": 50.0
            },
            {
                "product_name": "Борошно пшеничне",
                "measurement_unit": "г",
                "amount": 30.0
            },
            {
                "product_name": "Какао-порошок",
                "measurement_unit": "г",
                "amount": 10.0
            },
            {
                "product_name": "Шоколад чорний",
                "measurement_unit": "г",
                "amount": 80.0
            },
            {
                "product_name": "Желатин / Агар-агар",
                "measurement_unit": "г",
                "amount": 15.0
            },
            {
                "product_name": "Жовтки яєчні",
                "measurement_unit": "шт",
                "amount": 3.0
            },
            {
                "product_name": "Молоко",
                "measurement_unit": "мл",
                "amount": 150.0
            },
            {
                "product_name": "Вершки 33%",
                "measurement_unit": "мл",
                "amount": 450.0
            },
            {
                "product_name": "Шоколад білий",
                "measurement_unit": "г",
                "amount": 80.0
            }
        ]
    },
    {
        "recipe_id": 18,
        "category_id": 1,
        "dessert_name": "Естерхазі",
        "description": "Мигдально-фундучний торт без борошна.",
        "photo_url": "img/esterhazy.jpg",
        "base_diameter": 20,
        "instructions": "1. Збийте білки з цукром до міцних піків, обережно вмішайте мелені горіхи.\n2. Намалюйте кола на пергаменті та випечіть 5-6 горіхових коржів.\n3. Зваріть заварний крем і збийте його з вершковим маслом.\n4. Перемажте коржі, а зверху намалюйте фірмову шоколадну павутинку.",
        "category_name": "Торти",
        "ingredients": [
            {
                "product_name": "Горіхи (волоські/мигдаль)",
                "measurement_unit": "г",
                "amount": 250.0
            },
            {
                "product_name": "Білки яєчні",
                "measurement_unit": "шт",
                "amount": 8.0
            },
            {
                "product_name": "Цукор",
                "measurement_unit": "г",
                "amount": 300.0
            },
            {
                "product_name": "Молоко",
                "measurement_unit": "мл",
                "amount": 200.0
            },
            {
                "product_name": "Жовтки яєчні",
                "measurement_unit": "шт",
                "amount": 4.0
            },
            {
                "product_name": "Борошно пшеничне",
                "measurement_unit": "г",
                "amount": 30.0
            },
            {
                "product_name": "Вершкове масло",
                "measurement_unit": "г",
                "amount": 200.0
            }
        ]
    },
    {
        "recipe_id": 19,
        "category_id": 1,
        "dessert_name": "Торт \"Захер\"",
        "description": "Австрійський шоколадний торт з абрикосовим конфітюром.",
        "photo_url": "img/sacher.jpg",
        "base_diameter": 20,
        "instructions": "1. Збийте масло з шоколадом, введіть жовтки. Окремо збийте білки з цукром.\n2. З'єднайте маси з борошном і випечіть щільний шоколадний бісквіт.\n3. Розріжте бісквіт і рясно змажте підігрітим абрикосовим джемом (всередині і зовні).\n4. Покрийте торт глазур'ю з чорного шоколаду та вершків.",
        "category_name": "Торти",
        "ingredients": [
            {
                "product_name": "Шоколад чорний",
                "measurement_unit": "г",
                "amount": 280.0
            },
            {
                "product_name": "Вершкове масло",
                "measurement_unit": "г",
                "amount": 130.0
            },
            {
                "product_name": "Яйця",
                "measurement_unit": "шт",
                "amount": 6.0
            },
            {
                "product_name": "Цукор",
                "measurement_unit": "г",
                "amount": 100.0
            },
            {
                "product_name": "Цукрова пудра",
                "measurement_unit": "г",
                "amount": 50.0
            },
            {
                "product_name": "Борошно пшеничне",
                "measurement_unit": "г",
                "amount": 130.0
            },
            {
                "product_name": "Джем / Варення",
                "measurement_unit": "г",
                "amount": 200.0
            },
            {
                "product_name": "Вершки 33%",
                "measurement_unit": "мл",
                "amount": 100.0
            }
        ]
    },
    {
        "recipe_id": 20,
        "category_id": 1,
        "dessert_name": "Меренговий рулет з ягодами",
        "description": "Повітряний десерт, що тане у роті.",
        "photo_url": "img/meringue_roll.jpg",
        "base_diameter": 25,
        "instructions": "1. Збийте білки з пудрою до стійких піків, додайте лимонний сік та крохмаль.\n2. Розподіліть масу по пергаменту і випікайте при 150°C близько 20-25 хвилин до скоринки.\n3. Переверніть і охолодіть.\n4. Змажте кремом (маскарпоне + вершки), викладіть ягоди і обережно згорніть у рулет.",
        "category_name": "Торти",
        "ingredients": [
            {
                "product_name": "Білки яєчні",
                "measurement_unit": "шт",
                "amount": 6.0
            },
            {
                "product_name": "Цукрова пудра",
                "measurement_unit": "г",
                "amount": 280.0
            },
            {
                "product_name": "Крохмаль кукурудзяний",
                "measurement_unit": "г",
                "amount": 20.0
            },
            {
                "product_name": "Лимон (сік/цедра)",
                "measurement_unit": "шт",
                "amount": 1.0
            },
            {
                "product_name": "Вершки 33%",
                "measurement_unit": "мл",
                "amount": 200.0
            },
            {
                "product_name": "Маскарпоне / крем-сир",
                "measurement_unit": "г",
                "amount": 100.0
            },
            {
                "product_name": "Свіжі ягоди / фрукти",
                "measurement_unit": "г",
                "amount": 200.0
            }
        ]
    },
    {
        "recipe_id": 21,
        "category_id": 1,
        "dessert_name": "Пташине молоко",
        "description": "Ніжне суфле на агар-агарі в шоколаді.",
        "photo_url": "img/bird_milk.jpg",
        "base_diameter": 20,
        "instructions": "1. Випечіть тонкий і щільний бісквіт для основи.\n2. Зваріть сироп з водою, цукром та агар-агаром до 110°C.\n3. Збийте білки і тонкою цівкою влийте гарячий сироп. Вмішайте збите масло зі згущеним молоком.\n4. Вилийте суфле на бісквіт, охолодіть і залийте шоколадною глазур'ю.",
        "category_name": "Торти",
        "ingredients": [
            {
                "product_name": "Яйця",
                "measurement_unit": "шт",
                "amount": 2.0
            },
            {
                "product_name": "Борошно пшеничне",
                "measurement_unit": "г",
                "amount": 50.0
            },
            {
                "product_name": "Цукор",
                "measurement_unit": "г",
                "amount": 350.0
            },
            {
                "product_name": "Желатин / Агар-агар",
                "measurement_unit": "г",
                "amount": 10.0
            },
            {
                "product_name": "Вода",
                "measurement_unit": "мл",
                "amount": 140.0
            },
            {
                "product_name": "Білки яєчні",
                "measurement_unit": "шт",
                "amount": 2.0
            },
            {
                "product_name": "Вершкове масло",
                "measurement_unit": "г",
                "amount": 100.0
            },
            {
                "product_name": "Згущене молоко",
                "measurement_unit": "г",
                "amount": 50.0
            },
            {
                "product_name": "Шоколад чорний",
                "measurement_unit": "г",
                "amount": 100.0
            }
        ]
    },
    {
        "recipe_id": 22,
        "category_id": 1,
        "dessert_name": "Торт \"Павлова\"",
        "description": "Легка меренга з хрусткою скоринкою та м'якою серединою.",
        "photo_url": "img/pavlova.jpg",
        "base_diameter": 15,
        "instructions": "1. Збийте білки з цукром до глянцю, додайте оцет та кукурудзяний крохмаль.\n2. Сформуйте на пергаменті гніздо з високими бортами.\n3. Сушіть у духовці при 100°C близько 1.5-2 годин.\n4. Перед самою подачею наповніть збитими вершками без цукру та великою кількістю ягід.",
        "category_name": "Торти",
        "ingredients": [
            {
                "product_name": "Білки яєчні",
                "measurement_unit": "шт",
                "amount": 4.0
            },
            {
                "product_name": "Цукор",
                "measurement_unit": "г",
                "amount": 200.0
            },
            {
                "product_name": "Лимон (сік/цедра)",
                "measurement_unit": "шт",
                "amount": 1.0
            },
            {
                "product_name": "Крохмаль кукурудзяний",
                "measurement_unit": "г",
                "amount": 15.0
            },
            {
                "product_name": "Вершки 33%",
                "measurement_unit": "мл",
                "amount": 150.0
            },
            {
                "product_name": "Свіжі ягоди / фрукти",
                "measurement_unit": "г",
                "amount": 200.0
            }
        ]
    },
    {
        "recipe_id": 23,
        "category_id": 1,
        "dessert_name": "Шварцвальдський торт",
        "description": "Шоколадний торт з вишнею та збитими вершками.",
        "photo_url": "img/black_forest.jpg",
        "base_diameter": 22,
        "instructions": "1. Спечіть класичний шоколадний бісквіт і розріжте на 3 коржі.\n2. Проваріть вишню з цукром і крохмалем для начинки. Просочіть коржі вишневим сиропом.\n3. Збийте жирні вершки з пудрою.\n4. Зберіть торт: корж, вершки, вишня. Зверху прикрасьте шоколадною стружкою.",
        "category_name": "Торти",
        "ingredients": [
            {
                "product_name": "Яйця",
                "measurement_unit": "шт",
                "amount": 5.0
            },
            {
                "product_name": "Цукор",
                "measurement_unit": "г",
                "amount": 200.0
            },
            {
                "product_name": "Борошно пшеничне",
                "measurement_unit": "г",
                "amount": 100.0
            },
            {
                "product_name": "Какао-порошок",
                "measurement_unit": "г",
                "amount": 30.0
            },
            {
                "product_name": "Вершкове масло",
                "measurement_unit": "г",
                "amount": 20.0
            },
            {
                "product_name": "Свіжі ягоди / фрукти",
                "measurement_unit": "г",
                "amount": 300.0
            },
            {
                "product_name": "Крохмаль кукурудзяний",
                "measurement_unit": "г",
                "amount": 15.0
            },
            {
                "product_name": "Вершки 33%",
                "measurement_unit": "мл",
                "amount": 500.0
            },
            {
                "product_name": "Цукрова пудра",
                "measurement_unit": "г",
                "amount": 50.0
            }
        ]
    },
    {
        "recipe_id": 24,
        "category_id": 1,
        "dessert_name": "Торт \"Рафаелло\"",
        "description": "Ніжний кокосовий торт з мигдалем.",
        "photo_url": "img/raffaello_cake.jpg",
        "base_diameter": 18,
        "instructions": "1. Випечіть пишний бісквіт з додаванням мигдального борошна.\n2. Для крему розтопіть білий шоколад у вершках, охолодіть і збийте з маскарпоне.\n3. Додайте в крем кокосову стружку та подрібнений бланшований мигдаль.\n4. Перемажте коржі та обсипте весь торт кокосом.",
        "category_name": "Торти",
        "ingredients": [
            {
                "product_name": "Яйця",
                "measurement_unit": "шт",
                "amount": 4.0
            },
            {
                "product_name": "Цукор",
                "measurement_unit": "г",
                "amount": 120.0
            },
            {
                "product_name": "Борошно пшеничне",
                "measurement_unit": "г",
                "amount": 100.0
            },
            {
                "product_name": "Мигдальне борошно",
                "measurement_unit": "г",
                "amount": 20.0
            },
            {
                "product_name": "Шоколад білий",
                "measurement_unit": "г",
                "amount": 150.0
            },
            {
                "product_name": "Маскарпоне / крем-сир",
                "measurement_unit": "г",
                "amount": 250.0
            },
            {
                "product_name": "Вершки 33%",
                "measurement_unit": "мл",
                "amount": 200.0
            },
            {
                "product_name": "Кокосова стружка",
                "measurement_unit": "г",
                "amount": 50.0
            },
            {
                "product_name": "Горіхи (волоські/мигдаль)",
                "measurement_unit": "г",
                "amount": 50.0
            }
        ]
    },
    {
        "recipe_id": 25,
        "category_id": 1,
        "dessert_name": "Торт \"Опера\"",
        "description": "Класика французького кондитерського мистецтва.",
        "photo_url": "img/opera.jpg",
        "base_diameter": 15,
        "instructions": "1. Випечіть дуже тонкі мигдальні бісквіти \"Джоконда\".\n2. Приготуйте масляно-кавовий крем на жовтках та шоколадний ганаш.\n3. Рясно просочіть кожен корж кавовим сиропом.\n4. Зберіть торт, чергуючи дуже тонкі шари бісквіта, кавового крему та ганаша.",
        "category_name": "Торти",
        "ingredients": [
            {
                "product_name": "Мигдальне борошно",
                "measurement_unit": "г",
                "amount": 100.0
            },
            {
                "product_name": "Цукрова пудра",
                "measurement_unit": "г",
                "amount": 100.0
            },
            {
                "product_name": "Яйця",
                "measurement_unit": "шт",
                "amount": 3.0
            },
            {
                "product_name": "Білки яєчні",
                "measurement_unit": "шт",
                "amount": 3.0
            },
            {
                "product_name": "Цукор",
                "measurement_unit": "г",
                "amount": 130.0
            },
            {
                "product_name": "Борошно пшеничне",
                "measurement_unit": "г",
                "amount": 30.0
            },
            {
                "product_name": "Жовтки яєчні",
                "measurement_unit": "шт",
                "amount": 3.0
            },
            {
                "product_name": "Вершкове масло",
                "measurement_unit": "г",
                "amount": 150.0
            },
            {
                "product_name": "Кава (еспресо)",
                "measurement_unit": "мл",
                "amount": 50.0
            },
            {
                "product_name": "Шоколад чорний",
                "measurement_unit": "г",
                "amount": 100.0
            },
            {
                "product_name": "Вершки 33%",
                "measurement_unit": "мл",
                "amount": 100.0
            }
        ]
    },
    {
        "recipe_id": 26,
        "category_id": 2,
        "dessert_name": "ПП Брауні",
        "description": "Шоколадний десерт на основі банана та какао без цукру.",
        "photo_url": "img/pp_brownie.jpg",
        "base_diameter": 15,
        "instructions": "1. Розімніть стиглі банани виделкою в пюре.\n2. Додайте яйця, какао, розпушувач та трохи олії. Перемішайте до однорідності.\n3. Вилийте у невелику форму.\n4. Випікайте при 180°C близько 20 хвилин. Десерт має залишитися злегка вологим всередині.",
        "category_name": "Без цукру",
        "ingredients": [
            {
                "product_name": "Банан",
                "measurement_unit": "шт",
                "amount": 2.0
            },
            {
                "product_name": "Яйця",
                "measurement_unit": "шт",
                "amount": 2.0
            },
            {
                "product_name": "Какао-порошок",
                "measurement_unit": "г",
                "amount": 45.0
            },
            {
                "product_name": "Розпушувач / сода",
                "measurement_unit": "г",
                "amount": 5.0
            },
            {
                "product_name": "Олія рослинна",
                "measurement_unit": "мл",
                "amount": 15.0
            }
        ]
    },
    {
        "recipe_id": 27,
        "category_id": 2,
        "dessert_name": "Чіа-пудинг з манго",
        "description": "Корисний сніданок або легкий десерт.",
        "photo_url": "img/chia.jpg",
        "base_diameter": 10,
        "instructions": "1. Залийте насіння чіа молоком, додайте краплю меду, добре перемішайте.\n2. Залиште в холодильнику на 2-3 години або на ніч, щоб насіння набрякло.\n3. Зробіть пюре зі свіжого манго у блендері.\n4. Викладіть у склянку шарами: чіа-пудинг і мангове пюре.",
        "category_name": "Без цукру",
        "ingredients": [
            {
                "product_name": "Чіа насіння",
                "measurement_unit": "г",
                "amount": 45.0
            },
            {
                "product_name": "Молоко",
                "measurement_unit": "мл",
                "amount": 150.0
            },
            {
                "product_name": "Мед натуральний",
                "measurement_unit": "г",
                "amount": 10.0
            },
            {
                "product_name": "Свіжі ягоди / фрукти",
                "measurement_unit": "г",
                "amount": 100.0
            }
        ]
    },
    {
        "recipe_id": 28,
        "category_id": 2,
        "dessert_name": "Вівсяне печиво з яблуком",
        "description": "Без борошна та цукру, лише користь.",
        "photo_url": "img/oat_cookie.jpg",
        "base_diameter": 10,
        "instructions": "1. Натріть солодке яблуко на тертці.\n2. Змішайте яблуко з вівсяними пластівцями, яйцем та подрібненими горіхами.\n3. Дайте масі постояти 15 хвилин, щоб пластівці розм'якшилися.\n4. Сформуйте печиво і випікайте 15 хвилин при 180°C.",
        "category_name": "Без цукру",
        "ingredients": [
            {
                "product_name": "Вівсяні пластівці/борошно",
                "measurement_unit": "г",
                "amount": 100.0
            },
            {
                "product_name": "Яблука (пюре/свіжі)",
                "measurement_unit": "г",
                "amount": 100.0
            },
            {
                "product_name": "Яйця",
                "measurement_unit": "шт",
                "amount": 1.0
            },
            {
                "product_name": "Горіхи (волоські/мигдаль)",
                "measurement_unit": "г",
                "amount": 30.0
            }
        ]
    },
    {
        "recipe_id": 29,
        "category_id": 2,
        "dessert_name": "Кокосові цукерки",
        "description": "Домашні цукерки на кшталт \"Баунті\" без цукру.",
        "photo_url": "img/coco_candies.jpg",
        "base_diameter": 5,
        "instructions": "1. Змішайте кокосову стружку з густими вершками та краплею меду до липкої маси.\n2. Сформуйте невеликі батончики і покладіть у морозилку на 30 хвилин.\n3. Розтопіть чорний шоколад (від 75%).\n4. Занурте кожен батончик у шоколад і викладіть на пергамент застигати.",
        "category_name": "Без цукру",
        "ingredients": [
            {
                "product_name": "Кокосова стружка",
                "measurement_unit": "г",
                "amount": 100.0
            },
            {
                "product_name": "Вершки 33%",
                "measurement_unit": "мл",
                "amount": 60.0
            },
            {
                "product_name": "Мед натуральний",
                "measurement_unit": "г",
                "amount": 30.0
            },
            {
                "product_name": "Шоколад чорний",
                "measurement_unit": "г",
                "amount": 100.0
            }
        ]
    },
    {
        "recipe_id": 30,
        "category_id": 2,
        "dessert_name": "Сирна запіканка з курагою",
        "description": "Класична запіканка на стевії.",
        "photo_url": "img/curd_pp.jpg",
        "base_diameter": 20,
        "instructions": "1. Перебийте сир блендером разом з яйцями, сметаною та стевією до кремового стану.\n2. Додайте кукурудзяний крохмаль і добре перемішайте.\n3. Наріжте курагу дрібними кубиками і вмішайте в масу.\n4. Випікайте у силіконовій формі 40 хвилин при 170°C.",
        "category_name": "Без цукру",
        "ingredients": [
            {
                "product_name": "Кисломолочний сир",
                "measurement_unit": "г",
                "amount": 500.0
            },
            {
                "product_name": "Яйця",
                "measurement_unit": "шт",
                "amount": 3.0
            },
            {
                "product_name": "Сметана",
                "measurement_unit": "г",
                "amount": 40.0
            },
            {
                "product_name": "Крохмаль кукурудзяний",
                "measurement_unit": "г",
                "amount": 30.0
            },
            {
                "product_name": "Стевія / цукрозамінник",
                "measurement_unit": "г",
                "amount": 10.0
            },
            {
                "product_name": "Курага",
                "measurement_unit": "г",
                "amount": 50.0
            }
        ]
    },
    {
        "recipe_id": 31,
        "category_id": 2,
        "dessert_name": "Банановий хліб з горіхами",
        "description": "Ароматний кекс без доданого цукру.",
        "photo_url": "img/banana_bread.jpg",
        "base_diameter": 18,
        "instructions": "1. Розімніть дуже стиглі (з чорними крапками) банани в пюре.\n2. Змішайте з яйцями, олією та борошном із розпушувачем.\n3. Додайте січені волоські горіхи.\n4. Випікайте у формі для кексу при 180°C близько 45-50 хвилин.",
        "category_name": "Без цукру",
        "ingredients": [
            {
                "product_name": "Банан",
                "measurement_unit": "шт",
                "amount": 3.0
            },
            {
                "product_name": "Борошно пшеничне",
                "measurement_unit": "г",
                "amount": 150.0
            },
            {
                "product_name": "Яйця",
                "measurement_unit": "шт",
                "amount": 2.0
            },
            {
                "product_name": "Олія рослинна",
                "measurement_unit": "мл",
                "amount": 50.0
            },
            {
                "product_name": "Розпушувач / сода",
                "measurement_unit": "г",
                "amount": 5.0
            },
            {
                "product_name": "Горіхи (волоські/мигдаль)",
                "measurement_unit": "г",
                "amount": 50.0
            }
        ]
    },
    {
        "recipe_id": 32,
        "category_id": 2,
        "dessert_name": "Морквяні мафіни ПП",
        "description": "Здорові мафіни з горіхами та родзинками.",
        "photo_url": "img/carrot_muffin.jpg",
        "base_diameter": 8,
        "instructions": "1. Натріть моркву на дрібній тертці.\n2. Змішайте вівсяне борошно, моркву, яйця, кефір, розпушувач та мед.\n3. Вмішайте попередньо замочені родзинки.\n4. Розкладіть по формочках для мафінів і випікайте 25 хвилин.",
        "category_name": "Без цукру",
        "ingredients": [
            {
                "product_name": "Вівсяні пластівці/борошно",
                "measurement_unit": "г",
                "amount": 100.0
            },
            {
                "product_name": "Морква",
                "measurement_unit": "г",
                "amount": 100.0
            },
            {
                "product_name": "Яйця",
                "measurement_unit": "шт",
                "amount": 2.0
            },
            {
                "product_name": "Кефір / Йогурт",
                "measurement_unit": "мл",
                "amount": 45.0
            },
            {
                "product_name": "Мед натуральний",
                "measurement_unit": "г",
                "amount": 30.0
            },
            {
                "product_name": "Розпушувач / сода",
                "measurement_unit": "г",
                "amount": 5.0
            },
            {
                "product_name": "Родзинки",
                "measurement_unit": "г",
                "amount": 30.0
            }
        ]
    },
    {
        "recipe_id": 33,
        "category_id": 2,
        "dessert_name": "Ягідний сорбет",
        "description": "Заморожений десерт з чистих ягід.",
        "photo_url": "img/sorbet.jpg",
        "base_diameter": 10,
        "instructions": "1. Візьміть сильно заморожені ягоди (полуниця, малина).\n2. Покладіть їх у потужний блендер, додайте трохи теплої води, лимонний сік та мед.\n3. Збийте до однорідної густої маси.\n4. Подавайте одразу або поставте в морозилку на 30 хвилин для більшої щільності.",
        "category_name": "Без цукру",
        "ingredients": [
            {
                "product_name": "Свіжі ягоди / фрукти",
                "measurement_unit": "г",
                "amount": 300.0
            },
            {
                "product_name": "Вода",
                "measurement_unit": "мл",
                "amount": 30.0
            },
            {
                "product_name": "Лимон (сік/цедра)",
                "measurement_unit": "шт",
                "amount": 1.0
            },
            {
                "product_name": "Мед натуральний",
                "measurement_unit": "г",
                "amount": 10.0
            }
        ]
    },
    {
        "recipe_id": 34,
        "category_id": 2,
        "dessert_name": "Авокадо-шоколадний мус",
        "description": "Кремовий десерт зі здоровими жирами.",
        "photo_url": "img/avocado_mousse.jpg",
        "base_diameter": 10,
        "instructions": "1. Почистіть стигле м'яке авокадо і видаліть кісточку.\n2. Покладіть у блендер авокадо, какао-порошок, молоко та мед.\n3. Перебийте масу до ідеально гладкого, шовковистого кремового стану.\n4. Розкладіть по креманках і охолодіть перед подачею.",
        "category_name": "Без цукру",
        "ingredients": [
            {
                "product_name": "Авокадо",
                "measurement_unit": "шт",
                "amount": 1.0
            },
            {
                "product_name": "Какао-порошок",
                "measurement_unit": "г",
                "amount": 45.0
            },
            {
                "product_name": "Мед натуральний",
                "measurement_unit": "г",
                "amount": 45.0
            },
            {
                "product_name": "Молоко",
                "measurement_unit": "мл",
                "amount": 30.0
            }
        ]
    },
    {
        "recipe_id": 35,
        "category_id": 2,
        "dessert_name": "Яблука запечені з медом",
        "description": "Найпростіший та найкорисніший десерт.",
        "photo_url": "img/baked_apples.jpg",
        "base_diameter": 12,
        "instructions": "1. Помийте яблука і обережно виріжте серцевину, не прорізаючи яблуко наскрізь.\n2. Змішайте подрібнені горіхи з родзинками.\n3. Наповніть серединку яблук цією сумішшю і полийте медом.\n4. Запікайте 20-25 хвилин при 180°C до м'якості яблук.",
        "category_name": "Без цукру",
        "ingredients": [
            {
                "product_name": "Яблука (пюре/свіжі)",
                "measurement_unit": "г",
                "amount": 400.0
            },
            {
                "product_name": "Горіхи (волоські/мигдаль)",
                "measurement_unit": "г",
                "amount": 40.0
            },
            {
                "product_name": "Родзинки",
                "measurement_unit": "г",
                "amount": 20.0
            },
            {
                "product_name": "Мед натуральний",
                "measurement_unit": "г",
                "amount": 40.0
            }
        ]
    },
    {
        "recipe_id": 36,
        "category_id": 3,
        "dessert_name": "Макаруни асорті",
        "description": "Французьке печиво на мигдальному борошні.",
        "photo_url": "img/macarons.jpg",
        "base_diameter": 5,
        "instructions": "1. Змішайте мигдальне борошно з пудрою і просійте.\n2. Збийте білки з цукром у меренгу, обережно вмішайте суху суміш (зробіть макаронаж).\n3. Відсадіть кружальця на килимок і дайте їм підсохнути 30 хвилин до утворення плівки.\n4. Випікайте при 140°C, після охолодження з'єднайте половинки ганашем.",
        "category_name": "Печиво",
        "ingredients": [
            {
                "product_name": "Мигдальне борошно",
                "measurement_unit": "г",
                "amount": 100.0
            },
            {
                "product_name": "Цукрова пудра",
                "measurement_unit": "г",
                "amount": 100.0
            },
            {
                "product_name": "Білки яєчні",
                "measurement_unit": "шт",
                "amount": 75.0
            },
            {
                "product_name": "Цукор",
                "measurement_unit": "г",
                "amount": 75.0
            },
            {
                "product_name": "Шоколад чорний",
                "measurement_unit": "г",
                "amount": 100.0
            }
        ]
    },
    {
        "recipe_id": 37,
        "category_id": 5,
        "dessert_name": "Еклери ванільні",
        "description": "Заварне тісто з ніжним кремом.",
        "photo_url": "img/eclairs.jpg",
        "base_diameter": 12,
        "instructions": "1. Доведіть воду з молоком і маслом до кипіння, всипте борошно і заваріть тісто.\n2. Поступово вмішайте яйця до отримання правильної консистенції.\n3. Відсадіть смужки тіста і випікайте без відкривання дверцят духовки.\n4. Наповніть охолоджені еклери заварним кремом і покрийте помадкою.",
        "category_name": "Тістечка та десерти",
        "ingredients": [
            {
                "product_name": "Вода",
                "measurement_unit": "мл",
                "amount": 125.0
            },
            {
                "product_name": "Молоко",
                "measurement_unit": "мл",
                "amount": 125.0
            },
            {
                "product_name": "Вершкове масло",
                "measurement_unit": "г",
                "amount": 100.0
            },
            {
                "product_name": "Борошно пшеничне",
                "measurement_unit": "г",
                "amount": 150.0
            },
            {
                "product_name": "Яйця",
                "measurement_unit": "шт",
                "amount": 5.0
            }
        ]
    },
    {
        "recipe_id": 38,
        "category_id": 3,
        "dessert_name": "Кантучіні",
        "description": "Сухе італійське печиво з цілим мигдалем.",
        "photo_url": "img/cantuccini.jpg",
        "base_diameter": 8,
        "instructions": "1. Змішайте борошно, цукор, розпушувач, яйця та цедру.\n2. Вмішайте в тісто цілий сирий мигдаль. Сформуйте довгі батони.\n3. Випечіть батони до золотистого кольору (близько 25 хвилин).\n4. Дістаньте, наріжте по діагоналі на скибки і підсушіть їх у духовці ще 10 хвилин.",
        "category_name": "Печиво",
        "ingredients": [
            {
                "product_name": "Борошно пшеничне",
                "measurement_unit": "г",
                "amount": 350.0
            },
            {
                "product_name": "Горіхи (волоські/мигдаль)",
                "measurement_unit": "г",
                "amount": 200.0
            },
            {
                "product_name": "Цукор",
                "measurement_unit": "г",
                "amount": 150.0
            },
            {
                "product_name": "Яйця",
                "measurement_unit": "шт",
                "amount": 3.0
            },
            {
                "product_name": "Розпушувач / сода",
                "measurement_unit": "г",
                "amount": 5.0
            },
            {
                "product_name": "Лимон (сік/цедра)",
                "measurement_unit": "шт",
                "amount": 1.0
            }
        ]
    },
    {
        "recipe_id": 39,
        "category_id": 5,
        "dessert_name": "Профітролі з шоколадом",
        "description": "Маленькі кульки з кремовою начинкою.",
        "photo_url": "img/profiteroles.jpg",
        "base_diameter": 4,
        "instructions": "1. Приготуйте класичне заварне тісто (як для еклерів).\n2. Відсадіть на деко маленькі кульки розміром з волоський горіх.\n3. Випікайте до золотистої скоринки і повного висихання всередині.\n4. Начиніть збитими вершками і рясно полийте шоколадним соусом.",
        "category_name": "Тістечка та десерти",
        "ingredients": [
            {
                "product_name": "Вода",
                "measurement_unit": "мл",
                "amount": 250.0
            },
            {
                "product_name": "Вершкове масло",
                "measurement_unit": "г",
                "amount": 100.0
            },
            {
                "product_name": "Борошно пшеничне",
                "measurement_unit": "г",
                "amount": 150.0
            },
            {
                "product_name": "Яйця",
                "measurement_unit": "шт",
                "amount": 4.0
            },
            {
                "product_name": "Вершки 33%",
                "measurement_unit": "мл",
                "amount": 200.0
            },
            {
                "product_name": "Шоколад чорний",
                "measurement_unit": "г",
                "amount": 100.0
            }
        ]
    },
    {
        "recipe_id": 40,
        "category_id": 3,
        "dessert_name": "Горішки зі згущеним молоком",
        "description": "Смак дитинства.",
        "photo_url": "img/nuts_cookie.jpg",
        "base_diameter": 4,
        "instructions": "1. Розітріть м'яке масло з цукром та жовтками. Додайте борошно і гашену соду.\n2. Замісіть м'яке пісочне тісто.\n3. Відщипуйте маленькі шматочки тіста і випікайте у спеціальній формі-горішниці.\n4. Наповніть охолоджені половинки вареним згущеним молоком і з'єднайте.",
        "category_name": "Печиво",
        "ingredients": [
            {
                "product_name": "Борошно пшеничне",
                "measurement_unit": "г",
                "amount": 450.0
            },
            {
                "product_name": "Вершкове масло",
                "measurement_unit": "г",
                "amount": 200.0
            },
            {
                "product_name": "Цукор",
                "measurement_unit": "г",
                "amount": 100.0
            },
            {
                "product_name": "Жовтки яєчні",
                "measurement_unit": "шт",
                "amount": 2.0
            },
            {
                "product_name": "Розпушувач / сода",
                "measurement_unit": "г",
                "amount": 3.0
            },
            {
                "product_name": "Оцет",
                "measurement_unit": "мл",
                "amount": 5.0
            },
            {
                "product_name": "Згущене молоко",
                "measurement_unit": "г",
                "amount": 380.0
            }
        ]
    },
    {
        "recipe_id": 41,
        "category_id": 5,
        "dessert_name": "Капкейки \"Орео\"",
        "description": "Шоколадні мафіни з кремом на основі печива.",
        "photo_url": "img/oreo_cupcakes.jpg",
        "base_diameter": 7,
        "instructions": "1. Змішайте сухі інгредієнти (какао, борошно, цукор) з вологими (яйця, молоко, масло).\n2. Додайте в тісто поламані шматочки печива Орео і випікайте у формочках.\n3. Збийте крем-сир з маслом та пудрою, додайте дрібну крихту печива.\n4. Відсадіть крем шапочкою на охолоджені капкейки.",
        "category_name": "Тістечка та десерти",
        "ingredients": [
            {
                "product_name": "Борошно пшеничне",
                "measurement_unit": "г",
                "amount": 150.0
            },
            {
                "product_name": "Какао-порошок",
                "measurement_unit": "г",
                "amount": 30.0
            },
            {
                "product_name": "Вершкове масло",
                "measurement_unit": "г",
                "amount": 220.0
            },
            {
                "product_name": "Цукор",
                "measurement_unit": "г",
                "amount": 150.0
            },
            {
                "product_name": "Яйця",
                "measurement_unit": "шт",
                "amount": 2.0
            },
            {
                "product_name": "Молоко",
                "measurement_unit": "мл",
                "amount": 120.0
            },
            {
                "product_name": "Печиво Орео",
                "measurement_unit": "шт",
                "amount": 15.0
            },
            {
                "product_name": "Маскарпоне / крем-сир",
                "measurement_unit": "г",
                "amount": 300.0
            },
            {
                "product_name": "Цукрова пудра",
                "measurement_unit": "г",
                "amount": 80.0
            }
        ]
    },
    {
        "recipe_id": 42,
        "category_id": 5,
        "dessert_name": "Фруктовий тарт",
        "description": "Пісочна основа з заварним кремом та свіжими фруктами.",
        "photo_url": "img/fruit_tart.jpg",
        "base_diameter": 22,
        "instructions": "1. Замісіть рублене пісочне тісто, розподіліть по формі для тарта і випечіть з вантажем.\n2. Зваріть класичний крем патісьєр (заварний на жовтках з молоком).\n3. Викладіть холодний крем у випечену і охолоджену основу.\n4. Прикрасьте зверху великою кількістю свіжих ягід та фруктів.",
        "category_name": "Тістечка та десерти",
        "ingredients": [
            {
                "product_name": "Борошно пшеничне",
                "measurement_unit": "г",
                "amount": 200.0
            },
            {
                "product_name": "Вершкове масло",
                "measurement_unit": "г",
                "amount": 100.0
            },
            {
                "product_name": "Цукрова пудра",
                "measurement_unit": "г",
                "amount": 50.0
            },
            {
                "product_name": "Жовтки яєчні",
                "measurement_unit": "шт",
                "amount": 4.0
            },
            {
                "product_name": "Молоко",
                "measurement_unit": "мл",
                "amount": 300.0
            },
            {
                "product_name": "Цукор",
                "measurement_unit": "г",
                "amount": 50.0
            },
            {
                "product_name": "Крохмаль кукурудзяний",
                "measurement_unit": "г",
                "amount": 30.0
            },
            {
                "product_name": "Свіжі ягоди / фрукти",
                "measurement_unit": "г",
                "amount": 200.0
            }
        ]
    },
    {
        "recipe_id": 43,
        "category_id": 3,
        "dessert_name": "Шоколадне печиво з тріщинками",
        "description": "Красиве та дуже смачне печиво.",
        "photo_url": "img/cracked_cookies.jpg",
        "base_diameter": 8,
        "instructions": "1. Розтопіть шоколад з маслом. Збийте яйця з цукром.\n2. З'єднайте маси, додайте борошно з какао і розпушувачем. Охолодіть тісто в холодильнику.\n3. Скатайте кульки і дуже щедро обваляйте їх у цукровій пудрі.\n4. Випікайте 10-12 хвилин при 180°C. Печиво розтріскається і стане красивим.",
        "category_name": "Печиво",
        "ingredients": [
            {
                "product_name": "Шоколад чорний",
                "measurement_unit": "г",
                "amount": 200.0
            },
            {
                "product_name": "Вершкове масло",
                "measurement_unit": "г",
                "amount": 50.0
            },
            {
                "product_name": "Яйця",
                "measurement_unit": "шт",
                "amount": 2.0
            },
            {
                "product_name": "Цукор",
                "measurement_unit": "г",
                "amount": 100.0
            },
            {
                "product_name": "Борошно пшеничне",
                "measurement_unit": "г",
                "amount": 150.0
            },
            {
                "product_name": "Какао-порошок",
                "measurement_unit": "г",
                "amount": 20.0
            },
            {
                "product_name": "Розпушувач / сода",
                "measurement_unit": "г",
                "amount": 5.0
            },
            {
                "product_name": "Цукрова пудра",
                "measurement_unit": "г",
                "amount": 100.0
            }
        ]
    },
    {
        "recipe_id": 44,
        "category_id": 5,
        "dessert_name": "Трюфелі ручної роботи",
        "description": "Цукерки з якісного шоколаду та вершків.",
        "photo_url": "img/truffles.jpg",
        "base_diameter": 3,
        "instructions": "1. Нагрійте жирні вершки майже до кипіння.\n2. Вилийте гарячі вершки на подрібнений чорний шоколад. Додайте шматочок масла і перемішайте.\n3. Накрийте ганаш плівкою в контакт і охолодіть мінімум 4 години.\n4. Скатайте кульки і обваляйте їх у гіркому какао-порошку.",
        "category_name": "Тістечка та десерти",
        "ingredients": [
            {
                "product_name": "Шоколад чорний",
                "measurement_unit": "г",
                "amount": 200.0
            },
            {
                "product_name": "Вершки 33%",
                "measurement_unit": "мл",
                "amount": 100.0
            },
            {
                "product_name": "Вершкове масло",
                "measurement_unit": "г",
                "amount": 20.0
            },
            {
                "product_name": "Какао-порошок",
                "measurement_unit": "г",
                "amount": 30.0
            }
        ]
    },
    {
        "recipe_id": 45,
        "category_id": 5,
        "dessert_name": "Зефір яблучний",
        "description": "Натуральний домашній зефір на агарі.",
        "photo_url": "img/zefir.jpg",
        "base_diameter": 6,
        "instructions": "1. Запечіть яблука і перетріть у густе пюре. Збийте пюре з білком до пишності.\n2. Зваріть сироп з цукру, води та агар-агару до 110°C.\n3. Не припиняючи збивати, влийте гарячий сироп у білково-яблучну масу.\n4. Швидко відсадіть половинки зефіру і залиште стабілізуватися на 12-24 години.",
        "category_name": "Тістечка та десерти",
        "ingredients": [
            {
                "product_name": "Яблука (пюре/свіжі)",
                "measurement_unit": "г",
                "amount": 125.0
            },
            {
                "product_name": "Цукор",
                "measurement_unit": "г",
                "amount": 200.0
            },
            {
                "product_name": "Білки яєчні",
                "measurement_unit": "шт",
                "amount": 1.0
            },
            {
                "product_name": "Вода",
                "measurement_unit": "мл",
                "amount": 75.0
            },
            {
                "product_name": "Желатин / Агар-агар",
                "measurement_unit": "г",
                "amount": 5.0
            }
        ]
    },
    {
        "recipe_id": 46,
        "category_id": 5,
        "dessert_name": "Панна котта з полуницею",
        "description": "Вершкове желе з ягідним соусом.",
        "photo_url": "img/panna_cotta.jpg",
        "base_diameter": 10,
        "instructions": "1. Замочіть желатин у холодній воді.\n2. Нагрійте вершки з молоком та цукром (не кип'ятіть!). Введіть набряклий желатин.\n3. Розлийте масу по формах або келихах і поставте в холодильник до застигання.\n4. Зверху викладіть пюре зі свіжої полуниці з пудрою.",
        "category_name": "Тістечка та десерти",
        "ingredients": [
            {
                "product_name": "Вершки 33%",
                "measurement_unit": "мл",
                "amount": 300.0
            },
            {
                "product_name": "Молоко",
                "measurement_unit": "мл",
                "amount": 200.0
            },
            {
                "product_name": "Цукор",
                "measurement_unit": "г",
                "amount": 60.0
            },
            {
                "product_name": "Желатин / Агар-агар",
                "measurement_unit": "г",
                "amount": 10.0
            },
            {
                "product_name": "Вода",
                "measurement_unit": "мл",
                "amount": 50.0
            },
            {
                "product_name": "Свіжі ягоди / фрукти",
                "measurement_unit": "г",
                "amount": 200.0
            },
            {
                "product_name": "Цукрова пудра",
                "measurement_unit": "г",
                "amount": 30.0
            }
        ]
    },
    {
        "recipe_id": 47,
        "category_id": 3,
        "dessert_name": "Віденське печиво",
        "description": "Тертий пиріг у форматі печива з варенням.",
        "photo_url": "img/vienna_cookies.jpg",
        "base_diameter": 10,
        "instructions": "1. Розітріть масло з цукром та борошном до стану крихти (або замісіть тісто і заморозьте частину).\n2. Викладіть більшу частину тіста на деко і злегка притисніть.\n3. Намажте шаром густого кислого варення (смородина або слива).\n4. Зверху засипте залишками крихти і випікайте до золотистого кольору. Наріжте гарячим.",
        "category_name": "Печиво",
        "ingredients": [
            {
                "product_name": "Борошно пшеничне",
                "measurement_unit": "г",
                "amount": 450.0
            },
            {
                "product_name": "Вершкове масло",
                "measurement_unit": "г",
                "amount": 200.0
            },
            {
                "product_name": "Цукор",
                "measurement_unit": "г",
                "amount": 200.0
            },
            {
                "product_name": "Яйця",
                "measurement_unit": "шт",
                "amount": 2.0
            },
            {
                "product_name": "Розпушувач / сода",
                "measurement_unit": "г",
                "amount": 3.0
            },
            {
                "product_name": "Оцет",
                "measurement_unit": "мл",
                "amount": 5.0
            },
            {
                "product_name": "Джем / Варення",
                "measurement_unit": "г",
                "amount": 200.0
            }
        ]
    },
    {
        "recipe_id": 48,
        "category_id": 5,
        "dessert_name": "Трубочки з білковим кремом",
        "description": "Хрустке тісто та невагомий крем.",
        "photo_url": "img/cream_rolls.jpg",
        "base_diameter": 15,
        "instructions": "1. Наріжте готове листкове тісто довгими смужками.\n2. Накрутіть смужки на спеціальні металеві конуси внапух і випечіть до золотистості.\n3. Зваріть цукровий сироп і влийте його у збиті білки (італійська меренга).\n4. Начиніть охолоджені трубочки кремом за допомогою кондитерського мішка.",
        "category_name": "Тістечка та десерти",
        "ingredients": [
            {
                "product_name": "Листкове тісто",
                "measurement_unit": "г",
                "amount": 500.0
            },
            {
                "product_name": "Жовтки яєчні",
                "measurement_unit": "шт",
                "amount": 1.0
            },
            {
                "product_name": "Білки яєчні",
                "measurement_unit": "шт",
                "amount": 2.0
            },
            {
                "product_name": "Цукор",
                "measurement_unit": "г",
                "amount": 100.0
            },
            {
                "product_name": "Вода",
                "measurement_unit": "мл",
                "amount": 30.0
            }
        ]
    },
    {
        "recipe_id": 49,
        "category_id": 1,
        "dessert_name": "Вафельний торт",
        "description": "Класика з вареною згущенкою та горіхами.",
        "photo_url": "img/waffle_cake.jpg",
        "base_diameter": 24,
        "instructions": "1. Збийте м'яке вершкове масло міксером до побіління.\n2. Поступово додавайте варене згущене молоко, продовжуючи збивати крем.\n3. Перемажте готові хрусткі вафельні коржі цим кремом.\n4. Кожен шар (або через один) посипайте подрібненими горіхами. Дайте настоятись.",
        "category_name": "Торти",
        "ingredients": [
            {
                "product_name": "Вафельні коржі",
                "measurement_unit": "шт",
                "amount": 8.0
            },
            {
                "product_name": "Вершкове масло",
                "measurement_unit": "г",
                "amount": 200.0
            },
            {
                "product_name": "Згущене молоко",
                "measurement_unit": "г",
                "amount": 380.0
            },
            {
                "product_name": "Горіхи (волоські/мигдаль)",
                "measurement_unit": "г",
                "amount": 100.0
            }
        ]
    },
    {
        "recipe_id": 50,
        "category_id": 5,
        "dessert_name": "Штрудель яблучний",
        "description": "Тонке витяжне тісто з яблуками та корицею.",
        "photo_url": "img/strudel.jpg",
        "base_diameter": 30,
        "instructions": "1. Замісіть еластичне тісто з борошна, води і олії. Дайте йому відпочити.\n2. Наріжте яблука, змішайте з цукром, корицею та родзинками.\n3. Розтягніть тісто на рушнику до стану паперу, змажте маслом і викладіть начинку.\n4. Згорніть за допомогою рушника у рулет і запікайте до хрусткої скоринки.",
        "category_name": "Тістечка та десерти",
        "ingredients": [
            {
                "product_name": "Борошно пшеничне",
                "measurement_unit": "г",
                "amount": 250.0
            },
            {
                "product_name": "Вода",
                "measurement_unit": "мл",
                "amount": 100.0
            },
            {
                "product_name": "Олія рослинна",
                "measurement_unit": "мл",
                "amount": 30.0
            },
            {
                "product_name": "Яйця",
                "measurement_unit": "шт",
                "amount": 1.0
            },
            {
                "product_name": "Яблука (пюре/свіжі)",
                "measurement_unit": "г",
                "amount": 500.0
            },
            {
                "product_name": "Цукор",
                "measurement_unit": "г",
                "amount": 100.0
            },
            {
                "product_name": "Родзинки",
                "measurement_unit": "г",
                "amount": 100.0
            }
        ]
    },
    {
        "recipe_id": 51,
        "category_id": 1,
        "dessert_name": "Бісквіт Джоконда",
        "description": null,
        "photo_url": null,
        "base_diameter": 20,
        "instructions": "1. Збийте яєчні білки з дрібним цукром до стійких піків (меренга). \n2. В окремій мисці збийте мигдалеве борошно, цукрову пудру та цілі яйця до світлої і пухкої маси (близько 5-10 хв). \n3. Акуратно введіть просіяне пшеничне борошно. \n4. Обережно підмішайте збиті білки в мигдалеве тісто за допомогою силіконової лопатки (рухами знизу вгору). \n5. В самому кінці влийте розтоплене (але не гаряче) вершкове масло і ще раз обережно перемішайте. \n6. Вилийте тісто на деко, застелене пергаментом, розрівняйте тонким шаром (близько 5 мм). \n7. Випікайте при 200°C близько 10-12 хвилин до золотистого кольору.",
        "category_name": "Торти",
        "ingredients": [
            {
                "product_name": "Мигдалеве борошно",
                "measurement_unit": "г",
                "amount": 100.0
            },
            {
                "product_name": "Цукрова пудра",
                "measurement_unit": "г",
                "amount": 100.0
            },
            {
                "product_name": "Яйця (цілі)",
                "measurement_unit": "шт",
                "amount": 3.0
            },
            {
                "product_name": "Яєчні білки",
                "measurement_unit": "г",
                "amount": 100.0
            },
            {
                "product_name": "Цукор",
                "measurement_unit": "г",
                "amount": 30.0
            },
            {
                "product_name": "Борошно пшеничне",
                "measurement_unit": "г",
                "amount": 30.0
            },
            {
                "product_name": "Вершкове масло",
                "measurement_unit": "г",
                "amount": 20.0
            }
        ]
    }
];
