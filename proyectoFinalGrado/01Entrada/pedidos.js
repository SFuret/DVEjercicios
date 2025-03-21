

//==========PRINCIPAL PEDIDOS(1)==================
function PrincipalPedidos()
{
    return{
        view: function(){
            return m(
             "div",{
                style:{
                    width:"100%",
                    height:"100vh",
                    backgroundColor:"red"
                }
             },"ddd"
            )
        }
    }
}

//===================GENERALES========================
function Inicio() {
    return {
      oncreate: () => {
        window.scrollTo(0, 0);
      },
      view: () => m("div", //es el body
        {
          style: {
            display: "flex",  
          }
        }, [
      // m(PrincipalPedidos)
      m(Carousel)
      ])
    };
  }
  export {Inicio};