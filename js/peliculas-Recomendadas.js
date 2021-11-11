//peliculas recomendadas 
console.log(location.search);
let conviertoID3 = new URLSearchParams(location.search);
let recomendadasid= conviertoID3.get("id");
console.log(recomendadasid);

let url3 = ("https://api.themoviedb.org/3/movie/top_rated" +recomendadasid+ "?api_key=7a176cc95147be6e695be2faf0e8ff9c")


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