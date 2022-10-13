let { assert } = require('chai');
const { suitableTitles } = require('./A003');
const bookSelection = require('./A003');


describe("Tests", function () {


    describe(" isGenreSuitable", function () {


        it("u12 …", function () {
            assert.equal(bookSelection.isGenreSuitable("Thriller", 11), `Books with Thriller genre are not suitable for kids at 11 age`)
        });

        it("TODO …", function () {
            assert.equal(bookSelection.isGenreSuitable("Thriller", 15), `Those books are suitable`);


        });

        it("u12 …", function () {
            assert.equal(bookSelection.isGenreSuitable("Horror", 11), `Books with Horror genre are not suitable for kids at 11 age`)
        });

        it("TODO …", function () {
            assert.equal(bookSelection.isGenreSuitable("Horror", 15), `Those books are suitable`);


        });

    });

   
    describe("isItAffordable", function () {


        it("u12 …", function () {
            assert.equal(bookSelection.isItAffordable(15, 10), "You don't have enough money");
        });

        it("u12 …", function () {
            assert.equal(bookSelection.isItAffordable(10, 15), `Book bought. You have 5$ left`);
        });

        it("u12 …", function () {
            assert.throw(() => {bookSelection.isItAffordable("10", 15)}, "Invalid input");
        });

        it("u12 …", function () {
            assert.throw(() => {bookSelection.isItAffordable(10, "15")}, "Invalid input");
        });

    

    });


    describe("suitableTitles", function () {
        let title = [{ title: "The Da Vinci Code", genre: "Thriller" }]
            let res = ["The Da Vinci Code"];
        it("throws", function () {
           assert.throw(() => {bookSelection.suitableTitles(1, 1), "Invalid input"})
           assert.throw(() => {bookSelection.suitableTitles("1"," 1"), "Invalid input"})
        });

        it("correct", function(){

            assert.isArray(bookSelection.suitableTitles(title, "Thriller"));
        });
        it("correct", function(){

            assert.equal(bookSelection.suitableTitles(title, "Thriller").join(" "), res.join(" "));
        });


    

    });



});