## Propriedades CSS
- **Box-shadow:** Aplica sombra nos blocos. A principal diferença do `text-shadow` é que o `box-shadow` tem a possibilidade de colocar sombra dentro do box usando o `inset` antes dos elementos. Ex: 
```css
 #bloco06 {
     border: 1px solid black;
     width: 500px;
     height: 500px;
     font-size: 5em;
     margin: 5%;
     box-shadow: inset 5px 10px 10px black;
 }
```
> OBS: Para colocar sombras para dentro do box e para fora, usa-se:
```css
 #bloco06 {
     border: 1px solid black;
     width: 500px;
     height: 500px;
     font-size: 5em;
     margin: 5%;
     box-shadow: inset -5px 10px 10px black, -5px 10px 40px black;
 }
```

- **Border Radius:** Essa propriedade serve para arredondar as bordas do box. Quando se usa unidade relativa, como a porcentagem (%), o box fica todo arredondado, já a unidade absoluta, como o (px) só arredonda as bordas. Ex:
```css
#bloco04{
    background:red;
    border-radius: 50%;
}
``` 
```css
#bloco04{
    background:red;
    border-radius: 20px;
}
```
> OBS: Existe a possibilidade de arredondar só alguns lados, é só colocar os elementos na ordem: Ex:
1. Superior esquerdo;
2. Superior direito;
3. Inferior direito;
4. Inferior esquerdo.

```css
#bloco04{
    background:red;
    border-radius: 20px 0 50px 120px;
}
```
- Existem algumas propriedades que substituem a observação acima. São elas:
    1. `border-top-left-radius`
    2. `border-top-right-radius`
    3. `border-botom-left-radius`
    4. `border-botom-right-radius`

- Para aplicar o `border-radius` em ambos os lados: 
```css
#bloco04{
    background:red;
    border-radius: 120px/50px;
}
```
