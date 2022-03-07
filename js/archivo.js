document.addEventListener("DOMContentLoaded", function () {  // cada que la pantalla se refresque me va a ejecutar esta funcion
  document.body.style.backgroundColor = window.sessionStorage.getItem("color"); 
  document.getElementById("opcionesDeColor").selectedIndex = window.sessionStorage.getItem("position");
})



function obtenerColor() {

  let color = document.getElementById("opcionesDeColor").value;
  let position = document.getElementById("opcionesDeColor").selectedIndex;

  window.sessionStorage.setItem("color", color);
  window.sessionStorage.setItem("posicion", position);
  document.body.style.backgroundColor = color;
  document.getElementById("opcionesDeColor").selectedIndex = position;
}


// document.addEventListener("DOMContentLoaded", function () {
//   document.body.style.backgroundColor = window.sessionStorage.getItem("color");
// });

// function obtenerColor() {
//   /* Para obtener el valor */
//   let color = document.getElementById("opcionesDeColor").value;
//   window.sessionStorage.setItem("color", color);
//   document.body.style.backgroundColor = color;
// }

const acordeon = () => {
  let acc = document.getElementsByClassName("tituloAcordeon");
  let i;

  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
      this.classList.toggle("activo");
      let panel = this.nextElementSibling;
      if (panel.style.display === "none") {
        panel.style.display = "block";
      } else {
        panel.style.display = "none";
      }
    });
  }
};



