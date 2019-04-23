class Manager {
  management(day) {
    this.days = day; // день по счёту = общему кол-ву дней
    this.WebDept = new WebDept();
    this.MobileDept = new MobileDept();
    this.TestDept = new TestDept();
    // На старте webProjects, mobileProjects, TestProjects = 0;
  }

  cheaklog() {
    while(this.days > 0) {
      this.addProjects();
      this.WebDeptManagement();
      this.MobileDeptManagement();
      this.TestDeptManagement();
      this.days--;
    }
    // hiredUnits _log
    // firedUnits _log
    // doneProjects _log
  }

  addProjects() {
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
    this.WebDept.needUnits();
    this.WebDept.unBusyUnits();
    this.WebDept.addUnits();
    this.WebDept.firedUnits();
    this.WebDept.takeProject();
  }

  MobileDeptManagement() {
    // needUnits, unBusyUnits, addUnits, firedUnits, takeProject
  }

  TestDeptManagement() {
    // needUnits, unBusyUnits, addUnits, firedUnits, takeProject
  }

  TestDept() {
    // doneProjects
  }

  get hiredUnits() {
    return this.WebDeptManagement.hiredUnits + this.MobileDeptManagement.hiredUnits + this.TestDeptManagement.hiredUnits;
  }

  get firedUnits() {
    return this.WebDeptManagement.firedUnits + this.MobileDeptManagement.firedUnits + this.TestDeptManagement.firedUnits;
  }

  get doneProjects() {
    return this.TestDept.doneProjects;
  }

}

class Department {
  management() {
    this.projects = [];
    this.doneProjects = 0;
    this.units = [];
    // this.removeUnits = 0;
    this.addUnits = 0;
    this.unBusyUnits = 0;
    this.hiredUnits = 0;
    this.firedUnits = 0;
  }

  needUnits() {
    return this.projects.length - this.unBusyUnits;
  }
}



class WebDept extends Department {}




function getRandom(min, max) {
  return Math.floor( Math.random() * (max - min + 1) ) + min;
}
