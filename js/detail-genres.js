let queryString = location.search; 
let queryStringToObject = new URLSearchParams(queryString);
let id = queryStringToObject.get('id'); 

let url = `https://api.themoviedb.org/3/movie/popular?api_key=0317bbf7efac7dd04b2c2c3748377d57&language=en-US&page=1/${id}`

console.log(url);

fetch(url)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data);

        let section = document.querySelector('.detalle')

        section.innerHTML += `<article>
                                <img src="${data.poster_path}">
                                <h2>Nombre: ${data.original_title}</h2>
                                <h3>Clasificacion: ${data.vote_average}</h3>
                                <h3>Sinopsis: ${data.overview}</h3>
                            </article>`   
    })
    .catch(function(error){
        console.log(error);
    })