// Función para abrir el modal y cargar el juego
function loadGame(url) {
    var gameIframe = document.getElementById('gameIframe');
    var modal = document.getElementById('gameModal');
    
    gameIframe.src = url; // Cargar la URL del juego en el iframe
    modal.style.display = "block"; // Mostrar el modal
}

// Obtener el botón de cerrar y el modal
var closeBtn = document.getElementById("closeGame");
var modal = document.getElementById("gameModal");

// Cuando el usuario hace clic en el botón de cerrar, ocultar el modal
closeBtn.addEventListener('click', function() {
    modal.style.display = "none"; // Ocultar el modal
    document.getElementById('gameIframe').src = ""; // Limpiar el iframe
});

// Event listeners para los juegos
document.getElementById('gunSpin').addEventListener('click', function() {
    loadGame('https://html5.gamedistribution.com/917cce8c44c44638a8cdc2a1794b65c8/?gd_sdk_referrer_url=https://www.minijuegos.com/juego/gun-spin');
});

document.getElementById('game2').addEventListener('click', function() {
    loadGame('https://www.minijuegos.com/juego/otro-juego');  // Cambia esta URL por el juego 2
});

document.getElementById('game3').addEventListener('click', function() {
    loadGame('https://www.minijuegos.com/juego/juego-3');  // Cambia esta URL por el juego 3
});
// script.js

function openGame(url) {
    window.open(url, '_blank'); // Abre el enlace en una nueva pestaña
}
