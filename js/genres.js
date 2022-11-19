let url_generos= "https://api.themoviedb.org/3/genre/movie/list?api_key=0317bbf7efac7dd04b2c2c3748377d57&language=en-US"
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
                                    <A href='detail-genres.html?id=${info[i].id}'>
                                        <h2>${info[i].name}</h2>
                                    </A>
                                </article>`

        }
        conteiner.innerHTML = titulos_generos;
    })
    .catch(function(error){
        console.log(error);
    })
