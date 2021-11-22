//local storage peliculas

let favoritos = [];
let favoritosS = []
// si fue creada la clave "favoritos" en localStorage
if (localStorage.getItem("favoritos")) {

  // verifica cómo las propiedades llegan como strings
  

  // guarda datos del storage...
  
  
  // y los asigna a la variable "favoritos"
  // transformados en array
  let recuperoStorage = localStorage.getItem("favoritos")
  
  favoritos = JSON.parse(recuperoStorage)
  // verifica en consola la transformación a array
  
console.log(favoritos);
}


// Contenedor de la lista de favoritos
const seccion = document.querySelector(".atributoflex3")



// si NO hay favs en la lista
if( favoritos.length == 0   ) {

  // muestra leyenda apropiada en un "article"
  // y un botón "volver"
  seccion.innerHTML += `
  <h2> No hay favoritos en tu lista </h2>
  <p> <a class="letrablanca" href= "./index.html"> volver <-- </a>  </p>`
    
} else { // Si SI hay favoritos en el array "favoritos"
    
  /*
  busca cada uno de los gifs y los imprime en pantalla
  */
  for( i = 0; i < favoritos.length; i++ ) {

    buscarYMostrarFavoritos(favoritos[i])

  }
    
}

function buscarYMostrarFavoritos(cadaPelicula) {

  // se guarda endpoint en variable "url"
  // para que el pedido al servidor quede más claro
  
  let urlP = ("https://api.themoviedb.org/3/movie/" + cadaPelicula + "?api_key=7a176cc95147be6e695be2faf0e8ff9c")
  // pedido al servidor
  fetch(urlP)
    .then( function( respuesta ) {

    return respuesta.json();
      

    })
    .then( function( datos ) {

    console.log(datos);

      
    })
    .catch( function(error) {
        console.log(error);
    });

}


//Local storage series

if (localStorage.getItem("favoritosS")) {

    // verifica cómo las propiedades llegan como strings
    
  
    // guarda datos del storage...
    
    
    // y los asigna a la variable "favoritos"
    // transformados en array
    let recuperoStorageS = localStorage.getItem("favoritosS")
    
    favoritosS = JSON.parse(recuperoStorageS)
    // verifica en consola la transformación a array
    
  console.log(favoritosS);
  }
  
  
  // Contenedor de la lista de favoritos
  const seccionS = document.querySelector(".atributoflex3")
  
  
  
  // si NO hay favs en la lista
  if( favoritosS.length == 0   ) {
  
    // muestra leyenda apropiada en un "article"
    // y un botón "volver"
    seccionS.innerHTML += `
    <h2> No hay favoritos en tu lista </h2>
    <p> <a class="letrablanca" href= "./index.html"> volver <-- </a>  </p>`
      
  } else { // Si SI hay favoritos en el array "favoritos"
      
    /*
    busca cada uno de los gifs y los imprime en pantalla
    */
    for( i = 0; i < favoritosS.length; i++ ) {
  
      buscarYMostrarFavoritos(favoritosS[i])
  
    }
      
  }
  
  function buscarYMostrarFavoritos(serieId) {
  
    // se guarda endpoint en variable "url"
    // para que el pedido al servidor quede más claro
    
    let urlS= ("https://api.themoviedb.org/3/tv/" + serieId + "?api_key=7a176cc95147be6e695be2faf0e8ff9c")
    // pedido al servidor
    fetch(urlS)
      .then( function( respuesta ) {
  
      return respuesta.json();
        
  
      })
      .then( function( datos ) {
  
      console.log(datos);
  
        
      })
      .catch( function(error) {
          console.log(error);
      });
  
  }





















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