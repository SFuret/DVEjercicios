//==============GENERALES=========================
let tamanoPantalla = window.innerWidth

window.addEventListener("resize", () => {
  tamanoPantalla = window.innerWidth;
  m.redraw();
})

//==========LOGIN==================
/*function verificarLogin() {
  const usuarioEncontrado = Login.usuarios.find(user =>
      user.user === Login.nombre && user.pass === Login.contrasena
  );

  if (usuarioEncontrado) {
      alert(`✅ Login exitoso. Rol: ${usuarioEncontrado.rol}`);
  } else {
      alert("❌ Usuario o contraseña incorrectos");
  }
}*/

function Login(){
return{
    nombre: "",
    contrasena: "",
    usuarios: [],

    oninit: function(){
      m.request({
        method: "GET",
        url: "json/usuarios.json" 
    }).then(function (respuesta) {
        Login.usuarios = respuesta; 
       // console.log("Usuarios cargados:", Login.usuarios);
    }).catch(function (error) {
        console.error("Error al obtener usuarios:", error);
    });
    },
   view: function () {
      return m("div", { 
          style: {
              backgroundColor: "black",
              display: "flex",
              width: "100%",
              height: "100vh",
              position: "relative"
          }
      }, 
      m("div", { 
          style: {
              width: "100%",
              height: "100%",
              position: "absolute",
              backgroundColor: "black",
              zIndex: "0",
              opacity: "60%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
          }
      },
      m("div", { 
          style: {
              width: "35%",
              height: "80%",
              backgroundColor: "gray",
              borderRadius: "20px",
              padding: "20px",
          }
      },
      m("div", { 
          style: {
              width: "90%",
              height: "25%",
              display: "flex",
              alignItems: "center",
              marginTop: "5%"
          }
      },
      m("img", { 
          src: "img/logo.png",
          style: {
              width: "30%",
              height: "auto"
          }
      })),
      m("form", {
          onsubmit: function (e) {
          e.preventDefault();
          const usuarioEncontrado = Login.usuarios.find(user =>
            user.user === Login.nombre && user.pass === Login.contrasena
          );
        
          if (usuarioEncontrado) {
              alert(`✅ Login exitoso. Rol: ${usuarioEncontrado.rol}`);
          } else {
              alert("❌ Usuario o contraseña incorrectos");
          }
          },
          style: {
              height: "70%",
              width: "60%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              gap: "2vh"
          }
      },
      m("div", {
          style: {
              width: "100%",
              display: "flex",
              justifyContent: "start",
              flexWrap: "wrap"
          }
      }, 
      m("label", { style: { width: "100%" } }, "Nombre"),
      m("input", {
          type: "text",
          oninput: function (e) { Login.nombre = e.target.value; },
          style: { width: "100%", height: "5vh" }
      })),
      m("div", {
          style: {
              width: "100%",
              display: "flex",
              justifyContent: "start",
              flexWrap: "wrap"
          }
      }, 
      m("label", { style: { width: "100%" } }, "Contraseña"),
      m("input", {
          type: "password",
          oninput: function (e) { Login.contrasena = e.target.value; },
          style: { width: "100%", height: "5vh" }
      })),
      m("button", {
          type: "submit",
          style: {
              width: "100%",
              height: "5vh",
              borderRadius: "5px",
              fontWeight: "bolder",
              border: "none",
              backgroundColor: "black",
              color: "white",
              background: "linear-gradient(50deg, #D96704, #40240C)"
          }
      }, "Iniciar Sesión")
      ),     
      )),
      m("img", { 
          src: "img/fondo.jpg",
          style: {
              width: "100%",
              height: "100%",
              flex: "0 1 1280px"
          }
      }));
  }
}
};
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
      m(Login)
    ])
  };
}
export { Inicio };