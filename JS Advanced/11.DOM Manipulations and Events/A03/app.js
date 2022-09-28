function addItem() {
    let input = document.getElementById('newItemText');
    let items = document.getElementById('items');

    let li = document.createElement('li');

    let newInput = input.value;
    li.textContent = newInput;

    items.appendChild(li);
    input.value = '';

    let deleteElement = document.createElement('a');
    deleteElement.href = '#';

    deleteElement.textContent = '[Delete]'

    deleteElement.addEventListener('click', (e) => {
        e.currentTarget.parentElement.remove();
    })

    li.appendChild(deleteElement);


}