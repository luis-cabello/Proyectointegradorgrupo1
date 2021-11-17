//peliculas recomendadas 
console.log(location.search);
let conviertoID3 = new URLSearchParams(location.search);
let recomendadasid = conviertoID3.get("id");
console.log(recomendadasid);

let url3 = (" https://api.themoviedb.org/3/movie/" + recomendadasid + "?api_key=7a176cc95147be6e695be2faf0e8ff9c")


const imagen = document.querySelector("div img");
const titulo = document.querySelector("h2");
const parrafo = document.querySelector(".fecha");
const trama = document.querySelector(".trama");
const genero = document.querySelector(".genero");
const duracion = document.querySelector(".duracion");

fetch(url3)

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
    //Validar Formularios// 
    let formulario = document.querySelector('form');
    let inputfield = document.querySelector('.search');
    let message = document.querySelector('.message');
    

    formulario.addEventListener('submit', function (evento) {
        evento.preventDefault();
        console.log("no se envio")

        if (inputfield.value =="") {
            confirm("no ha ingresado ningun termino, desea continuar?")
        } else if (inputfield.value.length < 3) {
            alert("Ingrese al menos 3 terminos")
            this.submit();
        }
    })