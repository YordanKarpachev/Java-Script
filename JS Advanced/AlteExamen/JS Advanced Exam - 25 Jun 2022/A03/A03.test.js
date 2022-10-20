let { assert } = require("chai");
let carService = require('./A03');


describe("Tests …", function () {
  describe("TODO …", function () {

    it("isItExpensive …", function () {
      //  assert.throw(() =>{companyAdministration.hiringEmployee("Pesho","Sofia", 5);}, `We are not looking for workers for this position.`)
      assert.equal(carService.isItExpensive("Engine"), `The issue with the car is more severe and it will cost more money`);
      assert.equal(carService.isItExpensive("Transmission"), `The issue with the car is more severe and it will cost more money`);
      assert.equal(carService.isItExpensive("gosho"), `The overall price will be a bit cheaper`);
    });


   
   
   
    it("discount …", function () {
      //  assert.throw(() =>{companyAdministration.hiringEmployee("Pesho","Sofia", 5);}, `We are not looking for workers for this position.`)
      assert.throw(() => { carService.discount("gosho", 3), "Invalid input" })
      assert.throw(() => { carService.discount(3, "pesho"), "Invalid input" })
    assert.equal(carService.discount(3, 5),`Discount applied! You saved ${(15 / 100) * 5}$`)  
    assert.equal(carService.discount(8, 5),`Discount applied! You saved ${(30 / 100) * 5}$`) 
    assert.equal(carService.discount(1, 5),"You cannot apply a discount")   
    });


    it("partsToBuy …", function () {
      //  assert.throw(() =>{companyAdministration.hiringEmployee("Pesho","Sofia", 5);}, `We are not looking for workers for this position.`)
      assert.throw(() => { carService.partsToBuy("gosho", 3), "Invalid input" })
      assert.throw(() => { carService.partsToBuy(3, "pesho"), "Invalid input" })

      let  partsCatalog = [{ part: "blowoff valve", price: 145 }, { part: "coil springs", price: 230 }];
      let neededPart = ["blowoff valve", "coil springs" ]
      assert.equal(carService.partsToBuy(partsCatalog, neededPart),  375 );
      assert.equal(carService.partsToBuy([], neededPart),  0 );

      assert.equal(carService.partsToBuy(partsCatalog, ["blowoff valve"]),  145 );

    });



  });

  // TODO: …
})