async function getInfo() {
    const input = document.getElementById("stopId");
    const inputValue = input.value;
    const stopName = document.getElementById("stopName");
    const buses = document.getElementById("buses");
    buses.innerHTML = "";

    const url = `http://localhost:3030/jsonstore/bus/businfo/${inputValue}`;

    try {
        const res = await fetch(url);
        const data = await res.json();
        stopName.textContent = data.name;
        Object.entries(data.buses).forEach(([busId, time]) => {
            const li = document.createElement('li');
            li.textContent = `Bus ${busId} arrives in ${time} minutes`
            buses.appendChild(li);
    
        }); 
    }
    catch (e) {
        stopName.textContent = "Error"
    }






    input.value = "";

}