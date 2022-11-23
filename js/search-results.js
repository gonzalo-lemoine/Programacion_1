let query = location.search; 
let stringToObject = new URLSearchParams(query); 
let busca= stringToObject.get('buscador'); 
console.log(busca);


let url_pelis_pop = `https://api.themoviedb.org/3/search/movie?query=${busca}&api_key=0317bbf7efac7dd04b2c2c3748377d57&language=en-US&page=1&include_adult=false`


console.log(url_pelis_pop);

fetch(url_pelis_pop)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data);
        let info = data.results
        let container = document.querySelector('.results');
            let peliculas = '';
            for(let i=0; i<info.length; i++){
                peliculas += `<article>
                                    <a href='detalle_pelicula.html?id=${info[i].id}'>
                                    <img src=${"https://image.tmdb.org/t/p/w300/" + info[i].poster_path} alt='' />
                                    <p>${info[i].title}</p>  </a>
                                </article>`
            }
            container.innerHTML = peliculas;   
    })
        
    .catch(function(error){
        console.log(error);
    })

    let url_series= `https://api.themoviedb.org/3/search/tv?query=${busca}&api_key=0317bbf7efac7dd04b2c2c3748377d57&language=en-US&page=1&include_adult=false`


    console.log(url_series);
    
    fetch(url_series)
        .then(function(response){
            return response.json();
        })
        .then(function(data){
            console.log(data);
            let info = data.results
            let container = document.querySelector('.results');
                let series = '';
                for(let i=0; i<info.length; i++){
                    series += `<article>
                                    <a href='detalle_serie.html?id=${info[i].id}'>
                                    <img src=${"https://image.tmdb.org/t/p/w300/" + info[i].poster_path} alt='' />                                        
                                     <p>${info[i].original_name}</p>    </a>
                                    </article>`
                }
                container.innerHTML = series;   
        })
            
        .catch(function(error){
            console.log(error);
        })
    
