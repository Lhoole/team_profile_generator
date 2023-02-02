const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
    let name = "lukie";
    let id = "007";
    let email = "EmbarrasingEmail2001@hotmail.com";
    let git = "badSEO"

    const employee = new Engineer(name, id, email, git);

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
        expect(employee.getRole()).toEqual("Engineer");
    });
    it("Should match the github", () => {
        expect(employee.getGithub()).toEqual(git);
    });
});