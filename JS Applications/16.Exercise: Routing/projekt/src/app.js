import { renderMiddleware } from "../middleware/renderMiddleware.js";
import page from "../node_modules/page/page.mjs";
import { checkUser } from "../services/authLogin.js";
import { catalogView } from "../views/catalogView.js";
import { createView } from "../views/createView.js";
import { loginView } from "../views/login.js";
import { myFurnitureView } from "../views/myFurniture.js";
import { registerView } from "../views/registerView.js";


page(renderMiddleware)
page("/", catalogView);
page("/create", createView);
page("/my-furniture", myFurnitureView);
page("/login", loginView)
page("/register", registerView)

page.start();