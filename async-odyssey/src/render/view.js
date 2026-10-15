//Capa de pintado del DOM, no se usa innerHTML

const estado = document.querySelector("#status");
const resumen = document.querySelector("#stats");
const resultados = document.querySelector("#results");

function limpiar(){
    estado.textContent = "";
    resumen.hidden = true;
    resultados.textContent = "";
}

export function mostrarCarga(){
    limpiar();
    estado.textContent = "Cargando...";
}

export function mostrarMensaje(mensaje){
    limpiar();
    estado.textContent = mensaje;
}

export function mostrarError(mensaje, reintentar){
    limpiar();
    estado.textContent = mensaje;

    const boton = document.createElement("button");
    botton.type = "button";
    botton.textContent = "Reintentar";
    botton.addEventListener("click", reintentar);
    estado.appendChild(boton);
}

export function mostrarResultados(imagenes, conteoPorDecada){
    limpiar();
    estado.textContent = `Mostrando ${imagenes.length} resultados.`;

    resumen.textContent = Object.entries(conteoPorDecada)
        .toSorted(([A], [B]) => A[0].localeCompare(B[0]))
        .map(([decada, n]) => `${decada}: ${n}`)
        .join(" - ");
    resumen.hidden = resumen.textContent === "";

    for(const { titulo, anio, imagen} of imagenes){
        const tarjeta = document.createElement("figure");

        const img = document.createElement("img");
        img.src = imagen;
        img.alt = titulo;
        img.loading = "lazy";
        img.addEventListener("error", () => tarjeta.remove());

        const pie = document.createElement("figcaption");
        pie.textContent = anio ? `${titulo} (${anio})` : titulo;

        tarjeta.append(img, pie);
        resultados.appendChild(tarjeta);
    }
}