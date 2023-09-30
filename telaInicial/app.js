function abrirmenu (){
    const lista = document.getElementById("uluser")

    if (lista.style.display === "none" || lista.style.display === "") {
        lista.style.display = "block"
    } else {
        lista.style.display = "none"
    }
}