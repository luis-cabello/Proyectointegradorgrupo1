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