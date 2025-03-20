import { Inicio } from "./components.js";
import { Layout } from "./components.js";
import { Contacto } from "./components.js"; 
import { Tarjeta } from "./components.js"; 
//import { Tarejat } from "./components.js";

const routes = {
  "/Inicio": { view: () => m(Layout,[m(Inicio)]) },
  "/Contacto": { view: () =>  m(Layout,[m(Contacto)]) }, // Nueva ruta para la página de contacto
  "/Tarjeta/:id": { view: () => m(Layout, [m(Tarjeta)]) },// Nueva ruta para la página de contacto

};

m.route(document.body, "/Inicio", routes);

