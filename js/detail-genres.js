//Detalles genero Peliculas
console.log(location.search); //Obtengo la informacion de la Query String, viene en cadena de texto

let convierto = new URLSearchParams(location.search); //Como viene en cadena de texto, la paso a algo mas manejable, con URL Search Params, a un objeto literal

let idGp = convierto.get("id"); //Permito traer la clave valor del ID, con el metodo GET.
let tipo = convierto.get("type");
console.log(tipo);
console.log(idGp); //Me fijo si salio todo bien en consola, y si los datos me aparecen. 

let url = "";
let urlNg = "";

urlNg = "https://api.themoviedb.org/3/discover/movie?api_key=7a176cc95147be6e695be2faf0e8ff9c&with_genres="

fetch(urlNg)

    .then()


if (tipo == "movie") {
    url = "https://api.themoviedb.org/3/discover/movie?api_key=7a176cc95147be6e695be2faf0e8ff9c&with_genres=" + idGp

} else if (tipo == "tv") {
    url = "https://api.themoviedb.org/3/discover/tv?api_key=7a176cc95147be6e695be2faf0e8ff9c&with_genres=" + idGp

}
fetch(url)

    .then(function (respuesta) {
        return respuesta.json();
    })

    .then(function (datos) {
        console.log(datos);



    })

    .catch(function (error) {
        'el error fue' + error
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
        confirm("no ha ingresado ningun termino, desea continuar?")
    } else {
        this.submit();
    }
})