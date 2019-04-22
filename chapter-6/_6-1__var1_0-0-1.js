// Бонус:
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
// Доработать, не совсем корректно!

// arr.forEach(callback[, thisArg])
// arr.filter(callback[, thisArg])

var arr = [-1, 10, -9, 5, 6, -10];
// var result = arr.reduce(function (sum, current) {
//   return sum + current;
// });

// console.log(arr[3]);

arr.forEach(function(item, index) {

  if (arr[index + 1] && (item + 1) === arr[index + 1] ) {
    console.log(arr[index + 1] + item);
  }
});
// console.log(arr.length + ' элементов массива');
// console.log(arr[2]);




// Дан массив целых чисел произвольной длины. Написать функцию которая будет выводить максимальную сумму неразрывной последовательности элементов в массиве.
// Суммировать элементы можно только последовательно.
// Пример: [-1, 10, -9, 5, 6, -10]
// Вывод: 11
// Создать новый репозиторий и залить в него код
// Добавить ссылку на репозиторий в виде комментария в карточке Trello



var arr = [-2, -1, 10, 4, 5, 6, 15, 16];

arr.forEach(function(item, index) {

  if (item - 1 === arr[index - 1] || item + 1 === arr[index + 1]) {
    console.log(item);

    // Создание нового массива с новыми просуммированными значениями последовательности
    // Сравнение при помощи filter(callback) и нахождение максимальной суммы
  };
});

// console.log(arr.length + ' элементов массива');
// console.log(arr[2]);








// var arr = [-2, -1, 10, 5, 6, 7, 14, 15];
//
// arr.reduce(function(previousValue, currentValue, index) {
//   return currentValue - previousValue;
// })
