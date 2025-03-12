//==========================HEADER============
function Header() {
  return {
    view: function (vnode) {
      return m("div", {
        style: {
          width: "100%",
          height: "20vh",
          backgroundColor: "#345573",
        }
      },
        vnode.children
      );
    }
  };
}

function logo(){
  return {
    view: function(){
      return m("div",{
        style:{
          width:"10%",
          height:"15vh",
          marginTop:"2vh",
          marginLeft:"20px"
        }
      },
    m("img",{
      src:"img/logo.png",
      style:{
       width:"100%",
       height:"100%"
      }
    }))
    }
  }
}


function menu(){
  return {
    view: function(){
      return m("nav",{
        style:{
           width:"50%",
           height:"100%",
           //backgroundColor:"red"
        }
      },
    m("ul",{
      style:{

      }
    },
    m("li",{
      style:{
       
      }
    },)
    ))
    }
  }
}
//================FIN HEADER =====================

//==========================ASIDE============
function Aside() {
  return {
    view: function() {
      return m("div", {
        style:{
          width:"10%",
          backgroundColor:"#96BFD9",
          //height:"60vh",
        }
      });
    }
  };
}


//==========================MAIN===========================================

//*****CARD*********/

function Titulo(){
  return {
  view: function(vnode){
    return m("div",{
      style:{
        width:"100%",
        height:"10vh",
        backgroundColor:"#F2AB41",
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        borderBottom:"2px solid black"
      }
    },
  vnode.children
  )
  }
  }
}

function ContenedorImagen(){
  return {
    view: function(vnode){
      return m(
        "div",{
          style:{
              width:"100%",
              height:"30vh",
              borderBottom:"2px solid black"
          }
        },vnode.children
      )
    }
  }
}

function Imagen(){
  return {
    view: function(vnode){
      return m(
        "img",{
          src:`${vnode.attrs.urlImagen}`,
          style:{
            width:"100%",
            height:"100%"
          }
        }, vnode.children
      )
    }
  }
}

function Descripcion(){
  return {
    view: function (vnode){
      return m(
      "div",
      {
        style:{
          width:"100%",
          height:"10vh",
          textAlign:"justify"
          
        }
      }, vnode.children
      )
    }
  }
}


function Card(){
  return{
    view: function(vnode){
   return m("div",{
    style:{
    width:"30%",
    height:"50vh",
    textAlign:"center",
    border:"2px solid black"
    }
   },vnode.children

  
  )
    }
  };
}
//***** FIN CARD*********/

function Main() {
  return {
    view: function (vnode) {
      return m("div", {
        style: {
          width: "80%", // Ajustado para ocupar el espacio restante
          display:"flex",
          flexWrap:"wrap",
          gap:"2vh",
          justifyContent:"center", 
          marginTop:"2rem",
          marginBottom:"2rem"
        }
      },
       vnode.children
      );
    }
  };
}



//==========================fin MAIN===========================================
//==========================FOOTER===========================================
function Footer() {
  return {
    view: function () {
      return m("div", {
        style: {
          width: "100%",
          height: "20vh",
          backgroundColor: "#345573",
        }
      },      );
    }
  };
}
//==========================fin FOOTER===========================================
//----------PÁGINA PRINCIPAL-----------
function Inicio() {
  return {
    oncreate: () => {
      window.scrollTo(0, 0);
    },
    view: () => m("div", //es el body
      {
        style:{
          display:"flex",
          flexWrap:"wrap",
          margin:"0 auto",
          padding:"opx",
          overflowX:"scroll"
        }
      },[
      m(Header,[m(logo)]),
      m("div", { //encierra al Aside, Main, Aside
        style: {
          display: "flex",
          width: "100%",
          display:"flex",
          flexWrap:"wrap",
        }
      },m(Aside),
        m(Main, [
                 m(Card,[m(Titulo, m("p","Deportivas Mujer")), m(ContenedorImagen,[m(Imagen,{urlImagen:"img/deportivasMujer.jpg"})]), m(Descripcion, m("p", "Diseñados para comodidad y rendimiento, con materiales transpirables y suelas que amortiguan el impacto. Ideales para actividades físicas o uso diario."))]),
                 m(Card,[m(Titulo, m("p", "Deportivas Hombre")), m(ContenedorImagen,[m(Imagen,{urlImagen:"img/deportivasHombre.jpg"})]), m(Descripcion, m("p", "Similares a los de hombre, pero con diseños más estilizados, colores variados y ajuste adaptado a la anatomía femenina."))]),
                 m(Card,[m(Titulo, m("p","Vertir Hombre")), m(ContenedorImagen,[m(Imagen,{urlImagen:"img/vestirHombre.jpg"})]), m(Descripcion,m("p","Elegantes y formales, generalmente de cuero o materiales sintéticos, con puntera cerrada y suela resistente. Ideales para eventos o trabajo"))]),
                 m(Card,[m(Titulo, m("p","Vestir Mujer")), m(ContenedorImagen,[m(Imagen,{urlImagen:"img/salon.jpg"})]), m(Descripcion, m("p", "Clásicos y sofisticados, con tacón de diferentes alturas y materiales elegantes como charol o gamuza. Perfectos para ocasiones especiales o laborales."))]),
                 m(Card,[m(Titulo, m("p", "Para niños")), m(ContenedorImagen,[m(Imagen,{urlImagen:"img/niños.jpg"})]), m(Descripcion, m("p", "Resistentes y cómodos, con cierres de velcro o cordones para mayor seguridad. Suelen tener diseños llamativos y ergonómicos para el crecimiento del pie."))]),
                 m(Card,[m(Titulo, m("p", "Bebés ")), m(ContenedorImagen,[m(Imagen,{urlImagen:"img/bebes.jpg"})]), m(Descripcion, m("p","Ligeros, flexibles y con materiales suaves para proteger los pies delicados del bebé. Suelas antideslizantes para mayor seguridad."))]),
                ]),
        m(Aside),
      ),
      m(Footer)
    ])
  };
}

// Montar la aplicación
//m.mount(document.body, Inicio);


export { Inicio };