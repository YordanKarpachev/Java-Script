import { html } from "../../node_modules/lit-html/lit-html.js";

const userLinks = html`    <!--Only user-->
<li><a href="/create">Create Album</a></li>
<li><a href="/logout">Logout</a></li>`;

const onlyGuest = html`    <!--Only guest-->
<li><a href="/login">Login</a></li>
<li><a href="/register">Register</a></li>`;



const navigationTemplate = (user) => html`
<nav>
<img src="./images/headphones.png">
<a href="/">Home</a>
<ul>
    <!--All user-->
    <li><a href="/catalog">Catalog</a></li>
    <li><a href="/search">Search</a></li>
    ${user
        ? userLinks
        : onlyGuest
    }

</ul>
`;

export const navigationView = (ctx) => {
    return navigationTemplate(ctx.user);
}
