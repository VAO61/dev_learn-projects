let countProjects = getRandom(0, 4);
  console.log( 'Общее количество web-проектов: ' + countProjects );
let webProjects = getRandom(0, countProjects);
  console.log( 'Количество web-проектов: ' + webProjects );
  console.log( 'Количество mobile-проектов: ' + (countProjects - webProjects) );

function getRandom(min, max) {
  return Math.floor( Math.random() * (max - min + 1) ) + min;
}
