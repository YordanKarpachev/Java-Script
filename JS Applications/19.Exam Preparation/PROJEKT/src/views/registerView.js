import { html } from "../../node_modules/lit-html/lit-html.js";
import { register } from "../api/user.js";
import page from "../../node_modules/page/page.mjs";

const template = html`        <section id="registerPage">
<form @submit=${clickReg} class="registerForm">
    <img src="./images/logo.png" alt="logo" />
    <h2>Register</h2>
    <div class="on-dark">
        <label for="email">Email:</label>
        <input id="email" name="email" type="text" placeholder="steven@abv.bg" value="">
    </div>

    <div class="on-dark">
        <label for="password">Password:</label>
        <input id="password" name="password" type="password" placeholder="********" value="">
    </div>

    <div class="on-dark">
        <label for="repeatPassword">Repeat Password:</label>
        <input id="repeatPassword" name="repeatPassword" type="password" placeholder="********" value="">
    </div>

    <button  class="btn" type="submit">Register</button>

    <p class="field">
        <span>If you have profile click <a href="#">here</a></span>
    </p>
</form>
</section>
`;



export const registerView = (ctx, next) => {
   

    ctx.render(template)

    next()
}

function clickReg(e){
    e.preventDefault()
    const data = new FormData(e.target);
    const {email, password, repeatPassword} = Object.fromEntries(data);


    if (email == "" || password == "" || repeatPassword == "") {
        return alert("all Field muss");
    }

    if(password != repeatPassword){
        return alert("password don´t match")
    }
    debugger
    register(email, password)
    page.redirect("/")
}
