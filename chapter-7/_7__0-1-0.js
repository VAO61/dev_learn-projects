const TYPE_PROJECT_WEB = 'Web';
const TYPE_PROJECT_MOBILE = 'Mobile';

const SPECIALIZATION_WEB = 'Web'
const SPECIALIZATION_MOBILE = 'Mobile'
const SPECIALIZATION_TEST = 'Test'

class Manager {
    constructor() {
        
    }

    hiredUnits(units) {
        units.forEach(function(unit) {
            if (unit.unitType == SPECIALIZATION_WEB) {
                webDept.addUnit(unit);
            } else if (unit.unitType == SPECIALIZATION_MOBILE) {
                mobileDept.addUnit(unit);
            } else if (unit.unitType == SPECIALIZATION_TEST) {
                testDept.addUnit(unit);
            }
        });
    }

    addProjects(projects) {
        projects.forEach(function (project) {
            // switch (project.type) {
            //     case TYPE_WEB:
            //         webDept.addProject(project);
            //         break;
            //     case TYPE_MOBILE:
            //         mobileDept.addProject(project);
            //         break;
            // }
            
            if (project.type === TYPE_PROJECT_WEB && project.difficulty <= webDept.getSafeLoad()) {
                webDept.addProject(project);
            } else if (project.type = TYPE_PROJECT_MOBILE && project.difficulty <= mobileDept.getSafeLoad()) {
                mobileDept.addProject(project);
            }
        });
    }

}

class Department {
    constructor(spec) {
        this.spec = spec;
        this.projects = [];
        this.units = [];
        this.unBusyUnits = 0;
        this.doneProject = [];
    }

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
    }
}

const webDept = new Department(SPECIALIZATION_WEB);
const mobileDept = new Department(SPECIALIZATION_MOBILE);
const testDept = new Department(SPECIALIZATION_TEST);

const p1 = new Project(TYPE_PROJECT_WEB, 1)
const p2 = new Project(TYPE_PROJECT_WEB, 3)
const p3 = new Project(TYPE_PROJECT_MOBILE, 2)

// 4
// 3

// let countProjects = getRandom(0, 4);
// let webProjects = getRandom(0, countProjects);

// function getRandom(min, max) {
//   return Math.floor( Math.random() * (max - min + 1) ) + min;
// }

// 4 - ч
// 2 - 1ч 2д
// 1 - 1ч 1д
// 1 - 1ч 1д
// 3 - 1ч 3д

// 6 - ч
// 2 - 2ч 1д
// 3 - 3ч 1д
// 1 - 1ч 1д


// 3
// 2 - 1ч 1д
// 3 - 1ч 1д
// 1 - 1ч 1д