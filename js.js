let personajes = document.getElementById("personajes")
let imagenPrincipal = document.getElementById("imagenPrincipal")
let titulo = document.getElementById("titulo")
let parrafo = document.getElementById("parrafo")
var idiomaNumber = 1
var fondo = 1



function cambiarPersonaje(e){
    if(e.target.innerText == 'Juan' || e.target.id == 'juan' ){
        idioma.style.flexDirection = 'row'
        idiomaText.innerText = 'ES'
        console.log('Estas en Juan');
        imagenPrincipal.src = './img/muchachoRojoPrincipal.png';
        imagenPrincipal.classList.add('animacionPersonaje');
        setTimeout(function() {imagenPrincipal.classList.remove('animacionPersonaje');}, 300);
        titulo.innerText = 'JUAN';
        parrafo.innerHTML = 'Hombre de mediana edad y padre de Lucas. <br>Es consciente de los problemas de alimentación poco saludable de su familia y muestra interés en investigar y cambiar su dieta.<br>Es reflexivo y se siente culpable por no haberse dado cuenta antes de los efectos negativos de la comida chatarra.<br>Está comprometido en mejorar la salud de su familia.';
        idiomaNumber = 1

    }else if(e.target.innerText == 'Ana' || e.target.id == 'ana'){
        idioma.style.flexDirection = 'row'
        idiomaText.innerText = 'ES'
        console.log('Estas en Ana');
        imagenPrincipal.src = './img/señoraAzulPrincipal.png';
        imagenPrincipal.classList.add('animacionPersonaje');
        setTimeout(function() {imagenPrincipal.classList.remove('animacionPersonaje');}, 300);
        titulo.innerText = 'ANA';
        parrafo.innerHTML = 'Mujer de mediana edad y madre de Lucas.<br>Está preocupada por la salud de su hijo y se siente culpable por permitir que comieran tanta comida chatarra.<br>Está dispuesta a hacer cambios en la dieta familiar y muestra entusiasmo al descubrir alimentos frescos y saludables en los mercados campesinos.';
        idiomaNumber = 3

    }else if(e.target.innerText == 'Lucas' || e.target.id == 'lucas'){
        idioma.style.flexDirection = 'row'
        idiomaText.innerText = 'ES'
        console.log('Estas en Lucas');
        imagenPrincipal.src = './img/muchachoAmarilloPrincipal.png';
        imagenPrincipal.classList.add('animacionPersonaje');
        setTimeout(function() {imagenPrincipal.classList.remove('animacionPersonaje');}, 300);
        titulo.innerText = 'LUCAS';
        parrafo.innerHTML = 'Hijo de Juan y Ana, de corta edad.<br>Experimenta problemas de salud debido a la mala alimentación de su familia. Está cansado y sin energía.<br>Su enfermedad lleva a la familia a investigar y cambiar su dieta.';
        idiomaNumber = 5

    }else if(e.target.innerText == 'Gomez' || e.target.id == 'gomez'){
        idioma.style.flexDirection = 'row'
        idiomaText.innerText = 'ES'
        console.log('Estas en Gomez');
        imagenPrincipal.src = './img/señoraRosadaPrincipal.png';
        imagenPrincipal.classList.add('animacionPersonaje');
        setTimeout(function() {imagenPrincipal.classList.remove('animacionPersonaje');}, 300);
        titulo.innerText = 'GOMEZ';
        parrafo.innerHTML = 'Propietario de un supermercado local.<br>Es descrito como un hombre mayor y amargado.<br>Se muestra resentido y crítico cuando ve a la familia comprando en los mercados campesinos, y argumenta que los productos que venden son más confiables y menos costosos.';
        idiomaNumber = 7
    }
}
personajes.addEventListener("click", cambiarPersonaje);

function cambiarIdioma(e){
    if(e.target.id=='idioma' || e.target.id == 'idiomaText' || e.target.classList == 'circle'){
        console.log('hola');
        if (idiomaNumber == 1) {
            parrafo.innerHTML = 'Hombre de mediana edad y padre de Lucas. <br>Es consciente de los problemas de alimentación poco saludable de su familia y muestra interés en investigar y cambiar su dieta.<br>Es reflexivo y se siente culpable por no haberse dado cuenta antes de los efectos negativos de la comida chatarra.<br>Está comprometido en mejorar la salud de su familia.';
            idioma.style.flexDirection = 'row'
            idiomaText.innerText = 'ES'
            idiomaNumber = 2
        }
        else if (idiomaNumber == 2) {
            parrafo.innerHTML = "Middle-aged man and father of Lucas.<br>He is aware of his family's unhealthy eating habits and shows interest in researching and changing their diet.<br>He is reflective and feels guilty for not realizing the negative effects of junk food earlier.<br>He is committed to improving the health of his family.";
            idioma.style.flexDirection = 'row-reverse'
            idiomaText.innerText = 'EN'
            idiomaNumber = 1
        }
        else if (idiomaNumber == 3) {
            parrafo.innerHTML = 'Mujer de mediana edad y madre de Lucas.<br>Está preocupada por la salud de su hijo y se siente culpable por permitir que comieran tanta comida chatarra.<br>Está dispuesta a hacer cambios en la dieta familiar y muestra entusiasmo al descubrir alimentos frescos y saludables en los mercados campesinos.';
            idioma.style.flexDirection = 'row'
            idiomaText.innerText = 'ES'
            idiomaNumber = 4
        }
        else if (idiomaNumber == 4) {
            parrafo.innerHTML = "Middle-aged woman and mother of Lucas.<br>She is concerned about her son's health and feels guilty for allowing them to eat so much junk food.<br>She is willing to make changes in the family's diet and shows enthusiasm in discovering fresh and healthy foods at farmers' markets.";
            idioma.style.flexDirection = 'row-reverse'
            idiomaText.innerText = 'EN'
            idiomaNumber = 3
        }
        else if (idiomaNumber == 5) {
            parrafo.innerHTML = 'Hijo de Juan y Ana, de corta edad.<br>Experimenta problemas de salud debido a la mala alimentación de su familia. Está cansado y sin energía.<br>Su enfermedad lleva a la familia a investigar y cambiar su dieta.';
            idioma.style.flexDirection = 'row'
            idiomaText.innerText = 'ES'
            idiomaNumber = 6
        }
        else if (idiomaNumber == 6) {
            parrafo.innerHTML = "Son of Juan and Ana, of young age.<br>He is experiencing health problems due to his family's poor nutrition. He feels tired and lacking energy.<br>His illness leads the family to research and change their diet.";
            idioma.style.flexDirection = 'row-reverse'
            idiomaText.innerText = 'EN'
            idiomaNumber = 5
        }
        else if (idiomaNumber == 7) {
            parrafo.innerHTML = 'Propietario de un supermercado local.<br>Es descrito como un hombre mayor y amargado.<br>Se muestra resentido y crítico cuando ve a la familia comprando en los mercados campesinos, y argumenta que los productos que venden son más confiables y menos costosos.';
            idioma.style.flexDirection = 'row'
            idiomaText.innerText = 'ES'
            idiomaNumber = 8
        }
        else if (idiomaNumber == 8) {
            parrafo.innerHTML = "Owner of a local supermarket.<br>Described as an elderly and bitter man.<br>He appears resentful and critical when he sees the family shopping at farmers' markets and argues that the products they sell are more reliable and less expensive.";
            idioma.style.flexDirection = 'row-reverse'
            idiomaText.innerText = 'EN'
            idiomaNumber = 7
        }
    }
}
idioma.addEventListener("click", cambiarIdioma)

function cambiarFondo(e) {
    if (fondo == 1) {
        imgFondo.style.backgroundImage = 'url(./img/30205.jpg)';
        fondo = 2
    } else if (fondo == 2){
        imgFondo.style.backgroundImage = 'url(./img/ilustracion-paisaje-campos-verano_176516-562.avif)';
        fondo = 1
    }
}
fondoText.addEventListener('click', cambiarFondo);
