function arraysDemo(array) {

    let sum = array[0].reduce((a, b) => a+b);
  
 for(let i = 0; i < array[0].length ; i++){
 
  let currentCol = 0;
  for(let j = 0; j < array.length; j++){
            currentCol+=array[j][i];
        }

        if(currentCol !== sum){
            return false;
        }
    }
    return true;
}

arraysDemo([[4, 5, 6], [6, 5, 4], [5, 5, 5]]);