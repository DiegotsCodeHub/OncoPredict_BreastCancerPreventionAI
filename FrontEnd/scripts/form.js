document.addEventListener('DOMContentLoaded', () => {

    // ------------------------------------------------------------------
    // 2. Funcionalidad del Formulario de Carga (Pestañas/Tabs)
    //    Aplica a la página de Cargar Datos (image_2b077d.png)
    // ------------------------------------------------------------------

    const tabButtons = document.querySelectorAll('.tabs-container .tab-button');
    const tabContent = document.querySelector('.tumor-features-section .tab-content');
    
    // Simulación simple: En una aplicación real, el contenido de tabContent
    // (los inputs) cambiaría. Aquí, solo cambiamos la clase activa del botón.
    if (tabButtons.length > 0) {
        tabButtons.forEach(button => {
            button.addEventListener('click', function() {
                // Remover 'active' de todos los botones
                tabButtons.forEach(btn => btn.classList.remove('active'));
                
                // Añadir 'active' al botón clickeado
                this.classList.add('active');
                
                // NOTA: Si tuvieras múltiples .tab-content, aquí harías el toggle
                // de la clase 'active' para el contenido correspondiente.
                
                console.log(`Pestaña seleccionada: ${this.textContent.trim()}`);
            });
        });
    }

    // Funcionalidad del botón "Limpiar Formulario"
    const cleanButton = document.querySelector('.btn-clean');
    if (cleanButton) {
        cleanButton.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Limpiar campos de Información del Paciente
            const patientIdInput = document.getElementById('patient-id');
            if (patientIdInput) {
                patientIdInput.value = '';
            }

            // Limpiar campos de Características del Tumor (todos los inputs numéricos)
            const featureInputs = document.querySelectorAll('.tab-content input[type="number"]');
            featureInputs.forEach(input => {
                input.value = '0.0'; // Resetea a 0.0
            });
            
            console.log('Formulario limpiado.');
        });
    }

});