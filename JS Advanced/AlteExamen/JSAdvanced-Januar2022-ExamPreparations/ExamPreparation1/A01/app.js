window.addEventListener('load', solve);

function solve() {


    let buttonAdd = document.querySelector("#add");


    let inputModel = document.getElementById("model");
    let inputYear = document.querySelector("#year");
    let inputDescription = document.querySelector("#description");
    let inputPrice = document.querySelector("#price");

    let tableInformation = document.querySelector("#furniture-list");

    buttonAdd.addEventListener('click', (e) => {
        e.preventDefault();
        console.log("clicked");

        let currentTr = document.createElement('tr');

        let currentTdModel = document.createElement('td');
        currentTdModel.textContent = inputModel.value;

        let currentTdPrice = document.createElement('td');


        let price = inputPrice.value;
        currentTdPrice.textContent = Number(price).toFixed(2)


        let currentTdActions = document.createElement('td');
        let buttonMoreInfo = document.createElement('button');
        buttonMoreInfo.textContent = "More Info";
        buttonMoreInfo.classList.add('moreBtn');
        let buttonBuyIt = document.createElement('button');
        buttonBuyIt.classList.add('buyBtn');
        buttonBuyIt.textContent = "Buy it";
        currentTdActions.appendChild(buttonMoreInfo);
        currentTdActions.appendChild(buttonBuyIt);

        let lastTd = document.createElement('tr');
        let lastTdYear = document.createElement('td');
        let lastTdDescription = document.createElement('td');
        lastTdYear.textContent = `Year: ${inputYear.value}`;
        lastTdDescription.textContent = `Description: ${inputDescription.value}`
        lastTdDescription.setAttribute("colspan", 3);

        lastTd.appendChild(lastTdYear);
        lastTd.appendChild(lastTdDescription)
        lastTd.classList.add('hide');
        lastTd.style.display = 'none';

        
        
        
        
        
        buttonMoreInfo.addEventListener("click", (event) => {
            
            if (event.currentTarget.textContent == "More Info") {
                event.currentTarget.textContent = "Less Info"
                lastTd.style.display = 'contents';
                
            } else {
                event.currentTarget.textContent = "More Info"
                lastTd.style.display = "none"
            }
        });
        
        let totalPrice = document.querySelector('.total-price');

        buttonBuyIt.addEventListener('click', ()=> {
            let currentTotalPrice = Number(totalPrice.textContent);
            let lastPrice = currentTotalPrice + Number(inputPrice.value);
            totalPrice.textContent = lastPrice.toFixed(2);
            currentTr.remove();
            lastTd.remove();
        })

        currentTr.appendChild(currentTdModel);
        currentTr.appendChild(currentTdPrice);
        currentTr.appendChild(currentTdActions);
        currentTr.classList.add('info');

        tableInformation.appendChild(currentTr);

        tableInformation.appendChild(lastTd);





    });






}
