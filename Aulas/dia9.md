## Propriedades CSS
- **Clear:** `clear` limpa as flutuações. Ex
    1. `clear-left` Retira a flutuação à esquerda;
    2. `clear-right` Retira a flutuação à direita;
    3. `clear-both` Retira a flutuação em ambos os lados. 
    ```css
    #bloco03{
    background: violet;
    clear: left;
    ```
> OBS: A propriedade `position` não pode está em `absolute`. `clear` limpa somente as flutuações. 

- **Overflow:** `overflow` Controla quando o conteúdo transborda/ultrapassa a área da borda. Ex:
    1. `overflow: visible` Deixa o conteúdo visivel, mesmo que ultrapasse a área determinada;
    2. `overflow: scroll`  Cria barra de andamento/rolagem dentro do bloco na vertical e horizontal;
    3. `overflow: hidden` Esconde o centeúdo ultrapassado;
    4. `overflow: auto` identifica a área ultrapassada e acrescenta barra de rolagem na vertical ou na horizontal.
```css
#bloco01{
    background: slateblue;
    overflow: visible
}
#bloco02{
    background: springgreen;
    overflow: scroll
    }

#bloco03{
    background: violet;
    overflow: hidden
}
#bloco04{
    background:red;
    overflow: auto
}
```
> OBS: `overflow-y: scroll` mostra a barra de rolagem somente no eixo Y, `overflow-x: scroll` mostra a barra de rolagem somente no eixo X.

- **Max-width:** Determina o máximo de largura do bloco. Ex:
```css
#bloco03{
    background: violet;
    max-width: 500px;
```
- **Max-height:** Determina o máximo de altura do bloco. Ex:
```css
#bloco03{
    background: violet;
    max-height: 600px;
```
- **Min-width:** Determina o minimo de largura do bloco. Ex:
```css
#bloco03{
    background: violet;
    min-width: 500px;
```
- **Min-height:** Determina o minimo de altura do bloco. Ex:
```css
#bloco03{
    background: violet;
    min-height: 600px;
```

- **Text Shadow:** `text-shadow` é utilizada para aplicar sombras no texto. Ex:
```css
#bloco05 p{
    color: black;
     font-size: 5em;
     font-family: Arial;
     text-shadow: -4px 5px 10px #000;
    
 }
```
> OBS: A ordem dos elementos são sombra pra baixo, sombra pra cima, desfoque da sombra e a cor. Existe a possibilidade de colocar mais de uma sombra, é só repetir os elementos em ordem.