let { assert } = require("chai");
let companyAdministration = require('./A03');


describe("Tests …", function () {

    describe("hiringEmployee", function () {

        it("throw", function () {
            assert.throw(() => { companyAdministration.hiringEmployee("Pesho", "Sofia", 5); }, `We are not looking for workers for this position.`)
        });

        it("throw", function () {
            assert.throw(() => { companyAdministration.hiringEmployee("Pesho", "Sofia", 30); }, `We are not looking for workers for this position.`)
        });
        it("throw", function () {


            assert.equal(companyAdministration.hiringEmployee("pesho", "Programmer", 30), `pesho was successfully hired for the position Programmer.`);
        });

        it("throw", function () {


            assert.equal(companyAdministration.hiringEmployee("pesho", "Programmer", 3), `pesho was successfully hired for the position Programmer.`);
        });

        it("throw", function () {


            assert.equal(companyAdministration.hiringEmployee("pesho", "Programmer", 1), `pesho is not approved for this position.`);
        });

        it("throw", function () {

            assert.throw(()=>{companyAdministration.hiringEmployee("pesho, Programmer", -5)}, `We are not looking for workers for this position.`)
        });

    });


    describe("calculateSalary", function () {

        it("throws …", function () {

            assert.throw(() => {
                companyAdministration.calculateSalary("Peter")
            }, "Invalid hours")
        });

        it("throw …", function () {


            assert.throw(() => {
                companyAdministration.calculateSalary(-23)
            }, "Invalid hours")
        });

        it("thros …", function () {


            assert.equal(companyAdministration.calculateSalary(161), (161 * 15) + 1000);
        });

        it("thros …", function () {


            assert.equal(companyAdministration.calculateSalary(160), 160 * 15);
        });

        it("thros …", function () {

            assert.equal(companyAdministration.calculateSalary(1), 15);

        });

        it("thros …", function () {

            assert.equal(companyAdministration.calculateSalary(0), 0);

        });
    });

    describe("firedEmployee", function () {
        it("test", function () {
            assert.throw(() => {
                companyAdministration.firedEmployee(5, 1)
            }, "Invalid input")
        });

        it("test", function () {
            assert.throw(() => {
                companyAdministration.firedEmployee([], "peter")
            }, "Invalid input")
        });

        it("test", function () {
            assert.throw(() => {
                companyAdministration.firedEmployee([5], -1)
            }, "Invalid input")
        });

        it("test", function () {
            assert.throw(() => {
                companyAdministration.firedEmployee([], 1)
            }, "Invalid input")
        });

        it("test", function () {
            assert.throw(() => {
                companyAdministration.firedEmployee({}, 1)
            }, "Invalid input")
        });


        it("test", function () {
            assert.throw(() => {
                companyAdministration.firedEmployee(["dsa"], 3)
            }, "Invalid input")
        });



        it("test", function () {
            let current = companyAdministration.firedEmployee(["Petar", "Ivan", "George"], 1);
            assert.equal(current.length, 13)
        });

        it("test", function () {
            let current = companyAdministration.firedEmployee(["Petar", "Ivan", "George"], 1);
            assert.equal(companyAdministration.firedEmployee(["Petar", "Ivan", "George"], 1), 'Petar, George')
        });
    })


})