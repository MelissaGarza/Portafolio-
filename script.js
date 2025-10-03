document.addEventListener('DOMContentLoaded', () => {

    // --- Lógica para animaciones de scroll ---
    const sections = document.querySelectorAll('section');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1
    });

    sections.forEach(section => {
        observer.observe(section);
    });

    // --- LÓGICA PARA LOS MODALES DE PROYECTOS ---

    // Seleccionar todos los elementos que abren un modal
    const openModalButtons = document.querySelectorAll('[data-modal-target]');
    
    // Seleccionar todos los botones de cierre de los modales
    const closeModalButtons = document.querySelectorAll('.modal-close-button');
    
    // Seleccionar todos los modales (el fondo oscuro)
    const modals = document.querySelectorAll('.modal');

    // Función para abrir un modal
    const openModal = (modal) => {
        if (modal == null) return;
        modal.classList.add('active');
    };

    // Función para cerrar un modal
    const closeModal = (modal) => {
        if (modal == null) return;
        modal.classList.remove('active');
    };

    // Añadir event listener a cada tarjeta de proyecto
    openModalButtons.forEach(button => {
        button.addEventListener('click', () => {
            const modal = document.querySelector(button.dataset.modalTarget);
            openModal(modal);
        });
    });

    // Añadir event listener a cada botón de cierre
    closeModalButtons.forEach(button => {
        button.addEventListener('click', () => {
            const modal = button.closest('.modal');
            closeModal(modal);
        });
    });

    // Añadir event listener para cerrar el modal al hacer clic en el fondo
    modals.forEach(modal => {
        modal.addEventListener('click', (e) => {
            // Si se hace clic directamente en el fondo (no en el contenido)
            if (e.target === modal) {
                closeModal(modal);
            }
        });
    });

    //Evitar que el modal se abra al hacer clic en el botón de GitHub ---
    const githubButtons = document.querySelectorAll('.github-button');
    githubButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            event.stopPropagation(); // Esto evita que el clic "suba" a la tarjeta del proyecto
        });
    });

});