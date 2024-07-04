let novoElemento = document.createElement("p")
let texto = document.createTextNode("Algum texto")

novoElemento.appendChild(texto)

// let elementoAlvo = document.querySelector("#titulo-principal")
// let elementoPai = document.querySelector("#container-principal")


// elementoPai.insertBefore(novoElemento, elementoAlvo)
window.onload = () => {
let p = document.querySelector("#paragrafo-principal")
let pai = p.parentNode

pai.appendChild(novoElemento)

console.log(p)
}

