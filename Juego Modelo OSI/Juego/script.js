
// Variables para llevar el conteo de intentos y vidas restantes
/*
let intentos = 0;
let vidas = 3;

// Función para permitir el arrastre
function allowDrop(event) {
    event.preventDefault();
}

// Función para iniciar el arrastre
function drag(event) {
    event.dataTransfer.setData("text", event.target.id);
}

// Función al soltar una imagen
function drop(event) {
    event.preventDefault();
    var data = event.dataTransfer.getData("text");
    var targetId = event.target.id;

    // Verificar si el ID de la imagen coincide con el ID de la caja
    if (data === targetId) {
        event.target.appendChild(document.getElementById(data));
        // Verificar si todas las imágenes están en las cajas correctas
        verificarJuegoCompleto();
    } else {
        intentos++;

        // Verificar si se han agotado las vidas
        if (intentos >= vidas) {
            alert("¡Has perdido! Intenta de nuevo.");
            reiniciarJuego();
        }
    }
}

// Función para verificar si todas las imágenes están en las cajas correctas
function verificarJuegoCompleto() {
    var cajas = document.querySelectorAll('.figura .box');
    var todasCorrectas = true;

    cajas.forEach(function(caja) {
        if (caja.children.length === 0) {
            todasCorrectas = false;
        }
    });

    if (todasCorrectas) {
        alert("¡Felicidades! Has completado el juego.");
        reiniciarJuego();
    }
}

// Función para reiniciar el juego
function reiniciarJuego() {
    // Restaurar intentos y vidas
    intentos = 0;
    vidas = 3;

    // Restaurar posición de las imágenes
    var imagenes = document.querySelectorAll('.contenedor_imagen_capas img');
    imagenes.forEach(function(img) {
        img.style.transform = 'none';
    });

    // Limpiar cajas
    var cajas = document.querySelectorAll('.figura .box');
    cajas.forEach(function(caja) {
        caja.innerHTML = '';
    });
}

// Reiniciar el juego al cargar la página
window.onload = reiniciarJuego;*/
// Variables para llevar el conteo de intentos y vidas restantes


let intentos = 0;
let vidas = 3;

// Función para permitir el arrastre
function allowDrop(event) {
    event.preventDefault();
}

// Función para iniciar el arrastre
function drag(event) {
    event.dataTransfer.setData("text", event.target.id);
}

// Función al soltar una imagen
function drop(event) {
    event.preventDefault();
    var data = event.dataTransfer.getData("text");
    var targetId = event.target.id;

    // Verificar si el ID de la imagen coincide con el ID de la caja
    if (data === targetId) {
        event.target.appendChild(document.getElementById(data));
        // Verificar si todas las imágenes están en las cajas correctas
        verificarJuegoCompleto();
    } else {
        intentos++;

        // Restar una vida y actualizar el marcador de vidas
        vidas--;
        document.getElementById("vidas-numero").textContent = vidas;

        // Verificar si se han agotado las vidas
        if (vidas <= 0) {
            alert("¡Has perdido! Intenta de nuevo.");
            reiniciarJuego();
        }
    }
}

// Función para verificar si todas las imágenes están en las cajas correctas
function verificarJuegoCompleto() {
    var cajas = document.querySelectorAll('.figura .box');
    var todasCorrectas = true;

    cajas.forEach(function(caja) {
        if (caja.children.length === 0) {
            todasCorrectas = false;
        }
    });

    if (todasCorrectas) {
        alert("¡Felicidades! Has completado el juego.");
        reiniciarJuego();
    }
}

// Función para reiniciar el juego
function reiniciarJuego() {
    // Restaurar intentos y vidas
    intentos = 0;
    vidas = 3;

    // Restaurar posición de las imágenes
    var imagenes = document.querySelectorAll('.contenedor_imagen_capas img');
    imagenes.forEach(function(img) {
        img.style.transform = 'none';
    });

    // Limpiar cajas
    var cajas = document.querySelectorAll('.figura .box');
    cajas.forEach(function(caja) {
        caja.innerHTML = '';
    });

    // Restaurar marcador de vidas
    document.getElementById("vidas-numero").textContent = vidas;
}

// Reiniciar el juego al cargar la página
window.onload = reiniciarJuego;

