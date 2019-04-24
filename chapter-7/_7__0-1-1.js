const TYPE_PROJECT_WEB = 'Web';
const TYPE_PROJECT_MOBILE = 'Mobile';

const SPECIALIZATION_WEB = 'Web'
const SPECIALIZATION_MOBILE = 'Mobile'
const SPECIALIZATION_TEST = 'Test'


class IncomingData {
    constructor(manager, days) {
        this.manager = manager;
        this.days = days;
    }

    getRandom(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    generateProjects() {
        let countProjects = this.getRandom(0, 4);
        let webProjects = this.getRandom(0, countProjects);
        const projects = [];

        for (let i = 0; i < webProjects; i++) {
            projects.push(new Project(TYPE_PROJECT_WEB, this.getRandom(1, 3)));
        }
        
        for (let i = 0; i < countProjects - webProjects; i++) {
            projects.push(new Project(TYPE_PROJECT_MOBILE, this.getRandom(1, 3)));
        }

        return projects;
    }

    transferProjects() {
        this.manager.addProjects( this.generateProjects() );
    }

    start() {
        for (let i = 0; i < this.days; i++) {
           this.generateProjects();
        }
    }
}

class Manager {
    constructor() {
        this.webDept = new Department(SPECIALIZATION_WEB);
        this.mobileDept = new Department(SPECIALIZATION_MOBILE);
        this.testDept = new Department(SPECIALIZATION_TEST);
        this.devDoneProjects = [];
        this.devDonProjectsTransfer = [];
        this.doneProjects = [];
    }

    hiredUnits(units) {
        units.forEach(function(unit) {
            if (unit.unitType == SPECIALIZATION_WEB) {
                this.webDept.addUnit(unit);
            } else if (unit.unitType == SPECIALIZATION_MOBILE) {
                this.mobileDept.addUnit(unit);
            } else if (unit.unitType == SPECIALIZATION_TEST) {
                this.testDept.addUnit(unit);
            }
        });
    }

    addProjects(projects) {
        projects.forEach(function (project) {            
            if (project.type === TYPE_PROJECT_WEB && project.difficulty <= this.webDept.getSafeLoad()) {
                this.webDept.addProject(project);
            } else if (project.type = TYPE_PROJECT_MOBILE && project.difficulty <= this.mobileDept.getSafeLoad()) {
                this.mobileDept.addProject(project);
            }
        });

        this.webDept.getDevDonProjectsTransfer().forEach(function (project) {
            this.devDonProjectsTransfer.push(project);
        });
        
        this.mobileDept.getDevDonProjectsTransfer().forEach(function (project) {
            this.devDonProjectsTransfer.push(project);
        });

        this.devDonProjectsTransfer.forEach(function(project) {
            this.testDept.addProject(project);
        });

        this.testDept.getDevDonProjectsTransfer().forEach(function (project) {
            this.doneProjects.push(project);
        });
    }


    // this.days = day;

    // cheaklog() {
    //     while(this.days > 0) {
    //       this.addProjects();
    //       this.WebDeptManagement();
    //       this.MobileDeptManagement();
    //       this.TestDeptManagement();
    //       this.days--;
    //     }
    //     // hiredUnits _log
    //     // firedUnits _log
    //     // doneProjects _log
    //   }

}

class Department {
    constructor(spec) {
        this.spec = spec;
        this.projects = [];
        this.units = [];
        this.unBusyUnits = 0;
        this.doneProjects = [];
    }

    // webDept.doneProject.push(testDept.doneProject)
    // testDept.doneProject.push(Manager.doneProject)

    addUnit(unit) {
        this.units.push(unit);
    }

    addProject(project) {
        this.projects.push(project);
    }

    /**
     * Расчитывает допустимую нагрузку на отдел
     */
    getSafeLoad() {
        if (this.spec === SPECIALIZATION_MOBILE) {
            let sum = 0;
            for (let i = 0; i < this.projects.length; i++) {
                sum += this.projects[i].difficulty;
            }
            return sum - this.units.length;
        } else if (this.spec === SPECIALIZATION_WEB || this.spec === SPECIALIZATION_TEST) {
            return this.projects.length - this.units.length;
        }

        return 0;
    }

    getDevDonProjectsTransfer() {
        return this.doneProjects;
    }

    workDay() {
        
    }
}


class Project {
    constructor(type, difficulty) {
        this.type = type;
        this.difficulty = difficulty;
    }
}

class Unit {
    constructor(unitType) {
        this.unitType = unitType;
        this.unitSkill = 0;
        this.unitBusy = 0;
        this.unitUnBusy = 0;
    }
}


const webDept = new Department(SPECIALIZATION_WEB);
const mobileDept = new Department(SPECIALIZATION_MOBILE);
const testDept = new Department(SPECIALIZATION_TEST);

const p1 = new Project(TYPE_PROJECT_WEB, 1);
const p2 = new Project(TYPE_PROJECT_WEB, 3);
const p3 = new Project(TYPE_PROJECT_MOBILE, 2);

const manager = new Manager();
const incomingData = new IncomingData(manager, 994);
incomingData.start();






