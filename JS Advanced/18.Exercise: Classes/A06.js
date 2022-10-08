class Company {
    constructor() {
        this.departments = {};
    }

    addEmployee(name, salary, position, department) {
        if (!name || !salary || salary < 0 || !position || !department) {
            throw new Error("Invalid input!");
        }
        if (!this.departments[department]) {
            this.departments[department] = {
                avrSalary: 0,
                employees: [],
                sumSalary: 0
            }
        }

        this.departments[department].employees.push(
            {
                name: name,
                salary: salary,
                position: position
            }
        )

        this.departments[department].sumSalary += salary;
        this.departments[department].avrSalary = Number(this.departments[department].sumSalary) / Number(this.departments[department].employees.length);
        return `New employee is hired. Name: ${name}. Position: ${position}`
    }

    bestDepartment() {
        let res = [];
        let department = Object.entries(this.departments)
            .sort(([depName, depInfo], [depName2, depInfo2]) => {
                return depInfo.avrSalary - depInfo.avrSalary
            })[0];
        res.push(`Best Department is: ${department[0]}\n`);
        res.push(`Average salary: ${department[1].avrSalary.toFixed(2)}\n`)
        department[1].employees.sort((a, b) => b.salary - a.salary || a.name.localeCompare(b.name))
            .forEach(a => res.push(
                `${a.name} ${a.salary} ${a.position}\n`
            ));
                return res.join("").trim();

    }


}

let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());