function Inicio() {
    return {
      oncreate: () => {
        window.scrollTo(0, 0);
      },
      view: (vnode) => m("div", //es el body
        {
          style: {
            display: "flex",
          }
        }, 
      // m(Login),
       vnode.children
      )
    };
  }
  export{Inicio}