
// MENU DESPLEGABLE DE BARRA NAVEGACION
var mostrar = false;
function desplegarMenu(){
    const menu = document.getElementById("contenidoMenu");
    const accion = document.getElementById("ham-box-inner");
    const seccion = document.getElementById("contenedorCentral");
    const logo = document.getElementById("logoCentral");
    if (mostrar == false){
        menu.style.visibility = "visible";
        menu.style.transform = "translateX(0vw)";
        accion.style.transform = "rotate(225deg)";
        accion.classList.add("ham-box-inner-open");
        seccion.style.display = "none";
        logo.style.display = "none";
        mostrar = true;
    }
    else {
        menu.style.visibility = "hidden";
        logo.style.display = "block";
        seccion.style.display = "block";
        accion.style.transform = "rotate(0deg)";
        accion.classList.remove("ham-box-inner-open");
        mostrar = false;
    }
}

function desplazarSeccionMenu(){
    const menu = document.getElementById("contenidoMenu");
    const accion = document.getElementById("ham-box-inner");
    const seccion = document.getElementById("contenedorCentral");
    const logo = document.getElementById("logoCentral");
    menu.style.visibility = "hidden";
    menu.style.transform = "translateX(100vw)";
    accion.style.transform = "rotate(0deg)";
    logo.style.display = "block";
    seccion.style.display = "block";
    accion.classList.remove("ham-box-inner-open");
    mostrar = false;
}
// FIN MENU DESPLEGABLE DE BARRA DE NAVEGACION

// EVENTOS BOTONES ESTUDIOS SECCION 2
function cambiaF(){
    document.getElementById("facultad").style.display = "block";
    document.getElementById("cursoDW").style.display = "none";
    document.getElementById("argentinaPrograma").style.display = "none";
}

function cambiaDW(){
    document.getElementById("facultad").style.display = "none";
    document.getElementById("cursoDW").style.display = "block";
    document.getElementById("argentinaPrograma").style.display = "none";
}

function cambiaAP(){
    document.getElementById("facultad").style.display = "none";
    document.getElementById("cursoDW").style.display = "none";
    document.getElementById("argentinaPrograma").style.display = "block";
}


// SECCION PROYECTOS

// CAJA IMAGENES 
const panels = document.querySelectorAll('.panel')
const titulos = document.querySelectorAll('.tituloProyecto');

panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('active')
    })   
})

function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}

// titulos.forEach(tituloProyecto => {
//     tituloProyecto.addEventListener('click', () => {

// })
// }

// FIN CAJA IMAGENES


// TITULOS SECCION ESTUDIOS
document.querySelectorAll(".modal-container img").forEach(el => {
    el.addEventListener("click", function(ev){
        ev.stopPropagation();
        this.parentNode.classList.add("activado");
    })
});

document.querySelectorAll(".modal-container").forEach(el => {
    el.addEventListener("click", function(ev) {
        this.classList.remove("activado");
    })
});