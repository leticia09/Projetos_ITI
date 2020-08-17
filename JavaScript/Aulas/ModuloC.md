# Document Object Model
- É um conjunto de objetos do JavaScript para o tratamento de componentes visuais, basicamente, é um conjunto de objetos dentro do navegador que vai dar acesso aos componentes internos do web site.

## Árvore DOM
- Tudo do JavaScript está dentro de uma **window**. Essa raiz é composta por: 
    - **location:** Diz qual é a localização do site (url);
    - **document:** Documento atual. É composto pelo HTML;
    - **history:** Guarda o histórico, ou seja, na navegação do site da onde você veio e para onde você vai. 

- Como navegar/selecionar na árvore DOM: Existem 5 formas, que são:
- Por marca (tag): `getElementsBytagName()[]`. Para selecionar um parágrafo específico, sem usar a classe ou ID. Usamos:
```js
var p1 = window.document.getElementsByTagName('p')[0]
window.document.write(p1.innerText)
p1.style.color = 'red'
```
- Por ID: `getElementById()`. Ex:
```js
var h = document.getElementById('title')
h.style.color = 'green'
```
- Por nome: `getElementsByName()[]`. Ex:
```js
var h = document.getElementsByName('title')[0]
h.style.color = 'green'
```
 - Por classe: `getElementsByClassName()`. Ex:
```js
var h = document.getElementsByClassName('title')
h.style.color = 'green'
```
- Por seletor (css): `querySelector()`. Ex:
```js
var h = document.querySelector('h1.title')
h.style.color = 'green'
```

## Eventos DOM

- É tudo que vai acontecer com qualquer elemento. Existem vários eventos que podem acontecer. Ex:
    - mouseenter: Evento de mouse (passar o mouse em cima);
    - mousemove: Movimentação do mouse dentro do elemento;
    - mousedown: O click do mouse no elemento;
    - mouseup: O fim do click do mouse no elemento;
    - click: Movimento do mousedown e mouseup juntos, ou seja, o click inteiro;
    - mouseout: Quando o mouse sai do elemento

> **OBS:** Existem vários eventos possívem no DOM, aqui será descrito apenas alguns deles. Para encontrar mais eventos, clique [aqui](https://developer.mozilla.org/en-US/docs/Web/Events)

- **Funções:** É um conjunto de códigos que serão executadas apenas quando o **evento** ocorrer, ou seja, um bloco que contém várias linhas de códigos vão ser executados se ocorrer o evento. Para declara um bloco, é necessário colocar as linhas de código dentro das chaves "{}", e nomear como `function ação()`. 
> OBS: Os eventos podem ser configurados na parte HTML ou diretamente no JavaScript. Ex:

```html
<!-- HTML -->
<body>
    <div id="area" onclick="clicar()" onmouseenter="entrar()" onmouseout="sair()">
        interagir
    </div>
    <script>
         var a = document.getElementById ('area')
        function clicar(){
            a.innerText = 'Clicou'
        }

        function entrar(){
           a.innerText = 'Entrou'
        }

        function sair(){
            a.innerText = 'Saiu'
        }

    </script>
</body>
```

```js
// JavaScript   
var a = document.getElementById ('area')

a.addEventListener('click', clicar)
a.addEventListener('mouseenter', entrar) 
a.addEventListener('mouseout', sair)

function clicar(){
    a.innerText = 'Clicou'
}

function entrar(){
    a.innerText = 'Entrou'
}

function sair(){
    a.innerText = 'Saiu'
}

```

> **OBS:** O exercício de cáuculo usando o `function` é **modC-ex7.html**
