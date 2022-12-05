import { html } from "./../lib.js";
import { register } from "../api/user.js";

const template = (onReg) => html`      <section id="register">
<div class="form">
  <h2>Register</h2>
  <form @submit=${onReg} class="login-form">
    <input type="text" name="email" id="register-email" placeholder="email" />
    <input type="password" name="password" id="register-password" placeholder="password" />
    <input type="password" name="re-password" id="repeat-password" placeholder="repeat password" />
    <button type="submit">register</button>
    <p class="message">Already registered? <a href="/register">Login</a></p>
  </form>
</div>
</section>
`;



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