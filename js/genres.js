let url_generos= "https://api.themoviedb.org/3/genre/movie/list?api_key=0317bbf7efac7dd04b2c2c3748377d57&language=en-US"
fetch(url_generos)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data)
        let info = data.genres
        let conteiner= document.querySelector('.menu');
        let titulos_generos ='';
        for (let i=0; i<info.length; i++){
            titulos_generos += `<article>
                                    <a href="#go${info[i].name}">${info[i].name}</a> |
                                </article>`

        }
        conteiner.innerHTML = titulos_generos;
    })
    .catch(function(error){
        console.log(error);
    })


fetch(url_generos)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data)
        let info = data.genres
        let conteiner= document.querySelector('.allgenres');
        let titulos_generos ='';
        for (let i=0; i<info.length; i++){
            titulos_generos += `<article class="${info[i].name}">
                                    <A name="go${info[i].name}"></A>
                                    <h1>${info[i].name}</h1>
                                </article>`

        }
        conteiner.innerHTML = titulos_generos;
    })
    .catch(function(error){
        console.log(error);
    })
url_movies= "https://api.themoviedb.org/3/discover/tv?api_key=0317bbf7efac7dd04b2c2c3748377d57"
fetch(url_movies)
.then(function(response){
    return response.json();
})
.then(function(data){
    console.log(data)
})
.catch(function(error){
    console.log(error);
})