function solve(input) {


      if(input.dizziness){
        input.levelOfHydrated += 0.1 * input.experience * input.weight;
       input. dizziness = false;
      }


     return input;

}

solve({ weight: 80,
    experience: 1,
    levelOfHydrated: 0,
    dizziness: true });
    console.log('************');
solve({ weight: 120,
    experience: 20,
    levelOfHydrated: 200,
    dizziness: true });