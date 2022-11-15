import { cats } from "./catSeeder.js";
import { html, render } from "./node_modules/lit-html/lit-html.js"

const allCats = document.getElementById("allCats");

const ul = html`
    <ul>
    
        ${cats.map(a => createLi(a))}
    
    
        <ul />
`;


render(ul, allCats);


function createLi(cat) {
    const res = html`
                <li>
                    <img src="./images/${cat.imageLocation}.jpg" width="250" height="250" alt="Card image cap">
                    <div class="info">
                        <button @click="${bntClick}" class="showBtn">Show status code</button>
                        <div class="status" style="display: none" id="${cat.id}">
                            <h4>Status Code: ${cat.statusCode}</h4>
                            <p>Continue</p>
                        </div>
                    </div>
                </li>
    `
    return res;
}

function bntClick(e) {
   const div =  e.target.parentElement.querySelector("div");
  let style = div.style.display;
    if (style == 'none') {
        div.style.display = "block"
        e.target.textContent = "Hide status code";
       
    } else {
        div.style.display = "none";
       e.target.textContent = "Show status code'";
    }
}