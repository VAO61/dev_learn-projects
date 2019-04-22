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
