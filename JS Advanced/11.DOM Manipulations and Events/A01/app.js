function addItem() {
let input = document.getElementById('newItemText');
let items = document.getElementById('items');

let newInputValue = input.value;
let litItem = document.createElement('li');
litItem.textContent = newInputValue;
items.appendChild(litItem);
input.value = ('');


}