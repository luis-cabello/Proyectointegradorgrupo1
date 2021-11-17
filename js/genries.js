//Generos de Peliculas//
let UrlGp = ("https://api.themoviedb.org/3/genre/movie/list?api_key=7a176cc95147be6e695be2faf0e8ff9c");

fetch(UrlGp)

    .then(function (respuesta) {
        return respuesta.json();
    })

    .then(function (datos) {
        console.log(datos);
        for (let i = 0; i < datos.genres.length; i++) {

            document.querySelector("section").innerHTML += `
            <article class="generoletra">
            <ul class= "genero">
            <li> <a class="letrablanca" href="./detalles-genero.html?id=${datos.genres[i].id}"> ${datos.genres[i].name} </a> </li>
            </ul>
            <article>
            `


        }


    })
    .catch(function (error) {
        console.log('el error fue' + error);
    })

//Generos de Series
let UrlGs = ("https://api.themoviedb.org/3/genre/tv/list?api_key=7a176cc95147be6e695be2faf0e8ff9c");

fetch(UrlGs)

    .then(function (respuesta) {
        return respuesta.json();
    })

    .then(function (datos) {
        console.log(datos);
        for (let i = 0; i < datos.genres.length; i++) {

            document.querySelector(".atributoflexgenries2").innerHTML += `
            <article class="generoletra">
            <ul class= "genero">
            <li> <a class="letrablanca" href="./detalles-genero.html?id=${datos.genres[i].id}"> ${datos.genres[i].name} </a> </li>
            </ul>
            <article>
            `


        }


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
                message.innerText = "no has ingresado ningun termino";
            } else if (inputfield.value.length < 3) {
                message.innerText = "Debes ingresar mas de 3 terminos";
            } else {
                this.submit();
            }
        })
