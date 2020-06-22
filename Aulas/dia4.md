# O que é CSS (Cascading Style Sheets)? 
> CSS é uma linguagem de estilos que define o layout de documentos escritos em HTML. Adiciona estilo e altera a forma visual de como é apresentada.

> O efeito cascata é o método pelo qual é aplicada uma regra CSS em função de um peso (importância, prioridade) da regra CSS. Herança, Especificidade e impotância.  
> - Herança: No CSS os elementos filhos sempre herdam as declarações do elemento pai. Ex: Se determinar o tamanho de uma fonte para uma `<div>` todas as tags `<p>` teram o valor determinado na `<div>`. 
> - Especificidade: É quando você diz ou CSS qual elemento você quer que ele formate. Você faz isso através de um seletor. O seletor seria a identidicação de um elemento HTML. Usando id e class. 
> - Importância: É uma exceção da regra. Usamos a declaração "!important" para aplicá-la. Essa declaração torna a especificidade do elemento que a contém maior do que qualquer declaração dentro do CSS. Não obedece a herança e nem a especificidade, é um elemento de exceção.