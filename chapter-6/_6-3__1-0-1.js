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

function checkEquallyPossibility(str1 /*abcd*/, str2 /*cdab*/) { // Проверяем длину строк, если не равны - сделать одинаковыми точно нельзя
  if (str1.length == str2.length) {
    return true;
  }
}

function equallyArray(arr1, arr2) {
    var flag = true;

    for (var i = 0; i < arr1.length; i++) {
        if (flag && arr1[i] !== arr2[i]) {
            flag = false;
        }
    }
    
    return flag
    
    
}

function main(str1 /*abcd*/, str2 /*cdab*/) {
    if (!checkEquallyPossibility(str1, str2)) {
        return false;
    }
    
    var arrEven = []; // ['a', 'c']
    var arrOdd = [];  // ['b', 'd']

    for (i = 0; i < str1.length; i++) {
        if (i % 2 == 0) {
            arrEven.push(str1[i]);
        } else {
            arrOdd.push(str1[i]);
        }
    }

    arrEven.sort(); // ['a', 'c']
    arrOdd.sort(); // ['b', 'd']

    return equallyArray(arrEven, arrOdd);
}

// main('abcd', 'cdab');
console.log(main('abcd', 'cdab'));

// В таких агрументах работать не будет
// abcad abcda
// aabcd aabcd





// [a, c] ч    // [c, a]
// [b, d] н    // [b, d]