function solve(arr) {
    let result = [];
    let current = 1;

    arr.forEach(command => {
        command == "add" ? result.push(current) : result.pop();
        current++;
 });
        result.length === 0 ? console.log("Empty") : console.log(result.join("\n"));

}

solve(['remove', 
'remove', 
'remove']);