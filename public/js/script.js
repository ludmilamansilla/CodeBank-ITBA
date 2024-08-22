/* ----------------------------------------------------------------------- */
/* HEADER */
/* ----------------------------------------------------------------------- */

/* menú hamburguesa */
function toggleMenu() {
    var menu = document.getElementById('dropdown-menu');
    menu.classList.toggle('show');
}

/* nav */
document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll('.nav-header a');
    const currentPath = window.location.pathname.split('/').pop(); // Obtiene solo el nombre del archivo

    navLinks.forEach(link => {
        // Remueve la clase 'active' de todos los enlaces
        link.classList.remove('active');

        // Obtiene el nombre del archivo desde el atributo href del enlace
        const linkPath = link.getAttribute('href').split('/').pop();

        // Añade la clase 'active' al enlace cuya href coincide con la ruta actual
        if (linkPath === currentPath) {
            link.classList.add('active');
        }
    });
});

/* busqueda */

/* Mostrar la ventana emergente de búsqueda */
document.querySelector('.search-icon').addEventListener('click', function () {
    document.getElementById('searchPopup').style.display = 'flex';
});

/* Cerrar la ventana emergente de búsqueda */
document.getElementById('closePopup').addEventListener('click', function () {
    document.getElementById('searchPopup').style.display = 'none';
});

/* Cerrar la ventana emergente al hacer clic fuera de la ventana de búsqueda */
window.addEventListener('click', function (event) {
    if (event.target === document.getElementById('searchPopup')) {
        document.getElementById('searchPopup').style.display = 'none';
    }
});
