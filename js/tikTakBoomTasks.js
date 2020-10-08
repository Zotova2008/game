const tasks = `

    [
        {
            "question": "От куда появился Чебурашка?",
            "answer1": { "result": false, "value": "С севера" },
            "answer2": { "result": false, "value": "Из Африки" },
            "answer3": { "result": false, "value": "С Мадагаскара" },
            "answer4": { "result": true, "value": "Из тропического леса" },
            "answer5": { "result": false, "value": "Из Москвы" }
        },
        {
            "question": "Как зовут крокодила, лучшего друга Чебурашки?",
            "answer1": { "result": false, "value": "Данди" },
            "answer2": { "result": true, "value": "Гена" },
            "answer3": { "result": false, "value": "3" },
            "answer4": { "result": false, "value": "3" },
            "answer5": { "result": false, "value": "3" }
        },
        {
            "question": "Как зовут лучшего друга крокодила Гены?",
            "answer1": { "result": false, "value": "Пупс" },
            "answer2": { "result": false, "value": "Мопс" },
            "answer3": { "result": false, "value": "Чебуратор" },
            "answer4": { "result": true, "value": "Чебурашка" },
            "answer5": { "result": false, "value": "Галя" }
        },
        {
            "question": "Как зовут крокодила, лучшего друга Чебурашки?",
            "answer1": { "result": false, "value": "Данди" },
            "answer2": { "result": true, "value": "Гена" },
            "answer3": { "result": false, "value": "Чебуратор" },
            "answer4": { "result": false, "value": "Маша" },
            "answer5": { "result": false, "value": "Галя" }
        },
        {
            "question": "Где работал крокодил Гена?",
            "answer1": { "result": false, "value": "На стройке" },
            "answer2": { "result": true, "value": "В Зоопарке" },
            "answer3": { "result": false, "value": "В Фирме "Кот и Кот" },
            "answer4": { "result": false, "value": "На Аэродроме" },
            "answer5": { "result": false, "value": "В магазине" }
        },
        {
            "question": "Как звали крысу Шапокляк?",
            "answer1": { "result": false, "value": "Анфиска" },
            "answer2": { "result": false, "value": "Анька" },
            "answer3": { "result": false, "value": "Наташка" },
            "answer4": { "result": true, "value": "Лариска" },
            "answer5": { "result": false, "value": "Ириска" }
        },
        {
            "question": "Где жил Чебурашка?",
            "answer1": { "result": false, "value": "В киоске" },
            "answer2": { "result": false, "value": "В квартире" },
            "answer3": { "result": false, "value": "В магазине" },
            "answer4": { "result": true, "value": "В телефонной будке" },
            "answer5": { "result": false, "value": "На улице" }
        },
        {
            "question": "Где работал Чебурашка?",
            "answer1": { "result": false, "value": "В ветрине киоске" },
            "answer2": { "result": false, "value": "В окне квартиры" },
            "answer3": { "result": true, "value": "В ветрине магазина" },
            "answer4": { "result": false, "value": "В телефонной будке" },
            "answer5": { "result": false, "value": "На улице" }
        },
        {
            "question": "Что делал Чебурашка, когда крокодил Гена заболел?",
            "answer1": { "result": false, "value": "Ушел к себе домой" },
            "answer2": { "result": false, "value": "Ушел гулять" },
            "answer3": { "result": false, "value": "Пошел в магазин за продуктами" },
            "answer4": { "result": true, "value": "Заменил Гену в Зоопарке" },
            "answer5": { "result": false, "value": "Сделал самолет" }
        },
        {
            "question": "Когда девочка Галя заболела кто сыграл вместо неё Красную шапочку?",
            "answer1": { "result": false, "value": "Жирафа Анюта" },
            "answer2": { "result": false, "value": "Собачка Тобик" },
            "answer3": { "result": false, "value": "Чебурашка" },
            "answer4": { "result": true, "value": "Крокодил Гена" },
            "answer5": { "result": false, "value": "Старуха Шапокляк" }
        },
        {
            "question": "Назовите имя собаки, которой крокодил Гена и Чебурашка помогали найти друга.",
            "answer1": { "result": false, "value": "Вениамин" },
            "answer2": { "result": false, "value": "Шарик" },
            "answer3": { "result": false, "value": "Бобик" },
            "answer4": { "result": true, "value": "Тобик" },
            "answer5": { "result": false, "value": "Ириска" }
        },
        {
            "question": "Как звали друга, которого нашли для Тобика?",
            "answer1": { "result": false, "value": "Жирафа Анюта" },
            "answer2": { "result": false, "value": "Крыса Лариска" },
            "answer3": { "result": false, "value": "Обезьянка Мария Францевна" },
            "answer4": { "result": true, "value": "Лев Чандр" },
            "answer5": { "result": false, "value": "Двоечник Дима" }
        },
        {
            "question": "Что решили построить крокодил Гена, Чебурашка и их друзья?",
            "answer1": { "result": false, "value": "Замок из песка" },
            "answer2": { "result": false, "value": "Телефонную будку" },
            "answer3": { "result": false, "value": "Сарай" },
            "answer4": { "result": true, "value": "Дом Дружбы" },
            "answer5": { "result": false, "value": "Квартиру" }
        },
        {
            "question": "Что свалилось на голову Чебурашки при открытии дома Дружбы?",
            "answer1": { "result": false, "value": "Бревно" },
            "answer2": { "result": false, "value": "Цветочный горшок" },
            "answer3": { "result": false, "value": "Крыша" },
            "answer4": { "result": true, "value": "Кирпич" },
            "answer5": { "result": false, "value": "Кошка" }
        },
        {
            "question": "Любимая игра крокодила Гены?",
            "answer1": { "result": false, "value": "Хоккей" },
            "answer2": { "result": false, "value": "Футбол" },
            "answer3": { "result": false, "value": "Морской бой" },
            "answer4": { "result": true, "value": "Крестики-нолики" },
            "answer5": { "result": false, "value": "Он не любит играть" }
        },
        {
            "question": "Как звали кота Дяди Федора?",
            "answer1": { "result": false, "value": "Васька" },
            "answer2": { "result": false, "value": "Мурзик" },
            "answer3": { "result": false, "value": "Кот" },
            "answer4": { "result": true, "value": "Матроскин" },
            "answer5": { "result": false, "value": "Иван" }
        },
        {
            "question": "Как звали корову Матроскина?",
            "answer1": { "result": false, "value": "Муренка" },
            "answer2": { "result": false, "value": "Машка" },
            "answer3": { "result": false, "value": "Наташка" },
            "answer4": { "result": true, "value": "Мурка" },
            "answer5": { "result": false, "value": "Артистка" }
        },
        {
                        "question": "Как звали галчонка?",
                        "answer1": { "result": false, "value": "Маша" },
                        "answer2": { "result": false, "value": "Птица" },
                        "answer3": { "result": false, "value": "Галчонок" },
                        "answer4": { "result": true, "value": "Хватайка" },
                        "answer5": { "result": false, "value": "Ира" }
                    },
                    {
                        "question": "Какую награду получил почтальон Печкин за мальчика?",
                        "answer1": { "result": false, "value": "Стул" },
                        "answer2": { "result": false, "value": "Булкку" },
                        "answer3": { "result": false, "value": "Книжку" },
                        "answer4": { "result": true, "value": "Велосипед" },
                        "answer5": { "result": false, "value": "Посылку" }
                    },
                    {
                        "question": "Что нужно для счастья коту Матроскину?",
                        "answer1": { "result": false, "value": "Дерево" },
                        "answer2": { "result": false, "value": "Свинью" },
                        "answer3": { "result": false, "value": "Собаку" },
                        "answer4": { "result": true, "value": "Корову" },
                        "answer5": { "result": false, "value": "Конфет" }
                    },
                    {
                        "question": "Что нужно для счастья собаке Шарику?",
                        "answer1": { "result": false, "value": "Дерево" },
                        "answer2": { "result": false, "value": "Денег" },
                        "answer3": { "result": false, "value": "Конфет" },
                        "answer4": { "result": true, "value": "Фото-ружье" },
                        "answer5": { "result": false, "value": "Корову" }
                    },
                    {
                        "question": "Какой была любимая обувь собаки Шарика?",
                        "answer1": { "result": false, "value": "Кроссовки" },
                        "answer2": { "result": false, "value": "Ботинки" },
                        "answer3": { "result": false, "value": "Сапоги" },
                        "answer4": { "result": true, "value": "Кеды" },
                        "answer5": { "result": false, "value": "Сланцы" }
                    },
                    {
                        "question": "Как называется деревня, в которой жили герои сказки "Простоквашино?",
                        "answer1": { "result": false, "value": "Васькино" },
                        "answer2": { "result": false, "value": "Белозерск" },
                        "answer3": { "result": false, "value": "Иванкино" },
                        "answer4": { "result": true, "value": "Простоквашино" },
                        "answer5": { "result": false, "value": "Прошкино" }
                    },
                    {
                        "question": "В квартире Дяди Фёдора висела на стене картина. А какая от неё была польза? (Простоквашино)",
                        "answer1": { "result": false, "value": "Для красоты" },
                        "answer2": { "result": false, "value": "Ни какой" },
                        "answer3": { "result": false, "value": "Так захотелось маме Дяди Федора" },
                        "answer4": { "result": true, "value": "Закрывает дырку в стене" },
                        "answer5": { "result": false, "value": "Это секрет" }
                    },
                    {
                        "question": "У этого героя не было велосипеда и поэтому он был вредный? (Простоквашино)",
                        "answer1": { "result": false, "value": "Матроскин" },
                        "answer2": { "result": false, "value": "Шарик" },
                        "answer3": { "result": false, "value": "Дядя Федор" },
                        "answer4": { "result": true, "value": "Почтальон Печкин" },
                        "answer5": { "result": false, "value": "корова Мурка" }
                    },
                    {
                        "question": "Какой журнал выписал дядя Фёдор?",
                        "answer1": { "result": false, "value": "МЖ" },
                        "answer2": { "result": false, "value": "Раз в неделю" },
                        "answer3": { "result": false, "value": "Вести" },
                        "answer4": { "result": true, "value": "Мурзилка" },
                        "answer5": { "result": false, "value": "Forbes" }
                    },
                    {
                        "question": "Кто научил Матроскина разговаривать?",
                        "answer1": { "result": false, "value": "Старый хозяин" },
                        "answer2": { "result": false, "value": "Старая кошка" },
                        "answer3": { "result": false, "value": "Наташка" },
                        "answer4": { "result": true, "value": "Профессор Сёмин" },
                        "answer5": { "result": false, "value": "Кошка из соседнего подъезда" }
                    },
                    {
                        "question": "Кто вытащил Шарика из реки?",
                        "answer1": { "result": false, "value": "Матроскин" },
                        "answer2": { "result": false, "value": "Вылез сам" },
                        "answer3": { "result": false, "value": "Корова Мурка" },
                        "answer4": { "result": true, "value": "Бобер" },
                        "answer5": { "result": false, "value": "Почтальон Печкин" }
                    },
                    {
                        "question": "Что послал почтальон Печкин маме и папе дяди Фёдора для опознания?",
                        "answer1": { "result": false, "value": "Клок волос" },
                        "answer2": { "result": false, "value": "Кирпич" },
                        "answer3": { "result": false, "value": "Фото" },
                        "answer4": { "result": true, "value": "Пуговицу" },
                        "answer5": { "result": false, "value": "Кота в мешке" }
                    },
                    {
                        "question": "Какие слова научили говорить галчонка? (Простоквашино)",
                        "answer1": { "result": false, "value": "Здравствуйте" },
                        "answer2": { "result": false, "value": "Кто тут?" },
                        "answer3": { "result": false, "value": "Кто здесь?" },
                        "answer4": { "result": true, "value": "Кто там?" },
                        "answer5": { "result": false, "value": "До свидания" }
                    },
                    {
                        "question": "Какое имя дали телёнку? (Простоквашино)",
                        "answer1": { "result": false, "value": "Борис" },
                        "answer2": { "result": false, "value": "Иван Иванович" },
                        "answer3": { "result": false, "value": "Георгий" },
                        "answer4": { "result": true, "value": "Гаврюша" },
                        "answer5": { "result": false, "value": "Хрюша" }
                    }
                ]
            `;