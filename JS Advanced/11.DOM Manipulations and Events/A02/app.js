function deleteByEmail() {
 let input =    document.querySelector('input');

 let emails = document.querySelectorAll('#customers td:nth-child(2)');
 let find = false;
    for(let email of emails){
        if(email.textContent == input.value){
         email.parentElement.remove();
         find = true;
        }
    }
    
    let result = document.getElementById('result');
    result.textContent = find ? 'Deleted' : 'Not found.'

}