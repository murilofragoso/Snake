var posicao = 2;
var tempo;
var direcaoAtual;
var controleBotao;
var array = [0,1,2];
var tamanhoArray = array.length;
var comida;
var controleBotao2 = 0;
$(document).ready(function(){
    tempoComida();
    $("#reiniciar").animate({opacity: 0},0)
    $(document).keypress(function(e){
        if(e.keyCode == 100){
            if(controleBotao != 1 && controleBotao !=2 && controleBotao2 !=1){
                direcaoAtual = e.keyCode
                tempo = setTimeout(direita,200);
                controleBotao = 1;
                controleBotao2 = 1;
            }
        }else if(e.keyCode == 97){
            if(controleBotao != 2 && controleBotao !=1 && controleBotao2 !=1){
                direcaoAtual = e.keyCode
                tempo = setTimeout(esquerda,200);
                controleBotao = 2;
                controleBotao2 = 1;
            }
        }else if(e.keyCode == 119){
            if(controleBotao != 3 && controleBotao !=4 && controleBotao2 !=1){
                direcaoAtual = e.keyCode
                tempo = setTimeout(cima,200);
                controleBotao = 3;
                controleBotao2 = 1;
            }
        }else if(e.keyCode == 115){
            if(controleBotao != 4 && controleBotao !=3 && controleBotao2 !=1){
                direcaoAtual = e.keyCode
                tempo = setTimeout(baixo,200);
                controleBotao = 4;  
                controleBotao2 = 1;
            }
        }
    })
    $("#reiniciar").click(function(){
        reiniciar();
    }) 
})


function direita(){
    if(direcaoAtual == 100){
        if(
        posicao == 9 || posicao == 19 || posicao == 29 || posicao == 39 || 
        posicao == 49 || posicao == 59 || posicao == 69 || posicao == 79 ||
        posicao == 89 || posicao == 99) {
            posicao -=9;
        }else{
            posicao++;
        }
        if(posicao == comida){
            comeu();
        }else{
            addArray();
        }
        tempo = setTimeout(direita,200);
    }
}


function esquerda(){
    if(direcaoAtual == 97){
        if(
        posicao == 0 || posicao == 10 || posicao == 20 || posicao == 30 ||
        posicao == 40 || posicao == 50 || posicao == 60 || posicao == 70 ||
        posicao == 80 || posicao == 90) {
            posicao +=9;
        }else{
            posicao--;
        }
        if(posicao == comida){
            comeu();
        }else{
            addArray();
        }
        tempo = setTimeout(esquerda,200);
    }
}


function cima(){
    if(direcaoAtual == 119){
        if(
        posicao == 0 || posicao == 1 || posicao == 2 || posicao == 3 ||
        posicao == 4 || posicao == 5 || posicao == 6 || posicao == 7 ||
        posicao == 8 || posicao == 9){
            posicao +=90;
        }else{
            posicao -= 10;
        }
        if(posicao == comida){
            comeu();
        }else{
            addArray();
        }
        tempo = setTimeout(cima,200);
    }
}


function baixo(){
    if(direcaoAtual == 115){
        if(
        posicao == 90 || posicao == 91 || posicao == 92 || posicao == 93 ||
        posicao == 94 || posicao == 95 || posicao == 96 || posicao == 97 ||
        posicao == 98 || posicao == 99){
            posicao -=90;
        }else{
            posicao += 10;
        }
                    if(posicao == comida){
            comeu();
        }else{
            addArray();
        }
        tempo = setTimeout(baixo,200);
    }
}


function addArray(){
    controleBotao2 = 0;
    perdeu();
    $("td:eq(" + posicao + ")").addClass("snake");
    $("td:eq(" + array[0] + ")").removeClass("snake");
    array.splice(tamanhoArray ,0,posicao);
    array.splice(0,1);
}


function comeu(){
    controleBotao2 = 0;
    perdeu();
    $("td:eq(" + posicao + ")").addClass("snake");
    array.splice(tamanhoArray ,0,posicao);
    tempoComida();
    tamanhoArray = array.length ;
}


function tempoComida(){
    $("td:eq(" + comida + ")").removeClass("alimento");
    comida = Math.floor(Math.random() * 99);
    if (array.filter(function(item) { return item == comida }).length)
        tempoComida();
    else
        $("td:eq(" + comida + ")").addClass("alimento");
}


function perdeu(){
    for(var i = 0; i < array.length;i++){
        if(posicao == array[i]){
            alert("Você Perdeu!")
            direcaoAtual = 0;
            controleBotao2 = 1;
            $("#reiniciar").animate({opacity: 1},0)
        }
    }
}


function reiniciar(){
    for (var i = 0; i < array.length;i++){
        $("td:eq(" + array[i] + ")").removeClass("snake");
    }
    for (var i=0; i < 3;i++){
        $("td:eq(" + i + ")").addClass("snake");
    }
    controleBotao2=0;
    controleBotao=0;
    $("#reiniciar").animate({opacity: 0},0);
    tempoComida();
    array = [0,1,2];
    tamanhoArray = array.length;
    posicao = 2;
}