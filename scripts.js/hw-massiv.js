// <script src="./js/hw-massiv.js></script>
// <script src="./js/hw-bot-1.js"></script>
// <script src="./js/hw-bot-2.js"></script>
// <script src="./js/hw-bot-3.js"></script>



// const a = "Переменная 'а' в script-1.js";
// console.log(a);
// const b = "Переменная 'b' в script-1.js";
// console.log(b); 

/*
Confirm
  const shouldRenew = confirm('Вы уверены в выборе?');
  console.log(shouldRenew);
*/

/*
toFixed 
писать то количество символов после запятой кот. указано
  let salary = 1300.78945;
  salary = Number(salary.toFixed(2));
  console.log(salary);
*/

/*Преобразование строки в число
  let quantity = '30';
  let value = 'Эта строка,а не число.';
  console.log(Number(quantity));
  console.log(Number(value));
*/

/*Math
  const base = 2;
  const power = 3;
  const result = Math.pow(base, power);
  console.log(result);
*/

/*Генерируем случайные числа*/
// const max = 80;
// const min = 10;
// const result = Math.round(Math.random() * (max - min) + min);
// console.log(result); /*округляя выводит или 1 или 2*/

/* Проверить тип. 
снчала оператор Typeof а потом переменную */
// const isOnSale = false;
// console.log(typeof isOnSale);
// выведет boolem

/*шаблонная подстановка*/
//const name = 'Манго';
//const age = 5;
//const hobby = 'плавать';
//const message = `Здаравствуйте, меня зовут ${name} мне ${age} лет, мне нравится ${hobby}`;
//console.log(message);

/*спросить у пользователя имя, почту, телефон и показать фразу...
первые 3 с помощью prompt последнее template*/
// const userName = prompt('Enter your name');
// const email = prompt('Enter your email');
// const phoneNumber = prompt('Enter your phon');
// const message = `Пользователь под именем ${userName} использует ${mail} почту и ${phonNumber} телефон`;
//console.log(message);

/*определить площать круга с радиусом 10м, для приложения найти круг на карте где мы находимся и что рядом*/
// const rad = 10;
// const PI = Math.PI;
// const powRad = Math.pow {rad  2};
// const result = PI * powRa;
// console.log('result', result);

/*Логический оператор*/
//Баланс пользователя хранится в переменной balance
//Сумма покупки хранится в переменной payment


/* 
pricePerDroid - цена за штуку
orderedQuantity - сколько шт
customerCredits - баланс (кредит) покупателя

function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
  let message;
  let totalPrice = pricePerDroid * orderedQuantity;
  if (totalPrice > customerCredits) {
  message = 'Insufficient funds!';} else {
   customerCredits -= totalPrice; 
    message = `You ordered ${orderedQuantity} droids, you have ${customerCredits} credits left`;}
  return message;
} 
*/

/* переписываем функцию - Репета 2.4 - создаем функциональное выражение которое можно переиспользовать
(bot 2.32)

Напишите ф-ию для поиска логина:
- если логина нет - вывести сообщение "Пользователь [логин] не найден"
- если логина нашел - вывести сообщение "Пользователь [логин] найден"
(переменная allLogins это logins)

const logins = ['aaaa', 'ssss', 'dddd'];
const loginToFind = 'dddd';

const messege = logins.includes(loginToFind) 
? `Пользователь ${loginToFind} не найден`
: `Пользователь ${loginToFind} найден`;

console.log(message);

переписываем:
const logins = ['aaaa', 'ssss', 'dddd'];
const findLogin = function (allLogins //параметры, LoginToFind) {
  let message = `Пользователь ${loginToFind} не найден`;
  
  for (const login of allLogins) {
    if (login === loginToFind) {
    messege = `Пользователь ${loginToFind} не найден`;
    }
  }
  return message;
};

упрощаем читабельность или/или:  
const logins = ['aaaa', 'ssss', 'dddd'];
const findLogin = function (allLogins //параметры, LoginToFind) {
  for (const login of allLogins) {
    if (login === loginToFind) {
    return `Пользователь ${loginToFind} не найден`;
    }
  }
  return  `Пользователь ${loginToFind} не найден`;
};

используем тернарник:
const logins = ['aaaa', 'ssss', 'dddd'];
const findLogin = function (allLogins //параметры, LoginToFind) {
  const message = allLogins.incluedes(loginFind)
  ? `Пользователь ${loginToFind} не найден`
  : `Пользователь ${loginToFind} не найден`;

  return message;
}

выоажение возвращющее сразу результат тернарника (заменив const 
message на return):

const findLogin = function (allLogins //параметры, LoginToFind) {
  return allLogins.incluedes(loginFind)
  ? `Пользователь ${loginToFind} не найден`
  : `Пользователь ${loginToFind} не найден`;
}

console.log(findLogin(logins, 'eeee'));
console.log(findLogin(logins, 'aaaa'));
console.log(findLogin(logins, 'zzzz'));
*/

/*переписываем "найти наименьшее число" (фун-ое выражение) - бот 2.?:
(numbers - параметр, [9, 4, 6, 2, 70] - аргумент, return - возврат, for... - телофункции)

const findSmallesNumber = function (numbers) {
    let smallestNumber = numbers[0];

    for (const number of numbers) {
        if (number < smallestNumber) {
        smallestNumber = number;
        }
    }

    return smallestNumber;
}

console.log(smallestNumber([9, 4, 6, 2, 70])); //2
console.log(smallestNumber([10, 1, 15, 66, 87])); //1
console.log(smallestNumber([5, 51, 29, 37, -3])); //-3
*/

/*
Напиши функцию changeCase(string) которая что-то делает.
(заменяет регистр, бот 2.?)

const changeCase = function (string) {}
*/

/*
Псевдомассив arguments и Array.from (сделай массив из) и .../rest/ (собирает все параметры в массив, ставится всегда в конце)
(написать функцию в которой мы не знаем сколько будет пераметров - используют arguments,
можно перебирать через for of)

const fn = function () {
    console.log(arguments);

    const args = Array.from(arguments);

    console.log(args);
    }
}

СОВРЕМЕННЫЙ СИНТАКСИС:
const fn = function (...args) {
    console.log(args);
}

fn(1, 2, 3);
fn(1, 2, 3, 4, 5);
fn(1, 2, 3, 4, 5, 6, 7);


РАСПИСАТЬ какие аргументы отдельно (1ый, 2ой, 3й параметр), какие как массив (остальное в массив):
const fn = function (a, b, c, ...args) {
    console.log(`${a} ${b} ${c}`);
    console.log(args);
}

*/