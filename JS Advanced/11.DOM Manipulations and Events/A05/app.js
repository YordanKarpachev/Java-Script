function focused() {
  let inputs = document.getElementsByTagName('input');
  
  for(let input of inputs){
    input.addEventListener('focus', focus);
    input.addEventListener('blur', blur);

  }

  function focus(event){
    event.target.parentElement.classList.add('focused');

  }

  function blur (event){
    event.target.parentElement.classList.remove('focused');
  }

}