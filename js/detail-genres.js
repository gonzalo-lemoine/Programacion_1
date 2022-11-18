///DETALLES DE SERIE Y PELICULA
let queryString = location.search; 
let queryStringToObject = new URLSearchParams(queryString);
let id = queryStringToObject.get('id'); 

let url =`https://api.themoviedb.org/3/movie/${id}?api_key=0317bbf7efac7dd04b2c2c3748377d57&language=en-US`
let url_plataformas = `https://api.themoviedb.org/3/movie/${id}/watch/providers?api_key=0317bbf7efac7dd04b2c2c3748377d57`
console.log(url);

fetch(url)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data);

        let section = document.querySelector('.detalle')
        let url_img = 'https://image.tmdb.org/t/p/w300/'
        section.innerHTML += `<article>
                                <img src="${url_img + data.poster_path}">
                                <h2>Nombre: ${data.original_title}</h2>
                                <h3>Clasificacion:</h3> <a>${data.vote_average}</a>
                                <h3>Sinopsis:</h3> <a> ${data.overview}</a>
                                <h3>Genero:</h3><a> ${data.genres[0].name}</a>
                                <h3>Duracion: </h3><a>${data.runtime} minutos</a>
                            </article>`   
    })
    .catch(function(error){
        console.log(error);
    })

    fetch(url_plataformas)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data);

        let section = document.querySelector('.detalle')
        let url_img_plat = 'https://image.tmdb.org/t/p/w200/'
        section.innerHTML += `<article>
                            <h2> Plataformas:</h2>
                            <img src="${url_img_plat + data.results.KR.rent[0].logo_path}">
                            <img src="${url_img_plat + data.results.MX.buy[0].logo_path}">
                            </article>`   
    })
    .catch(function(error){
        console.log(error);
    })

    ///AGREGADO A FAVORITOS
    let favoritos = [];
    let recuperoStorage = localStorage.getItem("favoritos");
    if (recuperoStorage != null){
        favoritos= JSON.parse(recuperoStorage);
        console.log(favoritos);
    }
    let link= document.querySelector(".clave");

    if (favoritos.includes(id)){
        link.innerText = "Sacar de favoritos"
    };
    console.log(link);

    link.addEventListener("click", function(event){
        event.preventDefault();
        if (favoritos.includes(id)){
            let indice= favoritos.indexOf(id);
            favoritos.splice(indice, 1);
            link.innerText= "Agregar a favoritos";
        } else {
            favoritos.push(id);
            console.log(favoritos)
            link.innerText= "Sacar de favoritos"
        }
        let FavoritosToString= JSON.stringify(favoritos);
        localStorage.setItem("favoritos", FavoritosToString);
        console.log(localStorage);
    })
