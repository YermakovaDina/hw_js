// const a = "Переменная 'а' в script-1.js";
// console.log(a);
// const b = "Переменная 'b' в script-1.js";
// console.log(b); 

/*Confirm*/
// const shouldRenew = confirm('Вы уверены в выборе?');
// console.log(shouldRenew);

/*toFixed писать то количество символов после запятой кот. указано*/
//let salary = 1300.78945;
//salary = Number(salary.toFixed(2));
//console.log(salary);

/*Преобразование строки в число*/
// let quantity = '30';
// let value = 'Эта строка,а не число.';
// console.log(Number(quantity));
// console.log(Number(value));

/*Math*/
// const base = 2;
// const power = 3;
// const result = Math.pow(base, power);
// console.log(result);

/*Генерируем случайные числа*/
// const max = 80;
// const min = 10;
// const result = Math.round(Math.random() * (max - min) + min);
// console.log(result); /*округляя выводит или 1 или 2*/

/* Проверить тип. снчала оператор Typeof а потом переменную */
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

Напишите ф-ию для поиска логина:
- если логина нет - вывести сообщение "Пользователь [логин] не найден"
- если логина нашел - вывести сообщение "Пользователь [логин] найден"

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

console.log(findLogin(logins, 'eeee'));
console.log(findLogin(logins, 'aaaa'));
console.log(findLogin(logins, 'zzzzz'));
*/