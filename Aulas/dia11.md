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
    2. wrap: os itens flexíveis são agrupados em várias linhas, de cima para baixo;
    3. wrap-reverse: os itens flexíveis são agrupados em várias linhas de baixo para cima.

- **Justify content:** Isso define o alinhamento ao longo do eixo principal. Ajuda a distribuir o espaço livre extra quando todos os itens flexíveis de uma linha são inflexíveis ou flexíveis, mas atingiram seu tamanho máximo. Também exerce algum controle sobre o alinhamento dos itens quando eles excedem a linha. Ex:
```css
.parent{
    height: 200px; 
    display: flex;
    justify-content: space-around;
}
```
- Propriedades:
    1. Flex-start (padrão): Os itens são compactados no início da direção flexível;
    2. Flex-end: Os itens são compactados no final da direção flexível;
    3. Center: Os itens são centralizados ao longo da linha
    4. Space-between: Os itens são distribuídos igualmente na linha; o primeiro item está na linha inicial, o último item na linha final;
    5. Space-around: Os itens são distribuídos igualmente na linha com espaço igual ao seu redor. Observe que visualmente os espaços não são iguais, pois todos os itens têm espaço igual nos dois lados. O primeiro item terá uma unidade de espaço contra a borda do contêiner, mas duas unidades de espaço entre o próximo item, porque esse próximo item possui seu próprio espaçamento que se aplica.

- **Align itens:** Isso define o comportamento padrão de como os itens flexíveis são dispostos ao longo do eixo Y.
```css
.parent{ 
    display: flex;
    align-items: center;
}
```
- Propriedades: 
    1. stretch (padrão): estique para encher o contêiner (ainda respeite a largura mínima / largura máxima)
    2. flex-start/ start/ self-start: os itens são colocados no início do eixo transversal. A diferença entre eles é sutil e é sobre respeitar as flex-directionregras ou as writing-moderegras.
    3. flex-end/ end/ self-end: os itens são colocados no final do eixo transversal. A diferença novamente é sutil e é sobre respeitar flex-directionregras versus writing-moderegras;
    4. center: os itens estão centralizados no eixo transversal.

- **Align content:** Alinha as linhas de um contêiner flexível dentro quando houver espaço extra no eixo Y. Ex: 
```css 
.parent{ 
    display: flex;
    flex-wrap: wrap;
    align-content: space-between;
    flex-direction: column;
}
```
- Propriedades:
    1. Flex-start/ start: itens embalados no início do contêiner. O (mais suportado) flex-starthonra o flex-directiontempo starthonra a writing-modedireção;
    2. Flex-end/ end: itens embalados até o final do contêiner. O (mais apoio) flex-endhonra o flex-directionfim do tempo honra a writing-modedireção;
    3. Center: itens centralizados no contêiner;
    4. Space-between: itens distribuídos uniformemente; a primeira linha está no início do contêiner enquanto a última está no final;
    5. Space-around: itens distribuídos uniformemente com espaço igual ao redor de cada linha;
    6. Space-evenly: os itens são distribuídos igualmente com espaço igual ao seu redor;
    7. Stretch (padrão): as linhas se estendem para ocupar o espaço restante.

    - **Order:**
    - **Flex-grow:** É possível controlar a proporção de quanto cada elemento individualmente crescerá