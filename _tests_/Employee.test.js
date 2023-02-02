const employeeBase = require("../lib/Employee");

describe("employee", () => {
    let name = "lukie";
    let id = "007";
    let email = "EmbarrasingEmail2001@hotmail.com";

    const employee = new employeeBase(name, id, email);

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
        expect(employee.getRole()).toEqual("Employee");
    });
});