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
        let url_img = 'https://image.tmdb.org/t/p/w1280/'
        section.innerHTML += `<div class="detalle">
                                <h2>${data.original_title}</h2>
                                <p>${data.release_date} - ${data.runtime} minutos</p>
                                <img src="${url_img + data.backdrop_path}">
                                <p>Clasificacion: ${data.vote_average}</p>
                                <p>Sinopsis: ${data.overview}</p>
                                <ul class="generos"></ul>
                            </div>`   

        let generos = document.querySelector('.generos');

        
        for (let i=0; i<data.genres.length; i++) {
            generos.innerHTML += `<li>${data.genres[i].name}</li>`
        }
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

    let url_recomendaciones = `https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=0317bbf7efac7dd04b2c2c3748377d57&language=en-US&page=1`
    fetch(url_recomendaciones)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data);

        let section = document.querySelector('.recomendaciones')
        let url_img_reco = 'https://image.tmdb.org/t/p/w300/'
        section.innerHTML += `<div>
                            <h2> Recomendaciones:</h2>
                            <a href='detalle_pelicula.html?id=${data.results[0].id}'>
                            <img src="${url_img_reco + data.results[0].poster_path}">
                            <p>Nombre: ${data.results[0].original_title}</p>
                            </a>
                            <a href='detalle_pelicula.html?id=${data.results[1].id}'>
                            <img src="${url_img_reco + data.results[1].poster_path}">
                            <p>Nombre: ${data.results[1].original_title}</p>
                            </a>
                            <a href='detalle_pelicula.html?id=${data.results[2].id}'>
                            <img src="${url_img_reco + data.results[2].poster_path}">
                            <p>Nombre: ${data.results[2].original_title}</p>
                            </a>
                            <a href='detalle_pelicula.html?id=${data.results[3].id}'>
                            <img src="${url_img_reco + data.results[3].poster_path}">
                            <p>Nombre: ${data.results[3].original_title}</p>
                            </a>
                            </div>`   
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

    let buttonRecomendaciones = document.querySelector(".recomendacionesButton");
    let recomendaciones = document.querySelector(".recomendaciones");

    buttonRecomendaciones.addEventListener('click', function(e){
        buttonRecomendaciones.style.display = "none";

        recomendaciones.style.display = "block";
    })
