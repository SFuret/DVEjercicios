import {Inicio} from "./pedidos.js";

const routes={
    "/Inicio": {view:()=> m(Inicio)},
}
m.route(document.body, "/Inicio", routes);