let queryString = location.search; 
let queryStringToObject = new URLSearchParams(queryString);
let id = queryStringToObject.get('id'); 
let url_series = `https://api.themoviedb.org/3/discover/tv?api_key=0317bbf7efac7dd04b2c2c3748377d57&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&with_genres=${id}&include_null_first_air_dates=false&with_watch_monetization_types=flatrate&with_status=0&with_type=0`

console.log(url_series)

fetch(url_series)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data);

        let section = document.querySelector('.generos_movie')
        let url_img = 'https://image.tmdb.org/t/p/w300/'
        section.innerHTML += `<div class="detalle">
                                <h2>${data.genre_ids[1]}</h2>
                            </div>`   
    })
    .catch(function(error){
        console.log(error);
    })
    