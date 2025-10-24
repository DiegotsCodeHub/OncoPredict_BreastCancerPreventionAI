document.addEventListener('DOMContentLoaded', () => {
    // ------------------------------------------------------------------
    // 1. Funcionalidad del SIDEBAR (Navegación)
    // ------------------------------------------------------------------

    const navLinks = document.querySelectorAll('.navegacion a');

    // Función para manejar la clase 'activo'
    const setActiveLink = (currentPath) => {
        navLinks.forEach(link => {
            const listItem = link.closest('li');
            listItem.classList.remove('activo');
            
            // Comprueba si la URL del enlace coincide con la URL actual
            if (link.href && link.href.includes(currentPath)) {
                listItem.classList.add('activo');
            }
        });
    };
});

// Al cargar la página, establece el enlace activo
// (Esto asume que usarás archivos HTML separados como LoadData.html, PatientHistory.html, etc.)
const currentPath = window.location.pathname.split('/').pop().toLowerCase() || 'home.html';
setActiveLink(currentPath);
