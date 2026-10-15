//todo el codigo de la parte logica , se transforman los datos con map y filter reduce

// Convierte la respuesta cruda de la API en objetos sencillos faciles de manejar
export function normalizar(items){
    return items
        .map((item) => ({
            titulo: item.data?.[0]?.title,
            anio: Number(item.data?.[0]?.date_created?.slice(0,4)) || null,
            imagen: item.links?.[0]?.href,
        }))
        
        .filter((img) => img.titulo && img.imagen); // con el filter descartamos todos los elementos que no tengan titulo o imagen

}

// Vamos a contar cuantas imagenes hay por decada, usando reduce para ello
export function contarPorDecada(imagenes){
    return  imagenes.reduce((contador, img) => {
        if(!img.anio) return contador;
        const decada = `${Math.floor(img.anio / 10) * 10}s`;
        contador[decada] = (contador[decada] ?? 0) + 1;
        return contador;
    }, {}); 
}