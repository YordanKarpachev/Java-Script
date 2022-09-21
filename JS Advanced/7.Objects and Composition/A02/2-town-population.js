function solve(input) {
   

    let result = {}

    for(let town of input){
        let name = town.split(' <-> ')[0];
        let population = town.split(' <-> ')[1];

        if(!result[name]){
            result[name] = 0;
        }

        result[name] += Number(population);
    }
   for(let key in result){
    console.log(key + ' : ' +result[key]);
   }

}


solve(['Istanbul <-> 100000',
'Honk Kong <-> 2100004',
'Jerusalem <-> 2352344',
'Mexico City <-> 23401925',
'Istanbul <-> 1000'])
