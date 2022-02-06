const prompt = require("prompt-sync")();

//variaveis

let jogada = "";
let denovo = "";
const jogadasp1 = [""];
const jogadasp2 = [""];
const vencedor = [""];
let cont = 0;
let rodadas = 0;
let jogadapc = 0;
let pc = 0;
let player = 0;
let empate = 0;

//função número aleatório

function Aleatorio(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

//função calcular o vencedor dos duelos

function Vencedor (jogador , computador){

if(jogador === 1 && computador == 3){
    let marcador1 = vencedor.splice(cont , 1 , "player wins");
    player++;
}
else if(jogador === 2 && computador === 1){
    let marcador2 = vencedor.splice(cont , 1 , "player wins");
    player++;
}
else if(jogador === 3 && computador === 2){
    let marcador3 = vencedor.splice(cont , 1 , "player wins");
    player++;
}
else if(jogador === computador){
    let marcador4 = vencedor.splice(cont , 1 , "empate");
    empate++;
}
else{
    let marcador4 = vencedor.splice(cont , 1 , "pc wins");
    pc++;
}
}

//programa

do{
    rodadas = +prompt("Quantas rodadas teremos que jogar? ");    
   
    console.log(`Agora que decidiu que serão ${rodadas} rodadas vamos para o show principal!!`);
    for(; rodadas > 0 ; rodadas-- ){   
            jogada = prompt("Qual será sua jogada?entre (pedra, papel ou tesoura): ");
    
    if( jogada === "pedra"){
        jogada = 1;
    }
    else if( jogada === "papel"){
        jogada = 2;
    }
    else if( jogada === "tesoura"){
        jogada = 3;
    }
    else{
        console.log("jogada incorreta deve ser somente entre (pedra, papel ou tesoura)programa sera encerrado!");
        break;

    }
    jogadapc = Aleatorio(1 , 4)

    Vencedor( jogada ,jogadapc )

    let jogadap1 = jogadasp1.splice(cont , 1 , jogada);
    let jogadap2 = jogadasp2.splice(cont , 1 , jogadapc)
    cont++;  
    if(empate === 1 ){
        rodadas++;
        empate--;
        console.log("empatamos vamos denovo!")
    }  
    else{}
}
if(rodadas>0){
    break;
}
else{

}
cont = 0;

//resultado

    if(player>pc){
        console.log(`parabéns pela vitoria!! voce  ganhou ${player} partidas e eu ganhei ${pc} partidas foi um bom desafio!!` )
    }
    else if(player==pc){
        console.log(`Ual empatamos quem diria que voce seria um bom desafiante!! voce  ganhou ${player} partidas e eu ganhei ${pc} partidas foi um bom desafio!!` )
    }
    else{
        console.log(`HAHAHA Achei fácil ganhar de você!! voce  ganhou ${player} partidas e eu ganhei ${pc} partidas foi um bom desafio!!` )
    }
    console.log("segue abaixo resultado dos confrontos:")
    console.log(vencedor)
empate = 0;    
player = 0;
pc = 0;   

//reiniciar

denovo = prompt("deseja jogar denovo? (sim/nao): ");


}while (denovo !== "nao");








