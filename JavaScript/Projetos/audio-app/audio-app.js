const app = () => {
    const song = document.querySelector(".song");
    const play = document.querySelector(".play");
    const outline = document.querySelector(".moving-outline circle");
    const video = document.querySelector(".vid-container video");
// Sounds
    // Selecionando todos os sons
    const sounds = document.querySelectorAll(".sound-picker button");

// Time Display
    // declarando os valores das variáveis 
    const timeDisplay = document.querySelector(".time-display");
    const timeSelect = document.querySelectorAll(".time-select button")

// Get the length of outline
    // Declara uma variável para pegar o cumprimento total do circulo de contagem(outline)
    const outlineLength = outline.getTotalLength();
    //  console.log(outlineLength);

// Duration
    let fakeDuration = 600;

    // O tempo vai passando e vai mudando a cor do outline, mudando o CSS
    // vai pegar o tamanho total do outline 
    // pesquisar essa prop.Css strokeDasharray e strokeDashoffset
    outline.style.strokeDasharray = outlineLength;
    outline.style.strokeDashoffset = outlineLength;

// Pick different sounds
sounds.forEach(sound => {
    sound.addEventListener("click", function(){
        // colocar o valor do atributo na varialvel para mudar as imgs e sons
        song.src = this.getAttribute("data-sound");
        video.src = this.getAttribute("data-video");
        // chama a função
        checkPlaying(song);
    });
});

// Play sound
    // pegar o play icon e adicionar um evento e uma função
    play.addEventListener("click", () => {
        //chamando outras funões
        song.play();
        checkPlaying(song);
    });

// Select sound
    timeSelect.forEach(option => {
         option.addEventListener("click", function(){
             // fakeDuration = todos os botões com atributo data-time
            fakeDuration = this.getAttribute("data-time");
            timeDisplay.textContent = `${Math.floor(fakeDuration / 60)}:${Math.floor(fakeDuration % 60)}`; 
         });
    });

// Create a function specific to stop and play the sounds
    // Não está funionando pois quando clica no play, não vai. Só quando clica no icone
    const checkPlaying = song => {
        // se for pausado
        if(song.paused){
            // dar play
            song.play();
            video.play();
            play.src = "./svg/pause.svg";
        
        } else{
            //se são, dar pause, ou ao contrário ?
            song.pause();
            video.pause();
            play.src = "./svg/play.svg";
        }
    };

// animated the circle
    // quando der play. Vai executar essa function
    song.outimenupdate = () => {
        // tempo atual = song.tempoatual
        let currentTime = song.currentTime;
        // Não entendi. elapsed = 600 - tempo atual
        let elapsed = fakeDuration - currentTime;
        // O 60 vai ser o último tempo 
        let seconds = Math.floor(elapsed % 60);
        //dividir os minutos em segundos
        let minutes = Math.floor(elapsed / 60);

// Animate the circle
        //progress = cumprimento-circulo - (tempo atual / 600)  * cumprimento-circulo
        let progress = outlineLength - (currentTime / fakeDuration) * outlineLength;
        // O circulo vai rodar de acordo com o cálculo feito no progress
        // Não funcionou
        outline.style.strokeDashoffset = progress; 
        
// Animate the text 
    timeDisplay.textContent = `${minutes}:${seconds}`;
    
    // se o tempo atual for maior que o do data-time 
    if(currentTime >= fakeDuration){
       // então chama a função pause
        song.pause();

        // declara o valo 0
        song.currentTime = 0;
        play.src = "./svg/play.svg";
        // chama a função 
        video.pause();
    }

    };


};

app();