var altura = 0
var largura = 0
var vidas = 1
var tempo = 16
var nivel = window.location.search
nivel = nivel.replace ('?', '')

var criaMosquitoTempo = 1500



if (nivel === 'normal'){
    var criaMosquitoTempo = 1500

}else if(nivel === 'dificil'){
    var criaMosquitoTempo = 1000
}else if(nivel === 'insano'){
    var criaMosquitoTempo = 750
}



function ajustaTamanhoPalcoJogo(){
 altura = window.innerHeight
 largura = window.innerWidth
console.log(largura, altura)
}
ajustaTamanhoPalcoJogo()

var cronometro = setInterval(function() {

	tempo -= 1

	if(tempo < 0) {
		clearInterval(cronometro)
		
		window.location.href = "vitoria.html"
	} else {
		document.getElementById('cronometro').innerHTML = tempo
	}
	
}, 1000)


function posicaoRandomica (){
    // remover o mosquito anterior (caso exista)
    if (document.getElementById('mosquito') != null) {
        document.getElementById('mosquito').remove() 
        // variavel vida é igual a 1 quando acrecenta fica v1 v2 v3
        if ( vidas > 3) {
           window.location.href = "fim_de_jogo.html"
        } else {
        document.getElementById('v' + vidas).src = "../assets/img/coracao_vazio.png"

        vidas++
        }
    }


    var posicaoX = Math.floor(Math.random() * largura) - 90
	var posicaoY = Math.floor(Math.random() * altura) - 90
    
    posicaoX = posicaoX < 0 ? 0 : posicaoX
    posicaoY = posicaoY < 0 ? 0 : posicaoY



// criar o elemento html

var mosquito = document.createElement('img')
mosquito.src = './assets/img/mosca.png'
mosquito.className = tamanhoAleatorio() + ' ' +  ladoAleatorio()

mosquito.style.left = posicaoX + 'px'
mosquito.style.top = posicaoY + 'px'
mosquito.style.position = 'absolute'
document.body.appendChild(mosquito)
mosquito.id = 'mosquito'
mosquito.onclick = function(){
    this.remove()
}
console.log(tamanhoAleatorio())
}
setInterval (function() {
posicaoRandomica ()} , criaMosquitoTempo)

function tamanhoAleatorio(){
    var classe = Math.floor(Math.random() * 3)
   
    switch (classe) {
        case 0:
            return 'mosquito1'
        case 1:
            return 'mosquito2'
        case 2:
            return 'mosquito3'    
    }
}


function ladoAleatorio(){
    var classe = Math.floor(Math.random() * 2)
   
    switch (classe) {
        case 0:
            return 'ladoA'
        case 1:
            return 'ladoB'
       
    }

}
