alert('Boas vindas ao jogo do número secreto');
let numeroSecreto = 7;
console.log(numeroSecreto)
let  chute = prompt('Escolha um número entre 1 e 0');

if (chute == numeroSecreto) {
    alert(`Isso aí! Você descobriu o nùmero secreto ${numeroSecreto}`);
}else {
    alert('Você errou :(')
}
