function solve() {

    const recipient = document.getElementById("recipientName");
    const title = document.getElementById("title");
    const message = document.getElementById("message");
    const addToTheListBtn = document.getElementsByClassName('action')[0].querySelectorAll('button')[0];
    addToTheListBtn.addEventListener("click", addBtnClick);
    const resetBtn = document.getElementsByClassName('action')[0].querySelectorAll('button')[1];
    resetBtn.addEventListener("click", resetBtnClick);
    const list = document.getElementById("list");
    const deletedList = document.querySelector('.delete-list');


    function addBtnClick(e) {
        e.preventDefault();
        const recipientValue = recipient.value;
        const titleValue = title.value;
        const messageValue = message.value;

        if (!recipientValue || recipientValue.trim() == "" || !titleValue || titleValue.trim() == "" || !messageValue || messageValue.trim() == "") {
            return;
        }

        const li = createLi(titleValue, recipientValue, messageValue);

        function createLi(title, recipient, message) {
            const li = document.createElement("li")

            const h4 = document.createElement('h4');
            h4.textContent = "Title: " + title;
            li.appendChild(h4);

            const h42 = document.createElement('h4');
            h42.textContent = "Recipient Name: " + recipient;
            li.appendChild(h42);

            const span = document.createElement('span');
            span.textContent = message
            li.appendChild(span);

            const divButtons = document.createElement('div');
            divButtons.id = "list-action";

            const sendButton = document.createElement('button');
            sendButton.setAttribute('type', 'submit');
            sendButton.id = "send";
            sendButton.textContent = "Send"
            sendButton.addEventListener("click", sendButtonEvent);
            divButtons.appendChild(sendButton);



            const deleteButton = document.createElement('button');
            deleteButton.setAttribute('type', "submit");
            deleteButton.id = "delete";
            deleteButton.textContent = "Delete"
            deleteButton.addEventListener("click", (e) => {

                const li = document.createElement('li');
                const spanTo = document.createElement('span');
                const info = e.currentTarget.parentElement.parentElement.querySelectorAll('h4');
                spanTo.textContent = `To: ${info[1].textContent.split(": ")[1]}`;
                li.appendChild(spanTo);

                const spanTitle = document.createElement('span');
                spanTitle.textContent = `Title: ${info[1].textContent.split(": ")[1]}`;
                li.appendChild(spanTitle);
                deletedList.appendChild(li)
                e.target.parentElement.parentElement.remove()
            });
            divButtons.appendChild(deleteButton);



            li.appendChild(divButtons);
            return li;

            function sendButtonEvent(e) {

                const send = document.getElementsByClassName("sent-list")[0];

                const currentTargetLi = e.target.parentElement.parentElement;

                let newLi = document.createElement('li');

                let spanEmail = document.createElement('span');
                spanEmail.textContent = "To: " + currentTargetLi.querySelectorAll('h4')[1].textContent.split(": ")[1];
                newLi.appendChild(spanEmail);

                let spanTitle = document.createElement('span');
                spanTitle.textContent = "Title: " + currentTargetLi.querySelectorAll('h4')[0].textContent.split(": ")[1];
                newLi.appendChild(spanTitle);

                const div = document.createElement('div');
                div.classList.add("btn");
                const currentBtnDelete = document.createElement('button');
                currentBtnDelete.type = "submit";
                currentBtnDelete.classList.add("delete");
                currentBtnDelete.textContent = "Delete";
                div.appendChild(currentBtnDelete);
                currentBtnDelete.addEventListener("click", (e) => {
                    let cLI = document.createElement('li');
                    cLI.appendChild(e.currentTarget.parentElement.parentElement.querySelectorAll('span')[0]);
                    cLI.appendChild(e.currentTarget.parentElement.parentElement.querySelectorAll('span')[0]);
                    deletedList.append(cLI);

                    e.currentTarget.parentElement.parentElement.remove()
                })
                newLi.appendChild(div);

                send.appendChild(newLi);


                currentTargetLi.remove();




            }


        }

        list.appendChild(li);






    }


    function resetBtnClick(e) {
        e.preventDefault();

        recipient.value = "";
        title.value = "";
        message.value = "";
    }




}
solve()