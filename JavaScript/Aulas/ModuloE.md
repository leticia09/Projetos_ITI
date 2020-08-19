# Repetições 

### While (enquanto)
- Enquanto a condição for verdadeira, as sequências de códigos serão executadas. O laço só é quebrado quando a condição se torna falsa.
- Declarar um while:
```js
while (condição){

}
```
- Ex: 
```js
var c = 1;
while(c < 6){
    console.log(`While ${c}`);
    c++;
};
```
### Do While
-  O `while` é classificado como estrutura de repetição com teste lógico no início, entretanto, existe a possibilidade de fazer o teste lógico depois da sequência de comandos, que é a estrutura `while` ao contrário, ou seja `do while`. Primeiro executa o bloco de códigos e depois faz o teste lógico.
- Declarar um while:
```js
do {
//linha de códigos
}while (condição)
```
- Ex: 
```js
var c = 1;
do {
    console.log(`do while ${c}`)
    c++;
} while (c <= 6 )
```
> **OBS:** Enquanto a condição for verdadeira, ele volta para o `do`.

### For
- Estrutura de repetição com variável de controle. É feita a inicialização, o teste lógico e o incremento, se o teste lógico for verdadeiro, o bloco de código é executado. Então é feito o incremento. Ex:
```js
for (inicialização; teste lógico; incremento){
    //bloco de códigos
}
```
- Ex: 
```js
for (var c = 1; c <= 10 ; c++ ){
    console.log(`for ${c}`)
}
```