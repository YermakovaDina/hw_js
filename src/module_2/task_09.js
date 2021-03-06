function getExtremeElements(array) {
    const firstElement = array[0];
    
    const lastElement = array[array.length - 1];
    
    const edgeElements = [firstElement, lastElement];
    
    return edgeElements;
}

// --- or ---
function getExtremeElements(array) {
 return [array[0], array[array.length - 1]];
}

/* Задача: Крайние элементы массива
Задание
Напиши функцию getExtremeElements(array) которая принимает один параметр array - массив элементов произвольной длины. Функция должна возвращать массив из двух элементов - первого и последнего элемента параметра array.

Тесты
Объявлена функция getExtremeElements(array)
Вызов getExtremeElements([1, 2, 3, 4, 5]) возвращает [1, 5]
Вызов getExtremeElements(["Earth", "Mars", "Venus"]) возвращает ["Earth", "Venus"]
Вызов getExtremeElements(["apple", "peach", "pear", "banana"]) возвращает ["apple", "banana"] */