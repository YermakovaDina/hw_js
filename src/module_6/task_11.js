const books = [
    { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
    { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
    { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
    { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
    { title: 'Враг Божий', author: 'Бернард Корнуэлл', rating: 8.67 }
  ];
  
  const titles = books.map(book => book.title);

/* Метод map() и массив объектов
Мы уже знаем что повседневная задача это манипуляция массивом объектов. Например, получить массив значений 
свойства из всех объектов. Есть массив студентов, а нужно получить отдельный массив их имён.

const students = [
  { name: 'Манго', score: 83 },
  { name: 'Поли', score: 59 },
  { name: 'Аякс', score: 37 },
  { name: 'Киви', score: 94 },
  { name: 'Хьюстон', score: 64 }
];

const names = students.map(student => student.name);
console.log(names); // ['Манго', 'Поли', 'Аякс', 'Киви', 'Хьюстон']
Используя метод map() можно перебрать массив объектов, и в коллбек-функции вернуть значение свойства каждого из них.

Задание
Используя метод map() сделай так, чтобы в переменной titles получился массив названий книг (свойство title) из 
всех объектов массива books.

Тесты
Объявлена переменная books.
Значение переменной books это массив.
Объявлена переменная titles.
Значение переменной titles это массив ['Последнее королевство', 'На берегу спокойных вод', 'Сон смешного человека', 
'Красна как кровь', 'Враг Божий'].
Для перебора массива books используется метод map() как чистая функция. */