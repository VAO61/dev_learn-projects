// Написать функцию, которая будет принимать два аргумента: текущее положение Слона и любую другую точку на шахматной доске. Функция должна проверить, возможно ли перемещение слона из одной клетки в другую за один ход и вернуть булевое значение.
// function(“a3”, “b3”) { … };


// function() {
// 	if {
// 		... return true
// 	}
// 	return false
// }

// h - horizontal
// v - vertical


// h++ && v++

var arrayGLine = [];
var arrayVLine = [];
for (var i = 1; i < 9; i++) {
	// if () {
		// arrayGLine.push(arr[i]);
	// }
	arrayGLine.push([i]);
	// console.log(arrayGLine);
}

for (var j = 1; j < 9; j++) {
	arrayVLine.push([j]);
	// console.log(arrayVLine);
}

// var n = 2, m = 64;
// var mas = [];
// for (var i = 0; i < m; i++){
// 	mas[i] = [];
// 	for (var j = 0; j < n; j++){
// 		mas[i][j] = 0;
//   }
// }
// console.log(mas);


// var gLine [1, 2, 3, 4, 5, 6, 7, 8]
// var hLine [1, 2, 3, 4, 5, 6, 7, 8]

// h = v;

// var h = 1;
// var v = 3;
//
// 	for (var i = 0; i < 8; i++) {
// 		if (i % 2 == 1) continue;
//
// 		console.log(i);
// 	};
//
// 	test = h == v || h == v + i ? true : false;
//
// console.log(test);
