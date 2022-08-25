


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