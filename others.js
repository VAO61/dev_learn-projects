// Более сложный, но более эффективный способ "2 указателя"
function isPalindromeLoop(str) {
  let left = 0,
    right = str.length - 1;

  while (left < right) {
    if (str[left] !== str[right]) {
      return false;
    };

    left++;
    right--;
  };
  return true;
};

isPalindromeLoop('топот');

// Короткий, но не эффективный код с большим количеством итераций и дополнительных ячеек памяти. Не эффективно
function isPalindromeMethod(str) {
  return str === str.split('').reverse().join('');
}

isPalindromeMethod('ротор');
