## Seletores parte 2

- **Seletor herança:** Esse seletor especifica a tag que o programador vai usar as regras CSS. Se existem várias tags `<h1>` dentro e fora da tag `<div>`, e o programador quer que somente as tags `<h1>` que estão dentro da `<div>` recebam as regras CSS, então deve-se usar o seletor herança. Ex:
```css
div h1 {
        color: rebeccapurple;
        font-size: 50px;
        font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
        }
```

- **Seletor adjacente:** (herança tipo filho) Span é ancestral, neto de `<div>`. Ex:
```css
div > span {
            color: red;
        }
```
> OBS: Para selecionar as títulos que iram mudar é necessário usar a herança. Ex:
```css
h1+h2 {
            color: seagreen;
            font-size: 30px;
        }
```
- Dessa forma, apenas os primeiros título 1 e título 2 estaram com as regras CSS.

- Para que todos os títulos sejam transformados pelas regras CSS, é só colocar um "~" no lugar do "+". Ex:
```css
h1~h2 {
            color: seagreen;
            font-size: 30px;
        }
```

## Pseudo-Classes
- Os seletores do tipo pseudo-classes nos permitem adicionar propriedades específicas aos elementos.
- **Links:** Utiliza-se o seletor do tipo "a", que se refere ao estado inicial do link (link não clicado) .Ex:
```css
 a:link {
            color: orange;
        }
```
```html
<h2><a href="#">Titulo 02</a></h1>
```

- **Visited:** Utiliza-se o seletor do tipo "a", que se refere ao estado final do link (link já clicado) .Ex:
```css
a:visited {
            color: black;
        }
```
> OBS: Quando clica no link o título fica na cor preta.

- **Ações:** Utiliza-se o seletor do tipo "a", e existem 3 tipos, o `hover` (refere-se ao passar o mouse no link e modificar o elemento), `active` (quando o elemento está ativo, ou seja, com o clique do mouse ativo no link) e `focus` (quando está com foco no elemento). Ex:
```css
    a:hover {
        font-size: 1.2em;
    }

    a:active {
        color: chartreuse;
    }

    a:focus {
        border: 4px solid greenyellow;
    }

```

> OBS: Ao contrário das propriedades anteriores as pseudo-classes podem ser usadas em outros elementos, não só o link `<a>`, pode  ser usar numa `<div>` ou em `<h1>`.

- **Estruturais:** Utiliza-se o seletor do tipo "a", e existem 4 tipos, a `first-child` (em lista, modifica o primeiro item), `last-child` (em lista, modifica o último item), `nth-child` (em lista, modifica de cima pra baixo o item selecionado),`last-nth-child` (em lista, modifica de baixo pra cima o item selecionado). Ex:
```css
  li:first-child{
            font-size: 2em;
            color: mediumseagreen;
        }

        li:last-child{
            font-size: 4em;
            color: hotpink;
        }
        li:nth-child(3){
            font-size: 6em;
            color: slategray;
        }
        
        li:nth-last-child(1){
            font-size: 8em;
            color: tomato;
        }

```
