//Lo mas visto en peliculas
console.log(location.search); //recupero la informacion de  la queryString y me fijo si esta en consola.

let conviertoId = new URLSearchParams(location.search); // convierto la info a un objeto literal, algo mas manejable.

let cadaPelicula = conviertoId.get("id"); //con el get triago una calve valor a la queryString y asi me aparece en el URL cada ID del perosnaje

console.log(cadaPelicula); //Me fijo si esta todo bien en consola y si finalemente la informacion de cada pelicula se pudo pasar a un objeto literal.

let url = "https://api.themoviedb.org/3/movie/" + cadaPelicula + "?api_key=7a176cc95147be6e695be2faf0e8ff9c";


const imagen = document.querySelector("div img");
const titulo = document.querySelector("h2");
const parrafo = document.querySelector(".fecha");
const trama = document.querySelector(".trama");
const genero = document.querySelector(".genero");
const duracion = document.querySelector(".duracion");


fetch(url)

    .then(function (respuesta) {
        return respuesta.json()
    })

    .then(function (datos) {
        console.log(datos);

        titulo.innerText += "" + datos.title;
        imagen.src = "https://image.tmdb.org/t/p/w342/" + datos.poster_path;
        imagen.alt = datos.title;
        parrafo.innerText += "" + datos.release_date;
        trama.innerText += "" + datos.overview;
        duracion.innerText += "" + datos.runtime;
        genero.innerText += "" + datos.genres;


    })


