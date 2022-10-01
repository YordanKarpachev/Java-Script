function toggle() {
    let button = document.getElementsByClassName('button')[0];
    if (button.textContent === 'More') {
        button.textContent = 'Less'
    } else { button.textContent = 'More' }
    let text = document.querySelector('#extra');
    if(text.style.display === 'block'){
        text.style.display = 'none';
    } else{
        text.style.display = 'block';
    }
}