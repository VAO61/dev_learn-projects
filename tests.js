// Условные операторы: if, '?'. Проверка стандарта
// https://learn.javascript.ru/ifelse#proverka-standarta
var jsName = prompt ('Каково «официальное» название JavaScript?', '');
if (jsName == 'ECMAScript') {
  alert('«Верно!»');
} else {
  alert('«Не знаете? «ECMAScript»!»')
}

// Условные операторы: if, '?'. Получить знак числа
// https://learn.javascript.ru/ifelse#poluchit-znak-chisla
var numValue = prompt ('Введите число', '');
if (numValue > 0) {
  alert(1);
} else if (numValue < 0) {
  alert(-1);
} else {
  alert(0);
}

// Условные операторы: if, '?'. Проверка логина
// https://learn.javascript.ru/ifelse#proverka-logina
var login = prompt ('Кто пришел?', '');
if (login == 'Админ') {
  var password = prompt ('Пароль?','');
  if (password =='Чёрный Властелин') {
    alert('Добро пожаловать!');
  } else if (password == null) {
    alert('Вход отменён');
  } else {
    alert('Пароль не верен');
  }
} else if (login == null) {
  alert('Вход отменён');
} else {
  alert('Я вас не знаю');
}

// Условные операторы: if, '?'. Перепишите 'if' в '?'
// https://learn.javascript.ru/ifelse#perepishite-if-v
result = (a + b < 4) ? 'Мало' : 'Много';


// Примеры применения:
var age = 30;
(age >= 18 && age <= 99) ? alert('Вы взрослый') : alert('Ты школота');

var humanStandart = ('Есть мясо', 'Делать прививки детям');
(humanStandart === 'Есть мясо' || humanStandart === 'Делать прививки детям') ? alert('Вы нормальный') : alert('Вам бы подлечиться');

// Напишите условие if для проверки того факта, что переменная age находится между 14 и 90 включительно.
// «Включительно» означает, что концы промежутка включены, то есть age может быть равна 14 или 90.
//https://learn.javascript.ru/logical-ops#proverka-if-vnutri-diapazona
// var age = '21';
if (age >= '14' && age <= '90') {
  /* alert('14-90');*/
}

// Напишите условие if для проверки того факта, что age НЕ находится между 14 и 90 включительно.
// Сделайте два варианта условия: первый с использованием оператора НЕ !, второй – без этого оператора.
// https://learn.javascript.ru/logical-ops#proverka-if-vne-diapazona
// Первый вариант:
var age = (12, 102);
if (!(age >= 14 && age <= 90)) {
  alert('Тру');
} else {
  alert('Мимо')
}
// Второй вариант:
if (age < 14 || age > 90) {}

// Натуральное число, большее 1, называется простым, если оно ни на что не делится, кроме себя и 1.
// Другими словами, n>1 – простое, если при делении на любое число от 2 до n-1 есть остаток.
// Создайте код, который выводит все простые числа из интервала от 2 до 10. Результат должен быть: 2,3,5,7.
// P.S. Код также должен легко модифицироваться для любых других интервалов.
// https://learn.javascript.ru/task/list-primes
nextPrime:
for (var i = 2; i <= 10; i++) {
  for (var j = 2; j < i; j++) {
    if (i % j == 0) continue nextPrime;
  }
  console.log('Простое число', i);
}

// Следующая функция возвращает true, если параметр age больше 18. В ином случае она задаёт вопрос confirm и возвращает его результат.
// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   } else {
//     return confirm('Родители разрешили?');
//   }
// }
// Перепишите функцию, чтобы она делала то же самое, но без if, в одну строку. Сделайте два варианта функции checkAge:
// Используя оператор '?'
// Используя оператор ||
// https://learn.javascript.ru/task/rewrite-function-question-or
function checkAge(age) {
  return (age > 18) ? true : confirm('Родители разрешили?');
}

function checkAge(age) {
  return (age > 18) || confirm('Родители разрешили?');
}

// Задача «Hello World» для функций :)
// Напишите функцию min(a,b), которая возвращает меньшее из чисел a,b.
// Пример вызовов:
// min(2, 5) == 2
// min(3, -1) == -1
// min(1, 1) == 1
// https://learn.javascript.ru/task/min
function min(a, b) {
  if (a < b){
    return a;
  } else {
    return b;
  }
}

function min(a, b) {
  return (a < b) ? a : b;
}

// Напишите функцию pow(x,n), которая возвращает x в степени n. Иначе говоря, умножает x на себя n раз и возвращает результат.
// pow(3, 2) = 3 * 3 = 9
// pow(3, 3) = 3 * 3 * 3 = 27
// pow(1, 100) = 1 * 1 * ...*1 = 1
// Создайте страницу, которая запрашивает x и n, а затем выводит результат pow(x,n).
// Запустить демо
// P.S. В этой задаче функция обязана поддерживать только натуральные значения n, т.е. целые от 1 и выше.
// https://learn.javascript.ru/task/pow
function pow(x, n) {
  var result = x;
  for (var i = 1; i < n; i++) { //цикл... кол-во раз до значения n ... x умножает себя
    result *= x;
  }
  return result;
}

var x = prompt("x?", '');
var n = prompt("n?", '');

if (n <= 1) {
  alert('Степень ' + n +
    'не поддерживается, введите целую степень, большую 1'
  );
} else {
  alert( pow(x, n) );
}

// Создайте функцию filterRange(arr, a, b), которая принимает массив чисел arr и возвращает новый массив, который
// содержит только числа из arr из диапазона от a до b. То есть, проверка имеет вид a ≤ arr[i] ≤ b.
// Функция не должна менять arr.
// Пример работы:
//
// var arr = [5, 4, 3, 8, 0];
// var filtered = filterRange(arr, 3, 5);
// теперь filtered = [5, 4, 3]
// arr не изменился
// https://learn.javascript.ru/array#filtr-diapazona

var arr = [5, 4, 3, 8, 0, 9, 11];
var filtered = filterRange(arr, 8, 11);

function filterRange(arr, a, b) {
  var arrFiltered = [];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] <= b && arr[i] >= a) {
      arrFiltered.push(arr[i]);
    }
  }

  return arrFiltered;

}

console.log(filtered);
