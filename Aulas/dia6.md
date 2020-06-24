## Propriedades de Texto CSS
- **Line-height:** `line-height` formata os espaços entre as linhas do texto. Pode ser tamanho relativo ou absoluto. Ex:
```css
line-height: inherit;
```
> **OBS:** Todas as propriedades de texto e fonte podem ser inseridas em uma única linha para melhor apresentação do código. Para utilização da `font` é necessário ter no mínimo o tamanho `font-size` e a família `font-family`. Ex: 
```css
font: lighter normal small-caps 18px/60px Arial, Helvetica, sans-serif;

font: 14px Arial, Helvetica, sans-serif ;
```
> **IMPORTANTE:** Ordem para o `font` funcionar:
> 1. font-weight: lighter;
> 2. font-style: normal;
> 3. font-variant: small-caps;
> 4. font-size: 18px;
> 5. line-height: 60px;
> 6. font-family:

- **Color:**  `color` dita a cor da fonte do texto. Ex:
```css
color: lightblue;
```
- **Text Align:** `text-align` funciona como alinhamento de texto. Ex: 
```css
text-align: end;
```

- **Text transform:** `text-transform` Transforma o texto em caixa alta, em caixa baixa ou a primeira letra de cada parágrafo. Ex:
```css
text-transform: lowercase
```

- **Text Decoration:** `text-decoration` sublinha as linhas. Ex: 
```css
text-decoration: under-line over-line;
```

- **Text Indent:** `text-indent` identação do texto "deita o texto pra direita". Ex:
```css
text-indent: 60px;
```

# Seletores CSS
- É o HTML antes do CSS. Quando colocamos as regras CSS dentro da `<div>`, aquelas regras irão valer para todos os "containers" `<div>` , a mesma regra vale para o `<p>` `<h>` e todas as outras TAGs.

- **Seletor Universal:** Elimina as regras CSS que é padrão para o navegador e atribuir uma caracterísitica a todos os elementos da página. A declaração dela está no documento do dia 6.


- **Seletor Identidicador:** O id é escrito dentro da TAG. "marca a TAG com um nome próprio". Ex:
```html
<h1 id="logo_iti">Conteúdo</h1>
```
```html
<style>
    *{
         font-size: 15px;
         margin: 0;
         padding: 0;
    }

    #Logo_iti{
        font-size: 25px;
    }
</style>
```
- **Seletor Classe:** A classe é muito parecida com o id, sua sintaxe muda pouca coisa. Ex:
```html
<h1 class="estilo_testo01">Titulo 02</h1>
```
```html
<style>
    *{
        font-size: 15px;
        margin: 0;
        padding: 0;
    }
    .estilo_testo01{
        color: darksalmon;
        font-size: 40px;
        font-family: Arial, Helvetica, sans-serif;
    }

</style>
```

> OBS: O id é um identificador único, não é certo repetir o nome do id. Se caso for necessário fazer algo do tipo, usar o class.
