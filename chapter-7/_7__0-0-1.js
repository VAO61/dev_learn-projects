class Manager {
  // по идее, "на вход подается количество дней"
  management(day) {
    this.days = day; // день по счёту = общему кол-ву дней
    this.WebDept = new WebDept();
    this.MobileDept = new MobileDept();
    this.TestDept = new TestDept();
    // На старте webProjects, mobileProjects, TestProjects = 0;
  }

  // cheaklog() {
  //   ...
  // }

  newProjects() {
    let countProjects = getRandom(0, 4);
      // console.log(countProjects);
    let webProjects = getRandom(0, countProjects);
      console.log(webProjects);
    /* --?-- */for (let i = 0; i < webProjects; i++) {
      /* --?-- */this.WebDept.projects.push(new Project(getRandom(1, 3)));
    /* --?-- */}
    /* --?-- */for (let i = 0; i < countProjects - webProjects; i++) {
      /* --?-- */this.MobileDept.projects.push(new Project(getRandom(1, 3)));
    /* --?-- */}
  }

  WebDeptManagement() {
    // needUnits, unBusyUnits, addUnits, removeUnits, projectsInProcess
  }

  MobileDeptManagement() {
    // needUnits, unBusyUnits, addUnits, removeUnits, projectsInProcess
  }

  TestDeptManagement() {
    // needUnits, unBusyUnits, addUnits, removeUnits, projectsInProcess
  }

  TestDept() {
    // doneProjects
  }

  get addUnits() {
    return this.WebDeptManagement.addUnits + this.MobileDeptManagement.addUnits + this.TestDeptManagement.addUnits;
  }

  get removeUnits() {
    return this.WebDeptManagement.removeUnits + this.MobileDeptManagement.removeUnits + this.TestDeptManagement.removeUnits;
  }

  get doneProjects() {
    return this.TestDept.doneProjects;
  }

}

class Department {
  management() {
    this.projects = [];
    this.addUnits = 0;
    this.removeUnits = 0;
    this.units = [];
    this.unBusyUnits = 0;
    this.doneProjects = 0;
  }

  needUnits() {
    return this.projects.length - this.unBusyUnits;
  }
}



class WebDept extends Department {}




function getRandom(min, max) {
  return Math.floor( Math.random() * (max - min + 1) ) + min;
}
