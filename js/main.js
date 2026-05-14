// Evento del boton para regresar el scroll.
const BTN_SUBIR = document.getElementById('botonSubir');
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        BTN_SUBIR.classList.add('visible');
    } else {
        BTN_SUBIR.classList.remove('visible');
    }
});
BTN_SUBIR.addEventListener('click', () => {
    window.scrollTo({ top: 0});
});

// Funciones de modal.
function abrirModal(idModal) {
    const modal = document.getElementById(idModal);
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
    if (window.scrollY > 300) {
        BTN_SUBIR.classList.remove('visible');
    }
}
function cerrarModal(idModal) {
    const modal = document.getElementById(idModal);
    modal.classList.remove('open');
    document.body.style.overflow = '';
    if (window.scrollY > 300) {
        BTN_SUBIR.classList.add('visible');
    }
}
function cerrarConFondo(e, idModal) {
    const modal = document.getElementById(idModal);
    if (e.target === modal) {
        cerrarModal(idModal);
    }
}

// Imagenes de la Galeria
const imagenesGaleria = document.querySelectorAll('.galeria-item');
const imagenModal = document.getElementById('galeria-imagen');
const textoModal = document.getElementById('galeria-texto');
imagenesGaleria.forEach(item => {
    item.addEventListener('click', () => {
        const imagen = item.querySelector('.galeria-imagen img');
        imagenModal.src = imagen.src;

        const texto = item
            .querySelector('.galeria-overlay h4')
            .innerText;
        textoModal.innerText = texto;
        
        abrirModal('modal-galeria');
    });
});