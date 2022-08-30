
// MENU DESPLEGABLE DE BARRA NAVEGACION
// const btnMenu = document.querySelector("#botonMenu");
// const menu = document.querySelector("#menuContenedor-nav");
// let cerrar = document.querySelector("#ham-box-inner");
// btnMenu.addEventListener("click", function() {
//     if (menu.style.visibility = "hidden"){
//         menu.style.visibility = "visible";
//         menu.style.transform = "translateX(0vw)";
//         cerrar.style.transform = "rotate(225deg)";
//         cerrar.classList.add("ham-box-inner-open");
//     }
// });
// btnMenu.addEventListener("click", function(){
//     if (menu.style.visibility = "visible"){
//         menu.style.visibility = "hidden";
//         menu.style.transform = "translateX(100vw)";
//         cerrar.style.transform = "rotate(0deg)";
//         cerrar.classList.add("ham-box-inner-close");
//     }
// })

function desplegarMenu(){
    const menu = document.querySelector("#menuContenedorNav");
    const accion = document.querySelector("#ham-box-inner");
    if (menu.style.visibility == "hidden"){
        menu.style.visibility = "visible";
        menu.style.transform = "translateX(0vw)";
        accion.style.transform = "rotate(225deg)";
        accion.classList.add("ham-box-inner-open");
    }
    else{
        menu.style.visibility = "hidden";
        menu.style.transform = "translateX(100vw)";
        cerrar.style.transform = "rotate(0deg)";
        cerrar.classList.add("ham-box-inner-close");
    }
}

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


// EVENTO IMAGEN DISEÑOWEB
function cambiarTamanioImagen(){
    var identificador = document.getElementById("ien-titulo");
    if (identificador.style.width == "10%") {
        identificador.style.height = "400px";
        identificador.style.width = "500px";
    }
    else {
        identificador.style.height = "10%";
        identificador.style.width = "10%";
    }
    img.style.transition = "transform 0.25s ease";
}