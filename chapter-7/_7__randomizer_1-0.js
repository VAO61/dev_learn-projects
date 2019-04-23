let countProjects = getRandom(0, 4);
  console.log(countProjects);
let webProjects = getRandom(0, countProjects);
  console.log(webProjects);

function getRandom(min, max) {
  return Math.floor( Math.random() * (max - min + 1) ) + min;
}
