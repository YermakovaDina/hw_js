/*string.slice(0, length); - в з.32 задать переменную на саму строку.
з.33
Функция formatMessage(message, maxLength) принимает строку (параметр message) и форматирует 
её, если длина превышает значение в параметре maxLength.
Дополни код функции так, что если длина строки:
1. не превышает maxLength, функция возвращает её в исходном виде.
2. больше maxLength, то функция обрезает строку до maxLength символов и добавляет в конец троеточие "...", 
после чего возвращает укороченную версию.
function formatMessage(message, maxLength) {
  let result;
  // Change code below this line
    
    if (message.length > maxLength) {
        result = message.slice(0, maxLength) + '...';
    }
    else {result = message};
    
    if (message.length > maxLength) {
        let messageSubString = message.slice(0, maxLength);
        result = `${messageSubString} ...`;
    }
    else {result = message};

  /// Change code above this line
  return result;
}*/

/*
з.34
Функция normalizeInput(input) принимает строку (параметр input) и возвращает такую же строку,
но в нижнем регистре. Присвой переменной normalizedInput выражение создания строки в нижнем
регистре из параметра input.
function normalizeInput(input) {
  const normalizedInput = input.toLowerCase(); // Change this line
  return normalizedInput;
}
const normalizedInput = input.toUpperCase() для верхнего ренистра
*/

/*з.35
fullname.includes(name)
берет имя пользователя и проверяет его точное вхождение в его полное имя*/

/*з.36
Функция checkForSpam(message) принимает строку (параметр message), проверяет её на содержание
запрещенных слов spam и sale, и возвращает результат проверки. Слова в строке параметра
message могут быть в произвольном регистре, например SPAM или sAlE.
Если нашли запрещенное слово (spam или sale) то функция возвращает буль true.
Если в строке нет запрещенных слов, функция возвращает буль false.
function checkForSpam(message) {
  let result;
result = message.toLowerCase().includes('spam') ||
  message.toLowerCase().includes('sale') ? true : false;
  return result;
}
*/