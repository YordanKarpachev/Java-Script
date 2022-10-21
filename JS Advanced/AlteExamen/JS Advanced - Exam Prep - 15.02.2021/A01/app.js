function solution() {
    const addGiftButton = document.querySelector('div button');
    const giftName = document.querySelector('div input');
    const classCardUl = document.querySelector('.card ul');
    const sendGiftSector = document.querySelectorAll('.card ul')[1];
    const discardedGifts = document.querySelectorAll('.card ul')[2];

    addGiftButton.addEventListener("click", (e) => {

        let li = liToAdd(giftName.value);
        classCardUl.appendChild(li);
        

        Array.from(classCardUl.querySelectorAll('li'))
        .sort((a,b) => a.textContent.localeCompare(b.textContent))
        .forEach(a => classCardUl.appendChild(a));

        giftName.value = "";
        
    });


    function liToAdd(name) {
        const li = document.createElement('li');
        li.classList.add("gift");
        li.textContent = name;

        const sendBtn = document.createElement('button');
        sendBtn.id = "sendButton";
        sendBtn.textContent = "Send";
        sendBtn.addEventListener('click', sendBtnEvent);
        li.appendChild(sendBtn);


        const discardBtn = document.createElement('button');
        discardBtn.id = "discardButton";
        discardBtn.textContent = "Discard";
        discardBtn.addEventListener('click', discardBtnEvent);
        li.appendChild(discardBtn);
        return li;

    };

    function sendBtnEvent(e){
        let currentLi = document.createElement('li');
        currentLi.textContent = e.currentTarget.parentElement.childNodes[0].textContent;
        currentLi.classList.add("gift");
        sendGiftSector.appendChild(currentLi);
        e.currentTarget.parentElement.remove();

    }


    function discardBtnEvent(e){
        let currentLi = document.createElement('li');   
        currentLi.textContent = e.currentTarget.parentElement.childNodes[0].textContent;
        currentLi.classList.add("gift"); 
        discardedGifts.appendChild(currentLi);
        e.currentTarget.parentElement.remove();

    }
}