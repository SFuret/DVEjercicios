import { Inicio, } from "./components.js";

const routes = {
    "/Inicio": { view: () =>  m(Inicio)},
/*     "/ejemplo": { view: () => m(Layout, Header)}
 */}

m.route(document.body, "/Inicio", routes)