//retorna la infomación en cadena de texto (dificil procesar y manipular), almaccena QS de una url
let queryString = location.search;
//la transformamos en Objeto literal
let queryStringObj = new URLSearchParams(queryString);
//name del campo input del formulario
let formulario = queryStringObj.get("q");

let datoBuscado = document.querySelector(".result-titulo");
datoBuscado.innerHTML += `Resultados para ${formulario}`

let url = ` https://api.themoviedb.org/3/search/multi?api_key=7a176cc95147be6e695be2faf0e8ff9c&query=${formulario}`;

fetch(url)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {

        let peliculasData= data.results;
        let peliculas = document.querySelector(".atributoflex3")
        console.log(data)

        for (let i=0; i<peliculasData.length; i++){
            peliculas.innerHTML +=
            `<artcile class="peliculas_home">
            <a href="./detail-movie.html ?id=${peliculasData[i].id}"><img src="${peliculasData[i].poster_path}" alt="peliculas imagen"></a>
            <h4><a href="./detail-movie.html ?id=${peliculasData[i].id}">Pelicula:${peliculasData[i].name}</a></h4>
            </artcile>
            <artcile class="peliculas_home">
            <a href="./detail-movie.html ?id=${peliculasData[i].id}"><img src="${peliculasData[i].poster_path}" alt="series imagen"></a>
            `
           
        
        }
     
    })
