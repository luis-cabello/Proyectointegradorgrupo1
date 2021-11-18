//Favoritos, primera parte. 

const fav = document.querySelector(".agregoysaco") //Selecciono el boton que me lleva a la pagina de favoritos

let favoritos = []; //Defino un array vacio para almacenar los favoritos.

let recuperoStorage = localStorage.getItem("favoritos"); //Recuperamos datos del storage haber si hay favoritos y los agarro con getitem

if (recuperoStorage && recuperoStorage != null) { //si hay favoritos en el local storage, voy a tener que transfomar de string a array
    favoritos = JSON.parse(recuperoStorage);
}
console.log(favoritos); //Me fijo si la informacion se convirtio en un Array, me doy cuenta si tiene []

if (favoritos.length == 0) { //Si no hay favoritos en la lista me va a salir un articulo con un titulo que dica 'no hay favoritos en tu lista'
    fav.innerHTML += `
    <article> 
    <h3> No hay favoritos en tu lista </h3>
    </article>
    `
} else { // Si hay favoritos en la lista (ya que la segunda condicion simepre es lo opuesta a la primera)
    for (let i = 0; i < favoritos.length; i++) {

        buscarYMostrarFavoritos(favoritos[i])
    }

}



let url = `https://api.themoviedb.org/3/movie/${cadaPelicula}?api_key=7a176cc95147be6e695be2faf0e8ff9ccff&language=en-US`

fetch(url)

.then(function(respuesta) {
    respuesta.json();
})

.then(function (datos) {
    console.log(datos);

    seccion.innerHTML += `
    <li>
    <img src="https://image.tmdb.org/t/p/w500${datos.poster_path}">
    <h3> ${datos.title}</h3>
    </li>`
    
        })
        
    
 .catch(function(error) {
     'el error fue' + error
    })











            //Validar Formularios// 
            let formulario = document.querySelector('form');
            let inputfield = document.querySelector('.search');
            
            
        
            formulario.addEventListener('submit', function (evento) {
                evento.preventDefault();
                console.log("no se envio")
        
                if (inputfield.value =="") {
                    alert("Ingrese al menos 3 terminos")
                } else if (inputfield.value.length < 3) {
                    confirm("no ha ingresado ningun termino, desea continuar?")
                } else {
                    this.submit();
                }
            })