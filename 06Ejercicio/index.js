import { Inicio } from "./components.js";
import { Contacto } from "./components.js";  // Asegúrate de importar Contacto

const routes = {
  "/Inicio": { view: () => m(Inicio) },
  "/Contacto": { view: () => m(Contacto) }, // Nueva ruta para la página de contacto
};

m.route(document.body, "/Inicio", routes);