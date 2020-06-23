# CSS   
- Existem algumas formas de implementar o CSS no HTML:
- em linha, ou seja, dentro de uma tag;
- inserir as regras css em head. Para fazer isso, dentro de head é necessário abrir uma tag style. Ex: 
```html
<head>
    <title>Aula de fluência html</title>
    <meta charset="utf-8">
    <style type="text/css" media="">
    </style>
</head>
```
> OBS: O media="" serve para definir a configuração css para determinada função. Ex: `media="braile"`. Então essa configuração css será atribuida somente na função braile. Pode ser usada pra impressão etc; Se você quiser que o css seja implementado em todas as midias, então fica `media="all"`

- É interessante fazer um css fora do html, e chamar o arquivo .css através do link, dessa forma:
```html
<head>
    <title>Aula de fluência html</title>
    <meta charset="utf-8">
    <link rel="stylesheet" type="text/css" href="estilo.css">
</head>
```

- Também pode ser importado o arquivo .css que contém as regras css através do `impot`. Ex:
```html
<style type="text/css" media="all">
    @import url(estilo.css);
</style>
```
## Propriedades
- **Background:** O fundo da página. `rgba` é a mistura de cores, `hsla` é a saturação das cores. Também é possivel colocar imagens e dizer onde elas devem ficar Ex:
```css
background-color: rgba(25%, 30%, 60%, 0.3);
background-color: hsla(30, 150, 60, 1);
```
```css
background-image: url("caminho.jpg") ;
background-repeat: no-repeat-y;
background-position: center top;
```
> OBS: Para simplificar todos esses `background`, é só criar um único `background`. Ex:
```css
background: grey url("caminho.jpg") no-repeat-y center top;
background-attachment: fixed;
``` 

### Propriedades de fonte

- **Family:** A fonte `font-family` determina o tipo de família da fonte. Ex:
```css
font-family: Arial, Helvetica, sans-serif;
```

- **Size:** A fonte `font-size` determina o tamanho. É possível usar tamanhos relativos (%, rem, em, large...) e unidades fixas (pixels, ponto, centímetros...). A unidade mais utilizada é o px. Ex:
```css
font-size: 20px;
```

- **Weight:** A fonte `font-weight` trata a espessura da fonte. Ex:
```css
font-weight: bold;
font-weight: 100;
font-weight: 200;
```
> OBS: É importante fazer uma pesquisa das fontes para conhecer os padrões de tamanho, espessura, familia e etc;

> OBS: O bold apenas dita o tamanho da fonte, já o strong dá importância para determinado trecho do conteúdo.

- **Style:** A fonte `font-style` determina a inclinação da fonte. Existem vários tipos. Ex:
```css
font-style: oblique;
font-style: italic;
font-style: normal;
font-style: initial;
```

- **Variant:** A fonte `font-variant` com essa fonte é possível colocar todas as letras em maiúsculo com tamanho x "letras de caixa alta com tamanho de caixa baixa. Ex:
```css
font-variant: small-caps;
```