const apartment = {
    imgUrl: 'https://via.placeholder.com/640x480',
    descr: 'Spacious apartment in the city centre',
    rating: 4,
    price: 2153,
    tags: ['premium', 'promoted', 'top'],
  };
  
  const aptRating = apartment.rating;
  const aptDescr = apartment.descr;
  const aptPrice = apartment.price;
  const aptTags = apartment.tags;

/* Доступ к свойствам через точку
Первый способ получить доступ к свойству объекта это синтаксис обьект.ключ_свойства. 
Синтаксис «через точку» используется в большинстве случаев и подходит тогда, когда мы 
заранее знаем имя (ключ) свойства к которому хотим получить доступ.

На место обращения будет возвращено значение свойства с таким именем.
Если в объекте нет свойства с таким именем, на место обращения вернётся undefined.
const book = {
  title: "Последнее королевство",
  author: "Бернард Корнуэлл",
  genres: ["историческая проза", "приключения"],
  public: true,
  rating: 8.38,
};

const bookTitle = book.title;
console.log(bookTitle); // "Последнее королевство"

const bookGenres = book.genres;
console.log(bookGenres); // ["историческая проза", "приключения"]

const bookPrice = book.price;
console.log(bookPrice); // undefined
Задание
Дополни код присвоив объявленным переменным выражения обращения к соответствующим свойствам обьекта apartment.

aptRating - рейтинг;
aptDescr - описание;
aptPrice - цена;
aptTags - теги.

Тесты
Объявлена переменная apartment
Значение переменной apartment это объект
У объекта переменной apartment присутствуют свойства imgUrl, descr, rating, price и tag со значениями
Объявлена переменная aptRating
Значение переменной aptRating это число 4
Объявлена переменная aptDescr
Значение переменной aptDescr это строка "Просторная квартира в центре"
Объявлена переменная aptPrice
Значение переменной aptPrice это число 2153
Объявлена переменная aptTags
Значение переменной aptTags это массив строк ["premium", "promoted", "top"] */