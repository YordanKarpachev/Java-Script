function solve(input) {

  let res = [];

  for (let i = 1; i < input.length; i++) {
    let [townName, Latitude, Longitude] = input[i].split(' | ');
    townName = townName.replace('|', '').trim()
    Longitude = Longitude.replace('|', '').trim()
    Longitude = Number(Longitude).toFixed(2)
    Latitude = Number(Latitude).toFixed(2);
  
    let obj = {
      Town:townName,
      Latitude:Number(Latitude),
      Longitude:Number(Longitude)

    }
    res.push(obj)
  }

  console.log(JSON.stringify(res));
}




solve(['| Town | Latitude | Longitude |',
  '| Sofia | 42.696552 | 23.32601 |',
  '| Beijing | 39.913818 | 116.363625 |']);
console.log('************');
solve(['| Town | Latitude | Longitude |',
  '| Veliko Turnovo | 43.0757 | 25.6172 |',
  '| Monatevideo | 34.50 | 56.11 |']);