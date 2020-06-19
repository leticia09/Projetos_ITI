#Tag de hiperlink
- Para linkar uma página html para outra página html. Ex: 
        <ol>
            <li><a href="URL">Item 01 de link</a> </li>
        </ol>
    OBS: o link pode ser usado dentro do texto, na imagem e etc.
    OBS: É possível fazer o uso dos links para as páginas internas do site, são estes: 
    .Absolutos(online)
    .Relativo

-Link interno: link para navegar entre as seções da página. Isso é possível através de id´s (identificadores). Quando vocÊ clica no link, ele vai direto para a parte da página, como se fosse uma âncora.Ex:
  <div>
        <h1 class="style">Titulo 01</h1>

        <p></p>

        <ol>
            <li><a href="">Item 01 de link</a> </li>
            <li>Item 02</li>
            <li><a href="#logo_itipng">Item 03 com âncora</a></li> -> Quando clica nesse link, a página rola para o item 4
            <li>Item 04</li>
         </ol>   
    </div>
 
 <h3 id="logo_iti.png">Titulo 05</h1>
 <ul>
                <li>Item 01 de link</a> </li>
                <li>Item 02</li>
                <li>Item 03</li>
                <li><a href="#logo_iti.png"></a>Item 04</li>
            </ul>

#Tags principais do HTML5

- <section></section>: Define seções e tem valor semântico, diferente da <div>. Serve para agrupar conteúdos do documento de acordo com o tema.

- <article></article>: É parecido com a section, mas tem um conteúdo mais específico. Ele funciona para marcar um conteúdo do tipo artigo, blog e etc.. 
Article indica que um determinado bloco contém informações importantes.

- <header></header>: Para agrupar o cabeçalho ex: navegação, títulos, subtítulos ajudos, sumário etc..
Pode existir vários <header> dentro de uma página, exemplo: para fazer o cabeçalho, dentro de uma <section>, botões de compartilhamento e etc.

- <nav></nav>: É utilizada para navegação do site, seja na condução dentro de seções da própria página ou para navegação que nos leva a outras páginas. Quando colocamos <nav>, dizemos aos leitores de tela, para deficientes visuais, e robôs do google que é uma navegação importante do site.

- <aside></aside>: Conter conteúdos relacionados ao conteúdo principal, ex: barras laterais, citações, propagandas etc.. Esse é o conteúdo que se tirado da página, não faz falta no sentido do conteúdo principal. 

- <footer></footer>: "rodapé", utiliza-se para colocar conteúdos como: direitos autorais, informações e etc.




