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

const fav = document.querySelector(".agregoysaco a") //Selecciono el boton que me lleva a la pagina de favoritos

let favoritosP = []; //Defino un array vacio para almacenar los favoritos, para que no falle, puede pasar que nunca nadie eligio un favorito.

let recuperoStorage = localStorage.getItem("favoritosP"); //Recuperamos datos del storage haber si hay favoritos y los agarro con getitem

if (recuperoStorage && recuperoStorage != null) { //si hay favoritos en el local storage, voy a tener que transfomar de string a array
    favoritosP = JSON.parse(recuperoStorage);
}
console.log(favoritosP); //Me fijo si la informacion se convirtio en un Array, me doy cuenta si tiene []

fav.addEventListener("click", function (e) {
    e.preventDefault();

    if (favoritosP.includes(cadaPelicula)) {
        fav.innerHTML = ` 
    <i class="fas fa-heart"> </i> Agregar a favoritos:`

        let aBorrar = favoritosP.indexOf(cadaPelicula)

        favoritosP.splice(aBorrar, 1);


    } else {
        fav.innerHTML = ` 
    <i class="fas fa-heart"> </i> Sacar de favoritos`

        favoritosP.push(cadaPelicula)
    }


    let favStorage = JSON.stringify(cadaPelicula)

    localStorage.setItem("favoritosP", favStorage)


    console.log(favStorage);

})












//Validar Formularios// 
let formulario = document.querySelector('form');
let inputfield = document.querySelector('.search');


formulario.addEventListener('submit', function (evento) {
    evento.preventDefault();
    console.log("no se envio")

    if (inputfield.value == "") {
        confirm("no ha ingresado ningun termino, desea continuar?")
    } else if (inputfield.value.length < 3) {
        alert("Ingrese al menos 3 terminos")
    } else {
        this.submit();
    }
})