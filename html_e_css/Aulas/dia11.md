# CSS Flexbox

- É um modo de layout que fornece o conjunto de elementos de uma página, de modo que os elementos se comportem de maneira previsível, quando o layout da página deve acomodar diferentes tamanhos de tela e dispositivos de exibição. Para muitas aplicações, o modelo de caixa flexível oferece melhorias em relação ao modelo de bloco, na medida em que não utiliza flutuadores.

### Flex 

- **Flex direction:** Estabelece o eixo principal, definindo assim a direção em que os itens flex são colocados no contêiner flex. Pense nos itens flexíveis como principalmente dispostos em linhas horizontais ou colunas verticais. Ex:
```css
.parent{
    display: flex;
    flex-direction: row-reverse;
    flex-direction: column;
    flex-direction: column-reverse;
}
```
- Propriedades:
    1. row (linha) (padrão): da esquerda para a direita;
    2. row-reverse: da direita para a esquerda;
    3. column: igual a row mas de cima para baixo;
    4. column-reverse: igual a row-reverse mas de baixo para cima.

- **Flex wrap:** Por padrão, todos os itens flexíveis tentarão caber em uma linha. Você pode alterar isso e permitir que os itens sejam agrupados conforme necessário com esta propriedade. Ex:
```css
.parent{
    display: flex;
    flex-wrap: wrap;
}
```
- Propriedades: 
    1. nowrap (padrão): todos os itens flexíveis estarão em uma linha;
    2. wrap: os itens flexíveis são agrupados em vários blocos se não houver espaço suficiente;
    3. wrap-reverse: os itens flexíveis são agrupados em vários blocos na order reversa se não houver espaço suficiente.

- **Justify content:** Isso define o alinhamento ao longo do eixo principal. Ajuda a distribuir o espaço livre extra quando todos os itens flexíveis de uma linha são inflexíveis ou flexíveis, mas atingiram seu tamanho máximo. Também exerce algum controle sobre o alinhamento dos itens quando eles excedem a linha. Ex:
```css
.parent{
    height: 200px; 
    display: flex;
    justify-content: space-around;
}
```
- Propriedades:
    1. Flex-start (padrão): Os itens são posicionados no início da direção flexível;
    2. Flex-end: Os itens são posicionados no final da direção flexível;
    3. Center: Os itens são centralizados ao longo da linha;
    4. Space-between: Os itens são distribuídos igualmente na linha; o primeiro item está na linha inicial, o último item na linha final;
    5. Space-around: O espaço entre os elementos dentro do conteiner são divididos da seguinte forma (margem) x, elemento, 2x, elemento, x (margem).

- **Align itens:** Define o comportamento padrão de como os itens flexíveis são dispostos ao longo do eixo Y.
```css
.parent{ 
    display: flex;
    align-items: center;
}
```
- Propriedades: 
    1. stretch (padrão): estique para encher o contêiner (respeitando a largura mínima / largura máxima)
    2. flex-start/ start/ self-start: os itens são colocados no início do eixo Y. A diferença entre eles é sutil e é sobre respeitar as flex-direction.
    3. flex-end/ end/ self-end: os itens são colocados no final do eixo Y. A diferença novamente é sutil e é sobre respeitar regras do flex-direction;
    4. center: os itens estão centralizados no eixo Y.

- **Align content:** Essa propriedade modifica o comportamento da propriedade `flex-wrap`. Alinha linhas flexíveis de um contêiner flexível dentro quando houver espaço extra no eixo Y. Ex: 
```css 
.parent{ 
    display: flex;
    flex-wrap: wrap;
    align-content: space-between;
    flex-direction: column;
}
```
- Propriedades:
    1. Flex-start/ start: As linhas são compactadas no início do contêiner flexível;
    2. Flex-end/ end: As linhas são compactadas no final do contêiner flexível;
    3. Center: As linhas são compactadas no centro do contêiner flexível;
    4. Space-between: As linhas são distribuídas uniformemente no contêiner flexível;
    5. Space-around: As linhas são distribuídas uniformemente no contêiner com espaços de tamanho médio nas extremidades;
    6. Stretch (padrão): as linhas se estendem para ocupar o espaço restante do contêiner.

- **Order:** Por padrão, os itens flexíveis são dispostos na ordem de origem. No entanto, a propriedade `order` especifica a ordem de um item flexível em relação ao restante dos itens flexíveis dentro do mesmo contêiner. Ex:
```css
.item:nth-child(2){
    order: 1;
}
```
- Propriedades: 
    1. Number:  Valor padrão 0. Especifica a ordem do item flexível;
    2. Initial: Define essa propriedade como seu valor padrão;
    3. Inherit: Herda essa propriedade de seu elemento pai.

- **Flex-grow:** É possível controlar a proporção de quanto cada elemento individualmente crescerá em relação ao restante dos itens flexíveis dentro do mesmo contêiner. Ex:
```css
.parent{
flex-grow: number|initial|inherit;
}
```
- Propriedades: 
    1. Number:  Um número que especifica quanto o item crescerá em relação ao restante dos itens flexíveis. O valor padrão é 0;
    2. Initial: Define essa propriedade como seu valor padrão;
    3. Inherit: Herda essa propriedade de seu elemento pai.

