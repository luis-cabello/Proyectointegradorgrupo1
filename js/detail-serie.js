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
