# Variáveis compostas (Arrays ou Vetores)
- As variáveis simples só conseguem armazenar um valor por vez, já as **variáveis compostas** são capazes de armazenar vários valores em uma mesma estrutura. O array é uma variável que tem vários elementos, cada elemento é composto por seu valor e uma chave de identificação. Para definir um vetor utilizamos os "[]". Ex:
```js
vaga a = [100]; // ou
vaga a = [carro0, carro1, carro2];
```
- A variável `a` do exemplo acima é um vetor. O vetor é composto de elementos. O elemento de um vetor é um par que agrupa o espaço memória, o valor declarado e o índice/chave que é a posição dos elementos. Lembrando que a posição começa sempre do 0. Por último observamos o conteúdo,  que no exemplo são os "carros". 
- Ex:
```js
var num = [5, 6, 7]; 
```
## Funcionalidades do vetor
- Para acrescentar um valor dentro de um vetor. A chave é descrita dentro dos "[ ]": 
```js
var num = [1, 5, 7, 3, 9];
num[5] = 4;
```
- Para colocar um valor na última posição, mesmo sem saber qual é:
```js
var num = [1, 5, 7, 3, 9, 4];
num.push(8);
```
- Para saber o comprimento do vetor: 
```js
var num = [1, 5, 7, 3, 9, 4, 8];
console.log(`O comprimento do vetor é ${num.length}`);
```
- Para organizar todos os elementos do vetor em ordem crescente: 
```js
var num = [1, 5, 7, 3, 9, 4, 8];
num.sort();
```
-  Para mostrar apenas um elemento do vetor: 
```js
var num = [1, 5, 7, 3, 9, 4, 8];
console.log(`O primeiro elemento do vetor é ${num[0]}`);
```
- Para mostrar o vetor sem a formatação padrão e percorrer o vetor:
```js
var num = [1, 5, 7, 3, 9, 4, 8];
/*for (var pos = 0; pos < num.length; pos++ ){
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}*/
// Atualmente usamos o "for" de forma mais simples para percorrer todo vetor
for (var pos = 0 in num ){
    console.log(num[pos])
}
```
-  Para buscar valores dentro do vetor. Ele vai porcurar o valor que está dentro dos parênteses e mostrar a chave:
```js
var num = [1, 5, 7, 3, 9, 4, 8];
var position = num.indexOf(5);
console.log(`A chave do valor procurado é: ${position}`);
// OBS: quando a posição não existe, ele retorna -1. para corrigir é só colocar o position == -1 num if retornando ERRO!
```
> **OBS:** O exercício modF-ex1.js contém todos esses exemplos.

# Funções 
- Toda função precisa ter uma chamada, conjunto de parâmetros de entrada, ação e retorno. Nem toda função usa parâmetros e tem retornos. Funções são ações executadas assim que *chamadas* ou em decorrência de algum evento. Ex:
```js
funcition ação (parametros-formal){
    // bloco de código. A ação propriamente dita
    return res
}
ação(5 parâmetro-real) // Chamada, vai disparar a execução da função ação
```
- Nesse exemplo o parâmetro da ação vai valer 5.
- Ex:
```js
function par_ou_impar(n){
    if (n%2==0){
        return 'par';
    } else{
        return 'impar';
    };
}
var res = par_ou_impar(11);
console.log(res);
```
- É possível colocar mais de um parâmetro na `function`. Ex:
```js
function somar(n1=0, n2=0, n3=0){
    return n1 + n2 * n3;
}
console.log(somar(3, 5, 7));
```
- É possível também tornar uma variável, uma `function`. Ex:
```js
var fun = function(x){
    return x*2;
}
console.log(fun(5));
```
- Exemplo de fatorial com e sem recursividade.
```js
function fatorial(n){
    var fat = 1;
    for (var c = n; c > 1; c--){
        fat = fat * c;
    }
    return fat
}
console.log(fatorial(5));

// resursividade
function fatorial(n){
    if (n == 1){
        return 1;
    } else {
        return n* fatorial(n-1)
    }
}
console.log(fatorial(5));
```