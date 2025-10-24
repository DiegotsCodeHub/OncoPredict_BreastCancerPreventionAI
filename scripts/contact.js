document.addEventListener('DOMContentLoaded', () => {
    // ------------------------------------------------------------------
    // 3. Funcionalidad de Ayuda/Contacto (Acordeón de Variables)
    //    Aplica a la página de Ayuda / Contacto (image_1fa5d9.png)
    // ------------------------------------------------------------------

    const accordionHeaders = document.querySelectorAll('.variable-accordion .accordion-header');

    accordionHeaders.forEach(header => {
        header.addEventListener('click', function () {
            const item = this.closest('.accordion-item');
            const content = item.querySelector('.accordion-content');

            // Alternar la clase 'open' en el item
            item.classList.toggle('open');

            // Alternar la visibilidad del contenido usando el estilo 'display'
            if (content) {
                if (item.classList.contains('open')) {
                    // Mostrar contenido
                    content.style.display = 'block';
                } else {
                    // Ocultar contenido
                    content.style.display = 'none';
                }
            }

            console.log(`Acordeón Toggledo: ${item.querySelector('.variable-title').textContent}`);
        });
    });
});