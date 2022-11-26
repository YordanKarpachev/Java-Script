import { render } from "../node_modules/lit-html/lit-html.js"
import page from "../node_modules/page/page.mjs"
import { getUserData } from "./util.js";

import { catalogView } from "./views/catalogView.js";
import { createView } from "./views/createView.js";
import { detailsView } from "./views/detailsView.js";
import { homeView } from "./views/homeView.js";
import { loginView } from "./views/loginView.js";

import { registerView } from "./views/registerView.js";





const main = document.getElementById("content");


page(middleware);

page("/", homeView);
page("/catalog", catalogView);
page("/catalog/:id", detailsView);
page("/edit/:id", detailsView);
page("/login", loginView);
page("/register", registerView);
page("/create", createView);

page.start();




function middleware(ctx, next) {

    ctx.render = myRender;
    ctx.user = getUserData();
next()
}


function myRender(content) {
    render(content, main);

    checkForUsers();
}


export function checkForUsers() {
    const user = getUserData();
    if (user) {
        Array.from(document.getElementsByClassName("guest")).forEach(a => a.style.display = "none");
        Array.from(document.getElementsByClassName("user")).forEach(a => a.style.display = "inline");

    } else {
        Array.from(document.getElementsByClassName("guest")).forEach(a => a.style.display = "inline");
        Array.from(document.getElementsByClassName("user")).forEach(a => a.style.display = "none");
    }
}