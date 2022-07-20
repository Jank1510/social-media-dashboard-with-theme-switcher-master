function btn() {
    console.log("jjasjas")
    var on = document.getElementById("btn-theme");


    var estilos = window.getComputedStyle(document.querySelector('btn-theme', '::before'));
    estilos.visibility = 'hidden'
}