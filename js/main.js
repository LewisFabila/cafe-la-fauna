// Evento para expandir el dropdown del navbar  en desktop.
const dropDownBtn=document.getElementById('dropDownBtn'), dropDownMenu=document.getElementById('dropDownMenu');
dropDownBtn.addEventListener('click',()=>{
    const open=dropDownMenu.classList.toggle('open');
    dropDownBtn.classList.toggle('open',open);
    dropDownBtn.setAttribute('aria-expanded',open);
});

// Evento para cerrar el dropdown del navbar.
document.addEventListener('click',e=>{
    if(!dropDownBtn.contains(e.target)&&!dropDownMenu.contains(e.target)){
        dropDownMenu.classList.remove('open');dropDownBtn.classList.remove('open');
        dropDownBtn.setAttribute('aria-expanded','false');
    }
});

// Evento para cambio de icono del "menu" en moviles (abrir // cerrar).
const navMenuBtn=document.getElementById('navMenuBtn'), menuIcono=document.getElementById('menuIcono'), navMovilMenu=document.getElementById('navMovilMenu');
navMenuBtn.addEventListener('click',()=>{
    const open=navMovilMenu.classList.toggle('open');
    navMenuBtn.setAttribute('aria-expanded',open);
    menuIcono.className=open?'bi bi-x':'bi bi-list';
});

// Evento para expandir el dropdown del navbar en moviles.
const dropdownBtn=document.getElementById('dropdownBtn'), dropDownMenuMovil=document.getElementById('dropDownMenuMovil'), dropDownIcono=document.getElementById('dropDownIcono');
dropdownBtn.addEventListener('click',()=>{
    const open=dropDownMenuMovil.classList.toggle('open');
    dropDownIcono.classList.toggle('open',open);
    dropdownBtn.setAttribute('aria-expanded',open);
});

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