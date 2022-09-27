
// ORDENES //
window.onload = function(){miFuncion()};
window.onscroll = function(){todos()}; 

function casitodos(){
    miFuncion();
    miFuncion2();
}


function todos(){
    subir();
    miFuncion();
    miFuncion2();
}
// CIERRE ORDENES //


// EFECTO EN FOTO CAMPING //
var camping = document.getElementById("camping");

var distancia_camping;

function miFuncion(){
    distancia_camping = window.innerHeight = camping.getBoundingClientRect().top
if(distancia_camping >= 100) {
    camping.classList.add("efecto-camping");
}
}
// CIERRE EFECTO EN FOTO CAMPING //




// BLOQUES FREQUENTLY ASKED QUESTIONS //
function mostrar(){
    document.getElementById("pregunta1").style.display = 'block'
}

function ocultar(){
    document.getElementById("pregunta1").style.display = 'none'
}

function mostrar_ocultar(){
    var pregunta1 = document.getElementById("pregunta1");

    if(pregunta1.style.display == "none"){
        mostrar();
    }
    else{
        ocultar();
    }
}

function mostrar2(){
    document.getElementById("pregunta2").style.display = 'block'
}

function ocultar2(){
    document.getElementById("pregunta2").style.display = 'none'
}

function mostrar_ocultar2(){
    var pregunta2 = document.getElementById("pregunta2");

    if(pregunta2.style.display == "none"){
        mostrar2();
    }
    else{
        ocultar2();
    }
}

function mostrar3(){
    document.getElementById("pregunta3").style.display = 'block'
}

function ocultar3(){
    document.getElementById("pregunta3").style.display = 'none'
}

function mostrar_ocultar3(){
    var pregunta3 = document.getElementById("pregunta3");

    if(pregunta3.style.display == "none"){
        mostrar3();
    }
    else{
        ocultar3();
    }
}

function mostrar4(){
    document.getElementById("pregunta4").style.display = 'block'
}

function ocultar4(){
    document.getElementById("pregunta4").style.display = 'none'
}

function mostrar_ocultar4(){
    var pregunta4 = document.getElementById("pregunta4");

    if(pregunta4.style.display == "none"){
        mostrar4();
    }
    else{
        ocultar4();
    }
}
// CIERRE BLOQUES FREQUENTLY ASKED QUESTIONS //






// BOTON SUBIR ARRIBA //
document.getElementById("button-up").addEventListener("click", scrollUp);

function scrollUp(){

    var currentScroll = document.documentElement.scrollTop;

    if (currentScroll > 0){
        window.requestAnimationFrame(scrollUp);
        window.scrollTo (0, currentScroll - (currentScroll / 10));
    }
}


buttonUp = document.getElementById("button-up");

function subir(){
    var scroll = document.documentElement.scrollTop;

    if (scroll > 450){
        buttonUp.style.transform = "scale(1)";
    }else if(scroll < 450){
        buttonUp.style.transform = "scale(0)";
    }

}
// CIERRE BOTON SUBIR ARRIBA //