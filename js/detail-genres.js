console.log(location.search);

let conviertoIdG = new URLSearchParams(location.search)

let IdG = conviertoIdG.get("id")

console.log(IdG);

