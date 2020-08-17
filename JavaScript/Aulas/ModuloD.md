# Condições em JavaScript

## IF
- Para declarar um `if` usamos:
```js
if (condição){

} else{

}
```
> **OBS:** O uso do IF no html está no exercício modD-ex2.html

### Condições alinhadas

- Uma condição dentro da outra. Para tornar isso possível utilizamos o `else if` Ex:
```js
// Usando as condições alinhadas
var idade = 17
if (idade < 16) {
    console.log('Não vota')
} else{
    if (idade < 18){
    console.log('Voto opicional')
    } else{
        console.log('Voto obrigatório')
    }
}
```
```js
// Usando o else if
var idade = 17
if (idade < 16) {
    console.log('Não vota')
} else if (idade < 18){ 
    console.log('Voto opicional')
    } else if (idade >= 18){
        console.log('Voto obrigatório')
    }
```

## Condições múltiplas

- Utiliza-se uma condição para testar vários valores dentro da condição. Declaramos essa condição com o `switch` com o uso **obrigatório** do `break`, pois o JavaScript vai executar apenas se a `case` for o resultado da expressão e o `break` vai sair do `switch`. Se nenhum dos valores forem satisfeitos então o `default` será executado. Ex:
```js
switch (expressão) {
    
    case valor 1:
        break
    case valor 2:
        break
    case valor 3:
        break
    
    default:
}
```
- Ex: 
```js
var agora = new Date()
var dia_semana = agora.getDay()
/*
No JavaScript os dias da semena são:
0 Domingo
1 Segunda
2 Terça
3 Quarta
4 Quinta
5 Sexta
6 Sábado
*/
switch(dia_semana) {
    case 0:
        console.log('Domingo')
        break
    case 1:
        console.log('Segunda')
        break
    case 2:
        console.log('Terça')
        break
    case 3:
        console.log('Quarta')
        break
    case 4:
        console.log('Quinta')
        break
    case 5:
        console.log('Sexta')
        break
    case 6:
        console.log('Sábado')
        break
    default:
        console.log('Esse dia não existe')
        break
}
```