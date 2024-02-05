import inquirer from "inquirer";
import chalk from "chalk";
class Student {
    name;
    constructor(name) {
        this.name = name;
    }
    ;
}
;
class Person {
    students = [];
    addStudent(obj) {
        this.students.push(obj);
    }
    ;
}
;
const person = new Person();
const programStart = async (person) => {
    console.log(chalk.bold.green("Welcome Guest"));
    do {
        const ans = await inquirer.prompt({
            type: "list",
            name: "select",
            message: "To whom do you want to talk?",
            choices: ["Leenah", "Student"]
        });
        if (ans.select === "Leenah") {
            console.log('You are talk to Leenah');
            console.log("Hope you are doing Great");
        }
        if (ans.select == "Student") {
            const ans = await inquirer.prompt({
                type: "input",
                name: "student",
                message: "Which student you want to talk to?"
            });
            const student = person.students.find((val) => val.name == ans.student);
            if (!student) {
                const name = new Student(ans.student);
                person.addStudent(name);
                console.log(`I am ${chalk.bold.green(name.name)}, and I am fine.`);
                console.log(person.students);
            }
            if (student) {
                console.log(`I am ${chalk.bgBlue.redBright(student.name)}, and I am doing good.`);
                console.log(person.students);
            }
            ;
        }
        ;
    } while (true);
};
programStart(person);
