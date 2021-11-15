//retorna la infomación en cadena de texto (dificil procesar y manipular), almaccena QS de una url
let queryString = location.search;
//la transformamos en Objeto literal
let queryStringObj = new URLSearchParams(queryString);
//name del campo input del formulario
let formulario = queryStringObj.get("search");

let datoBuscado = document.querySelector(".result-titulo");
datoBuscado.innerHTML += `Resultados para ${formulario}`

let url = ` https://api.themoviedb.org/3/search/multi?api_key=7a176cc95147be6e695be2faf0e8ff9c=${formulario}`;

fetch(url)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        let leyenda= document.querySelector(".leyenda");
        if(data.data.length == 0){
            leyenda.style.display = "block";
        }

        let peliculasData= data.data;
        let peliculas = document.querySelector(".Informacion-de-pelis");
        let infopeliculas ="";
        console.log(data)

        for (let i=0; i<peliculasData.length; i++){
            infopeliculas +=
            `<artcile class="peliculas_home">
            <a href="./detail-movie.html ?id=${peliculasData[i].peliculas.id}"><img src="${peliculasData[i].peliculas.poster_path}" alt="peliculas imagen"></a>
            <h4><a href="./detail-movie.html ?id=${peliculasData[i].peliculas.id}">Pelicula:${peliculasData[i].peliculas.name}</a></h4>
            </artcile>
            <artcile class="peliculas_home">
            <a href="./detail-movie.html ?id=${peliculasData[i].peliculas.id}"><img src="${peliculasData[i].datos.poster_path}" alt="series imagen"></a>
            `
            peliculas.innerHTML += infopeliculas
        }
    })
