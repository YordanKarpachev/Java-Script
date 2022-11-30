import { register } from "../api/user.js";
import { html } from "./../lib.js";


const template = (onReg) => html`<section id="registerPage">
    <form @submit=${onReg}>
        <fieldset>
            <legend>Register</legend>

            <label for="email" class="vhide">Email</label>
            <input id="email" class="email" name="email" type="text" placeholder="Email">

            <label for="password" class="vhide">Password</label>
            <input id="password" class="password" name="password" type="password" placeholder="Password">

            <label for="conf-pass" class="vhide">Confirm Password:</label>
            <input id="conf-pass" class="conf-pass" name="conf-pass" type="password" placeholder="Confirm Password">

            <button type="submit" class="register">Register</button>

            <p class="field">
                <span>If you already have profile click <a href="#">here</a></span>
            </p>
        </fieldset>
    </form>
</section>`;



export const registerView = (ctx) => {


    ctx.render(template(onReg))

    async function onReg(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        const { email, password, "conf-pass": repass } = Object.fromEntries(formData)
        
        
        if (email == "" || password == "" || repass == "") {
            return alert("All fields muss be..")
        }
        
        if (password !== repass) {
            alert("pass don^t match")
        }
        

      await register(email, password)
        ctx.updateNav();
        ctx.page.redirect("/");
    }
}
console.log("register");