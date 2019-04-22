function main(str1, str2) {
  if (str1 === str2) {
    return true;
  }

  for (var i = 0; i < str1.length; i++) {
    var index = str2.indexOf(str1[i])
    if (index === -1 || i % 2 !== index % 2) {
      return false;
    }
  }
  return true;
}


// console.log( main('abcd', 'cdab') ); // true
// console.log( main('abce', 'abcd') ); // false - отсутствующий символ в одной из строк
// console.log( main('abcdd', 'abcd') ); // false - разная длина строк
// console.log( main('acbd', 'cbad') ); // false - не соблюдено условие четности/нечетности index-ов элементов
// console.log( main('abad', 'bada') ); // false - уравнять нельзя согласно условиям замены как и пред.
//
// console.log( main('abadc', 'abcda') ); // true
// console.log( main('abcad', 'abcda') ); // false
//
// console.log( main('1234', '3412') ); // true
// console.log( main('0110', '0110') ); // true + добавлено дополнительное условие если уже равны
console.log( main('abba', 'baab') ); // должно быть true
console.log( main('aaababac', 'aaaaabac') ); // false
