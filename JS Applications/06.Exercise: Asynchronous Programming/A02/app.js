 function solve() {

    const departBtn = document.getElementById("depart");
    const arriveBtn = document.getElementById("arrive");
    const info = document.getElementsByClassName("info")[0];
    let stopName = "depot"
    let currentName = "";

      async function depart() {
        const req = await fetch(`http://localhost:3030/jsonstore/bus/schedule/${stopName}`);
        const data = await req.json();

        stopName = data.next;
        currentName = data.name;
        debugger
        info.textContent = `Next stop ${currentName}`
        departBtn.setAttribute('disabled', 'disabled')
        arriveBtn.removeAttribute("disabled")

    }

    function arrive() {
        info.textContent = `Arriving at ${currentName}`;
        departBtn.removeAttribute('disabled')
        arriveBtn.setAttribute("disabled", "disabled")
 
    }

    return {
        depart,
        arrive
    };
}

let result = solve();