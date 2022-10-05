let {assert} = require("chai");
let{isOddOrEven} = require("../Aufgaben/A02");


    describe("A02 functions test",() => {
      
        it("test with arr", ()=>{
            assert.equal(isOddOrEven(true), undefined);
        });

        it("test with odd String-length", ()=>{
            assert.equal(isOddOrEven("Hamburg"), "odd");
        });
        it("test with even String-length", ()=>{
            assert.equal(isOddOrEven("Yordan"), "even");
        });

    });




