import { html } from "../../node_modules/lit-html/lit-html.js";
import { getAll } from "../api/data.js";



const template = (animal) => html`<section id="dashboard">
    <h2 class="dashboard-title">Services for every animal</h2>
    <div class="animals-dashboard">

        ${ animal.length == 0 ? 
   
       html  ` <div>
                    <p class="no-pets">No pets in dashboard</p>
                </div>`:
                     animal.map(a => rendAnimal(a)) 
         }
 </div>
</section>
`;



 export async function  catalogView  (ctx, next)  {
    const animal= await getAll();
    ctx.render(template(animal))


    next()
}



function rendAnimal(animal) {

    const animalTemplate = html`<div class="animals-board">
                <div class="animals-board">
                    <article class="service-img">
                        <img class="animal-image-cover" src="${animal.image}">
                    </article>
                    <h2 class="name">${animal.name}</h2>
                    <h3 class="breed">${animal.breed}</h3>
                    <div class="action">
                        <a class="btn"  href="/catalog/${ animal._id}">Details</a>
                    </div>
                </div>`;

    return animalTemplate;
  
   }


