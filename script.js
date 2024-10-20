document.addEventListener("DOMContentLoaded", function() {
    const button = document.createElement('button'); // Crea un nuevo botón
    button.textContent = 'Cambiar color de fondo';   // Texto del botón
    document.body.appendChild(button);               // Añade el botón al cuerpo del documento

    button.addEventListener('click', function() {    // Función que se ejecuta al hacer clic
        const currentColor = document.body.style.backgroundColor;
        document.body.style.backgroundColor = currentColor === 'peachpuff' ? 'lavender' : 'peachpuff'; // Cambia el color de fondo
    });
});
