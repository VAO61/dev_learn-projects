function checkEqualityStrings(str1, str2) {

  function swapEvenSwapOdd(str) {
    var arrEven = [];
    var arrOdd = [];

    for (var i = 0; i < str.length; i++) {
      if (i % 2 == 0) {
        arrEven.push(str[i]);
      } else {
        arrOdd.push(str[i]);
      }
    }

    var resultSwap = arrEven.sort() + ',' + arrOdd.sort();

    return resultSwap;
  }

  if ( swapEvenSwapOdd(str1) === swapEvenSwapOdd(str2) ){
    return true;

    } else {
      return false;
    }
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
