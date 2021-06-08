/*3.1
Создание объекта.
Присвой переменной apartment объект описывающий квартиру со следующими характеристиками:
imgUrl - фотография, значение "https://via.placeholder.com/640x480";
descr - описание, значение "Spacious apartment in the city center";
rating - рейтинг, значение 4;
price - цена, значение 2153;
tags - метаинформация, массив ["premium", "promoted", "top"].

const apartment = {
	imgUrl: "https://via.placeholder.com/640x480",
	descr: "Spacious apartment in the city center",
    rating: 4,
    price: 2153,
    tags: ["premium", "promoted", "top"],
};
*/

/*3.2
Вложенные свойства.
const user = {
  name: "Jacques Gluke",
  tag: "jgluke",
  location: {
    country: "Jamaica",
    city: "Ocho Rios",
  },
  stats: {
    followers: 5603,
    views: 4827,
    likes: 1308,
  },
};

Дополни объект квартиры свойством owner, значением которого будет объект с информацией о владельце. Добавь ему следующие свойства:
name - имя владельца, значение "Henry";
phone - телефон, значение "982-126-1588";
email - почта, значение "henry.carter@aptmail.com".

const apartment = {
    imgUrl: 'https://via.placeholder.com/640x480',
    descr: 'Spacious apartment in the city center',
    rating: 4,
    price: 2153,
    tags: ['premium', 'promoted', 'top'],
    owner: {
      name: "Henry",
      phone: "982-126-1588",
      email: "henry.carter@aptmail.com",
    },
  };
*/

/*3.3
Доступ к свойствам через точку.
Дополни код присвоив объявленным переменным выражения обращения к соответствующим 
свойствам обьекта apartment:
aptRating - рейтинг;
aptDescr - описание;
aptPrice - цена;
aptTags - теги.

const apartment = {
  imgUrl: "https://via.placeholder.com/640x480",
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
  tags: ["premium", "promoted", "top"],
};

const aptRating = apartment.rating; //доступ к св-ву
console.log(aptRating); //выводит результат

const aptDescr = apartment.descr;
console.log(aptDescr);

const aptPrice = apartment.price;
console.log(aptPrice);

const aptTags = apartment.tags;
console.log(aptTags);
*/

/*3.4
Доступ к вложенным свойствам.
Дополни код присвоив объявленным переменным выражения обращения к соответствующим 
свойствам обьекта apartment:
ownerName - имя владельца;
ownerPhone - телефон владельца;
ownerEmail - почта владельца;
numberOfTags - количество элементов массива в свойстве tags;
firstTag - первый элемент массива в свойстве tags;
lastTag - последний элемент массива в свойстве tags.

const apartment = {
  imgUrl: "https://via.placeholder.com/640x480",
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
  tags: ["premium", "promoted", "top"],
  owner: {
    name: "Henry",
    phone: "982-126-1588",
    email: "henry.carter@aptmail.com",
  },
};

const ownerName = apartment.owner.name;
console.log(ownerName);

const ownerPhone = apartment.owner.phone;
console.log(ownerPhone);

const ownerEmail = apartment.owner.email;
console.log(ownerEmail);

const numberOfTags = apartment.tags.length;
console.log(numberOfTags);

const firstTag = apartment.tags[0];
console.log(firstTag);

const lastTag = apartment.tags[apartment.tags.length - 1];
console.log(lastTag);
*/

/*3.5
Доступ к свойствам через квадратные скобки.
Дополни код присвоив объявленным переменным выражения обращения к соответствующим 
свойствам обьекта apartment используя синтаксис «квадратных скобок»:
aptRating - рейтинг;
aptDescr - описание;
aptPrice - цена;
aptTags - теги.

const apartment = {
  imgUrl: "https://via.placeholder.com/640x480",
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
  tags: ["premium", "promoted", "top"],
};

const aptRating = apartment['rating'];
console.log(aptRating);

const aptDescr = apartment['descr'];
console.log(aptDescr);

const aptPrice = apartment['price'];
console.log(aptPrice);

const aptTags = apartment['tags'];
console.log(aptTags);
*/

/*3.6
Изменение значения свойства.
Дополни код обновив значения свойств объекта apartment:
цену в свойстве price на 5000;
рейтинг квартиры в свойстве rating на 4.7;
имя владельца во вложенном свойстве name на "Henry Sibola";
массив тегов в свойстве tags добавив в конец строку "trusted".

const apartment = {
  imgUrl: "https://via.placeholder.com/640x480",
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
  tags: ["premium", "promoted", "top"],
  owner: {
    name: "Henry",
    phone: "982-126-1588",
    email: "henry.carter@aptmail.com",
  },
};

apartment.price = 5000;
apartment.rating = 4.7;
apartment.owner.name = "Henry Sibola";
apartment.tags.push("trusted");

console.log(apartment.price);
console.log(apartment.rating);
console.log(apartment.owner.name);
console.log(apartment.tags);
*/

/*3.7
Добавление свойств.
Ничем не отличается от изменения значения уже существующего свойства.
Если при записи значения по имени, такого свойства в объекте нет, оно будет создано.

Добавь объекту apartment несколько новых свойств:
area - площадь в квадратных метрах, число 60;
rooms - количество комнат, число 3;
location - местоположение квартиры, обьект со следующими вложенными свойствами:
country - страна, строка "Jamaica";
city - город, строка "Kingston".

const apartment = {
  imgUrl: "https://via.placeholder.com/640x480",
  descr: "Spacious apartment in the city center",
  rating: 4.7,
  price: 5000,
  tags: ["premium", "promoted", "top", "trusted"],
  owner: {
    name: "Henry Sibola",
    phone: "982-126-1588",
    email: "henry.carter@aptmail.com",
  },
};

apartment.area = 60;
apartment.rooms = 3;
apartment.location = {
	country: "Jamaica",
	city: "Kingston",};

console.log(apartment.area);
console.log(apartment.rooms);
console.log(apartment.location.country);
console.log(apartment.location.city);
  */

/*3.8
Короткие свойства.
То есть, при объявлении объекта достаточно указать только имя свойства, 
а значение будет взято из переменной с аналогичным именем.

Дополни код объявления объекта так, чтобы у него были свойства name, price, image и 
tags со значениями из переменных с аналогичными именами. 
Обязательно используй синтаксис коротких свойств.

const name = 'Repair Droid';
const price = 2500;
const image = 'https://via.placeholder.com/640x480';
const tags = ['on sale', 'trending', 'best buy'];

const product = {
  name,
  price,
  image,
  tags
};

console.log(product.name);
console.log(product.price);
console.log(product.image);
console.log(product.tags);
*/

/*2.9
Вычисляемые свойства.
Дополни код объявления объекта credentials так, чтобы в результате у него были два
свойства: email и password, имена которых хранятся в переменных emailInputName 
и passwordInputName.
Значением свойства email должна быть строка "henry.carter@aptmail.com", 
а значением свойства password - строка "jqueryismyjam".

const emailInputName = 'email';
const passwordInputName = 'password';

const credentials = {
  [emailInputName]: "henry.carter@aptmail.com",
  [passwordInputName]: "jqueryismyjam"
  };

console.log(credentials.email);
console.log(credentials.password);
*/

/*3.10
Цикл for...in - используется для перебора ключей.
for (key in object) {
  console.log(object[key]);
}

Перебери объект apartment используя цикл for...in 
и запиши в массив keys все его ключи, а в массив values все значения его свойств.

const apartment = {
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
};

const keys = [];
const values = [];

for (const key in apartment) {
keys.push(key);
values.push(apartment[key]);
}
*/

/*3.11
Метод hasOwnProperty() - используется для того, чтобы узнать есть в объекте
собственное свойство или нет - возвращая true или false.

Выполни рефакторинг решения предыдущего задания добавив в цикл for...in 
проверку на собственное свойство.

const keys = [];
const values = [];
const advert = {
  service: "apt",
};

const apartment = Object.create(advert);
apartment.descr = "Spacious apartment in the city center";
apartment.rating = 4;
apartment.price = 2153;

for (const key in apartment) {
    if (apartment.hasOwnProperty(key)) {
    keys.push(key);
    values.push(apartment[key]);
    }
}
*/

/*3.12
Задача. Подсчёт свойств
Напиши функцию countProps(object), которая считает и возвращает количество 
собственных свойств объекта в параметре object. Используй переменную propCount 
для хранения количества свойств объекта.

function countProps(object) {
  let propCount = 0;
  let arr = [];

  arr = Object.keys(object);
  console.log(arr);
  propCount = arr.length;
  console.log(arr.length);

  return propCount;
}

console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 }));
*/

/*3.13
Метод Object.keys()
*/
