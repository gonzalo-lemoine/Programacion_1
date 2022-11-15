let query = location.search; //Obtengo la QS
let stringToObject = new URLSearchParams(query); //La trasnformo en OL
let aBuscar = stringToObject.get('buscador'); //Obtengo los datos de una propiedad con get()
console.log(aBuscar);


let url = `https://api.themoviedb.org/3/movie/popular?api_key=0317bbf7efac7dd04b2c2c3748377d57&language=en-US&page=1/?name=${aBuscar}`

console.log(url);

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
                                <img src=${info[i].backdrop_path} alt='' />
                                <p>${info[i].title}</p>
                            </article>`
        }
        container.innerHTML = characters;

        
    })
        
    .catch(function(error){
        console.log(error);
    })
