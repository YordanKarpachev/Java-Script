import {page, render} from "./lib.js"
import { getUserData } from "./util.js";
import { catalogView } from "./views/catalogView.js";
import { createView } from "./views/createView.js";
import { homeView } from "./views/homeView.js";
import { loginView } from "./views/loginView.js";
import { registerView } from "./views/registerView.js";
import {updateNav} from "./views/nav.js"
import { showDetails } from "./views/detailsView.js";

const main = document.getElementById("main-content")



page(middleware);
page("/", homeView);
page("/home", homeView);
page("/catalog", catalogView);
page("/login", loginView);
page("/register", registerView);
page("/create", createView);
page("/details/:id", showDetails);
//page("/edit:id", console.log("EDIT ID"));

page.start();




function middleware(ctx, next) {

    updateNav();
   ctx.render = myRender;
    ctx.updateNav = updateNav;
    const user = getUserData();
    if(user) {
        ctx.user = user;
    }
    next();
}


function myRender(content) {
    render(content, main);
}