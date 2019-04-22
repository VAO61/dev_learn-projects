// Регулярные выражения

var str = 'abcabc123123';
var REPEATED_CHARS_REGEX = /(.).*\1/gi;

console.log( str.match(REPEATED_CHARS_REGEX) );


var strMy = 'abcda';
var repeatedSymbols = /\m/;

console.log( strMy.match(repeatedSymbols) );
