const inquirer = require('inquirer');

const db = require('./db/connection');

const userInput = () =>{
    db.connect((err) =>{
        if(err) throw err;
        inquirer.prompt([
            {
                type: "list",
                name: "options",
                message: "What would you like to do?",
                choices: ["View all departments", "View all roles", "View employees", "Add a department", "Add a role", "Add an employee", "Update and Employee"]
            }
        ]).then(answers => {
            console.log(answers.options);
        });
    });
};

userInput();
