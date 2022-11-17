let query = location.search; 
let stringToObject = new URLSearchParams(query); 
let busca= stringToObject.get('buscador'); 
console.log(busca);


let url = `https://api.themoviedb.org/3/tv/latest?api_key=0317bbf7efac7dd04b2c2c3748377d57&language=en-USname=${busca}`


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
        let aBuscar = stringToObject.get('buscador'); 
        if (aBuscar == ""){
            return "ERROR, los datos ingresados no existen"
        } else{
            for(let i=0; i<info.length; i++){
                characters += `<article>
                                    <img src=${info[i].backdrop_path} alt='' />
                                    <p>${info[i].title}</p>
                                </article>`
            }
            container.innerHTML = characters;
        }

        

        
    })
        
    .catch(function(error){
        console.log(error);
    })
