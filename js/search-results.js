let query = location.search; 
let stringToObject = new URLSearchParams(query); 
let busca= stringToObject.get('buscador'); 
console.log(busca);


let url_pelis_pop = `https://api.themoviedb.org/3/search/movie?query=${busca}&api_key=0317bbf7efac7dd04b2c2c3748377d57&language=en-US&page=1&include_adult=false`


console.log(url_pelis_pop);

fetch(url)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data);
        let info = data.results
        let container = document.querySelector('.results');

        let characters = '';
            for(let i=0; i<info.length; i++){
                characters += `<article>
                                    <img src=${"https://image.tmdb.org/t/p/w200/" + info[i].poster_path} alt='' />   
                                    <a href='detalle_pelicula.html?id=${info[i].id}'><p>${info[i].original_title}</p></a>
                                </article>`
            }
            container.innerHTML = characters;   
    })
        
    .catch(function(error){
        console.log(error);
    })
