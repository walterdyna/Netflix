

let botaoSom = document.querySelector(".botao-som")
let video = document.querySelector(".video")
let botao = document.querySelector(".link-info")
let modal = document.querySelector(".modal")

botaoSom.addEventListener("click", ligaSom)

function ligaSom () {

    video.muted = false

}

botao.addEventListener("click", motrarModal)
modal.addEventListener("click", escondeModal)

function motrarModal() {

    modal.style.display = "block"

}

function escondeModal() {

    modal.style.display = "none"

}