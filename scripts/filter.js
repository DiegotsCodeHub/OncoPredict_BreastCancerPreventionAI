// ------------------------------------------------------------------
// 4. Funcionalidad de Historial de Pacientes (Botones de Filtro)
// ------------------------------------------------------------------

const filterButtons = document.querySelectorAll('.filter-buttons .filter-button');

if (filterButtons.length > 0) {
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // 1. Remover la clase 'active' de todos los botones
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // 2. Añadir la clase 'active' al botón que fue clickeado
            this.classList.add('active');
            
            // En una aplicación real con datos, aquí harías una llamada a la API
            // o filtrarías la tabla de resultados. Por ahora, solo registramos el evento.
            const filterType = this.textContent.trim();
            console.log(`Filtro de Historial seleccionado: ${filterType}`);

            // 3. Opcional: Si tuvieras una tabla de historial, podrías hacer algo como:
            // updateHistoryTable(filterType);
        });
    });
}