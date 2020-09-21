# Refazer o Meditation App
- declarar uma variável app com uma função seta 
- dentro da função declarar as seguintes variáveis
    - song
    - play
    - outline
    - video 
    - sounds
    - timeDisplay
    - timeSelector
    - outlineLength (para pegar o comprimento total do outline)
    - fakeDuraction = 600
> Suas classes estão todas atribuidas no html

- Mudar o estilo do outline usando o strokedasharray e offset para o comprimento do outline
- adicionar um evento ao play e uma função para chamar a função que ainda será escrita checkPlaying com o parametro musica
- declarar a variavel checkPlaying com função seta para song
- dentro da função declarar o if com a caracteristica song.paused
- com a variavel song e video, chamar a o evento play
- procurar pelo pause.svg na variavel play
- definir o else ao contrario
- se estava play, agora vai estar pause (pesquisar definições da tag audio)
- procurar pelo play.svg

- Existe uma função específica chamada ontimeupdate que será declarada com o song e o seu valor será uma função seta
- dentro da função seta declarar variaveis:
    - let currentTime para o tempo atual da musica
    - let elapsed para a diferença fakeDuration e do tempo atual
    - let seconds com o cálculo dos segundos
    - let minutes com o cálculo dos minutos
    - let progress para o tamanho do comprimento menos a razão do tempo atual e o fake vezes o cumprimento para acontecer a contagem
- Mudar o estilo do outline strokeDashoffset para progress
- Colocar o tempo atual em minutos e segundos no timeDisplay
- declarar um if para o tempo atual maior que o fake 
- dentro do if pausar a musica
- declarar o tempo atual da musica 0
- pausar o background video
- chamar a funcão app (fora do if)

- Em baixo da primera mudança de estilo, declarar um forEach para percorrer todo as sons, e adicionar um evento click com uma função
- Atribuir os atributos em song e videos usando o src, this, getAttribute no data-sound e no data-video
- chamar a função checkPlaying
- Depois do play.addEventListener declarar outro forEach para o timeSelect com uma função seta e parametro option
- dentro da função adicionar um evento ao parametro e uma função
- dentro dessa outra função, atribuir o valor fake para o atributo data-time
- com o textContent, no timeDisplay colocar a conta dos min e segs usando o math.floor(conta min): math.floor(conta segs)
