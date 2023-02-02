const Intern = require("../lib/Intern");

describe("Intern", () => {
    let name = "lukie";
    let id = "007";
    let email = "EmbarrasingEmail2001@hotmail.com";
    let school = "the closest one"

    const employee = new Intern(name, id, email, school);

    it("Should match the name", () => {
        expect(employee.getName()).toEqual(name);
    });
    it("Should match the ID number", () => {
        expect(employee.getId()).toEqual(id);
    });
    it("Should match the email", () => {
        expect(employee.getEmail()).toEqual(email);
    });
    it("Should match the role", () => {
        expect(employee.getRole()).toEqual("Intern");
    });
    it("Should match the github", () => {
        expect(employee.getSchool()).toEqual(school);
    });
});