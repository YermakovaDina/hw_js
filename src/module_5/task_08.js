class Car {
};

/* Объявление класса
Классы это синтаксический сахар (надстройка) над функциями-конструкторами - 
новый удобный способ для задания конструктора вместе с прототипом.

function User() {
  // Тело функции-конструктора
}

const mango = new User();
Объявление класса начинается с ключевого слова class, после которого идёт 
имя класса и фигурные скобки - его тело.

class User {
  // Тело класса
}

const mango = new User();
Результат вызова new User() это объект, как и в функциях-конструкторах, он 
называется экземпляр класса, потому что содержит данные и поведение, описываемые классом.

Задание
Используя ключевое слово class объяви класс Car с пустым телом.

Тесты
Объявлен класс Car с пустым телом.
Результат вызова new Car() это пустой объект. */