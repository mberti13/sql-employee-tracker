const inquirer = require('inquirer');

const cTable = require('console.table');

const db = require('./db/connection');

const userInput = () => {
    db.connect((err) => {
        if (err) throw err;
        inquirer.prompt([
            {
                type: "list",
                name: "options",
                message: "What would you like to do?",
                choices: ["View all departments", "View all roles", "View employees", "Add a department", "Add a role", "Add an employee", "Update an employee's role"]
            }
        ]).then(answers => {
            console.log(answers.options);
            if (answers.options === "View all departments") {
                // TODO: console table the departments sql table
                // ! CODE HERE
                db.connect(function(err){
                    db.query("SELECT * FROM departments", function(err, result, fields){
                        if(err) throw err;
                        console.table(result);
                    });
                });
            } else if (answers.options === "View all roles") {
                // TODO: console table the roles sql table
                // ! CODE HERE
                db.connect(function(err){
                    db.query("SELECT * FROM roles", function(err, result, fields){
                        if(err) throw err;
                        console.table(result);
                    });
                }); 
            } else if (answers.options === "View employees") {
                // TODO: console table the employees sql table
                // ! CODE HERE
                db.connect(function(err){
                    db.query("SELECT * FROM employees", function(err, result, fields){
                        if(err) throw err;
                        console.table(result);
                    });
                });
            } else if (answers.options === "Add a department") {
                // TODO: Create Queries to add department
                // ! CODE HERE
                // ? ask for department name
                inquirer.prompt([
                    {
                        type: "input",
                        name: "department_name",
                        message: "What is the name of this department?"
                    }
                ]).then(departmentData => {
                    console.log(departmentData);
                    // TODO: add department data to sql table with new ID
                });
            } else if (answers.options === "Add a role") {
                // Create Queries to add role
                inquirer.prompt([
                    {
                        type: "input",
                        name: "job_title",
                        message: "What is the name of this role?"
                    },
                    {
                        type: "number",
                        name: "department_id",
                        message: "What is the department id of this role?",
                        validate: departmentIdInput => {
                            if (departmentIdInput) {
                                return true;
                            } else {
                                console.log("Please enter a department id!");
                                return false;
                            }
                        }
                    },
                    {
                        type: "number",
                        name: "salary",
                        message: "What is this role's current salary?",
                        validate: salaryInput => {
                            if (salaryInput) {
                                return true;
                            }
                            console.log("Please enter this role's salary!");
                            return false;
                        }
                    }
                ]).then(roleData => {
                    console.log(roleData);
                    // TODO: add role data to sql table with new ID
                });
            }else if (answers.options === "Add an employee"){
                // TODO: Create Queries to add employee
                // ! CODE HERE
                // ? ask for employee name
                inquirer.prompt([
                    {
                        type: "input",
                        name: "first_name",
                        message: "What is this employee's first name?",
                        validate: firstNameInput =>{
                            if(firstNameInput){
                                return true;
                            }
                            console.log("Please enter this employee's first name!");
                            return false;
                        }
                    },
                    {
                        type: "input",
                        name: "last_name",
                        message: "What is this employee's last name?",
                        validate: lastNameInput =>{
                            if(lastNameInput){
                                return true;
                            }
                            console.log("Please enter this employee's last name!");
                            return false;
                        }
                    },
                    {
                        type: "number",
                        name: "role_id",
                        message: "What is this employee's role id?",
                        validate: roleIdInput =>{
                            if(roleIdInput){
                                return true;
                            }
                            console.log("Please enter this employee's role id!");
                            return false;
                        }
                    },
                    {
                        type: "number",
                        name: "manager_id",
                        message: "What is this employee's manager id?"
                    }
                ]).then(employeeData => {
                    console.log(employeeData);
                    // TODO: add employee data to sql table with new ID
                });
            }else if(answers.options === "Update an employee's role"){
                inquirer.prompt([
                    // TODO: Link employee_id to existing data employee_id
                    {
                        type: "number",
                        name: "employee_id",
                        message: "What is the ID of the employee you'd like to update?",
                        validate: updateIdInput =>{
                            if(updateIdInput){
                                // TODO: add first and last name dynamically in log
                                // console.log(`You have selected ${firstNameInput} ${lastNameInput}`);
                                return true;
                            }
                            console.log("Please enter a valid employee ID!");
                            return false;
                        }
                    },
                    {
                        type: "number",
                        name: "role_id",
                        message: "What is this employee's updated role ID?",
                        validate: updateIdInput =>{
                            if(updateIdInput){
                                return true;
                            }
                            console.log("Please enter a valid role ID!");
                            return false;
                        }
                    },
                ]).then(updatedRoleData =>{
                    console.log(updatedRoleData);
                    //TODO: return updated data to sql tables
                });
            }
        });
    });
};

userInput();
