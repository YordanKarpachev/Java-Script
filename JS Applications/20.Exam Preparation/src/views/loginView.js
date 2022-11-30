import { login } from "../api/user.js";
import { html } from "./../lib.js";

const template = (onLogin) => html`    
    <section id="loginPage">
        <form @submit=${onLogin}>
            <fieldset>
                <legend>Login</legend>
    
                <label for="email" class="vhide">Email</label>
                <input id="email" class="email" name="email" type="text" placeholder="Email">
    
                <label for="password" class="vhide">Password</label>
                <input id="password" class="password" name="password" type="password" placeholder="Password">
    
                <button type="submit" class="login">Login</button>
    
                <p class="field">
                    <span>If you don't have profile click <a href="#">here</a></span>
                </p>
            </fieldset>
        </form>
    </section>`;



export async function loginView(ctx) {


    ctx.render(template(onLogin))



    async function onLogin(event) {
        event.preventDefault();

        const formData = new FormData(event.target);
        const  {email, password} = Object.fromEntries(formData)


        if (!email || !password) {
            return alert("All fields muss be..")
        }

        await login(email, password);
        ctx.updateNav();
        ctx.page.redirect("/");
    }

}
