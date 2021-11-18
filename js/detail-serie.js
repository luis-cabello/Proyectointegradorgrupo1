//Series populares
console.log(location.search);
let conviertoID2 = new URLSearchParams(location.search);
let serieId = conviertoID2.get("id");
console.log(serieId);

let url = ("https://api.themoviedb.org/3/tv/" + serieId + "?api_key=7a176cc95147be6e695be2faf0e8ff9c")

const titulo = document.querySelector("h2");
const trama = document.querySelector(".trama");
const fecha = document.querySelector(".fecha");
const cantidadDeEpisodios = document.querySelector(".cantidadEpisodios");
const genero = document.querySelector(".genero");
const imagen = document.querySelector("div img");


fetch(url)

    .then(function (respuesta) {
        return respuesta.json();
    })

    .then(function (datos) {
        console.log(datos);


        for (let i = 0; i < datos.genres.length; i++) {
            genero.innerHTML += `<a class= "letrablanca" href="./detalles-genero.html?id=${datos.genres[i].id}"> ${datos.genres[i].name}.<a/>`
        }

        imagen.src = "https://image.tmdb.org/t/p/w342/" + datos.poster_path;
        imagen.alt = datos.original_name;
        titulo.innerText += "" + datos.original_name;
        trama.innerText += "" + datos.overview;
        fecha.innerText += "" + datos.first_air_date;
        cantidadDeEpisodios.innerText += "" + datos.number_of_episodes;
    })

    //Favoritos, primera parte. 

const fav = document.querySelector(".fas fa-heart") //Selecciono el boton que me lleva a la pagina de favoritos

let favoritos = []; //Defino un array vacio para almacenar los favoritos.

let recuperoStorage = localStorage.getItem("favoritos"); //Recuperamos datos del storage haber si hay favoritos y los agarro con getitem

if (recuperoStorage && recuperoStorage != null) { //si hay favoritos en el local storage, voy a tener que transfomar de string a array
    favoritos = JSON.parse(recuperoStorage);
}
console.log(favoritos); //Me fijo si la informacion se convirtio en un Array, me doy cuenta si tiene []

if (favoritos.length == 0) { //Si no hay favoritos en la lista me va a salir un articulo con un titulo que dica 'no hay favoritos en tu lista'
    fav.innerHTML += `
    <article> 
    <h3> No hay favoritos en tu lista </h3>
    </article>
    `
} 

fav.addEventListener("click", function (e) {
    e.preventDefault();

if (favoritos.includes(serieId)) {
    
    let aBorrar = favoritos.indexOf(serieId)

favoritos.splice(aBorrar, 1)


}







})































        //Validar Formularios// 
        let formulario = document.querySelector('form');
        let inputfield = document.querySelector('.search');
        let message = document.querySelector('.message');
        

        formulario.addEventListener('submit', function (evento) {
            evento.preventDefault();
            console.log("no se envio");

            if (inputfield.value =="") {
                confirm("no ha ingresado ningun termino, desea continuar?")
            } else if (inputfield.value.length < 3) {
                alert("Ingrese al menos 3 terminos");
            } else {
                this.submit();
            }
        })
