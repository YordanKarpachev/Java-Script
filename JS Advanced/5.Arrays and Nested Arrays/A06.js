function solve(arr, start, end) {
 let result = [];
let startIndex = arr.indexOf(start);
let endIndex = arr.indexOf(end);


let second = arr.slice(startIndex, endIndex + 1 );
//console.log(second);
return second;


}

solve(['Pumpkin Pie','Key Lime Pie','Cherry Pie','Lemon Meringue Pie','Sugar Cream Pie'],
'Key Lime Pie',
'Lemon Meringue Pie');

solve(['Apple Crisp','Mississippi Mud Pie','Pot Pie','Steak and Cheese Pie','Butter Chicken Pie','Smoked Fish Pie'],

'Pot Pie',
'Smoked Fish Pie');