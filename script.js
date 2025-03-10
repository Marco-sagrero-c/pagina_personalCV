document.addEventListener('DOMContentLoaded', function() {
    const button = document.createElement('button');
    button.textContent = 'Haz clic aquí';
    button.style.margin = '20px auto';
    button.style.display = 'block';
    button.style.padding = '10px 20px';
    button.style.backgroundColor = '#77aaff';
    button.style.color = '#fff';
    button.style.border = 'none';
    button.style.borderRadius = '5px';
    button.style.cursor = 'pointer';

    button.addEventListener('click', function() {
        alert('¡Gracias por visitar mi página!');
    });

    document.body.appendChild(button);
});