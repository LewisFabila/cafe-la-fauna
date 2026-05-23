// Utilidad para toggle de clase "open" con aria-expanded.
function toggleOpen(trigger, ...targets) {
    const open = targets[0].classList.toggle('open');
    targets.slice(1).forEach(el => el?.classList.toggle('open', open));
    trigger.setAttribute('aria-expanded', open);
    return open;
}

// Utilidad para cerrar elementos quitando la clase "open".
function closeAll(...els) {
    els.forEach(el => {
        el?.classList.remove('open');
        if (el?.hasAttribute('aria-expanded')) el.setAttribute('aria-expanded', 'false');
    });
}

// Referencias al DOM.
const dropDownBtn       = document.getElementById('dropDownBtn');
const dropDownMenu      = document.getElementById('dropDownMenu');
const navMenuBtn        = document.getElementById('navMenuBtn');
const menuIcono         = document.getElementById('menuIcono');
const navMovilMenu      = document.getElementById('navMovilMenu');
const dropdownBtn       = document.getElementById('dropdownBtn');
const dropDownMenuMovil = document.getElementById('dropDownMenuMovil');
const dropDownIcono     = document.getElementById('dropDownIcono');

// Dropdown desktop.
dropDownBtn.addEventListener('click', () =>
    toggleOpen(dropDownBtn, dropDownMenu, dropDownBtn)
);

// Menú móvil.
navMenuBtn.addEventListener('click', () => {
    const open = toggleOpen(navMenuBtn, navMovilMenu);
    menuIcono.className = open ? 'bi bi-x' : 'bi bi-list';
});

// Dropdown móvil.
dropdownBtn.addEventListener('click', () =>
    toggleOpen(dropdownBtn, dropDownMenuMovil, dropDownIcono)
);

// Cierre global al hacer click fuera.
document.addEventListener('click', ({ target }) => {
    if (!dropDownBtn.contains(target) && !dropDownMenu.contains(target)) {
        closeAll(dropDownMenu, dropDownBtn);
    }
});

// Logica del boton "subir".
const BTN_SUBIR = document.getElementById('botonSubir');
if (BTN_SUBIR) {
    const SCROLL_THRESHOLD = 300;
    const onScroll = () => {
        BTN_SUBIR.classList.toggle('visible', window.scrollY > SCROLL_THRESHOLD);
    };
    // Throttle con requestAnimationFrame para no saturar el hilo principal.
    let rafPending = false;
    window.addEventListener('scroll', () => {
        if (!rafPending) {
            rafPending = true;
            requestAnimationFrame(() => {
                onScroll();
                rafPending = false;
            });
        }
    }, { passive: true });
    BTN_SUBIR.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// Logica de actualizacion del año en el "footer".
const year = document.getElementById('año');
if (year) year.textContent = new Date().getFullYear();

// Funciones de los modales.
function abrirModal(idModal) {
    const modal = document.getElementById(idModal);
    if (!modal) return;
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
    BTN_SUBIR?.classList.remove('visible');
}

function cerrarModal(idModal) {
    const modal = document.getElementById(idModal);
    if (!modal) return;
    modal.classList.remove('open');
    document.body.style.overflow = '';
    if (window.scrollY > 300) BTN_SUBIR?.classList.add('visible');
}

function cerrarConFondo(e, idModal) {
    if (e.target === e.currentTarget) cerrarModal(idModal);
}

// Logica de la galeria.
const imagenesGaleria = document.querySelectorAll('.galeria-item');
const imagenModal     = document.getElementById('galeria-imagen');
const textoModal      = document.getElementById('galeria-texto');
if (imagenesGaleria.length && imagenModal && textoModal) {
    imagenesGaleria.forEach(item => {
        item.addEventListener('click', () => {
            const img   = item.querySelector('.galeria-imagen img');
            const titulo = item.querySelector('.galeria-overlay h4');
            if (!img || !titulo) return;
            imagenModal.src       = img.src;
            textoModal.textContent = titulo.textContent;
            abrirModal('modal-galeria');
        });
    });
}