//generos//
let urlgenero = " https://api.themoviedb.org/3/genre/movie/list?api_key=7a176cc95147be6e695be2faf0e8ff9c"

fetch(urlgenero)
  .then(function (response) {
    return response.json();
  })

  .then(function (data) {


  })