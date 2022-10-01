function solve() {
  let text = document.getElementById("text").value;
  let convention = document.getElementById("naming-convention").value;

  let res = "";
  let output = document.getElementById("result");

  switch (convention) {
    case "Camel Case":
      text.split(" ").forEach((e, i) => {
        if (i === 0) {
          res += e[0].toLowerCase()+ e.substring(1).toLowerCase();
          return;
        } 
          res += e[0].toUpperCase() + e.substring(1).toLowerCase();
        
        return;
      })
      break;
      debugger;
    case "Pascal Case":
      text.split(" ").forEach((e, i) => {
        res += e[0].toUpperCase() + e.substring(1).toLowerCase();
        return;
      })
      break;
    default:
      res = "Error!";
  }
  output.textContent = res;
}