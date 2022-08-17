function arraysDemo(array, step) {

    let resultArr = [];

    for (let index = 0; index < array.length; index += step) {

        resultArr.push(array[index]);
    }
    return resultArr;


}