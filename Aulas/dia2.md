# Tags de edição de texto:

- **Tag strong:** `<strong>` ou `<b>` (caiu em desuso) mostrar trecho importante do texto (aparece em negrito). Ex:
```html
<p><strong> ipsum dolor sit amet consectetur adipisicing elit.</strong> zdhuchuchIP<\p>
```
- **Tag em:** `<em>` ou `<i>` significa itálico Da ênfase, fica tipo itálico, é usado para citações, trechos e etc. Ex: 
```html
<p><em> ipsum dolor sit amet consectetur adipisicing elit. Mollitia nemo tempora ad.</em>
```
- **Tag u:** `<u>` Deixa sublinhado. Ex:
```html
p><em> ipsum dolor sit amet consectetur adipisicing elit. Mollitia nemo tempora ad.</em> Vel laboriosam provident
```
```html
<u> Facilis fugiat magni quidem in, nihil assumenda repellendus</u> ducimus officiis quas? Totam, saepe quos?
```

- **Tag span:** `<span> `modifica partes específicas do texto. Ex: 
```html
<span> "style"
```
- **Tag br:** `<br>` Quebra linha no texto. Ex:
```html
<p><strong> ipsum dolor sit amet consectetur adipisicing elit.</strong> Doloremque accusantium incidunt alias quam vitae aque<br> impedit iste amet
Obs: pode colocar mais de uma tag <br> para quebrar mais de uma linha do mesmo texto.</p>
```
## Tags de lista:

- **Ordenada:** `<ol>`= Começa uma lista ordenada `<li>`= item da lista ordenada. Ex:

    ```
    <ol>
        <li>Item 01</li>
        <li>Item 02</li>
        <li>Item 03</li>
        <li>Item 04</li>
    </ol>
    ```
    
	
- **Não ordenada:** `<ul>`= Começa uma lista não ordenada `<li>`= item da lista ordenada. Ex:
```html
    <ul>
        <li>Item 01</li>
        <li>Item 02</li>
        <li>Item 03</li>
        <li>Item 04</li>
    </ul>
```

> OBS: A maioria dos sites são formados com listas não ordenadas. Na maioria das vezes essas
listas são feitas de botões.

## Tags de imagem

- `<img>` Para inserir uma imagem. Esta tag tem fechamento próprio. Ex:
```html
<img src="logo_iti.png">
```
> OBS: title e alt, são tags usadas dentro da tag img para auxílio no entendimento da imagem.

> OBS: especificando altura e largura da imagem:
```html
<img src="logo_iti.png" alt="Logo do ITI" width="300" height="100">
```