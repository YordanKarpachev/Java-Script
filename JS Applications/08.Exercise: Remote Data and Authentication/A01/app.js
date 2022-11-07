function attachEvents() {
    document.getElementById("submit").addEventListener("click", clickSubmitBtn);
    document.getElementById("refresh").addEventListener("click", clickRefreshBtn);
}


async function clickSubmitBtn(e) {
    const inputName = document.getElementById("controls").querySelector("[name=author]");
    const inputMsg = document.getElementById("controls").querySelector("[name=content]");

    const nameValue = inputName.value;
    const msgValue = inputMsg.value;

    await fetch("http://localhost:3030/jsonstore/messenger", {
        method: "post",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({
            author: nameValue,
            content: msgValue,
        })


    });

    clickRefreshBtn();
 

}


async function clickRefreshBtn(e) {
    const messages = document.getElementById("messages");

    const req = await fetch("http://localhost:3030/jsonstore/messenger");
    const data = await req.json();
    const dataArr = Object.values(data);
    let res = [];
    dataArr.forEach(a => res.push(`${a.author}: ${a.content}`));
    messages.textContent = res.join("\n");

}

attachEvents();