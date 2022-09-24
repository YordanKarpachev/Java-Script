function colorize() {
let rowsElement = document.getElementsByTagName('tr');
let rows = Array.from(rowsElement);

rows.forEach((e, i) => {
    if(i % 2 != 0){
        e.style.background = "teal";
    }
})
}