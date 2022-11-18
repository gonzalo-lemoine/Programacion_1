let url_pelis_pop = 'https://api.themoviedb.org/3/movie/popular?api_key=0317bbf7efac7dd04b2c2c3748377d57&language=en-US&page=1'

fetch (url_pelis_pop)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data)
        let info = data.results
        let conteiner = document.querySelector('.pelis_pop');
        let url_img = 'https://image.tmdb.org/t/p/w100/'
        let peliculas_populares = '';

        for(let i = 0; i<info.length; i++){
            peliculas_populares += `<article>
                                        <img src=${"https://image.tmdb.org/t/p/w200/" + info[i].poster_path} alt='' />
                                        <a href='detalle_pelicula.html?id=${info[i].id}'><p>${info[i].title}</p></a>
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
                                            <img src=${"https://image.tmdb.org/t/p/w200/" + info[i].poster_path} alt=''/>                                            
                                            <a href='detalle_pelicula.html?id=${info[i].id}'><p>${info[i].original_title}</p></a>
                                        </article>`
            }
            conteiner.innerHTML = peliculas_latest;
        })
        .catch(function(error){
            console.log(error);
        })


let url_series = 'https://api.themoviedb.org/3/tv/on_the_air?api_key=0317bbf7efac7dd04b2c2c3748377d57&language=en-US&page=1'

fetch (url_series)
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
                                        <img src=${"https://image.tmdb.org/t/p/w200/" + info[i].poster_path} alt='' />                                        
                                        <a href='detalle_pelicula.html?id=${info[i].id}'><p>${info[i].original_title}</p></a>
                                    </article>`
        }
        conteiner.innerHTML = series;
    })
    .catch(function(error){
        console.log(error);
    })