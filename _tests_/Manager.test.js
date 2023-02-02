const Manager = require("../lib/Manager");

describe("Manager", () => {
    let name = "lukie";
    let id = "007";
    let email = "EmbarrasingEmail2001@hotmail.com";
    let office = "MI6"

    const employee = new Manager(name, id, email, office);

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
        expect(employee.getRole()).toEqual("Manager");
    });
    it("Should match the github", () => {
        expect(employee.getofficeNumber()).toEqual(office);
    });
});