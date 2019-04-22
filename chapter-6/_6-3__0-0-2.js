// Задача:  Две строки можно сделать одинаковыми, выполняя определенное количество операций перестановок символов над одной или обеими строками.
//
// Возможны следующие операции:
// 1. SwapEven: обмен символом с индексом с ЧЕТНЫМ номером с символом в другом индексе с ЧЕТНЫМ номером.
// 2. SwapOdd: обмен символом с индексом с НЕЧЕТНЫМ номером с символом в другом индексе с НЕЧЕТНЫМ номером.
//
// Например, строки "abcd", "cdab" можно сделать одинаковыми, переставив символы:
//  - "c" (символ с нечетным индексом 1) / "a" (символ с нечетным индексом 3)
//  - "d" (символ с четным индексом 2) / "b" (символ с четным индексом 4)
// В другому примере строки "abcd", "bcda" нельзя сделать одинаковыми,  т.к. например символ "a" в первом слове стоит на нечетном индексе (1), во втором слове на четном (4).
//
// Написать функцию, которая проверит, возможно ли сделать две строки одинаковыми.


// var str1 = 'abcd';
// var str2 = 'cdab';
//
// console.log(str1.length == str2.length);

function checkEquallyPossibility(str1, str2) { // Проверяем длину строк, если не равны - сделать одинаковыми точно нельзя
  if (str1.length == str2.length) {
    return true;
  }
}

checkEquallyPossibility('abcd', 'cdab');
console.log( checkEquallyPossibility('abcd', 'cdab') );

function defineEvenOrOdd(num) {
  var numEven = num % 2 == 0;
  var numOdd = num % 2 == 1;

  console.log(defineEvenOrOdd(4));
}