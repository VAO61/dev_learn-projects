class Customer {}

class Manager {}

//////////////////////////////////////////////////////

class Developer {
    constructor() {
        this.skill = 0;
        this.project = null;
    }
}

class WebDeveloper extends Developer {}

class MobileDeveloper extends Developer {}

class QADeveloper extends Developer {}

//////////////////////////////////////////////////////////

class Project {}

class WebProject extends Project {}

class MobileProject extends Project {}

class ProjectFactory {
  static createWebProject() {
      return new WebProject()
  }

  static createMobileProject() {
    return new MobileProject()
  }

  static createRandomProject() {
    if (Math.random() > 0.4) {
      return new WebProject()
    }

    return new MobileProject()
  }
}


const pW = ProjectFactory.createWebProject()
const pM = ProjectFactory.createMobileProject()
const pR = ProjectFactory.createRandomProject()