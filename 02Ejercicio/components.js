

//==========================HEADER============
function Header() {
  return {
    view: function (vnode) {
      return m("div", {
        style: {
          width: "100%",
          height: "20vh",
          backgroundColor: "#345573",
          display: "flex",
          flexWrap: "nowrap",
          justifyContent: "space-around",
          boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.5)"
        }
      },
        vnode.children
      );
    }
  };
}

function logo() {
  return {
    view: function () {
      return m("div", {
        style: {
          width: "8%",
          height: "15vh",
          marginTop: "2vh",
          marginLeft: "20px",
        }
      },
        m("img", {
          src: "img/logo.png",
          style: {
            width: "100%",
            height: "100%"
          }
        }))
    }
  }
}



//----menu--------
const menuLI = () => {
  return {
    select: {
      model: {
        LIs: [
          { texto: "Inicio", href: "#" },
          { texto: "Página 1", href: "#" },
          { texto: "Página 2", href: "#" },
          { texto: "Página 3", href: "#" }
        ]
      }
    }
  };
};

const menu = () => {
  let data = menuLI(); // obtengo los datos del menú

  return {
    view: function () {
      return m("nav", {
        style: {
          width: "50%",
          height: "100%",
          display: "flex",
          alignItems: "center"
        }
      },
        m("ul", { //MENU PRINCIPAL
          style: {
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "0",
            margin: "0",
            listStyle: "none"
          }
        },
          data.select.model.LIs.map((li) =>
            m("li", {
              style: {
                width: "20%",
                height: "5vh",
                backgroundColor: "green",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 5px",
                borderRadius: "5px"
              },
            },
              m("a", {
                href: li.href, style: {
                  color: "white",
                  textDecoration: "none",
                  width: "100%",  // el ocupa todo el li
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "background-color 0.3s"
                },
                onmouseover: function (e) {
                  e.target.style.backgroundColor = "#F2AB41"
                },
                onmouseout: function (e) {
                  e.target.style.backgroundColor = "green"
                }
              }, li.texto))
          ))); //FIN MENU PRINCIPAL
    }
  };
};

function referencias() {
  const sitios = [
    { nombre: "Facebook", logo: 'img/facebook.svg', href: 'https://www.facebook.com/login/?next=https%3A%2F%2Fwww.facebook.com%2F%3Flocale%3Des_ES' },
    { nombre: "Instagram", logo: 'img/instagram.svg', href: 'https://www.instagram.com/accounts/login/' },
    //{nombre:"Facebook", url: m.trust('<i class="fa-brands fa-square-facebook"></i>')}
  ];
  return {
    data: sitios,
    view: function () {
      return m(
        "div", {
        style: {
          width: "20%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "2rem"
        }
      },
        this.data.map((sitio) =>
          m("div", {
            style: {
              height: "30%",
              width: "15%",
              textAlign: 'center',
              fontSize: '0.8rem'
            }
          },
            m("img", {
              src: sitio.logo,
              style: {
                width: "100%",
                height: "100%",
              }
            }), m("a", {
              href: sitio.href,
              style: {
                width: "100%",
                height: "20%",
                textDecoration: "none",
                color: "white"
              }
            }, sitio.nombre)))
      )
    }
  }
}



//================FIN HEADER =====================

//==========================ASIDE============
function Aside() {
  return {
    view: function () {
      return m("div", {
        style: {
          width: "10%",
          backgroundColor: "#96BFD9",
          //height:"60vh",
        }
      });
    }
  };
}


//==========================MAIN===========================================

//*****CARD*********/
let tarjetas = [
  { titulo: "Deportivas Mujer", urlImagen: "img/deportivasMujer.jpg", descripcion: "Similares a los de hombre, pero con diseños más estilizados, colores variados y ajuste adaptado a la anatomía femenina" },
  { titulo: "Deportivas Hombre", urlImagen: "img/deportivasHombre.jpg", descripcion: "Diseñados para comodidad y rendimiento, con materiales transpirables y suelas que amortiguan el impacto. Ideales para actividades físicas o uso diario" },
  { titulo: "Salón", urlImagen: "img/salon.jpg", descripcion: "Clásicos y sofisticados, con tacón de diferentes alturas y materiales elegantes como charol o gamuza. Perfectos para ocasiones especiales o laborales" },
  { titulo: "Vestir Hombre", urlImagen: "img/vestirHombre.jpg", descripcion: "Elegantes y formales, generalmente de cuero o materiales sintéticos, con puntera cerrada y suela resistente. Ideales para eventos o trabajo" },
  { titulo: "Niñ@s", urlImagen: "img/niños.jpg", descripcion: "Resistentes y cómodos, con cierres de velcro o cordones para mayor seguridad. Suelen tener diseños llamativos y ergonómicos para el crecimiento del pie." },
  { titulo: "Bebés", urlImagen: "img/bebes.jpg", descripcion: "Ligeros, flexibles y con materiales suaves para proteger los pies delicados del bebé. Suelas antideslizantes para mayor seguridad" },
];


function Card() {

  return {
    data: tarjetas,
    view: function () {
      return this.data.map((tarjeta) =>
        m("div", {
          style: {
            width: "30%",
            height: "50vh",
            textAlign: "center",
            border: "2px solid black"
          }
        }, m("div", { //titulo
          style: {
            width: "100%",
            height: "10vh",
            backgroundColor: "#F2AB41",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderBottom: "2px solid black"
          }
        }, tarjeta.titulo
        ),
          m( //contenedor Imagen
            "div", {
            style: {
              width: "100%",
              height: "30vh",
              borderBottom: "2px solid black"
            }
          }, m(
            "img", {
            src: tarjeta.urlImagen,
            style: {
              width: "100%",
              height: "100%"
            }
          },
          )
          ),
          m( //descripcion
            "div",
            {
              style: {
                width: "100%",
                height: "10vh",
                textAlign: "justify"
              }
            }, tarjeta.descripcion
          )



        ))
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
          display: "flex",
          flexWrap: "wrap",
          gap: "2vh",
          justifyContent: "center",
          marginTop: "5rem",
          marginBottom: "5rem"
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
      },);
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
    view: () => m("div", //BODY
      {
        style: {
          display: "flex",
          flexWrap: "wrap",
          margin: "0 auto",
          padding: "opx",
          overflowX: "scroll"
        }
      }, [
      m(Header, [m(logo), m(menu), m(referencias)]),
      m("div", { //encierra al Aside, Main, Aside
        style: {
          display: "flex",
          width: "100%",
          display: "flex",
          flexWrap: "wrap",
        }
      }, m(Aside),
        m(Main, [
          m(Card),
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