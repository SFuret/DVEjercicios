

//==========================HEADER============



 //***********Inicio menú normal***********/

function HeaderNormal() {
  
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
          { texto: "Inicio", href: "/Inicio" },
          { texto: "Contacto", href: "/Contacto" },
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
                },
                onclick: (e) => {
                  e.preventDefault(); // Evitar la acción por defecto del navegador
                  if (li.href !== "#") {
                    m.route.set(li.href); // Cambia la ruta con Mithril
                  }
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

/**********Fin menú normal***********/

/*********Inicio menú hamburguesa**********/
let menuAbierto = false;  // Estado global para controlar si el menú está abierto o cerrado

function HamburgerIcon() {
  return {
    view: function() {
      return m("div", {
        style: {
          width: "30px",
          height: "20px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          cursor: "pointer"
        },
        onclick: function() {
          menuAbierto = !menuAbierto; // Cambiar el estado del menú
          m.redraw(); // Redibujar la interfaz para reflejar el cambio
        }
      },
        m("div", { style: { width: "100%", height: "4px", backgroundColor: "black" } }),
        m("div", { style: { width: "100%", height: "4px", backgroundColor: "black" } }),
        m("div", { style: { width: "100%", height: "4px", backgroundColor: "black" } })
      );
    }
  };
}

function HeaderBurger() {
  let data = menuLI(); // Obtengo los datos del menú

  return {
    view: function() {
      return m("div", {
        style: {
          width: "100%",
          backgroundColor: "#345573",
          padding: "2vh 0 2vh 1rem",
          display: "flex",
          flexDirection: "column",
          position: "fixed",
          zIndex: "5"
        }
      },
        m(HamburgerIcon), // Icono de menú hamburguesa
        menuAbierto && m("ul", {
          style: {
            width: "40%",
            display: "flex",
            flexDirection: "column",
            gap: "1vh",
            listStyle: "none",
            padding: "0"
          }
        },
          data.select.model.LIs.map((li) =>
            m("li", {
              style: {
                width: "100%",
                height:"5vh",
              }
            }, 
              m("a", {
                href: li.href,
                style: {
                  backgroundColor: "green",
                  color: "white",
                  textDecoration: "none",
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "background-color 0.3s", 
                  borderRadius: "4px",
                },
                onmouseover: function (e) {
                  e.target.style.backgroundColor = "#F2AB41";
                },
                onmouseout: function (e) {
                  e.target.style.backgroundColor = "green";
                },
                onclick: (e) => {
                  e.preventDefault(); // Evitar la acción por defecto del navegador
                  if (li.href !== "#") {
                    m.route.set(li.href); // Cambia la ruta con Mithril
                  }
                }
              }, li.texto)
            )
          )
        )
      );
    }
  };
}


/************Fin menú hamburguesa*********/

let widthPantalla = window.innerWidth; //ancho interior de la ventana en px
 
 
window.addEventListener("resize", () => {
  widthPantalla = window.innerWidth;
  m.redraw();
});

function Header() {
 
  return {
    view: function () {
      return widthPantalla < 768 ? m(HeaderBurger) : m(HeaderNormal, [m(logo), m(menu), m(referencias)]);
    },
  };
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

//***** CARD *********/
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
    selectedIndex: null, // Estado para almacenar la tarjeta seleccionada, es una propiedad de la tarjeta
    view: function (vnode) {
      return tarjetas.map((tarjeta, index) =>
        m("div", {
          style: {
            width: "30%",
           // height: "50vh",
            textAlign: "center",
            border: "2px solid black",
            boxShadow: this.selectedIndex === index ? "0px 5px 5px green" : "none",// Sombra en la tarjeta seleccionada
            flexShrink:"0",
          flexGrow:"0",
          flexBasis:"500px"
          },
          onclick: () => {
            this.selectedIndex = index; // Guarda el índice de la tarjeta seleccionada
            vnode.attrs.onCardSelect(tarjeta); // Notifica la selección al componente padre
            m.redraw(); // Redibuja la vista
          }
        },
          m("div", { // Título
            style: {
              width: "100%",
              height: "10vh",
              backgroundColor: "#F2AB41",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderBottom: "2px solid black"
            }
          }, tarjeta.titulo),
          m("div", { // Contenedor de la imagen
            style: {
              width: "100%",
              height: "30vh",
              borderBottom: "2px solid black"
            }
          },
            m("img", {
              src: tarjeta.urlImagen,
              style: {
                width: "100%",
                height: "100%"
              }
            })
          ),
          m("div", { // Descripción
            style: {
              width: "100%",
              textAlign: "justify",
            }
          }, tarjeta.descripcion)
        ));
    }
  };
}

//***** FIN CARD *********/

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
          marginBottom: "5rem",
          
        }
      },
        vnode.children
      );
    }
  };
}

function tarjetaSelecionada() {
  return {
    view: function (vnode) {
      return m("div", { // Contenedor para mostrar la tarjeta seleccionada
        style: {
          width: "80%",
          height: "15vh",
          backgroundColor: "#96BFD9",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          fontWeight: "bolder"
        }
      },
        m("p", "Tarjeta seleccionada"),
        m("p", {}, vnode.attrs.selectedCard ? vnode.attrs.selectedCard.titulo : "No hay tarjeta seleccionada") // Muestra la tarjeta seleccionada
      );
    }
  };
}
//=======================FIN MAIN=================================
//================INICIO FOOTER===================================
let datosFormulario = [
  { nombre: 'Nombre: ', input: '' },
  { nombre: 'Edad: ', input: '' },
];

let datosRespuestas = [
  { nombre: 'Tu nombre es: ' },
  { nombre: 'Tu edad es: ' }, ];
function Formulario() {

  return {
    view: function (vnode) {
      return m("div", { //padre
        style: {
          display: "flex",
          gap:"10px",
          width: "80%",
          minHeight:"80%",
          backgroundColor: "#303741",
          color: "white",
         // flexWrap:"wrap",
          alignItems:"center"
        }
      },
        m("div", {  //nivel1  panel izquierda
          style: {
            // width:`${vnode.attrs.tamaño}||"50%"`,
            width:`${vnode.attrs.tamanno}`,
            height: "100%",
            borderRight: "2px solid black",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: "1vh"
          }
        },
          datosFormulario.map((i, index) =>
            m("div", {  //nivel2 contenedor de elementos del formulario dinámico
              style: {
                height: "20%",
                display: "flex",
                gap: "10px",
              }
            },
              m("label", { //nivel3
                style: {
                  minWidth: "30%",
                  height: "100%",
                  textAlign: "end",
                }
              },
                i.nombre),
              m("input", {//nivel3
                style: {
                  height: "80%",                  
                },
                value: i.input,
                oninput: function (e) {
                  datosFormulario[index].input = e.target.value;
                }
              },)
            )

          )
        ),
        m("div", {//nivel1  panel derecha
          style:{
            display: "flex",
            flexDirection:"column",
            justifyContent: "center",    
            width:`${vnode.attrs.tamanno}`,
            height:"100%",
            gap:"1vh"
          }
        },
        datosRespuestas.map((respuesta, pos) => m("div", { //nivel2
          style: {
            width: "100%",
            height: "20%",
            display: "flex",
            justifyContent: "center",
            gap:"10px"
          }
        },
          m("label", //nivel3
            {
              style: {
                height: "100%",
                minWidth: "30%",
                margin:"0",
                padding:"0"
              }
            }, respuesta.nombre,
          ),
          m("p", { //nivel3
            style: {
              height: "100%",
              width: "60%",
              margin:"0",
              padding:"0",
            },
          }, datosFormulario[pos]?.input || "")
        ))

      )
        
      )
    }
  }
}


function Footer() {
  return {
    view: function (vnode) {
      return m("div", {
        style: {
          width: "100%",
          minHeight: "20vh",
          backgroundColor: "#345573",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"

        }
      }, vnode.children);
    }
  };
}

//=================FIN FOOTER=====================================




//============= PÁGINA INICIO ==============
function Inicio() {
  let selectedCard = null; // Estado global para la tarjeta seleccionada

  function handleCardSelect(tarjeta) {
    selectedCard = tarjeta;
    m.redraw(); // Redibuja la vista cuando cambia la selección
  }

  return {
    oncreate: () => {
      window.scrollTo(0, 0);
    },
    view: () => m("div", {
      style: {
        display: "flex",
        flexWrap: "wrap",
        margin: "0 auto",
        padding: "0px",
        overflowX: "scroll",
        minWidth:"740px"
      }
    },
      [
        m(Header),
        m("div", { // Encierra al Aside, Main, Aside
          style: {
            display: "flex",
            width: "100%",
            flexWrap: "wrap", 
            minWidth:"693px"
          }
        },
          m(Aside),
          m(Main, [
            m(Card, { onCardSelect: handleCardSelect }), // Pasamos la función de selección a Card
            m(tarjetaSelecionada, { selectedCard: selectedCard }) // Pasamos la tarjeta seleccionada a tarjetaSelecionada , el primer selectedCard es el atributo del componente tarjetaSeleccionada
          ]),
          m(Aside),
        ),
        m(Footer, [m(Formulario,{tamanno:widthPantalla < 750? "100%":"49%"})])
      ]
    )
  };
}

//============= FIN PÁGINA INICIO ==============

//============= PÁGINA CONTACTO ==============
function Contacto() {
  return {
    view: () => m("div", {
      style: {
        display: "flex",
        flexWrap: "wrap",
        margin: "0 auto",
        padding: "0px",
        overflowX: "scroll",
        minWidth: "740px"
      }
    },
      [
        m(Header), // El header sigue siendo el mismo
        m("div", { // Aquí se coloca el contenido principal de Contacto
          style: {
            display: "flex",
            width: "100%",
            flexWrap: "wrap", 
            minWidth:"693px"
          }
        },
          m(Aside),
          m(Main, [
            m("div", { style: { width: "100%", textAlign: "center" } }, "Esta es la página de Contacto") // Aquí tu contenido de Contacto
          ]),
          m(Aside),
        ),
        m(Footer)
      ]
    )
  };
}

//============= FIN PÁGINA CONTACTO ==============

export { Inicio };
export { Contacto };




 
 