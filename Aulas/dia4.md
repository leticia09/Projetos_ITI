# O que é CSS (Cascading Style Sheets)? 

> CSS é uma linguagem de estilos que define o layout de documentos escritos em HTML. Adiciona estilo e altera a forma visual de como é apresentada.

- O efeito cascata é o método pelo qual é aplicada uma regra CSS em função de um peso (importância, proriedade) da regra CSS. Herança, Especificidade e impotância.  
- Herança: No CSS os elementos filhos sempre herdam as declarações do elemento pai. Ex: Se determinar o tamanho de uma fonte para uma `<div>` todas as tags `<p>` teram o valor determinado na `<div>`. 
- Especificidade: É quando você diz ou CSS qual elemento você quer que ele formate. Você faz isso através de um seletor. O seletor seria a identidicação de um elemento HTML. Usando id e class. 
- Importância: É uma exceção da regra. Usamos a declaração "!important" para aplicá-la. Essa declaração torna a especificidade do elemento que a contém maior do que qualquer declaração dentro do CSS. Não obedece a herança e nem a especificidade, é um elemento de exceção.


## Sintaxe CSS

> O CSS tem a sua própria sintaxe e estrutura. Uma regra CSS é composta por um seletor, uma propriedade e um valor. EX:
```css
seletor {propriedade: valor;}  
```
- Abrimos e fechamos {};
- Dentro da chaves determinamos a propriedade e o valor;
- Caso precise aplicar mais de uma declaração (propriedade+valor) utilizamos ponto e vírgula(;) após o valor, para separá-las.

### Seletor:
> É o elemento HTML identificado por seu nome classe, ID, etc; e para qual a regra será aplicada. O seletor funciona como um "alvo". Eu aponto para o CSS qual a tag ele aplicará o estilo que determinei, na regra CSS. 

- **Tipos de seletores:** *OBS: existem mais tipos além dos que são descritos abaixo*
- Seletor de tipo;
- Seletor de id;
- Seletor de classe;
- Seletor de pseudo-classe para links com mouse sobre eles;
- Seletor Universal. 

#### Seletor de tipo:
> É usado para selecionar elementos HTML de um mesmo tipo. É aplicado quando quer estilizar todas as marcações de um elemento específico em todo o site independente de quantas vezes ele aparece. Ex:
```css
p{font-size:12px}
```
#### Seletor de ID:
> Serve para selecionar um elemento HTML que tenha o atributo id. Na regra o seletor id é identificado pelo "#" seguido pelo nome que você especificou. Ex:

**HTML:**
```html
<h2 id="um">Este título terá 18px</h2>`    
``` 
**CSS:**
```css
#um{font-size:18px}
```

#### Seletor Classe:
> Serve para selecionar um elemento HTML que tenha o atributo "class" nomeada com o nome do seleto. Na regra o seletor é identificado por um ponto (.) seguido pelo nome que você especificou no atributo HTML. Ex:

**HTML:**
```html
<h2 class="um">Esse título possui 18 px</h2> 
<p class="um">Estou repetindo o mesmo id no mesmo documento dentro deste parágrafo</p>
```
**CSS:** 
```css
.um{font-size:18px;}
```

#### Seletor a + pseudo-classe "hover": 
> - É usado em hiperlinks para aplicar um estilo quando o usuário passa o mouse sobre o elemento, como por exemplo, mudar a cor. Ex:

 **HTML:**

 ```html 
<a href= "pag-de-destino.html>Página de destino</a> 
```
**CSS:**

```css
a{color:blue;} 

a:hover {color:red;}
```
- O seletor "a" deixa o link azul, se passar o mouse por cima do link, ele ficará vermelho. *OBS: Esse efeito também acontecerá quando você preferir usa id ou class no lugar do seletor do tipo "a". Ex:
**HTML usando id:**   
```html
<a href= "pag.html" id="link_id>Página de destinp</a> 
```
**CSS:**
```css
#link_id {color:blue;}

#link_id:hover {color:red;}
```
**HTML usando class:** 

 ```html
 <a href= "pag.html" class="link_class>Página de destinp</a>
 ```
 **CSS**
```css
#link_class {color:blue;}
#link_class:hover {color:red;} 
```  
 


#### Seletor Universal:
> Representado pelo "*" e se aplica a todos os elementos de uma página. Geralmente usado para "resetar" propriedades aplicadas automaticamente pelos navegadores e tem a liberdade de definir as regras sem interferência dos navegadores. As duas propriedades usadas que os navegadores influênciam na aparência "são margin" e "padding". Para impedir que isso aconteça basta aplicar a sintaxe abaixo: 
```
*{
margin:0
padding:0;
}
```



### Propriedade:
> É a característica que será estilizada de um elemento HTML, no CSS. Ex: font, color, background, etc.

### Valor: 
> É a aparência que srá assumida pela propriedade CSS. Ex:
```css
h2{font-size: 14px}  
```
- h2 = seletor;
- font-size = propriedade;
- 14px = valor;
>  Comentários
> - Para inserir um comentário no código é bem simples. Ex:` <!--comentário-->`

