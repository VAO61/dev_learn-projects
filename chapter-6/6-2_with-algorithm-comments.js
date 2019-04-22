// Написать функцию, которая будет принимать два аргумента: текущее положение Слона и любую другую точку на шахматной доске.
// Функция должна проверить, возможно ли перемещение слона из одной клетки в другую за один ход и вернуть булевое значение.
// function(“a3”, “b3”) { … };
// Псевдокод

var arrX = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
var arrY = [1, 2, 3, 4, 5, 6, 7, 8];

function getCoordinates(str) {
  // 'a3'

  var arr = str.split(''); // ['a', '3']

  var x = arrX.indexOf(arr[0]);

  var y = arrY.indexOf(+arr[1]);

  return [x, y];
}

function check(start, finish) {
  var startPos = getCoordinates(start); // [0, 2] x = 0, y = 2
  var finishPos = getCoordinates(finish); // [1, 3] x = 1, y = 3

  var deltaX = finishPos[0] - startPos[0];
  // console.log(startPos[0]);
  var deltaY = finishPos[1] - startPos[1];

  console.log(deltaX);
  console.log(deltaY);

  // deltaX == deltaY ? true : false; // тернароное выражение
  return Math.abs(deltaX) == Math.abs(deltaY);
}

console.log(check('a3', 'b4'));
