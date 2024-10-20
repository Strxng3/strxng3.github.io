document.addEventListener("DOMContentLoaded", function() {
    // Código existente para cambiar el color de fondo
    const button = document.createElement('button');
    button.textContent = 'Cambiar color de fondo';
    document.body.appendChild(button);

    button.addEventListener('click', function() {
        const currentColor = document.body.style.backgroundColor;
        document.body.style.backgroundColor = currentColor === 'peachpuff' ? 'lavender' : 'peachpuff';
    });

    // Nuevo código para ajustar el margen del cuerpo con la interacción de la barra lateral
    document.getElementById('sidebar').addEventListener('mouseover', function() {
        document.body.style.marginLeft = '250px';
    });

    document.getElementById('sidebar').addEventListener('mouseout', function() {
        document.body.style.marginLeft = '80px';
    });
});
