
function arraysDemo(array, rorations) {

    for(let i = 0; i < rorations; i++){
        let lastElement = array.pop();
        array.unshift(lastElement);
    }

    console.log(array.join(' '));
}

arraysDemo(['1', '2', '3', '4'], 2)

