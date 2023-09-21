

let nome = document.querySelector("#nome")
console.log(nome)

const campoQtde = document.querySelector("#qtde")
const resultado = document.querySelector("output")
const campoTipo = document.querySelector("#tipo")
const campolayoutSim = document.querySelector("#layout_sim")
const campolayoutNao = document.querySelector("#layout_nao")
const campoJs = document.addEventListener("Js")
const campoprazo = document.querySelector("#prazo")

campoPrazo.addEventListener("input", function () {
    const labelPrazo = document.querySelector("label[for='prazo']")
    labelPrazo.innerHTML = `Prazo: ${campoprazo.value} semanas`
    calcular()
})

campoQtde.addEventListener("change",calcular)
campoTipo.addEventListener("change",calcular)
campolayoutSim.addEventListener("change",calcular)
campolayoutNao.addEventListener("change",calcular)
campoJs.addEventListener("chage,calcular")


function calcular(){

     console.log("calcular orçamento")

     let qtde = campoQtde.value
     let valor = qtde *100

     if (campoTipo.value == 2) valor += 1000
    
     if (campolayoutSim.checked == true) valor += qtde * 50
     
     if(campoJs.checked ) valor *= 1.1

     let taxaDeUrgencia =1 - campoprazo.value * 0.05
     valor *= 1 +taxaDeUrgencia


resultado.innerText = ` R$  ${valor}`

}