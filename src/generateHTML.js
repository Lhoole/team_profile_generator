const Engineer = require("../lib/Engineer");
const Manager = require("../lib/Manager");

function generateHTML(data) {
    let newNameCard = generateCard(data)
    let str = 
    ` <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Employee Profiles</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    </head>
    <body>
        <section class="header text-center bg-danger">
            <h1 class="font-weight-bold border border-primary- p-5 mb-5">
                My Team
            </h1>
        </section>
        <div class="container-fluid mx-4 align-items-center" >
            <div class="container-fluid row row-cols-1 row-cols-md-3 g-4">
                ${newNameCard}
            </div>
        </div>
    </body>
    </html>
  `;
  
  return str
  }
  function generateCard(data) {
    let namecards = ``;
    let unique = ''
    let roll = ''
    for (let i = 0; i < data.length; i++) {
        const element = data[i];
        if (element.github) {
            unique = `Github: <a href="https://github.com/${element.github}/" target="_blank" class="card-link">${element.github}</a>`
            roll = "Engineer"
        }
        if (element.officeNumber){
            unique = `Manager Office No. ${element.officeNumber}`
            roll = "Manager"
        }
        if (element.school) {
            unique = `School: ${element.school}`
            roll = "Intern"
        }

        let nameCard = `
        <div class="col mb-3 " >
                <div class="card border border-dark shadow-lg mb-3 h-100" style="width: 18rem;">
                    <div class="card-body bg-secondary">
                      <h5 class="card-title text-white">${element.name}</h5>
                      <h6 class="card-subtitle mb-2 text-white">${roll}</h6>
                      <ul class="list-group list-group-light">
                        <li class="list-group-item px-3">ID: ${element.id}</li>
                        <li class="list-group-item px-3">Email: <a href="mailto:${element.email}" class="card-link">${element.email}</a></li>
                        <li class="list-group-item px-3">${unique}</li>
                      </ul>
                    </div>
                </div>
            </div>
            ` 
            namecards += nameCard
    }

    return namecards
  }
  module.exports = generateHTML;