// IMC
function imc() {
    let peso = Number(document.getElementById("peso").value)
    let alt = Number(document.getElementById("alt").value)
    let visor = document.getElementById("visor")
    let resultado = 0
    resultado = peso / (alt ** 2)
    resultado = resultado.toFixed(2)
    if (resultado > 18.6 && resultado < 24.9) {
        visor.innerHTML = "seu IMC é: " + resultado + ", peso normal"
    }
    if (resultado > 24.9 && resultado > 1) {
    resultado + ", acima do peso"
        }
    if (resultado < 18.6) {
        visor.innerHTML = "seu IMC é: " + resultado + ", abaixo do peso"
    }
    if (peso < 1 || alt < 1) {
        alert("Insira um valor de peso válido")
    }
}
// RAIO
function raio() {
    let raio = Number(document.getElementById("raio").value)
    let visor = document.getElementById("visoraio")
    let resultado = 3.14 * (raio ** 2)
    resultado = "a área é igual a: " + resultado.toFixed(2) + "m"
    if (raio < 1) {
        alert("Insira um valor válido")
    }
    else{
        visor.innerHTML = resultado
    }
}
// CELSIUS
function celfah() {
    let cels = Number(document.getElementById("celsius").value)
    let visor = document.getElementById("visortemp")
    let resultado = (cels * 9 / 5) + 32
    resultado = resultado.toFixed(2)
    resultado = cels + "°C é igual a " + resultado + "°F"
    if (cels < 1) {
        alert("Insira um valor válido")
    }
    else{
        visor.innerHTML = resultado
    }
}
// LAMPADA
function LNPC() {
    let visor = document.getElementById("visorLNPC")
    let largura = document.getElementById("LargMet").value
    let comprimento = document.getElementById("CompMet").value
    let watts = document.getElementById("Watts").value
    let area = largura * comprimento
    let pt = area * 18
    let resultado = (pt / watts).toFixed(0)
    if (resultado < 1){
        resultado = 1
    }
    if (largura < 1 || comprimento < 1 || watts < 45 || watts > 110) {
        alert("Insira valores válidos")
    }
    
    else{
        visor.innerHTML = "Número de lampâdas necessárias: " + resultado + " lâmpadas de 18W"
    }
}