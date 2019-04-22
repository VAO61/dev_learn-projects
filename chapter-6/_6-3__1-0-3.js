function strToObject(str) {
    var obj = {};
    str.split('').forEach(function (symbol, index) {
        obj[symbol] = index;
    })
    return obj;
}

function main(str1, str2) {
    var obj1 = strToObject(str1);
    var obj2 = strToObject(str2);

    var flag = true;

    Object.keys(obj1).forEach(function (key) {
        if (flag && obj1[key] % 2 !== obj2[key] % 2) {
            flag = false;
        }
    })

    return flag;
}

// main('abcd', 'cdab');
console.log(main('abcd', 'cdab'));
//
// var obj1 = {
//     a: [1, 2],
//     b: [1, 0],
//     c: [0, 1],
//     d: [1, 0]
// }
//
// var obj2 = {
//     c: [0, 1],
//     d: [1, 0],
//     a: [1, 2],
//     b: [0, 1]
// }
