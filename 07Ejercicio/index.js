import { Inicio } from "./components.js";
import { Layout } from "./components.js";
import { Contacto } from "./components.js";  // Asegúrate de importar Contacto

const routes = {
  "/Inicio": { view: () => m(Layout,[m(Inicio)]) },
  "/Contacto": { view: () =>  m(Layout,[m(Contacto)]) }, // Nueva ruta para la página de contacto
};

m.route(document.body, "/Inicio", routes);