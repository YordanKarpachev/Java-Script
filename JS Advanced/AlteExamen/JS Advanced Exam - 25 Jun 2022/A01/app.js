window.addEventListener("load", solve);

function solve() {

  const inputs = document.querySelectorAll('fieldset input,select');
  const buttonPublish = document.getElementById("publish");

  const tableBody = document.getElementById("table-body");
  const carList = document.getElementById("cars-list");
  const profit = document.getElementById('profit');
  let price = 0;


  const input = {

    make: inputs[0],
    model: inputs[1],
    year: inputs[2],
    fuel: inputs[3],
    sellingPrice: inputs[5],
    originalCost: inputs[4]
  }


  buttonPublish.addEventListener('click', publishClick);

  function publishClick(e) {
    e.preventDefault();

    const make = input.make.value;
    const model = input.model.value;
    const year = Number(input.year.value);
    const originalCost = Number(input.originalCost.value);
    const sellingPrice = Number(input.sellingPrice.value);
    const fuel = input.fuel.value;


    //  if (!model || !make || !year || !fuel || !input.originalCost.value || !input.sellingPrice.value || (originalCost > sellingPrice)) {
    //  return;
    //}



    let hasEmptyInput = Array.from(inputs).some(x => !x.value || x.value.trim() === '');

    if (hasEmptyInput) {
      return;
    }

    if(originalCost > sellingPrice){
      return;
    }


    const tr = createTrElement(make, model, year, originalCost, sellingPrice, fuel);

    tableBody.appendChild(tr);

    input.make.value = "";
    input.model.value = "";
    input.year.value = "";
    input.originalCost.value = "";
    input.sellingPrice.value = "";
    input.fuel.selectedIndex = -1;

  }

  function createTrElement(make, model, year, originalCost, sellingPrice, fuel) {
    const tr = document.createElement('tr');
    tr.classList.add('row');

    const AudiTd = document.createElement('td');
    AudiTd.textContent = make;
    tr.appendChild(AudiTd);

    const modelTd = document.createElement('td');
    modelTd.textContent = model;
    tr.appendChild(modelTd);

    const yearTd = document.createElement('td');
    yearTd.textContent = year;
    tr.appendChild(yearTd);

    const fuelTd = document.createElement('td');
    fuelTd.textContent = fuel;
    tr.appendChild(fuelTd);

    const originalCoste = document.createElement('td');
    originalCoste.textContent = originalCost;
    tr.appendChild(originalCoste);

    const sellingPriceTd = document.createElement('td');
    sellingPriceTd.textContent = sellingPrice;
    tr.appendChild(sellingPriceTd);


    const buttonTd = document.createElement('td');

    const buttonEdit = document.createElement('button');
    buttonEdit.classList.add("action-btn");
    buttonEdit.classList.add("edit");
    buttonEdit.textContent = "Edit";
    buttonTd.appendChild(buttonEdit);
    buttonEdit.addEventListener("click", buttonEditClick);

    const buttonSell = document.createElement('button');
    buttonSell.classList.add("action-btn");
    buttonSell.classList.add("sell");
    buttonSell.textContent = "Sell";
    buttonTd.appendChild(buttonSell);
    buttonSell.addEventListener("click", buttonSellClick)

    tr.appendChild(buttonTd);

    return tr;
  }

  function buttonEditClick(e) {

    const currentInputs = e.target.parentElement.parentElement.querySelectorAll('td')

    input.make.value = currentInputs[0].textContent;
    input.model.value = currentInputs[1].textContent;
    input.year.value = currentInputs[2].textContent;
    input.originalCost.value = currentInputs[4].textContent
    input.sellingPrice.value = currentInputs[5].textContent;
    input.fuel.value = currentInputs[3].textContent;
    e.target.parentElement.parentElement.remove()

  }

  function buttonSellClick(e) {
 
    const currentInputs = e.target.parentElement.parentElement.querySelectorAll('td')
    let li = document.createElement('li');
    li.classList.add('each-list');

    let span = document.createElement('span');
    span.textContent = `${currentInputs[0].textContent} ${currentInputs[1].textContent}`;
    li.appendChild(span);

    let spanYear = document.createElement('span');
    spanYear.textContent = `${currentInputs[2].textContent}`;
    li.appendChild(spanYear);

    let spanPrice = document.createElement('span');
    let currentPrice = Number(currentInputs[5].textContent) - Number(currentInputs[4].textContent);
    spanPrice.textContent = `${currentPrice}`;
    li.appendChild(spanPrice)


    carList.appendChild(li);
    price += currentPrice;
    e.target.parentElement.parentElement.remove();
    profit.textContent = Math.round(price).toFixed(2);
  }
}
