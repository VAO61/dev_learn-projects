var arrX = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
var arrY = [1, 2, 3, 4, 5, 6, 7, 8];

function getCoordinates(str) {

  var arr = str.split('');

  var x = arrX.indexOf(arr[0]);

  var y = arrY.indexOf(+arr[1]);

  return [x, y];
}

function check(start, finish) {
  var startPos = getCoordinates(start);
  var finishPos = getCoordinates(finish);

  var deltaX = finishPos[0] - startPos[0];
  var deltaY = finishPos[1] - startPos[1];

  return Math.abs(deltaX) == Math.abs(deltaY);
}

console.log(check('a3', 'b4'));
