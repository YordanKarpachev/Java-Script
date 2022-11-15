import { html, render } from "./node_modules/lit-html/lit-html.js"

const input = document.querySelector("form")
input.addEventListener("submit", onsubmit);
const root = document.getElementById("root");

function onsubmit(e) {
    e.preventDefault();

    const form = new FormData(input);
    let { towns } = Object.fromEntries(form);
    const townArr = towns.split(", ");

    const ul = createUl(townArr);
    render(ul, root);

}


function createUl(townArray) {
    const ul = html`
    <ul>
    ${townArray.map(a => html`<li>${a}</li>`)}
    </ul>
    `;

    return ul

}