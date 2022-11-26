import { html, nothing } from "../../node_modules/lit-html/lit-html.js";
import { deleteById, getById } from "../api/data.js";
import { getUserData } from "../util.js";

const template = (pet , hasUser, isOwner, onDelete ) => html`<section id="detailsPage">
    <div class="details">
        <div class="animalPic">
            <img src="${pet.image}">
        </div>
        <div>
            <div class="animalInfo">
                <h1>Name: ${pet.name}</h1>
                <h3>Breed: ${pet.breed}</h3>
                <h4>Age: ${pet.age}</h4>
                <h4>Weight: ${pet.weight}</h4>
                <h4 class="donation">Donation: 0$</h4>
            </div>
  
          
            ${hasUser ? html` <div class="actionBtn">
  
               
               ${isOwner ? 
                html `      <a href="/edit/${pet._id}" class="edit">Edit</a>
                <a @click=${onDelete}  href="javascript:void(0)" class="remove">Delete</a>` :     
                
                html `       <a href="#" class="donate">Donate</a>`}


            </div>` : 
            
            nothing}
        </div>
    </div>
</section>`;



export async function detailsView(ctx) {

    const id = ctx.params.id;
    const pet = await getById("/" +id);

    const hasUser = !!ctx.user
    const isOwner = hasUser &&  ctx.user._id == pet._ownerId
    
    ctx.render(template(pet, hasUser, isOwner, onDelete));

async function onDelete(){
    const choice = confirm("are you sure?");
    if(choice){
        await deleteById(id);
        ctx.page.redirect("/")
    }
}

}
