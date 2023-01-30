const Employee = require('./Employee');

class Intern extends Employee {
  constructor(school) {
    super(name, id, email);
    this.school = school;
  }
  getGithub() {

  }

  getSchool() {

  }
  // —overridden to return 'Intern'
}
module.exports = Intern;

