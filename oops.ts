
import inquirer from "inquirer";
import chalk from "chalk";

class Student {
    name: string;
    constructor(name: string) {
        this.name = name;
    };
};

class Person {
    students: Student[] = [];

    addStudent(obj: Student) {
        this.students.push(obj);
    };
};

const person = new Person();

const programStart = async (person: Person) => {
    console.log(chalk.bold.green("Welcome Guest"));
    do {

        const ans = await inquirer.prompt({
            type: "list",
            name: "select",
            message: "To whom do you want to talk?",
            choices: ["Leenah", "Student"]
        });

        if (ans.select === "Leenah") {
            console.log('You are talking to Leenah');
            console.log("Hope you are doing Great");
        }
        if (ans.select == "Student") {
            const ans = await inquirer.prompt({
                type: "input",
                name: "student",
                message: "Which student you want to talk to?"
            })

            const student = person.students.find((val) => val.name == ans.student);

            if (!student) {
                const name = new Student(ans.student);
                person.addStudent(name);

                console.log(chalk.bold.green(`I am ${(name.name)}, and I am fine.`));
                
            }
            if (student) {

                console.log(chalk.bgBlue.redBright(`I am ${(student.name)}, and I am doing good.`));
               
            };
        };
    } while (true);
};

programStart(person);