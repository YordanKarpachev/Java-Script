let {assert} = require( "chai");
let chooseYourCar = require('./chooseYourCar');


describe("Tests …", function() {
    describe("TODO …", function() {

        it("choosingType", function() {
            assert.throw(() =>{chooseYourCar.choosingType("Pesho","Sofia", 5), "Invalid Year!"},)
            assert.throw(() =>{chooseYourCar.choosingType("Pesho","Sofia", 2025),"Invalid Year!"}, )
            assert.equal(chooseYourCar.choosingType("Sedan" , "black", 2015), "This black Sedan meets the requirements, that you have.");
            assert.equal(chooseYourCar.choosingType("Sedan" , "black", 2010), "This black Sedan meets the requirements, that you have.");
            assert.equal(chooseYourCar.choosingType("Sedan" , "black", 2000), "This Sedan is too old for you, especially with that black color.");
            assert.throw(() =>{chooseYourCar.choosingType("Pesho","Sofia", 2015),"This type of car is not what you are looking for."}, )
            assert.throw(() =>{chooseYourCar.choosingType("bwm","Sofia", 2015),"This type of car is not what you are looking for."}, )
          });



        it("brandName", function() {
          assert.throw(() =>{chooseYourCar.brandName("Pesho", 5), "Invalid Information!"},)
          assert.throw(() =>{chooseYourCar.brandName("Pesho", "5"), "Invalid Information!"},)
          assert.throw(() =>{chooseYourCar.brandName("Pesho", -5), "Invalid Information!"},)
          assert.throw(() =>{chooseYourCar.brandName([], 5), "Invalid Information!"},)
          assert.throw(() =>{chooseYourCar.brandName([], 0), "Invalid Information!"},)
          
          assert.throw(() =>{chooseYourCar.brandName("[]", -5), "Invalid Information!"},)
          assert.throw(() =>{chooseYourCar.brandName(["BMW", "Toyota", "Peugeot"], 5), "Invalid Information!"},)
          assert.equal(chooseYourCar.brandName(["BMW", "Toyota", "Peugeot, Benz"], 1 ),"BMW, Peugeot, Benz")


        });



        it("carFuelConsumption", function() {
        
          assert.throw(() =>{chooseYourCar.carFuelConsumption("Pesho", 5), "Invalid Information!"},)
          assert.throw(() =>{chooseYourCar.carFuelConsumption("Pesho", "5"), "Invalid Information!"},)
          assert.throw(() =>{chooseYourCar.carFuelConsumption("Pesho", -5), "Invalid Information!"},)
          assert.throw(() =>{chooseYourCar.carFuelConsumption( -2, 5), "Invalid Information!"},)
          assert.throw(() =>{chooseYourCar.carFuelConsumption(100, "5"), "Invalid Information!"},)
          assert.throw(() =>{chooseYourCar.carFuelConsumption(100, -5), "Invalid Information!"},)
          assert.throw(() =>{chooseYourCar.carFuelConsumption(0, 0), "Invalid Information!"},)
          assert.equal(chooseYourCar.carFuelConsumption(100, 5 ),`The car is efficient enough, it burns 5.00 liters/100 km.`)
          assert.equal(chooseYourCar.carFuelConsumption(100, 8 ),`The car burns too much fuel - 8.00 liters!`)
          assert.equal(chooseYourCar.carFuelConsumption(100, 1 ),`The car is efficient enough, it burns 1.00 liters/100 km.`)
          assert.equal(chooseYourCar.carFuelConsumption(100, 7 ),`The car is efficient enough, it burns 7.00 liters/100 km.`)
        });



        
     });

     // TODO: …
})