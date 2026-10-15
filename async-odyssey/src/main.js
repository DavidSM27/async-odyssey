import {buscarImagenes} from './api/nasa.js';
import {normalizar, contarPorDecada} from "./logic/datos.js";
import {leerCache, guardarCache, vaciarCache} from "./logic/cache.js";
import {mostarCarga, mostrarMensaje, mostrarError, mostrarResultados} from "./render/view.js";

const MAX_TARJETAS = 24;
let ulimaBusqueda = 0;

async function buscar(consulta){
  const texto = consulta.trim().toLowerCase();
  if(!texto){
    mostrarMensaje("Escribe tu busqueda");
    return;
  }
}

const miBusqueda = ++ultimaBusqueda;
mostrarCarga();

try{
  const clave = `nasa:${texto}`;
  let imagenes = leerCache(clave);

  if(!imagenes){
    const items = await buscarImagenes(texto);
    imagenes = normalizar(items);
    guardarCache(clave, imagenes);
  }

  if(miBusqueda !== ultimaBusqueda){
    return;
  }

  if(imagenes.length === 0){
    mostrarMensaje(`Sin resultados para «${texto}».`);
    return;
  }
  mostrarResultados(imagenes.slice(0, MAX_TARJETAS), contarPorDecada(imagenes));
}catch(error){
  if(miBusqueda !== ultimaBusqueda){
    return;
  }
  mostrarError("No se pudo completar la busqueda", () => buscar(texto));
}

const formulario = document.querySelector("#search-form");
const campo = document.querySelector("#query");

formulario.addEventListener("submit", (event) => {
  e.preventDefault();
  buscar(campo.value);
});

document.querySelector("presets").addEventListener("click", (event) => {
  const boton = evengt.target.closest("button");
  if(!boton){
    return;
  }
  campo.value = boton.dataset.q;
  buscar(boton.dataset.q);
});

document.querySelector("#clear-cache").addEventListener("click", () => {
  vaciarCache();
  mostrarMensaje("Cache vaciada");
});

buscar(campo.value);