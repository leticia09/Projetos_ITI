# HTML e CSS

## Camadas WEB (Front-End)
> - Interação com usuário; 
> - Trabalha principalmente com HTML, CSS e JavaScript;

#### HTML:
> - Apresenta conteúdo através de tags que são interpretadas pelo navegador. Utiliza
urls para vincular arquivos externos como imagens, vídos etc. Conteúdo

#### CSS:
> - Aplica um estilo ao documento HTML. Altera a forma de como é exibido o conteúdo no
navegador (cor, sombra, efeito no mouse...). Forma

#### JavaScript:
> - Adiciona comportamentos dinâmicos na página. Modifica o modo de interação
"da vida pra página"
#### Frameworks
> - Frameworks HTML e CSS: Bootstrap.
> - Frameworks JS: AngularJS.
> - Pré-processadores CSS: Sass e Less (ferramentas que otimizam o CSS).Gera um CSS.

##  HTML (HyperText Mark-up Languege ou Linguagem de marcação de hipertexto)
> - Inventado em 1990 por Tim Berners-Lee (físico britânico). 
> - Linguagem mãe da web. Tudo que vemos na web é html 
> - OBS: W3C é uma organização cuja a missão é levar a World Wide Web ao seu potencial máximo 
desenvolve padrões, validador de códigos, especificações, orientações, uso, boas práticas que tornam a WEB acessível a todos 
> -Todo documento HTML é composto por marcações (Tags). Essas marcações definem o tipo de conteúdo e informam ao navegador 
> - como ele deve ser apresentado. Informa ao navegador sobre que tipo de informação se trata (título, parágrafo, lista..) 
> -Toda Tag contém um (nome da marca) que dá designação ao elemento HTML. 
> -Todo conteúdo da WEB é inserido por tags. 

> - A TAG tem o seguinte formato: 
  `<nome_da_tag> (tag de abertura) ou </nome_da_tag> (tag de fechamento)`. Ex:

`<tag>Conteúdo da página WEB</tag>`

> REGRAS: 
> - Tags não podem ter espaços entre os sinais de maior ou menor;
> - Recomenda-se que as tags sejam escritas em letras minúsculas.

#### OBS: Elementos nulos (vazios/ void)
> - São marcações que só possuem tag de abertura, têm um fechamento automático. Essas tags não podem conter texto ou 
elementos animados dentro deles, já que não possuem tags de fechamento. Ex: tag de input (formulário)
<input>
> - tags de elementos nulos: 
> - area; 
> - base; 
> - br; 
> - col; 
> - hr; 
> - img; 
> - input; 
> - link; 
> - meta;   
> - param; 
> - command; 
> - keygen; 
> - ource. 
> - Alinhamento: Um elemento HTML pode conter outras tags entre suas tags. EX:
`<tag>
  <outraTag>
       CONTEÚDO
  </outraTag>
</tag>`

### TAGS ESTRUTURAIS BÁSICAS EM UM ARQUIVO HTML

> - HTML: Raiz da estrutura <html> dá início a estrutura, e </html> é o fechamento. 
> - HEAD: Delemitam o cabeçalho, onde se encontra todos os elementos do cabeçalho. EX:
`<html>
  <head>
  </head>
</html>` 

> - TITLE: É o título da parte superior do navegador, entre as tags head. EX:
`<html>
   <head>
      <title>Minha primeira pagina web</title>
   </head>
</html>` 

> - BODY: São responsáveis por mostrar todo o conteúdo de uma página "corpo da página", sempre abaixo de head
dentro dessa tag ficam outras tags específicas para inserção de conteúdo(imagem, mídiam, texto ..).
`<html>
    <head>
        <title>Minha primeira pagina web</title>
    </head>
    <body>
    </body>
</html>`




