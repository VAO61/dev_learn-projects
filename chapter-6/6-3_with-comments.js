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

function checkEqualityStrings(str1, str2) {

  function swapEvenSwapOdd(str) {
    var arrEven = [];
    var arrOdd = [];

    for (var i = 0; i < str.length; i++) {
      if (i % 2 == 0) {
        arrEven.push(str[i]); // str1: a,b | str2: b,a
      } else {
        arrOdd.push(str[i]); // str1: b,a | str2: a,b
      }
    }

    var resultSwap = arrEven.sort() + ',' + arrOdd.sort();
    // str1: a,b + ',' + a,b = a, b, a, b
    // str2: a,b + ',' + a,b = a, b, a, b

    return resultSwap;
  }

  // console.log(swapEvenSwapOdd('abba'));
  // console.log(swapEvenSwapOdd('baab'));

  if ( swapEvenSwapOdd(str1) === swapEvenSwapOdd(str2) ){
    return true;

    } else {
      return false
    };
}

checkEqualityStrings('abcd', 'cdab');

console.log( checkEqualityStrings('abcd', 'cdab') ); // true
console.log( checkEqualityStrings('abce', 'abcd') ); // false - отсутствующий символ в одной из строк
console.log( checkEqualityStrings('abcdd', 'abcd') ); // false - разная длина строк
console.log( checkEqualityStrings('acbd', 'cbad') ); // false - не соблюдено условие четности/нечетности index-ов элементов
console.log( checkEqualityStrings('abad', 'bada') ); // false - уравнять нельзя согласно условиям замены как и пред.
console.log( checkEqualityStrings('abadc', 'abcda') ); // true
console.log( checkEqualityStrings('abcad', 'abcda') ); // false
console.log( checkEqualityStrings('abcad', 'abcdac') ); // false

console.log( checkEqualityStrings('1234', '3412') ); // true
console.log( checkEqualityStrings('0110', '0110') ); // true + добавлено дополнительное условие если уже равны
console.log( checkEqualityStrings('abdae', 'adeba') ); // false
console.log( checkEqualityStrings('abba', 'baab') ); // теперь как и должно быть true
