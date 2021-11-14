//Generos de Peliculas//
let UrlG = ("https://api.themoviedb.org/3/genre/movie/list?api_key=7a176cc95147be6e695be2faf0e8ff9c");

fetch(UrlG)

    .then(function (respuesta) {
        return respuesta.json();
    })

    .then(function (datos) {
        console.log(datos);

        for (let i = 0; i < datos.genres.length; i++){

        }



})
