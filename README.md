# Async Odyssey

Aplicación web que explora el archivo fotográfico de la NASA. Proyecto M2 de Programación Web

## API utilizada

[NASA Image and Video Library](https://images.nasa.gov/docs/images.nasa.gov_api_docs.pdf): pública y gratuita

## Qué hace

- Busca imágenes por palabra clave (`apollo`, `mars`, `hubble`…).
- Muestra estados visibles de **carga**, **error** y **sin resultados**.
- Resume los resultados: número de imágenes por década.
- Si se lanza una búsqueda nueva, ignora la respuesta de la anterior.
- **Bonus:** caché en `localStorage` con caducidad de 10 minutos.

## Cómo ejecutarlo
npm install
npm run dev
npm run build 
npm run preview  

## Declaración de uso de IA

Se ha utilizado IA generativa para generar la primera versión del código y entender un poco como iba a ser la estructura del proyecto.
La IA me ha ayudado a entender el funcionamiento de las funciones asyn para la realizacion de la practica. He usado ia principalmente para darme una idea de 
como deberia de estar estructurada la web a nivel de ficheros y enlaces.
Adema tambien necesite ayuda con algunos de los metodos relacionados con la api y su manejo ya que era la primera vez que desarrollaba codigo usando una API. 
Uno de los prompts que necesite fue: "Quiero que la API solo me devuelva imagenes, ya que no quiero trabajar con videos o documentos", haciendo asi que solo se
presentaran imagenes en mi web. Por otro lado el prompt principal que utilize al principio del proyecto tras pasarle la documentacion y de que trataba el mismo fue:
"Ayudame a estructurar mi proyecto y explicame cuales son todos los ficheros necesarios diciendome que hace cada uno para un optimo funcionamiento de mi proyecto".

Lo que he hecho yo: todo el diseno html y la mayoria de los estilos de css. La integracion de toda la logica de javaScript asi como los distintos metodos que he ido 
viendo que eran necesarios para la realizacion del proyecot

## Autoría

David San Martin Mateos - https://github.com/DavidSM27/async-odyssey.git
