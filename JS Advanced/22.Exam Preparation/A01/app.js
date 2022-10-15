window.addEventListener('load', solve);

function solve() {
    let submitButton = document.querySelector("[type=submit]");
    submitButton.addEventListener("click", clickSubmitButton);

    let typeProductInput = document.getElementById("type-product");
    let descriptionInput = document.getElementById("description");
    let clientNameInput = document.getElementById("client-name");
    let clientPhoneInput = document.getElementById("client-phone");
    let receivedOrders = document.getElementById("received-orders");
    let completedOrder = document.getElementById("completed-orders");
    let clearBtn = completedOrder.querySelector('button');
    clearBtn.addEventListener('click', () =>{
        let container = completedOrder.querySelectorAll('.container')
        Array.from(container).forEach(a => a.remove());

    });

    function clickSubmitButton(e) {
        e.preventDefault();
        let description = descriptionInput.value;
        let clientName = clientNameInput.value;
        let clientPhone = clientPhoneInput.value;
        let typeProduct = typeProductInput.value;

        if (!description || !clientName || !clientPhone) {
            return;
        }

        let div = createDiv(description, clientName, clientPhone, typeProduct);


    }

    function createDiv(description, clientName, clientPhone, typeProduct) {
        let div = document.createElement('div');
        div.classList.add("container");

        let h2 = document.createElement('h2');
        h2.textContent = `Product type for repair: ${typeProduct}`;

        let h3 = document.createElement("h3");
        h3.textContent = `Client information: ${clientName}, ${clientPhone}`

        let h4 = document.createElement("h4");
        h4.textContent = `Description of the problem: ${description}`;

        let startButton = document.createElement('button');
        startButton.textContent = "Start repair";
        startButton.classList.add("start-btn");
        startButton.addEventListener("click", startRepairEvent);

        let finishButton = document.createElement('button');
        finishButton.textContent = "Finish repair"
        finishButton.classList.add("finish-btn");
        finishButton.setAttribute("disabled", true);
        finishButton.addEventListener('click', finishButtonEvent);

        div.appendChild(h2);
        div.appendChild(h3);
        div.appendChild(h4);
        div.appendChild(startButton);
        div.appendChild(finishButton);
        receivedOrders.appendChild(div);
        typeProductInput.value = "";
        descriptionInput.value = "";
        clientNameInput.value = ""
        clientPhoneInput.value = "";
    }

    function startRepairEvent(e) {
        e.target.setAttribute("disabled", true);
        let finishBtn = e.target.parentElement.getElementsByClassName("finish-btn")[0];
        finishBtn.disabled = false;

    }

    function finishButtonEvent(e) {
        let target = e.target.parentElement;
        target.querySelectorAll('button')[0].remove();
        target.querySelectorAll('button')[0].remove();
        completedOrder.appendChild(target);
    }

}