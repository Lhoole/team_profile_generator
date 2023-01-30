const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const inquirer = require('inquirer');
const fs = require("fs");
var employees = [];

function init() {
    console.log("Please input the details of the team manager")
    inquirer.prompt([
        {
        type: 'list',
        message: 'What type of employee would you like to add?',
        choices: [
          "Engineer",
          "Manager",
          "Intern",
          "Employee",
        ],
          name: 'type',
        },
        {
            type: 'input',
            message: 'Employee\'s name',
            name: 'name',
          },
          {
              type: 'input',
              message: 'Employee\'s ID',
              name: 'id',
            },
          {
              type: 'input',
              message: 'Employee\'s email address',
              name: 'email',
           },
    ])
    .then((data) => { 
        switch (data.type){
            case "Engineer": {
                inquirer.prompt([
                    {
                        type: 'input',
                        message: 'Engineer\'s github profile',
                        name: 'github',
                    }]).then((engineerData) => {
                        const engineer = new Engineer(data.name, data.id, data.email, engineerData.github)
                        console.log(engineer)
                        console.log(engineer.getRole()) 
                        employees.push(engineer)     
                    });
                break;
            }
            case "Manager": {
                inquirer.prompt([
                        {
                          type: 'input',
                          message: 'Manager\'s office number',
                          name: 'officeNumber',
                        },
                    ]).then((managerData) => {
                        const manager = new Manager(data.name, data.id, data.email, managerData.officeNumber)
                        employees.push(manager)      
                    });
                break;
            }
            case "Intern": {
                inquirer.prompt([
                    {
                      type: 'input',
                      message: 'School intern attends',
                      name: 'school',
                    },
                ]).then((internData) => {
                    const intern = new Intern(data.name, data.id, data.email, internData.school)
                    employees.push(intern)      
                });
                break;
            }
        }
    } );
}

init()
