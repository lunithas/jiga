// Script para mostrar el contenido al hacer clic en el número 1
document.getElementById('numero').addEventListener('click', function() {
    var contenido = document.getElementById('contenido');
    contenido.style.display = 'block'; // Muestra el contenido
});
// Esperamos que el documento esté listo
$(document).ready(function() {
    // Hacemos que las tarjetas se deslicen desde abajo al cargar la página
    $(".card").each(function(index) {
        $(this).delay(200 * index).animate({
            opacity: 1,
            bottom: "0"
        }, 800);
    });
});
