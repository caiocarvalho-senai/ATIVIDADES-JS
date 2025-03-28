function imc() {
    let peso = Number(document.getElementById("peso").value)
    let alt = Number(document.getElementById("alt").value)
    let visor = document.getElementById("visor")
    let resultado = 0
    resultado = peso /(alt**2)
    resultado = resultado.toFixed(2)
    if (resultado > 18.6 && resultado < 24.9) {
        visor.innerHTML ="seu IMC é: " + resultado + ", peso normal"
    }
    if (resultado > 24.9) {
        visor.innerHTML ="seu IMC é: " +  resultado + ", acima do peso"
    }
    if (resultado < 18.6) {
        visor.innerHTML ="seu IMC é: " +  resultado + ", abaixo do peso"
    }

}
function raio(){
    let raio = Number(document.getElementById("raio").value)
    let visor = document.getElementById("visoraio")
    let resultado = 3.14 * (raio**2) 
    resultado = "a área é igual a: " + resultado.toFixed(2) + "m"
    visor.innerHTML=resultado
}
function celfah(){
    let cels = Number(document.getElementById("celsius").value)
    let visor = document.getElementById("visortemp")
    let resultado = (cels * 9/5) + 32
    resultado = resultado.toFixed(2)
    resultado = cels + "°C é igual a " + resultado+ "°F"
    visor.innerHTML=resultado
}