let $boton = document.querySelector('.btn')

let pokemones = function() {
    fetch(`https://pokeapi.co/api/v2/pokemon`)
        .then(respuesta => respuesta.json())
        .then(respuesta => {
            let contador = document.querySelector('.cantidad');
            contador.textContent = respuesta.count;
        })

}
$boton.addEventListener('click', () => {
    let $pokemon = document.querySelector('.input').value;
    fetch(`https://pokeapi.co/api/v2/pokemon/${$pokemon}`)
        .then(respuesta => respuesta.json())
        .then(respuesta => {
            console.log(respuesta);
            console.log(respuesta.types[0].type.name);
            // IMAGEN
            let $imagen = document.querySelector('.card-img-top');
            if (respuesta.sprites.front_default === null) {
                console.log(respuesta.sprites.front_default === null);
                $imagen.setAttribute('src', 'img/favpng_pokémon-go-psyduck-clip-art.png');

            } else {

                $imagen.setAttribute('src', respuesta.sprites.front_default)
            }
            //TITULO
            let $titulo = document.querySelector('.card-title');
            $titulo.textContent = respuesta.forms[0].name;
            //altura
            let $altura = document.querySelector('.altura');
            $altura.textContent = respuesta.height / 10;
            let $peso = document.querySelector('.peso');
            $peso.textContent = respuesta.weight / 10;
            let $tipo1 = document.querySelector('.tipo1');
            let $tipo2 = document.querySelector('.tipo2');
            $tipo1.textContent = respuesta.types[0].type.name;
            if (respuesta.types[1] == undefined) {
                $tipo2.textContent = "";
            } else {
                $tipo2.textContent = respuesta.types[1].type.name;

            }
        })
})
pokemones();

// hacer que la pantalla se divida en dos y poner una pokedex del lado derecho como solucion