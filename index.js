const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const inquirer = require('inquirer');
const fs = require("fs");
const generateHTML = require("./src/generateHTML")
const { type } = require("os");
var employees = [];

function init() {
    console.log("Please input the details of the team manager")
    baseEmployee("manager")
}

function baseEmployee (employeeType) {
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
        switch (employeeType) {
            case "manager":
                managerinfo(employee)
                break;

            case "Intern":
                interninfo(employee)
                break;

            case "Engineer":
                engineerinfo(employee)
                break;

            default:
                break;
        }
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
                continueadding()      
        });
    }
    
function engineerinfo(employee){
    inquirer.prompt([
        {
            type: 'input',
            message: 'Engineer\'s github profile',
            name: 'github',
        },
    ]).then((data) => {
            const engineer = new Engineer(employee.name, employee.id, employee.email, data.github)
            employees.push(engineer)
            continueadding()     
        });
}

function interninfo(employee){
    inquirer.prompt([
        {
            type: 'input',
            message: 'School intern attends',
            name: 'school',
        },
    ]).then((data) => {
            const intern = new Intern(employee.name, employee.id, employee.email, data.school)
            employees.push(intern) 
            continueadding()     
    });
}

function continueadding(){
    inquirer.prompt([
        {
            type: 'list',
            message: 'Would you like to add another team member?',
            choices: [
                "Yes",
                "No",],
            name: "confirm"
            }
    ]).then((data) => {
        switch (data.confirm){
            case "Yes": {
                inquirer.prompt([
                    {
                    type: 'list',
                    message: 'What type of employee would you like to add?',
                    choices: [
                        "Engineer",
                        "Intern",],
                    name: "type"
                    },
                ]).then((data) => { 
                        baseEmployee(data.type)
                    } );
                break
                }
            case "No": {
                console.log(employees)
                console.log("Generating Webpage")
                let pageData = generateHTML(employees)
                console.log(pageData)
                const filename = `./dist/index.html`;
                writeToFile(filename, pageData)  
                break
            } 
        }
    })
}
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
      err ? console.error(err) : console.log('Success!')
    );
   
}

init()
