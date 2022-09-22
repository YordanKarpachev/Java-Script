function solve(input) {
    let result = [];
    for (let data of input) {
        let [name, level, items] = data.split(' / ');
        level = Number(level);
        items = items ? items.split(', ') : [];

        result.push({
            name,
            level,
            items
        })
    }

    console.table(JSON.stringify(result));


}

solve(['Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara']);
console.log('************');
solve(['Jake / 1000 / Gauss, HolidayGrenade']);