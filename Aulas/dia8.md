## Propriedades CSS

- **Box sizing:** Quando é necessário fazer um container, ditamos as regras CSS para altura, largura, comprimento, bordas e etc; Apesar de ditarmos todas as medidas, é necessário acrescentar o `box-sizing`, pois ele garante que as medidas serão respeitadas. Ex:
   
    1. `border-box` Preenchimento e borda na largura e altura do elemento;
    2. `content-box` Propriedades de largura e altura (e propriedades mín / máx) incluem apenas o conteúdo;
    3. `initial` Usada para definir uma propriedade CSS para seu valor padrão. Ex: Defina a cor do texto do elemento `<div>` para vermelho, mas mantenha a cor inicial dos elementos `<h1>`;
    4. `inherit` Atribui uma propriedade de algum elemento pai.
    
```css
#container{
    width: 500px;
    height: 400px;
    padding: 30px;
    border: 2px solid blue;
    margin: 30px;
    box-sizing: border-box;
}
```
```html
<div id="container">
```
- **Dispay:** Ao invés de usar o elemento em linha, o `display` transforma o elemento em bloco. Essa propriedade é muito usada com link e outras tags html. A propriedade `display` determina como o box será apresentado através das regras CSS. Ex:
   
    1. `inline` Exibe um elemento como um elemento inline;
    2. `block` Exibe um elemento como um elemento de bloco;
    3. `contents` Faz com que o contêiner desapareça, tornando os elementos filho, filhos do elemento no próximo nível ;
    4. `inline-block` Exibe um elemento como um contêiner de bloco no nível embutido. O próprio elemento é formatado como um elemento embutido, mas você pode aplicar valores de altura e largura;
    5. `flex` Exibe um elemento como um contêiner flexível no nível do bloco;
    6. `grid` Exibe um elemento como um contêiner de `grid` no nível do bloco;
    7. `inline-flex` Exibe um elemento como um contêiner flexível em nível de linha;
    8. `inline-grid` Exibe um elemento como um contêiner de grade no nível embutido.

```css
span{
    background: goldenrod;
    display: block;
}
```
> OBS: Pode também ser usado o `display` em linhas, os elementos ficam um do lado do outro. Ex:
```css
li{
    background: greenyellow;
    border: 2px solid royalblue;
    padding: 30px;  /*espaço entre os itens */
    display: inline-block;
}
```
> OBS: O `display none` é usado quando você deseja que o elemento não apareça na tela. Ex: 
```css
li{
    background: greenyellow;
    border: 2px solid royalblue;
    padding: 30px;
    display: none;
}
```

- **Position:** São propriedades usadas para colocar os elementos em determinadas posições. As propriedades utilizadas com o  são:

    1. `top` Posiciona de cima pra baixo, quanto maior o px, mais pra baixo o elemento fica;
    2. `left` Posiciona pra esquerda, quanto maior o px, mais pra esquerda;
    3. `bottom` Posiciona de baixo pra cima, quanto maior o px, mais pra cima o elemento fica;;
    4. `right` Posiciona pra direita, quanto maior o px, mais pra direita;
    6. `start`
    7. `end`

```css
#container{
    width: 600px;
    height: 700px;
    padding: 40px;
    border: 2px solid blue;
    margin: 30px; /*margem */
    box-sizing: border-box;
    top: 100px;
    left: 200px;
    bottom: 0;
    right: 0;
    position: absolute;
}
```
> OBS: A propriedade `position` tem muitas variações, como a `static`, `absolute`, `fixed`, `relative` entre outras. É importante conhecer cada uma delas para usa-las com sabedoria. A que mais usamos é a `relative`, pois com essa propriedade conseguimos mover o elemento através das outras propriedades, como, `top`, `left` e etc.

   1. `static` Todos os elementos tem o estado padão `static`. Os elementos são renderizados em ordem, conforme aparecem no fluxo do documento;
   2. `absolute` O elemento é posicionado em relação ao seu primeiro elemento ancestral posicionado (não estático), ou seja, quando você declara uma propriedade direcional em um elemento absolutamente posicionado, ele será posicionado em relação as seu ancestral declarado mais próximo;
   > OBS: É possível "esticar" os elementos, ao invés de apenas declarar sua altura e largura, se usar uma declaração absoluta junto com a herança, ou seja, dessa forma as dimensões do seu antepassado declarado posicionado mais próximo (avô) será ultrapassada pelo filho ou neto. 
   3. `fixed` O elemento está posicionado em relação à janela do navegador, ou seja, ficará fixo mesmo usando a barra de rolagem;
   > OBS: Um elemento de posição `fixed` nunca respeitará seus ancestrais, será sempre posicionado em relação à janela do documento.
   4. `relative` O elemento é posicionado com o uso dos elemento `top` `left` `right` `botom` em relação à sua posição do parente mais próximo, então "left: 20px" adiciona 20 pixels à posição ESQUERDA do elemento.



- **float:** Flutua os elementos. "empurrar os elementos para a esquerda, direita ou até mesmo cancelar o empurrão". No exemplo abaixo, todos os blocos vão estar um do lado do outro no eixo x, ao invés de um por cima do outro no eixo y. Ex:
```css
#bloco01, #bloco02, #bloco03{
    width: 300px;
    height: 300px;
    font: bold 2em/8 sans-serif;
    text-align: center;
    color: black;
    float: left;

}
```
> OBS: A propriedade `float` funciona apenas com os `positions-relative` e `position-fixed`.

- **Z-index:**  Modifica a ordem do empilhamento natural do html. No exemplo abaixo, a ordem de empilhamento natural seria o "bloco 03" na frente dos "blocos 01 e 02", com o `z-index` o "bloco 01" ficará na frente dos outros blocos. Ex:
```css
#bloco01, #bloco02, #bloco03{
    position: absolute;
    width: 300px;
    height: 300px;
    font: bold 2em/8 sans-serif;
    text-align: center;
    color: black;
    /* float: left; */

}
#bloco01{
    background: slateblue;
    /* float: none; */
    left: 0;
    top: 0;
    z-index: 1;
}
#bloco02{
    background: springgreen;
    left: 30px;
    top: 150px;
     z-index: 2;
}
#bloco03{
    background: violet;
    left: 60px;
    top: 300px;
     z-index: 3;
}
```
> OBS: É interessante usar o `position-absolute` nesse caso, pois essa propriedade ajudará a perceber a propriedade `z-indez` na apresentação do navegador, isso porque o mesmo se locomove no eixo z, ou seja, pra frente ou pra trás.
