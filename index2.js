const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const inquirer = require('inquirer');
const fs = require("fs");
var employees = [];

async function init() {
    console.log("Please input the details of the team manager")
    let person = new Promise(baseEmployee())
    await person
    .then(
    managerinfo(person))
    inquirer.prompt([
        {
          type: 'confirm',
          message: 'Add another team member?',
          name: 'continue',
        },
    ]).then((confirm) => {
        switch (confirm){
            case true: {
                teamInfo(baseEmployee)
                break
                }
            case false: {
                //dont know yet
                break
            } 
        }
    })
}
function baseEmployee () {
    inquirer.prompt([
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
    ]).then((data) => {
        const employee = new Employee(data.name, data.id, data.email)
        return employee      
});
}
function managerinfo (employee){
    inquirer.prompt([
           {
            type: 'input',
            message: 'Manager\'s office number',
            name: 'officeNumber',
          },
        ]).then((data) => {
                const manager = new Manager(employee.name, employee.id, employee.email, data.officeNumber)
                employees.push(manager)      
        });
    }
    
function teamInfo(employee){
        inquirer.prompt([
            {
            type: 'list',
            message: 'What type of employee would you like to add?',
            choices: [
                "Engineer",
                "Intern",]
            },
        ]).then((data) => { 
                switch (data.type){
                    case "Engineer": {
                        inquirer.prompt([
                            {
                                type: 'input',
                                message: 'Engineer\'s github profile',
                                name: 'github',
                            },
                        ]).then((engineerData) => {
                                const engineer = new Engineer(employee.name, employee.id, employee.email, engineerData.github)
                                employees.push(engineer)     
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
                                const intern = new Intern(employee.name, employee.id, employee.email, internData.school)
                                employees.push(intern)      
                        });
                        break;
                    }
                }
            } );
}
init()
