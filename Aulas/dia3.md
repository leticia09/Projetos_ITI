#Tag de hiperlink
- Para linkar uma página html para outra página html. Ex: 
        <ol>
            <li><a href="URL">Item 01 de link</a> </li>
        </ol>
    OBS: o link pode ser usado dentro do texto, na imagem e etc.
    OBS: É possível fazer o uso dos links para as páginas internas do site, são estes: 
    .Absolutos(online)
    .Relativo

-Link interno: link para navegar entre as sessões da página. Isso é possível através de id´s (identificadores). Quando vocÊ clica no link, ele vai direto para a parte da página, como se fosse uma âncora.Ex:
  <div>
        <h1 class="style">Titulo 01</h1>

        <p></p>

        <ol>
            <li><a href="">Item 01 de link</a> </li>
            <li>Item 02</li>
            <li><a href="#logo_itipng">Item 03 com âncora</a></li> -> Quando clica nesse link.
            <li>Item 04</li>
         </ol>   
    </div>
 
 <h3 id="logo_iti.png">Titulo 05</h1>
 <ul>
                <li>Item 01 de link</a> </li>
                <li>Item 02</li>
                <li>Item 03</li>
                <li><a href="#logo_iti.png"></a>Item 04</li> -> Rola para essa página
            </ul>




