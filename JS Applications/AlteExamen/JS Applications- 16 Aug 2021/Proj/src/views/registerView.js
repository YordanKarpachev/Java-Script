import { register } from "../api/user.js";
import { html } from "./../lib.js";


const template =(onReg) => html`        <section id="register-page" class="content auth">
<form @submit=${onReg} id="register">
    <div class="container">
        <div class="brand-logo"></div>
        <h1>Register</h1>

        <label for="email">Email:</label>
        <input type="email" id="email" name="email" placeholder="maria@email.com">

        <label for="pass">Password:</label>
        <input type="password" name="password" id="register-password">

        <label for="con-pass">Confirm Password:</label>
        <input type="password" name="confirm-password" id="confirm-password">

        <input class="btn submit" type="submit" value="Register">

        <p class="field">
            <span>If you already have profile click <a href="#">here</a></span>
        </p>
    </div>
</form>
</section>`;



export const registerView = (ctx) => {


    ctx.render(template(onReg))

    async function onReg(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        const { email, password, "confirm-password": repass } = Object.fromEntries(formData)
        
        
        if (email == "" || password == "" || repass == "") {
            return alert("All fields muss be..")
        }
        
        if (password !== repass) {
            alert("pass don^t match")
        }
        
debugger
     await register(email, password)
        ctx.updateNav();
        ctx.page.redirect("/");
    }
}
console.log("register");