//Esto es codigo para la capa de datos, solo se encarga de hacer la llamada a la API y devolver los datos en bruto

const URL_BASE = "https://images-api.nasa.gov/search";

export async function buscarImagenes(consulta){
    const url = `${URL_BASE}?q=${encodeURIComponent(consulta)}&media_type=image`;

    const respuesta = await fetch(url);

    if(!respuesta.ok){
        throw new Error(`Error en la llamada a la API: ${respuesta.status}`);
    }

    const datos = await respuesta.json();
    return datos.collection?.items ?? []; // si no tenemos ningun item se devuelve un array vacio para no tener que hacer comprobaciones en el resto del codigo 
}
