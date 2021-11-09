//Lo mas visto en peliculas//
let url = ("https://api.themoviedb.org/3/movie/top_rated?api_key=7a176cc95147be6e695be2faf0e8ff9c")

fetch(url)
    .then(function (respuesta) {
        return respuesta.json();

    })
    .then(function (datos) {
        for (let i = 0; i <= 4; i++) {
            console.log(datos.results[i]);

            //Creo estructura y modifico HTML mediante innerHTML//

            document.querySelector(".atributoflex2").innerHTML += `
           
<article>
    <div class="foto">
            <img src="https://image.tmdb.org/t/p/w342/${datos.results[i].poster_path}"  alt="${datos.results[i].title} "> 
    </div>
    <h2>${datos.results[i].title}</h2>
    <p>${datos.results[i].release_date}</p>
</article>
`

        }

    })

//Series Populares//

let url2 = ("https://api.themoviedb.org/3/tv/popular?api_key=7a176cc95147be6e695be2faf0e8ff9c ")

fetch(url2)

    .then(function (respuesta) {
        return respuesta.json()
    })

    .then(function (datos) {
        for (let i = 0; i <= 4; i++) {
            console.log(datos.results[i]);



            //Creo esstrcutura y cambio HTML mediante innerHTML//
            document.querySelector(".atributoflex").innerHTML += `

<article> 

    <div class="foto">
            <img src="https://image.tmdb.org/t/p/w342/${datos.results[i].poster_path}"  alt="${datos.results[i].name}">
    </div>
    <h2>${datos.results[i].name}</h2>
    <p>${datos.results[i].first_air_date}</p>
</article> 
`
        }
    })

//Peliculas recomendadas//

let url3 = ("https://api.themoviedb.org/3/movie/popular?api_key=7a176cc95147be6e695be2faf0e8ff9c")

fetch(url3)

    .then(function (respuesta) {
        return respuesta.json()
    })

    .then(function (datos) {
        for (let i = 0; i <= 4; i++) {
            console.log(datos.results[i]);


            //De nuevo creo estructura HTML pero con disintas propiedades//


            document.querySelector(".atributoflex3").innerHTML += `
<article> 

    <div class="foto">
            <img src="https://image.tmdb.org/t/p/w342/${datos.results[i].poster_path}" alt="${datos.results[i].title} ">
    </div>
    <h2>${datos.results[i].title}</h2>
    <p>${datos.results[i].release_date}</p>
</article> 
`
        }
    })