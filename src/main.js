function seleccionar(link) {
  var opciones = document.querySelectorAll("#links a");
  opciones.forEach((opcion) => opcion.classList.remove("seleccionado"));
  link.classList.add("seleccionado");

  // Hacemos desaparecer el menú una vez que se ha seleccionado una opción en modo responsive
  var x = document.getElementById("nav");
  x.classList.remove("mostrar");
}

document.addEventListener("DOMContentLoaded", function () {
  const animacionButton = document.querySelector(".nav-button");
  var linea1 = document.querySelector(".nav-button-line-1");
  var linea2 = document.querySelector(".nav-button-line-2");
  var linea3 = document.querySelector(".nav-button-line-3");

  animacionButton.addEventListener("click", () => {
    linea1.classList.toggle("transformation-line-1");
    linea2.classList.toggle("transformation-line-2");
    linea3.classList.toggle("transformation-line-3");

    // Muestra u oculta el menú al hacer clic en el botón de la hamburguesa
    var x = document.getElementById("nav");
    x.classList.toggle("mostrar");
  });

  // Asocia la función seleccionar() a los enlaces dentro del elemento con el id "links"
  const links = document.querySelectorAll("#links a");
  links.forEach((link) => {
    link.addEventListener("click", () => seleccionar(link));
  });
});

//función que muestra el menu responsive
function responsiveMenu() {
    var x = document.getElementById("nav")
    if (x.className === "") {
        x.className = "responsive"
    } else {
        x.className = ""
    }
}

//Detección de la posición de la barra de habilidades y aplicación de la animación de la barra de habilidades
window.onscroll = () => { efectoHabilidades() }

//funcion que aplica la animación de la barra de habilidades
function efectoHabilidades() {
    var skills = document.getElementById("skills")
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top
    if (distancia_skills >= 300) {
        document.getElementById("html").classList.add("barra-progreso1")
        document.getElementById("js").classList.add("barra-progreso2")
        document.getElementById("bd").classList.add("barra-progreso3")
        document.getElementById("ps").classList.add("barra-progreso4")
        document.getElementById("swift").classList.add("barra-progreso5")
    }
}


