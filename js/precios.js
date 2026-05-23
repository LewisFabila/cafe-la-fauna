const SHEET_URL = "https://opensheet.elk.sh/1re611U-xxCAz0Xobl5vHJY_yO9rcBVVCJcsNtkPd2y4/Precios";

async function actualizarPrecios() {
    try {
        const response = await fetch(SHEET_URL);
        if (!response.ok) throw new Error(`HTTP error: ${response.status}`);
        const precios = await response.json();
        const updates = precios.reduce((acc, { id, precio }) => {
            if (id && precio !== undefined) acc[id] = precio;
            return acc;
        }, {});
        Object.entries(updates).forEach(([id, precio]) => {
            const elemento = document.getElementById(id);
            if (elemento) elemento.textContent = `${precio}`;
        });
    } catch (error) {
        console.error("Error cargando precios:", error);
    }
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", actualizarPrecios);
} else {
    actualizarPrecios();
}