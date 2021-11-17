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
            
    
            `<article>
            <a href="./detail-movie.html?id=${peliculasData[i].id}"><img src="https://image.tmdb.org/t/p/w342/${peliculasData[i].poster_path}" alt="peliculas imagen"></a>
            <h4><a href="./detail-movie.html?id=${peliculasData[i].id}">Pelicula:${peliculasData[i].title}</a></h4>
            </article>
            `
           console.log(peliculasData[i])
        
        }
     
        //Validar Formularios// 
        let formulario = document.querySelector('form');
        let inputfield = document.querySelector('.search');
        let message = document.querySelector('.message');
        

        formulario.addEventListener('submit', function (evento) {
            evento.preventDefault();
            console.log("no se envio")

            if (inputfield.value =="") {
                message.innerText = "no has ingresado ningun termino";
            } else if (inputfield.value.length < 3) {
                message.innerText = "Debes ingresar mas de 3 terminos";
            } else {
                this.submit();
            }
        })
    })
