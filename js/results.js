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

        let peliculasData = data.results;
        let peliculas = document.querySelector(".atributoflex3")
        console.log(data)

        for (let i = 0; i < peliculasData.length; i++) {
            peliculas.innerHTML +=

                `<article>
            <a class= "letrablanca" href="./detail-movie.html?id=${peliculasData[i].id}"><img src="https://image.tmdb.org/t/p/w342/${peliculasData[i].poster_path}" alt="peliculas imagen"></a>
            <h4><a class= "letrablanca" href="./detail-movie.html?id=${peliculasData[i].id}">Pelicula:${peliculasData[i].title}</a></h4>
            </article>
            `
            console.log(peliculasData[i])

        }


        let urlseries = `https://api.themoviedb.org/3/search/tv?api_key=7a176cc95147be6e695be2faf0e8ff9c&query=${formulario}`;

        fetch(urlseries)
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                let seriesData = data.results;
                let series = document.querySelector(".Series-results")
                console.log(data)

                for (let i = 0; i < seriesData.length; i++) {
                    series.innerHTML +=
                        `<article>
      <a class= "letrablanca" href="./detail-series.html?id=${seriesData[i].id}"><img src="https://image.tmdb.org/t/p/w342/${seriesData[i].poster_path}" alt="series imagen"></a>
      <h4><a class= "letrablanca" href="./detail-series.html?id=${seriesData[i].id}">Serie:${seriesData[i].name}</a></h4>
      </article>`
                    console.log(seriesData[i])
                }
            })




    })






    //Validar Formularios// 
let form = document.querySelector('form');
let inputfield = document.querySelector('.search');

form.addEventListener('submit', function (evento) {
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
//Quiero que no aparescan resultados para null// 

form.addEventListener('submit', function (evento) {
    evento.preventDefault();
    console.log("No hay resultados")

    if (peliculas.name == null) {
        alert("No se encuentran resultados para su busqueda, desea continuar?")
    } else {
        let Finding = document.querySelector("No-results")
        Finding.innerText +=
            `<h2 class="no-results">"No se encuentran resultados para su busqueda"</h2>`
    }
})
