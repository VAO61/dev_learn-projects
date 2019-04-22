// Рандомайзер численный

function getRandom(min, max) {
  return Math.floor( Math.random() * (max - min + 1) ) + min;
}

getRandom();
console.log( getRandom(0, 4) );
console.log( getRandom(1, 3) );

// Выбрать случайное свойство из объекта

function getRandomDept (obj) {
    var obj = {
      a: 'webProject',
      b: 'mobileProject'
    };
    var keys = Object.keys(obj);

    console.log(obj[keys [keys.length * Math.random() << 0] ]);

    return obj[keys [keys.length * Math.random() << 0] ];
};

getRandomDept();
