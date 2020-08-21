var num = [1, 5, 7, 3, 9];

// Para acrescentar um valor dentro de um vetor. Lembrando sempre que a posição começa do 0.
num[5] = 4;
// Para colocar na última posição, mesmo sem saber qual é.
num.push(8);
// Para saber o comprimento do vetor. 
console.log(`O comprimento do vetor é ${num.length}`);
// Para organizar todos os elementos do vetor em ordem crescente, usamos:
//num.sort()
console.log(`vetor ${num}`);
// Para mostrar apenas um elemento do vetor. 
console.log(`O primeiro elemento do vetor é ${num[0]}`);
// Para mostrar o vetor sem a formatação padrão:
/*for (var pos = 0; pos < num.length; pos++ ){
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}*/
// Atualmente usamos o for de forma mais simples para percorrer todo vetor
for (var pos = 0 in num ){
    console.log(num[pos])
}

// Para buscar valores dentro do vetor. Ele vai porcurar o valor que está dentro dos parênteses e mostrar a chave
var position = num.indexOf(5);
console.log(`A chave do valor procurado é: ${position}`)
// OBS: quando a posição não existe, ele retorna -1. para corrigir é só colocar num if