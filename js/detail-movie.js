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


        for (let i = 0; i < datos.genres.length; i++) {
            genero.innerHTML += `<a class= "letrablanca" href="./detalles-genero.html?id=${datos.genres[i].id}"> ,${datos.genres[i].name}.<a/>`
        }




        titulo.innerText += "" + datos.title;
        imagen.src = "https://image.tmdb.org/t/p/w342/" + datos.poster_path;
        imagen.alt = datos.title;
        parrafo.innerText += "" + datos.release_date;
        trama.innerText += "" + datos.overview;
        duracion.innerText += "" + datos.runtime;



    })
    .catch(function (error) {
        console.log('el error fue' + error);

    })


//Favoritos, primera parte. 
const fav = document.querySelector(".agregoysaco a")

let favoritos = [];

let recuperoStorage = localStorage.getItem("favoritos");

if (recuperoStorage && recuperoStorage != null) {
    favoritos = JSON.parse(recuperoStorage)
}
console.log(favoritos);

if (favoritos.includes(cadaPelicula)) {
    fav.innerHTML = `
     <i class="fas fa-heart"> </i> Sacar de favoritos`
}


fav.addEventListener("click", function(e) {
    e.preventDefault();


if (favoritos.includes(cadaPelicula)) {
    
    let aBorrarp = favoritos.indexOf(cadaPelicula)

    favoritos.splice(aBorrarp, 1)

    fav.innerHTML = `
    <i class="fas fa-heart"> </i> Agregar a favoritos:`

} else {

favoritos.push(cadaPelicula)

fav.innerHTML = ` 
<i class="fas fa-heart"> </i> Sacar de favoritos:`

}

let favStorage = JSON.stringify(favoritos);

localStorage.setItem("favoritos", favStorage);

});










//Validar Formularios// 
let form = document.querySelector('form');
let inputfield = document.querySelector('.search');
let Message = document.querySelector(".message")

form.addEventListener('submit', function (evento) {
    evento.preventDefault();
    console.log("no se envio")

    if (inputfield.value == "") {
       Message.innerText = "no ha ingresado ningun termino, desea continuar?";
    } else if (inputfield.value.length < 3) {
        Message.innerText= "Ingrese al menos 3 terminos";
    } else {
        this.submit();
    }
})