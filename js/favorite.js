///FAVORITOS
let recuperoStorage= localStorage.getItem("favoritos");
console.log(recuperoStorage);

let elegidos = JSON.parse(recuperoStorage);
console.log(elegidos);

let lista_fav= document.querySelector (".favoritos");

if (elegidos == null || elegidos.length == 0){
    lista_fav.innerHTML = `<p> No hay peliculas favoritas </p>`
} else {
    for (let i= 0; i<elegidos.length; i++){
        buscarYMostrarFavoritos(elegidos[i])
    }
}
function buscarYMostrarFavoritos (id){
    let url = `https://api.themoviedb.org/3/movie/${id}?api_key=0317bbf7efac7dd04b2c2c3748377d57&language=en-US`
    let url_img = 'https://image.tmdb.org/t/p/w200/'

    fetch (url)
        .then(function(response){
            return response.json();
        })
        .then(function(data){
            console.log(data);
            lista_fav.innerHTML += `<article>
                                <a href='detalle_pelicula.html?id=${data.id}'>
                                <img src="${url_img + data.poster_path}" >
                                <p>Nombre: ${data.original_title}</p>
                                </a>
                            </article>`
        })
        .catch(function(e){
            console.log(e);
        })
}