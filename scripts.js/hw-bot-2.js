/*2.1
function checkAge(age) {
  if (age >= 18) { // Change this line
    return "You are an adult";
  }

  return "You are a minor";
}
*/

/*2.2 Проведи рефакторинг кода функции используя вместо if...else паттерн «ранний возврат»
function checkPassword(password) {
  const ADMIN_PASSWORD = "jqueryismyjam";
  
  if (password === ADMIN_PASSWORD) {
    return "Welcome!";
  } 
  return "Access denied, wrong password!";
}
*/

/*2.3 Проведи рефакторинг кода функции используя вместо if...else паттерн «ранний возврат»
function checkStorage(available, ordered) {

  if (ordered === 0) {
    return "Your order is empty!";
  } 
  if (ordered > available) {
    return "Your order is too large, not enough goods in stock!";
  } 
 return "The order is accepted, our manager will contact you";
 
}
*/

/*2.5 Доступ к элементам по индексу
const fruits = ["apple", "plum", "pear", "orange"];

const firstElement = fruits[0];
const secondElement = fruits[1];
const lastElement = fruits[fruits.length - 1];
*/

/*2.6 Переопределение значения элемента
const fruits = ["apple", "plum", "pear", "orange"];
fruits[1] = "peach";
fruits[3] = "banana";
["apple", "peach", "pear", "banana"]
*/

/*2.7 Длина масива
Объяви переменную fruitsArrayLength и присвой ей длину массива fruits 
используя свойство length.
const fruits = ["apple", "peach", "pear", "banana"];
const fruitsArrayLength = fruits.length;

/*2.8 Индекс последнего элемента
const fruits = ["apple", "peach", "pear", "banana"];
const lastElementIndex = fruits.length - 1;
const lastElement = fruits[lastElementIndex];
*/

/*2.9 Крайние элементы массива
Напиши функцию getExtremeElements(array) которая принимает один параметр array - массив
элементов произвольной длины. Функция должна возвращать массив из двух элементов - 1го
и последнего элемента параметра array.
(в функции должна быть переменная через const/let , какое то условике  и что выводит return)

function getExtremeElements(array) {
    const firstElement = array.shift();
    const lastElement = array.pop();
    const newArray = [firstElement, lastElement];
    return newArray;
}
или
function getExtremeElements(array) {
    const arr = array.splice(1, array.langth - 2);
    return array;
}
*/

/*2.10 Метод строк split()
Дополни код функции splitMessage(message, delimeter) так, чтобы она возвращала в переменной
words результат разделения строки message по разделителю delimeter - массив строк.


function splitMessage(message, delimeter) {
    let words;
    // Change code below this line
    words = message.split(delimeter);
    // Change code above this line
    return words;
}
*/
 
/*2.11
Сервису гравировки украшений нужна функция, которая бы автоматически считала цену гравировки,
в зависимости от количества слов и цены за слово.
Объявлена функция calculateEngravingPrice(message, pricePerWord).
Эта функция принимает строку, состоящую из слов разделённых только пробелами
(параметр message) и цену гравировки одного слова (параметр pricePerWord).
Напиши тело функции, чтобы она возвращала общую стоимость гравировки всех слов в строке.

function calculateEngravingPrice(message, pricePerWord) {
    return message.split(' ').length*pricePerWord;
}
*/

/*2.12
Дополни код функции makeStringFromArray(array, delimeter) так, чтобы она возвращала в
переменной string результат соединения элементов массива array c разделителем delimeter - 
строку.
function makeStringFromArray(array, delimeter) {
  let string;
    string = array.join(delimeter);
  return string;
}
*/

/*2.13
генератор slug
Напиши функцию slugify(title) которая принимает заголовок статьи, параметр title, и
возвращает slug, созданный из этой строки.
Значением параметра title будут строки, слова которых разделены только пробелами
Все символы slug должны быть в нижнем регистре
Все слова slug должна быть разделены тире
function slugify(title) {
    return title.toLowerCase().split(' ').join('-');
}

ЛУЧШЕ:

const slugify = function (title) {
return title.toLowerCase().split(' ').join('-');
}

{
  // 1) convert to lowercase
  // 2) remove dashes and pluses
  // 3) replace spaces with dashes
  // 4) remove everything but alphanumeric characters and dashes
  return value.toLowerCase().replace(/-+/g, '').replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
}; */

/*2.14
Метод slice()
Дополни код так, чтобы переменные содержали частичные копии исходного массива fruits.
firstTwoEls - массив из первых двух элементов
nonExtremeEls - массив из всех элементов кроме первого и последнего
lastThreeEls - массив из трёх последних элементов

const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];
const firstTwoEls = fruits.slice(0, 2);
const nonExtremeEls = fruits.slice(1, fruits.lanngth - 1);;
const lastThreeEls = fruits.slice(-3);
*/

/*2.15
Метод concat()
Дополни код так, чтобы в переменной allClients получился массив всех элементов массивов
oldClients и newClients.

const oldClients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
const newClients = ['Peach', 'Houston'];
const allClients = const allClients = oldClients.concat(newClients);

//Из конспекта: const firstArray = ["Mercury", "Venus", "Earth"];
const secondArray = ["Mars", "Jupiter"];
const thirdArray = ["Saturn", "Uranus", "Neptune"];
const allPlanets = firstArray.concat(secondArray, thirdArray);

console.log(firstArray); // ['Mercury', 'Venus', 'Earth'];
console.log(allPlanets); // ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune'];

можно записать как:
const firstArray = ["Mercury", "Venus", "Earth", ...secondArray]; - ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter']
const firstArray = ["Mercury", "Venus", "Earth"].concat(secondArray);*/

/*2.16
композиция массивов
Напиши функцию makeArray(firstArray, secondArray, maxLength) для создания нового массива
 со всеми элементами двух исходных firstArray и secondArray. 
 Параметр maxLength содержит максимально допустимую длину нового массива.
Если количество элементов нового массива больше maxLength, функция должна вернуть копию
 массива длиной maxLength элементов. В противном случае функция должна вернуть новый 
 массив целиком.

function makeArray(firstArray, secondArray, maxLength) {
    let result;
    if (firstArray.concat(secondArray).length > maxLength) 
    {result = firstArray.concat(secondArray).slice(0, maxLength);}
    else {result = firstArray.concat(secondArray)};
    return result;}
*/

/*2.17
Цикл for.
Дополни цикл for так, чтобы он логировал все целые числа в диапазоне от start до end включительно.

const start = 3;
const end = 7;
for (let i = start; i <= end; i += 1) { 
  console.log(i);
}
*/

/*2.18
сумма чисел (цикл for)
Напиши функцию calculateTotal(number), которая принимает целое число (параметр number) и 
возвращает сумму всех целых чисел от единицы и до этого числа. Например, если number 
равно 3, то сумма это 1 + 2 + 3, то есть 6.

function calculateTotal(number) {
    let sum = 0;
 for (let i = 0; i <= number; i += 1) { sum += i; }        
 return sum;
}

/*2.19
Итерация по массиву.
Дополни код цикла for так, чтобы он последовательно логировал все элементы массива fruits.

const fruits = ['apple', 'plum', 'pear', 'orange'];
for (let i = 0; i < fruits.length; i += 1) { // Change this line
  const fruit = fruits[i]; // Change this line
  console.log(fruit);
}
*/

/*2.20
подсчёт суммы покупки.
Напиши функцию calculateTotalPrice(order), которая принимает один параметр order - массив
 чисел, и рассчитывает общую сумму его элементов. Общая сумма элементов должна сохраняться
  в переменной total, которая возвращается, как результат работы функции (т.е. 3 это 1+2+3=6).

   function calculateTotalPrice(order) {
  for (const value/значение/ of order) {
  total += value;
  }
  return total;
}
ИЛИ - сли надо не просто посчитать суссу а что то переопределить или добавить(например такс%)
  function calculateTotalPrice(order) {
  let total = 0;
    for (let i = 0; i < order.length; i += 1) {
    total += order[i];
    }
  return total;
}
*/

/*2.21
поиск самого длинного слова.
Напиши функцию findLongestWord(string) которая принимает произвольную строку состоящую только
из слов разделённых пробелом (параметр string) и возвращает самое длинное слово в этой строке.

function findLongestWord(string) {
  // разделяю текст на элементы в массиве:
    let splitWords = string.split(' ');
  // задаю переменную:
    let longestWord = ' ';
  // прописываю условие - что перебирая элементы массива, если длина слова больше переменной,
  // то переменная вывводит это слово
    for (let i = 0; i < splitWords.length; i +=1) {
    if (splitWords[i].length > longestWord.length) {
    longestWord = splitWords[i];
    }
    }
    return longestWord;
}
*/

/*2.22
Метод push().
Дополни код функции createArrayOfNumbers(min, max) так, чтобы она возвращала массив всех
 целых чисел от значения min до max.

function createArrayOfNumbers(min, max) {
  const numbers = [];
    for (let i = min; i <= max; i++) {
    numbers.push(i);
    }
  return numbers;
}
*/

/*2.23
фильтрация массива чисел.
Напиши функцию filterArray(numbers, value), которая принимает массив чисел (параметр numbers)
 и возвращает новый массив, в котором будут только те элементы массива numbers, которые 
 больше чем значение параметра value (число).

function filterArray(numbers, value) {
    let result = [];

    for (let i = 0; i < numbers.length; i++) {
        if(numbers[i] > value) {
        result.push(numbers[i]);
        }
    }
    return result;
}
*/

/*2.24
includes()
Функция checkFruit(fruit) принимает строку с названием фрукта (параметр fruit), и проверяет 
есть ли такой фрукт в массиве fruits - true/false.

function checkFruit(fruit) {
  const fruits = ["apple", "plum", "pear", "orange"];
return fruits.includes(fruit); 
}

/*2.25
общие элементы
Общими элементами массивов называют те элементы, которые присутствуют во всех массивах.
Например, в двух массивах [1, 3, 5] и [0, 8, 5, 3] общими будут числа 3 и 5, т.к. они 
присутствуют в обоих исходных массивах. 
А числа 0, 1 и 8 присутствуют только в одном из массивов.
Напиши функцию getCommonElements(array1, array2) которая получает два массива произвольной
длины в параметры array1 и array2, и возвращает новый массив, состоящий из тех элементов,
которые присутствуют в обоих исходных массивах.

function getCommonElements(array1, array2) {
  const arr = [];
  for(let i of array1) {
  if (array2.includes(i)) {
  arr.push(i);
  }
}
return arr;
}
*/

/*2.26
Цикл for...of
Выполни рефакторинг кода функции calculateTotalPrice(order) заменив цикл for на for...of.

function calculateTotalPrice(order) {
  let total = 0;
  for (const value of order) {total += value;}
  return total;
}
// можно без return - но тогда после } пишется console.log(total);
// переписываем функцию - Репета 2.4 - создаем функциональное выражение которое можно переиспользовать, т.е. подставлять любые необходимые переменные в разных частях кода
*/
/* 
const calculateTotalPrice = function (items) {
  console.log('items внутри функции', items);
  let total = 0; // локельная переменная
  for (const item of items) {total += item;}
  return total; // возврат результата
}
console.log(calculateTotalPrice([1, 2, 3])); // 6 - внешний код, где мы вызываем эту функцию
console.log(calculateTotalPrice([5, 10, 15, 20])); // 50
console.log(calculateTotalPrice([100, 200, 300])); // 600
*/ 


/*2.27
фильтрация массива чисел 2.0
Выполни рефакторинг функции filterArray(numbers, value) заменив цикл for на for...of.
(Вызов функции filterArray([1, 2, 3, 4, 5], 3) возвращает [4, 5])

function filterArray(numbers, value) {
  const filteredNumbers = [];
  for (let number of numbers) {
   if (number > value) {
     filteredNumbers.push(number);
   }
 }
  return filteredNumbers;
}

/*2.28
Оператор %
Дополни выражения остатка от деления так, чтобы код проходил тесты.
(5 % 3 = 2 /5:3=1 т.е. 5-3=2/; - 5, разделенное на 3, равно 1, а остаток - 2)

const a = 3 % 3;
const b = 4 % 3;
const c = 11 % 4;
const d = 12 % 7;  /12 делим на 7 - это целое число 1 , т.к. 2 это уже 14, записываем 12-7=5/
const e = 8 % 3;
*/

/*
2.29
чётные числа
Напиши функцию getEvenNumbers(start, end) которая возвращает массив всех чётных чисел 
от start до end. Чётным считается число которое делится на 2 без остатка (10 % 2 === 0).

function getEvenNumbers(start, end) {
  const numbers = [];
  for (let i = start; i <= end; i++) {
  if (i % 2 === 0) {numbers.push(i)}
  }
  return numbers;
  }
*/

/*
2.30
Оператор break - полностью прекращает выполнение цикла и передаёт управление на строку
 за его телом.
Дополни код так, чтобы в переменную number записывалось первое число от start до end, 
которое делится на 5 без остатка.

const start = 6;
const end = 27;
let number;

for (let i = start; i < end; i += 1) {
  if (i % 5 === 0) {
    number = i;
    break;
  }
}
*/

/*
2.31
Оператор break vs return в функции
Если цикл находится в теле функции, то оператор break не прекращает выполнение функции, 
а только прервёт цикл. Для того чтобы прерывать выполнение сразу цикла и функции 
есть оператор return.

Выполни рефакторинг функции findNumber(start, end, divisor) так, чтобы она:
- возвращала первое число от start до end, которое делится на divisor без остатка
- не использовала оператор break
- не использовала переменную number

function findNumber(start, end, divisor) {
  let number;
  for (let i = start; i < end; i += 1) {
    if (i % divisor === 0) {
      number = i;
      return i; (здесь исправила чтобы выводилось значение i)
    }
  }
  const result = findNumber; (здесь вписала const)
  return number; (здесь вписала что нужно вывести)
}

(Вызов findNumber(8, 17, 3) возвращает 9 - т.е. от 8 до 17 выводит 1е число которое делится на 3 без остатка - это 9)
*/

/*
2.32
функция includes()
Напиши функцию includes(array, value), которая делает тоже самое, что и метод массива 
массив.includes(значение) - проверяет, есть ли в массиве array значение value, 
возвращая true если есть и false в противном случае.
!!! При выполнении этой задачи в теле функции includes() нельзя использовать метод 
массив.includes(значение).

function includes(array, value) {
for (let i of array) {
  return array.indexOf(value) !== -1 ? true : false;}
}
*/