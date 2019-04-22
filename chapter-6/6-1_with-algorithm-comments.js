// Дан массив целых чисел произвольной длины. Написать функцию которая будет выводить максимальную сумму неразрывной последовательности элементов в массиве. Суммировать элементы можно только последовательно.
// Пример: [-1, 10, -9, 5, 6, -10]
// Вывод: 11


// 1. arr1 = [3, 5, 9, 10, 2, -1, -2, 25, 26, 27, 1, 2, 3, 4 ,5] //15
// 2. arr2 = [[3], [5], [9, 10], [2], [-1], [-2], [25, 26, 27], [1, 2 , 3, 4 ,5]] //8
// 3. arr2 = [null, null, 19, null, null, null, 78, 15]
// 4. Math.max(...arr2) //78 спред оператор. ECMA 6
//Math.max.apply(arr2) // Math.max(null, null, 19, null, -3, 78, 15) ECMA <=4 (проверить)

// 1 -> 2 fun(array1) -> array2
// 2 -> 4 fun(array2_modify) -> sum() -> sumMax

//1 -> 2

// mathSumInSequence


function mathSumInSequence(arrayIn) {

  var arrayOut = [];
  var index2 = 0;

  arrayIn.forEach(function(item, index) {
    if (index+1 >= arrayIn.length) {
      return;
    }

    var next = arrayIn[index+1];

    if (typeof arrayOut[index2] === 'undefined') {
        arrayOut[index2] = [];
    };
    arrayOut[index2].push(item);

    if (typeof next !== 'undefined' && next !== item + 1 ) {
        index2++;
    };
  });

  arrayOut.forEach(function (item, index) {
    if (item.length >= 2) {
        arrayOut[index] = item.reduce(function (item, result) { return item + result }, 0);
    } else {
        arrayOut[index] = null;
    };
  });

  var max = Math.max(...arrayOut);

  return max;
};

var resultOfSequence = mathSumInSequence( [3, 5, 9, 10, 2, -1, -2, 25, 26, 27, 1, 2, 3, 4 ,5] );

console.log(resultOfSequence);


// Дописал.
// Обернул в функцию. Подумал как не вылезать за пределы массива
