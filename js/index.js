let url_pelis_pop = 'https://api.themoviedb.org/3/movie/popular?api_key=0317bbf7efac7dd04b2c2c3748377d57&language=en-US&page=1'

fetch (url_pelis_pop)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data)
        let info = data.results
        let conteiner = document.querySelector('.carrusel');
        let peliculas_populares = '';

        for(let i = 0; i<info.length; i++){
            peliculas_populares += `<article class="pelis">
                                        <a href='detalle_pelicula.html?id=${info[i].id}'>
                                            <img src=${"https://image.tmdb.org/t/p/w300/" + info[i].poster_path} alt='' />
                                            <p>${info[i].title}</p>
                                        </a>
                                    </article>`
        }
        conteiner.innerHTML = peliculas_populares;
    })
    .catch(function(error){
        console.log(error);
    })

    let fila = document.querySelector('.contenedor_carrusel');
    let flechaIzquierda = document.getElementById('flecha_izquierda');
    let flechaDerecha = document.getElementById('flecha_derecha');
    
    // ? ----- ----- Event Listener para la flecha derecha. ----- -----
    flechaDerecha.addEventListener('click', () => {
        fila.scrollLeft += fila.offsetWidth;
    });
    
    // ? ----- ----- Event Listener para la flecha izquierda. ----- -----
    flechaIzquierda.addEventListener('click', () => {
        fila.scrollLeft -= fila.offsetWidth;
    });

    let url_pelis_latest = 'https://api.themoviedb.org/3/movie/upcoming?api_key=0317bbf7efac7dd04b2c2c3748377d57&language=en-US&page=1'

    fetch (url_pelis_latest)
        .then(function(response){
            return response.json();
        })
        .then(function(data){
            console.log(data)
            let info = data.results
            let conteiner = document.querySelector('.carrusel2');
            let url_img = 'https://image.tmdb.org/t/p/w100/'
            let peliculas_recientes = '';

            for(let i = 0; i<info.length; i++){
                peliculas_recientes += `<article class="pelis">
                                            <a href='detalle_pelicula.html?id=${info[i].id}'>
                                                <img src=${"https://image.tmdb.org/t/p/w300/" + info[i].poster_path} alt='' />
                                                <p>${info[i].title}</p>
                                            </a>
                                        </article>`
            }
            conteiner.innerHTML = peliculas_recientes;
        })
        .catch(function(error){
            console.log(error);
        })


    let fila2 = document.querySelector('.contenedor_carrusel2');        
    let flechaIzquierda2 = document.getElementById('flecha_izquierda2');
    let flechaDerecha2 = document.getElementById('flecha_derecha2');
        
    //  ----- ----- Event Listener para la flecha derecha. ----- -----
    flechaDerecha2.addEventListener('click', () => {
        fila2.scrollLeft += fila2.offsetWidth;
    });
        
    //  ----- ----- Event Listener para la flecha izquierda. ----- -----
    flechaIzquierda2.addEventListener('click', () => {
        fila2.scrollLeft -= fila2.offsetWidth;
    });


let url_series = 'https://api.themoviedb.org/3/tv/on_the_air?api_key=0317bbf7efac7dd04b2c2c3748377d57&language=en-US&page=1'

fetch (url_series)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data)
        let info = data.results
        let conteiner = document.querySelector('.carrusel3');
        let series = '';
        for(let i = 0; i<info.length; i++){
            series += `<article class="pelis">
                                    <a href='detalle_serie.html?id=${info[i].id}'>
                                        <img src=${"https://image.tmdb.org/t/p/w300/" + info[i].poster_path} alt='' />                                        
                                        <p>${info[i].original_name}</p>
                                    </a>
                                    </article>`
        }
        conteiner.innerHTML = series;
    })
    .catch(function(error){
        console.log(error);
    })

    let fila3 = document.querySelector('.contenedor_carrusel3');
    let flechaIzquierda3 = document.getElementById('flecha_izquierda3');
    let flechaDerecha3 = document.getElementById('flecha_derecha3');
    
    // ? ----- ----- Event Listener para la flecha derecha. ----- -----
    flechaDerecha3.addEventListener('click', () => {
        fila3.scrollLeft += fila3.offsetWidth;
    });
    
    // ? ----- ----- Event Listener para la flecha izquierda. ----- -----
    flechaIzquierda3.addEventListener('click', () => {
        fila3.scrollLeft -= fila3.offsetWidth;
    });

    //Capturo el form de busqueda
    let form = document.querySelector('form');

    //Capturo el input del form
    let inputBusqueda = document.querySelector('.inputBusqueda');

    //Capturo el <p> de errores
    let error = document.querySelector('.errorForm');

    //agrego un eventListener para el submit del form
    form.addEventListener('submit', function(e){
        e.preventDefault();
        
        if (inputBusqueda.value === "") {
            let alerta1 = "ingrese una pelicula/serie en el buscador";
            alert(alerta1);

        } else if (inputBusqueda.value.length <= 3) {
            let alerta2 = "Debe ingresar al menos 4 caracteres";
            alert(alerta2);
        } else {
            form.submit()
        }
    })

