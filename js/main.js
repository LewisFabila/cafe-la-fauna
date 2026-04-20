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

// Funciones del modal para el mapa.
function abrirModal() {
    document.getElementById('fondoModal-mapa').classList.add('open');
    document.body.style.overflow = 'hidden';
    if (window.scrollY > 300) {
        BTN_SUBIR.classList.remove('visible');
    }
}
function cerrarModal() {
    document.getElementById('fondoModal-mapa').classList.remove('open');
    document.body.style.overflow = '';
    if (window.scrollY > 300) {
        BTN_SUBIR.classList.add('visible');
    }
}
function cerrarConFondo(e) {
    if (e.target === document.getElementById('fondoModal-mapa')) {
    cerrarModal();
    }
}