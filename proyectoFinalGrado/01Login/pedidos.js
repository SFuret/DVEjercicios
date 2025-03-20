//==============GENERALES=========================
let tamanoPantalla = window.innerWidth

window.addEventListener("resize", () => {
  tamanoPantalla = window.innerWidth;
  m.redraw();
})

//==========PRINCIPAL PEDIDOS(1)==================
function PrincipalPedidos() {
  return {
    view: function () {
      return m("div", { //fondo principal
        style: {
          backgroundColor: "black",
          display: "flex",
          width: "100%",
          height: "100vh",
          position: "relative",
        }
      }, m(
        "div", { //capa superior con opacidad
        style: {
          width: "100%",
          height: "100%",
          position: "absolute",
          backgroundColor: "black",
          zIndex: "0",
          opacity: "60%",
          display: "flex",
          alignItems: "center"
        }
      },
        m("div",//contenedor del campo central
          {
            style: {
              width: "35%",
              height: "80%",
              backgroundColor: "gray",
              borderRadius: "20px",
            }
          },
          m("div",   //contenedor del logo
            {
              style: {
                width: "90%",
                height: "25%",
                display: "flex",
                alignItems: "center",
                marginTop: "5%",
                backgroundColor: tamanoPantalla < 1000 ? "white" : null
              }
            },
            m("img", {       //logo
              src: "img/logo.png",

              style: {
                width: tamanoPantalla < 1200 ? "40%" : "30%",
                height: tamanoPantalla < 800 ? "80%" : "100%",

              }
            })

          ),
          m("form", {//contenedor del formulario
            style: {
              height: "70%",
              width: "60%",
              display:"flex",
              flexDirection:"column",
              justifyContent:"center",
              gap:"2vh"
             // backgroundColor: "red"
            }
          },
            m("div", {
              style: {
              width:"100%",
              //backgroundColor:"blue",
              display:"flex",
              //alignItems:"center",
              justifyContent:"start",
              flexWrap:"wrap"
              }
            }, m("label",{
              style:{
                width:"100%",
               // textAlign:"center"
              }
            },"Nombre"),
            m("input", {
              style: {
                width: "100%",
                height: "5vh"
              }
            },)
            ),
            m("div", {
              style: {
              width:"100%",
             // backgroundColor:"blue",
              display:"flex",
              //alignItems:"center"
               justifyContent:"start",
              flexWrap:"wrap"
              }
            }, m("label",{
              style:{
                 width:"100%",
              //  textAlign:"center"
              }
            },"Contraseña"),
            m("input", {
              style: {
                width: "100%",
                height: "5vh"
              }
            },)
            ),
            m("button",{
              style:{
                width:"100%",
                height:"5vh",
                borderRadius:"5px",
                fontWeight:"bolder",
                border:"none",
                backgroundColor:"black",
                color:"white",
                background:"linear-gradient(50deg, #D96704, #40240C)"
              }
            },"Registrarse")
          )
        )
      ),
        m("img", {  //imagen de fondo
          src: "img/fondo.jpg",
          style: {
            width: "100%",
            height: "100%",
            // flexBasis: "1280px",
            // flexShrink: "1",
            // flexGrow: "0"
            flex: "0 1 1280px",

          }
        }),

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
      m(PrincipalPedidos)
    ])
  };
}
export { Inicio };