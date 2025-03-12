import { Inicio, } from "./components.js"

/* function Layout() {
    return {
        view: ({children}) => [
            m("header"),
            m("main"),
            children,
            m("aside")
        ]
    }
} */

const routes = {
    "/Inicio": { view: () =>  m(Inicio)},
/*     "/ejemplo": { view: () => m(Layout, Header)}
 */}

m.route(document.body, "/Inicio", routes)