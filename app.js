alert('Boas vindas ao jogo do número secreto');
let numeroSecreto = 7;
console.log(numeroSecreto);
let chute;
let tentativas = 1;

//enquanto chute não for igual
while (chute != numeroSecreto) {
    chute = prompt('Escolha um número entre 1 e 0');
    //se chute for igual ao numero secreto
    if (chute == numeroSecreto) {
        alert(`Isso aí! Você descobriu o nùmero secreto ${numeroSecreto} com ${tentativas} tentativas.`);
    } else {
        if (chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}`);
        } else {
            alert(`O número secreto é maior que ${chute}`);
        }
        // tentativas = tentativas + 1;
        tentativas++;
    }
}

