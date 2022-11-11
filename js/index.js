let url_pelis_pop = 'https://api.themoviedb.org/3/movie/popular?api_key=0317bbf7efac7dd04b2c2c3748377d57&language=en-US&page=1'

fetch (url_pelis_pop)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data)
        let info = data.results
        let conteiner = document.querySelector('.pelis_pop');
        let peliculas_populares = '';
        for(let i = 0; i<info.length; i++){
            peliculas_populares += `<article>
                                        <img src=${info[i].backdrop_path} alt='' />
                                        <p>${info[i].title}</p>
                                    </article>`
        }
        conteiner.innerHTML = peliculas_populares;
    })
    .catch(function(error){
        console.log(error);
    })


let url_pelis_latest = 'https://api.themoviedb.org/3/movie/upcoming?api_key=0317bbf7efac7dd04b2c2c3748377d57&language=en-US&page=1'

    fetch (url_pelis_latest)
        .then(function(response){
            return response.json();
        })
        .then(function(data){
            console.log(data)
            let info = data.results
            let conteiner = document.querySelector('.pelis_lat');
            let peliculas_latest = '';
            for(let i = 0; i<info.length; i++){
                peliculas_latest += `<article>
                                            <img src=${info[i].poster_path} alt='' />
                                            <p>${info[i].original_title}</p>
                                        </article>`
            }
            conteiner.innerHTML = peliculas_latest;
        })
        .catch(function(error){
            console.log(error);
        })


let url_series = 'https://api.themoviedb.org/3/tv/{tv_id}/episode_groups?api_key=0317bbf7efac7dd04b2c2c3748377d57&language=en-US'

fetch (url_pelis_latest)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data)
        let info = data.results
        let conteiner = document.querySelector('.ser');
        let series = '';
        for(let i = 0; i<info.length; i++){
            series += `<article>
                                        <img src=${info[i].poster_path} alt='' />
                                        <p>${info[i].original_title}</p>
                                    </article>`
        }
        conteiner.innerHTML = series;
    })
    .catch(function(error){
        console.log(error);
    })