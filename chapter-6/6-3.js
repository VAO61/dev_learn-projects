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
