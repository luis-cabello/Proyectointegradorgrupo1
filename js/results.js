//retorna la infomación en cadena de texto (dificil procesar y manipular), almaccena QS de una url
let queryString = location.search;
//la transformamos en Objeto literal
let queryStringObj = new URLSearchParams(queryString);
//name del campo input del formulario
let formulario = queryStringObj.get("search");

let datoBuscado = document.querySelector(".result-titulo");
datoBuscado.innerText = `Resultados para ${formulario}`

let url = "https://api.themoviedb.org/3/search/tv/?api_key=7a176cc95147be6e695be2faf0e8ff9c";

fetch(url)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {

    })
