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
    - var s3 = `JavaScript`

- **Number:** No JavaScript não existe diferença de números inteiros e reais os números são chamados de  `number`. Eles podem ser: `Infinity` ou `NaN`.

- **Boolean:** São valores. `true` ou `false`.

- **Null:**

- **Undefined:**

- **Object:**

- **Function:**

## Manipulação de Dados

### Chamar uma variável
- É necessário colocar o nome da variável fora da '' e utilizar o + para juntar a variável com a frase
```js
    var nome = window.prompt('Qual é seu nome?')
    window.alert(nome + ' obrigada por acessar essa página!')
```
```js
var n1 = window.prompt('Digite o lado:')
var n2 = window.prompt('Digite a altura:')
var resultado = n1 * n2
window.alert('A área do retângulo é ' + resultado)
```
- **Conversão de string para  número:** O carácter + serve para adição (number + number) e concatenação (string + string). No exemplo acima, o `window.prompt` interpreta como uma string, então o `n1 * n2` está concatendo. Para transformar essa string em um número usamos as seguintes linhas de código: `Number.parseInt(n)` para número inteiro, `Number.parseFloat(n)` para número real, entre outras. Ex: 

```js
var n1 = Number.prseInt(window.prompt('Digite o lado:'))
var n2 = Number.parseInt(window.prompt('Digite a altura:'))
var resultado = n1 * n2
window.alert('A área do retângulo é ' + resultado)
```

> **OBS:** Hoje em dia o JavaScript entende o `Number(n)` como um número real ou inteiro. Ex:
```js
var n1 = Number(window.prompt('Digite o lado:'))
```
- **Conversão de número para string:** Para a conversão de número para string, utilizamos: `String(n)` ou `n.toString()`. Ex: 
```js
var n1 = Number.prseInt(window.prompt('Digite o lado:'))
var n2 = Number.parseInt(window.prompt('Digite a altura:'))
var resultado = n1 * n2
window.alert('A área do retângulo é ' + String(resultado))
``` 

- **Formatação de String:**
- Ao invés de usar a concatenção, ou seja, o +. Usamos o `${nome_variavel}`, isso é chamado de template de string.
- Para saber quantos carácteres a string tem: `s.length`
- Para formatar a string para maiúsculo: `s.toUpperCase`
- Para formatar a string para minúsculo: `s.toLowerCase