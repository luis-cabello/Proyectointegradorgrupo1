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

//Favoritos, primera parte. 

const fav = document.querySelector(".agregoysaco a") //Selecciono el boton que me lleva a la pagina de favoritos

let favoritosS = []; //Defino un array vacio para almacenar los favoritos, para que no falle, puede pasar que nunca nadie eligio un favorito.

let recuperoStorage = localStorage.getItem("favoritosS"); //Recuperamos datos del storage haber si hay favoritos y los agarro con getitem

if (recuperoStorage && recuperoStorage != null) { //si hay favoritos en el local storage, voy a tener que transfomar de string a array
    favoritosS = JSON.parse(recuperoStorage);
}
console.log(favoritosS); //Me fijo si la informacion se convirtio en un Array, me doy cuenta si tiene []

if (favoritosS.includes(serieId)) {
    fav.innerHTML = ` 
    <i class="fas fa-heart"> </i> Sacar de favoritos`
}



fav.addEventListener("click", function (e) {
    e.preventDefault();

    if (favoritosS.includes(serieId)) {

        let aBorrar = favoritosS.indexOf(serieId)

        favoritosS.splice(aBorrar, 1)
        
        fav.innerHTML = `
        <i class="fas fa-heart"> </i> Agregar a favoritos:`


    } else {
       
        favoritosS.push(serieId)

    
        fav.innerHTML = ` 
        <i class="fas fa-heart"> </i> Sacar de favoritos:`

    }

    let favStorage = JSON.stringify(favoritosS)

    localStorage.setItem("favoritosS", favStorage)

});






























    //Validar Formularios// 
    let formulario = document.querySelector('form');
    let inputfield = document.querySelector('.search');
    let message = document.querySelector('.message');


    formulario.addEventListener('submit', function (evento) {
        evento.preventDefault();
        console.log("no se envio");

        if (inputfield.value == "") {
            confirm("no ha ingresado ningun termino, desea continuar?")
        } else if (inputfield.value.length < 3) {
            alert("Ingrese al menos 3 terminos");
        } else {
            this.submit();
        }
    });
