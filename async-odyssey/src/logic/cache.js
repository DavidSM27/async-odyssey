// apartado del bonus de la cache almacenada en localStorage por 10 min

const CADUCIDAD_MS = 10 * 60 * 1000; // 10 minutos en milisegundos

export function leerCache(clave){
    try{
        const guardado = JSON.parse(localStorage.getItem(clave)); // es null si no existe la clave
        if(!guardado) return null;
        if(Date.now() - guardado.guardadoEn > CADUCIDAD_MS) return null;
        return guardado.datos;
    } catch(error){
        return null; //JSON corrupto o localStorage no disponible
    }
}

export function guardarCache(clave, datos){
    try{
        localStorage.setItem(clave, JSON.stringify({guardadoEn: Date.now(), datos}));
    } catch(error){
        console.warn("No se pudo guardar en cache", error);
    }
}

export function vaciarCache(){
    localStorage.clear();
}