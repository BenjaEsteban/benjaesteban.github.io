
// const modoOscuro = document.querySelector('.btn-mode-night')

// modoOscuro.addEventListener('click', () => {
//     document.body.classList.toggle('dark')
//     modoOscuro.classList.toggle('active')
// })


// Animacion de menú hamburguesa
const animacionButton = document.querySelector('.nav-button')
var linea1 = document.querySelector('.nav-button-line-1')
var linea2 = document.querySelector('.nav-button-line-2')
var linea3 = document.querySelector('.nav-button-line-3')

animacionButton.addEventListener("click", () => {
    linea1.classList.toggle("transformation-line-1")
    linea2.classList.toggle("transformation-line-2")
    linea3.classList.toggle("transformation-line-3")
})

//Función que me aplica el estilo a la opción seleccionada y quita la previamente seleccionada
function seleccionar(link) {
    var opciones = document.querySelectorAll('#links a')
    // opciones[0].className = ""
    opciones[0].className = ""
    opciones[1].className = ""
    opciones[2].className = ""
    opciones[3].className = ""
    link.className = "seleccionado"

    //Hacemos desaparecer el menu una vez que se ha seleccionado una opcion
    //en modo responsive
    // var x = document.getElementById("nav")
    // x.className = ""
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

//detecto el scrolling para aplicar la animación del la barra de habilidades
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
    }
}