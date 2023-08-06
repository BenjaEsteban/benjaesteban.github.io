// Animación de menú hamburguesa
const animacionButton = document.querySelector(".nav-button")
var linea1 = document.querySelector(".nav-button-line-1")
var linea2 = document.querySelector(".nav-button-line-2")
var linea3 = document.querySelector(".nav-button-line-3")

animacionButton.addEventListener("click", () => {
  linea1.classList.toggle("transformation-line-1")
  linea2.classList.toggle("transformation-line-2")
  linea3.classList.toggle("transformation-line-3")
})

//Función que me aplica el estilo a la opción seleccionada y quita la previamente seleccionada
function seleccionar(link) {
  var opciones = document.querySelectorAll("#links a")
  opciones[0].className = ""
  opciones[1].className = ""
  opciones[2].className = ""
  opciones[3].className = ""
  opciones[4].className = ""
  link.className = "seleccionado"

  // Hacemos desaparecer el menu una vez que se ha seleccionado una opcion en modo responsive
  var x = document.getElementById("nav")
  x.className = ""
  linea1.classList.toggle("transformation-line-1")
  linea2.classList.toggle("transformation-line-2")
  linea3.classList.toggle("transformation-line-3")
}

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
window.onscroll = () => {
  efectoHabilidades()
}

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

// Descarga de CV en PDF
const botonDesacarga = document.querySelector(".cv-boton")

botonDesacarga.addEventListener("click", () => {
  const url = './assets/cv.pdf'
  descargarPDF(url)
})

const descargarPDF = (url) => {
  const a = document.createElement('a')
  a.href = url
  a.target = '_blank'
  a.download = 'CV.pdf'
  a.click()
  a.remove()
}


//escuchar click del boton de idiomas

const toggleSwitch = document.getElementById('toggleSwitch');

toggleSwitch.addEventListener('click', () => {
  toggleSwitch.classList.toggle('cl-toggle-switch');
  toggleSwitch.classList.toggle('cl-toggle-switch-es');
});