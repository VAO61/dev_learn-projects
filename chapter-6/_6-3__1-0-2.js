function main(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }
  // в данном контексте (решение конкретной задачи) необязательно

  for (i = 0; i < str1.length; i++) {
    var index = str2.indexOf(str1[i])
    if (index === -1 || i % 2 !== index % 2) {
      return false;
    }
  }
  return true;
}

console.log( main("abcd", "cdab") );
