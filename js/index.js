//Lo mas visto en peliculas//
let url = ("https://api.themoviedb.org/3/movie/top_rated?api_key=7a176cc95147be6e695be2faf0e8ff9c")

fetch(url)
.then(function(respuesta){
   return respuesta.json()
   
})
.then(function(datos){
    for(let i=0; i<=4; i++){
    console.log(datos.results[i])

    document.querySelector(".atributoflex2").innerHTML +=`
    
<article>
    <div class="foto">
            <img src=" "  alt=" "> 
    </div>
    <h2>${datos.results[i].title}</h2>
    <p>${datos.results[i].release_date}</p>
</article>
`
   
    
    }

   
})

//Series Populares//


