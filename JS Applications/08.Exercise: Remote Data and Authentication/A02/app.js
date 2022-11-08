function attachEvents() {
    document.getElementById("btnLoad").addEventListener("click", loadPerson);
    document.getElementById("btnCreate").addEventListener("click", createBtnClick);

}

function renderMsg(data) {
    const phoneBook = document.getElementById("phonebook");
    phoneBook.innerHTML = "";

    Object.values(data).forEach(a => {
        const li = document.createElement("li");
        li.setAttribute("id", a._id);
        li.textContent = `${a.person}: ${a.phone}`;
        const btn = document.createElement("button");
        btn.textContent = "Delete"
        btn.addEventListener("click", deleteBtnClick)
        li.appendChild(btn);
        phoneBook.appendChild(li)
    })


}

async function loadPerson() {
    const phone = await fetch("http://localhost:3030/jsonstore/phonebook");
    const data = await (phone.json());
    renderMsg(data)
}

async function createPerson(person, phone) {
    const body = { person: person, phone: phone }

    const req = await fetch("http://localhost:3030/jsonstore/phonebook", {
        method: "post",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(body)

    });
    

    return body;

}

async function deleteBtnClick(e) {
    const id = e.target.parentElement.id;
    const li = e.target.parentElement;

   const resp =  await fetch(`http://localhost:3030/jsonstore/phonebook/${id}`,{
        method: "delete",
        headers: {"content-type": "application/json"},
        body: JSON.stringify(null)
        
    });

    const data = await resp.json()
    li.remove();


    return data;


}

async function createBtnClick() {
    const inputPerson = document.getElementById("person");
    const personValue = inputPerson.value;

    const inputPhone = document.getElementById("phone");
    const phoneValue = inputPhone.value;
    createPerson(personValue, phoneValue);
    loadPerson();

    inputPerson.value = "";
    inputPhone.value = "";

    
}


attachEvents();