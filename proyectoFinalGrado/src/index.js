import {Inicio} from "./inicio.js";
import {Login} from "./login.js";
import {Principal} from "./principal.js";
const routes={
    "/Inicio": {view:()=> m(Inicio[m(Login)])},
}
m.route(document.body, "/Inicio", routes);