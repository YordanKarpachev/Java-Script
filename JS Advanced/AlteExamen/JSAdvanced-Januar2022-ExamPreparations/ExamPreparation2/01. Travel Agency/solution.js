window.addEventListener('load', solution);

function solution() {

  let submitBTN = document.getElementById('submitBTN');
  let text = document.getElementById('form').querySelectorAll('label');


  submitBTN.addEventListener('click', (e) => {
    let inputs = document.getElementById('form').querySelectorAll('input');
    let infoPreview = document.getElementById('infoPreview');


    for (let index = 0; index < text.length; index++) {
      let currentLi = document.createElement('li');
      currentLi.textContent = `${text[index].textContent} ${inputs[index].value}`;
      infoPreview.appendChild(currentLi);

      inputs[index].value = "";
    }
    submitBTN.disabled = true;
    let editButton = document.getElementById('editBTN');
    let continueButton = document.getElementById('continueBTN');

    editButton.disabled = false;
    continueButton.disabled = false;

    continueButton.addEventListener('click', ()=>{
      let block = document.getElementById('block');
      debugger
      block.innerHTML = "";
       let h3 = document.createElement('h3');
       h3.textContent = "Thank you for your reservation!";
       block.appendChild(h3)
       
 
   })

    editButton.addEventListener('click', () => {
      for (let index = 0; index < text.length; index++) {
        inputs[index].value = document.getElementById("infoPreview").querySelectorAll('li')[index].textContent.split(": ")[1];

      }
      document.getElementById("infoPreview").innerHTML = '';
      editButton.disabled = true;
      continueButton.disabled = true;
      submitBTN.disabled = false;
    });

  });


}
