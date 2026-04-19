// Funcion del boton para regresar el scroll.
const btn = document.getElementById('botonSubir');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        btn.classList.add('visible');
    } else {
        btn.classList.remove('visible');
    }
});

btn.addEventListener('click', () => {
    window.scrollTo({ top: 0});
});