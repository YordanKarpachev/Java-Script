function solve() {
  let input = document.getElementById('input').value;
  let data = input.split('.').filter(x => x.length > 0);
  let output = document.getElementById('output');
  output.innerHTML = "";


  let buffer = "";
  for (let i = 0; i < data.length; i += 3) {

    let res = [];

    for (let x = 0; x < 3; x++) {
     
      if (data[i + x]) {
        res.push(data[i + x]);
       
      }

    }
    buffer += '<p>' + res.join('. ') + '.' + '</p>';

  }

  output.innerHTML = buffer;

}
