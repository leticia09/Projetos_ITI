# JavaScript
## Variáveis e Tipos primitivos
- Para fazer um comentário em JavaScript, utilizamos // (comentar uma única linha) ou /* */ (comentar mais de uma linha).
> **OBS:** Em JavaScript o sinal "=" é achamado de "recebe".Ex: vaga_a = carro, ou seja, vaga_a recebe carro.
### Variável
- Todo espaço de memória que é utilizado para armazenar um dado é guardado por uma variável. No JavaScrip as variáveis são chamadas de `var` ou `let`. Para declarar uma variável, usamos `var` e um nome específico `nome`. Ex: `var n1 = 3`.

- **Nomes das variáveis:** As variáveis são denominadas como identificadores, ou seja, não se colocar qualquer nome para uma variável, existem algumas regras, que são:

    - Podem começar com uma **letra**, **$** ou **_**;
    - Não podem começar com números;
    - É possível usar letras ou números;
    - É possível usar acentos e símbolos;
    - Não podem conter espaços;
    - Não podem ser palavras reservadas. Ex: if.

> **OBS:** As letras maiúsculas e minúsculas fazem diferença.

### Tipos primitivos
- Para trabalhar com todos esses tipos primitivos, usamos muito o `typeof` "tipo de". Ex: 
```js
> var n = 200
> typeof
'number'
> typeof 'Google'
'String'
```
- **String** Existem três formas de delimitar a string (cadeias de caracteres) no JavaScript. 
    - var s1 = "JavaScript"
    - var s2 = 'JavaScript'
    - var s3 = \`JavaScript\`

- **Number:** No JavaScript não existe diferença de números inteiros e reais os números são chamados de  `number`. Eles podem ser: `Infinity` ou `NaN`.

- **Boolean:** São valores. `true` ou `false`.

> Outros tipos de dados são: Null, Undefined, Object e  Function.

## Manipulação de Dados

### Chamar uma variável
- É necessário colocar o nome da variável fora da '' e utilizar o + para concatenar a variável com a frase
```js
var nome = window.prompt('Qual é seu nome?');
window.alert(nome + ' obrigada por acessar essa página!');
```
```js
var n1 = window.prompt('Digite o lado:');
var n2 = window.prompt('Digite a altura:');
var resultado = n1 * n2
window.alert('A área do retângulo é ' + resultado);
```
- **Conversão de string para  número:** O carácter + serve para adição (number + number) e concatenação (string + string) ou (number + string) e etc. No exemplo acima, o `window.prompt` interpreta como uma string, então o `n1 * n2` está concatendo. Para transformar essa string em um número usamos as seguintes linhas de código: `Number.parseInt(n)` para número inteiro, `Number.parseFloat(n)` para número real, entre outras. Ex: 

```js
var n1 = Number.parseInt(window.prompt('Digite o lado:'));
var n2 = Number.parseInt(window.prompt('Digite a altura:'));
var resultado = n1 * n2
window.alert('A área do retângulo é ' + resultado)
```

> **OBS:** Hoje em dia o JavaScript entende o `Number(n)` como um número real ou inteiro. Ex:
```js
var n1 = Number(window.prompt('Digite o lado:'))
```
- **Conversão de número para string:** Para a conversão de número para string, utilizamos: `String(n)` ou `n.toString()`. Ex: 
```js
var n1 = Number.prseInt(window.prompt('Digite o lado:'));
var n2 = Number.parseInt(window.prompt('Digite a altura:'));
var resultado = n1 * n2
window.alert('A área do retângulo é ' + String(resultado));
``` 

- **Formatação de String:**
- Ao invés de usar a concatenção, ou seja, o +. Usamos o `${nome_variavel}`, isso é chamado de template de string.
> **OBS:** Para escrever no documento, usamos o `document.write(n)`
- Para saber quantos carácteres a string tem: `s.length`. Ex:
```js 
document.write(`Seu nome em letras Maiúsculas: ${(nome.length())}`);
```
- Para formatar a string para maiúsculo: `s.toUpperCase`. Ex:
```js 
document.write(`Seu nome em letras Maiúsculas: ${(nome.toUpperCase())}`);
```
- Para formatar a string para minúsculo: `s.toLowerCase`. Ex:
```js 
document.write(`Seu nome em letras Maiúsculas: ${(nome.toLowerCase())}`);
```
> OBS: É possível usar tags do HTML dentro do comando em JS. Ex: 
```js
document.write(`Seu nome em letras Maiúsculas: <strong>${(nome.toUpperCase())}</strong>`);
```

- **Formatação de números:** 
- `variável.toFixed(2)` Mostra o número com até duas casas decimais depois da vírgula; 
- `variável.toFixed(2).replace('.', ',')`  Troca o ponto por vírgula;
- `n1.toLocateString('pt-br', {style:'currency', currency:'BRL'})` Para mostrar o número como se fosse para mostrar um salário. Localiza a string em português, entre as chaves está os atributos/configurações. ESSA LINHA DE CÓDIGO NÃO DEU CERTO NO MEU NODE.JS 

## Operadores 

- **Aritméticos:** Os operadores aritmétricos são: (+), (-), (*), (/ divisão real), (% resto da divisão inteira) e (** potência).
> **OBS:** Ordem de **Precedência:** (), **, *, /, %, + e -.
- **Operadores de auto-atribuições:** É quando uma variável recebe um valor, e no próximo comando essa mesma variável é somada a um número real, ou seja, a variável receberá um novo valor. Ex:
```js
> var n = 3
> n = n + 4 ou n += 4 // n = 7
> n = n - 5 // n = 2
> n = n * 4 // n = 8
> n = n / 2 // n = 4
> n = n ** 2 // n = 16 
> n = n % 5 // n = 1
// Versão SIMPLIFICADA dos cálculos acima:
> n += 4
> n -= 5
> n *= 4
> n /= 2
> n **= 2
> n %= 5
```
- **Operadores de incremento:** É a simplificação da simplificação, ou seja, se antes para simplificar usavamos o `n += 1`, agora usamos o `n++` ou `n--`. Assim o valor de "n" será sempre somado +1 ou subitraido -1.

- **Relacionais:** Os opradores relacionais são: (>, maior que), (<, menor que), (>=, maior ou igual), (<=, menor ou igual), (==, igual)e (!=, diferente). O resultado é sempre "true" ou "false".
> **OBS:** Quando tem operadores aritméticos e relacionais, a ordem de procedência é: primeiro os aritmeticos e depois os relacionais.
- Operadores relacionais de **identidade**, ou operador de igualdade restrita `===`. Ele testa se os operadores são idênticos, ou seja, ter no mesmo valor e o mesmo tipo. Ex: `5 == 5 true`, `5 == '5' true` mas `5 === '5' false`

- **Lógicos:** Os operadores lógicos são: **(!, negação)** os resultados são "true" ou "false", **(&&, conjunção "e")** nessa condição, basta que um dos operadores sejam "false" para o resultado ser "false", ou seja, "true" "true" = "true", "true" "false" = "false", "false" "true" = "false" e "false" "false" = "false" e **(||, disjunção "ou")** nessa condição, basta que um dos operadores seja "true" para o resultado ser "true", ou seja, "true" "true" = "true", "true" "false" = "true", "false" "true" = "true" e "false" "false" = "false". Ex:
```js
> var idade = 18
> idade >= 15 && idade <= 17 // false
> var estado = 'RJ'
> estado == 'RJ' || estado == 'SP' // true
> var salario = 1300
> var sexo = 'm'
> salario > 1500 && sexo != 'm' // false
```
> **OBS:** Ordem de procedência: (!), (&&) e (||).

- **Ternário:** Os operadores ternários são: (?, interrogação) e (:, dois pontos). Se chama ternário porque tem três blocos, são eles, teste ? true : false, junta três opernados, é um teste lógico. Ex:
```js
> var media = 5
> media >= 7 ? 'aprovado' : 'reprovado' // reprovado
> media += 3 // media = 8
> var resultado = media % 2 == 0 ? 5:9 // resultado = 5
```
