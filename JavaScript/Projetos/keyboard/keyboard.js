// declarou a constante keybord com objetos; 
// pesquisar e assistir algumas aulas sobre objetos!
const keyboard = {

    // elements, eventHandlers e propriets são probriedades do objeto

    // obejeto
    elements: {
        main: null,
        keysContainer: null,
        keys: []
    },
    // objeto
    // manipuladores de evento
    eventHandlers: {
        oninput: null,
        onclose: null
    },
    //objeto
    properties: {
        value: "",
        capslock: false
    },
    // funções
    init() {
        // criar os principais elementos do teclado

        // a partir do obj main, cria uma div
        // o this se refere ao objeto keyboard na linha 1
        this.elements.main = document.createElement("div");

        // dentro da div main, cria outra div
        this.elements.keysContainer = document.createElement("div");

        // configutação principal dos elementos

        // adicionar a classe da div do obj main
        this.elements.main.classList.add("keyboard", "keyboard--hidden");

        // adicionar a classe na div do obj kaysContainer
        this.elements.keysContainer.classList.add("keyboard", "keyboard__keys");

        //Adicionar como filho da keysContainer a function
        this.elements.keysContainer.appendChild(this._createKeys());

        // está pegando a informção do .keyboard__key e colocando dentro do keys
        this.elements.keys = this.elements.keysContainer.querySelectorAll(".keyboard__key");

        // add DOM

        // colocar a div keysContainer como filho da div main
        this.elements.main.appendChild(this.elements.keysContainer);

        // adicionando o main como filho do body
        document.body.appendChild(this.elements.main);

        // uso automático do teclado para elementos com .use--keyboard-input
        // adiciona a classe em todos os elemento com use...
        document.querySelectorAll(".use-keyboard-input").forEach(element => {
            element.addEventListener("focus", () => {
                this.open(element.value, currentValue => {

                    // o valor declarado no textarea será inputado como valor atual
                    element.value = currentValue;
                });
            });
        });

    },

    // Esta function vai criar todo elemento htlm do teclado virtual, colocando em linhas e fazendo acontecer suas funcionalidades
    _createKeys() {

        // fragment é um pequeno container para as chaves (keys)
        const fragment = document.createDocumentFragment();

        //
        const keyLayout = [
            "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "backspace",
            "q", "w", "e", "r", "t", "y", "u", "i", "o", "p",
            "caps", "a", "s", "d", "f", "g", "h", "j", "k", "l", "enter",
            "done", "z", "x", "c", "v", "b", "n", "m", ",", ".", "?",
            "space"
        ];

        // criar HTML para os icones, linha 29 do html
        const createIconHTML = (icon_name) => {
            return `<i class="material-icons">${icon_name}</i>`
            // const icon = document.createElement("i");
            // icon.classList.add("material-icons");
            // icon.innerText = icon_name;
            // return icon;
        };

        // key é um apelido para cada elemento do keyLayout
        keyLayout.forEach(key => {

            // criar o botão no obj
            const keyElement = document.createElement("button");

            // quebrar linha depois de casa elemento definido no array
            const insertLineBreak = ["backspace", "p", "enter", "?"].indexOf(key) !== -1;

            // adicionar atributos de botão e classe pra o keyElement
            keyElement.setAttribute("type", "button");
            keyElement.classList.add("keyboard__key");

            // O switch testa valores especificos dentro da condição
            switch (key) {

                // se o valor for backspace, então
                case "backspace":
                    // adicionar classe ao keyElement
                    keyElement.classList.add("keyboard__key--wide");

                    // inserir no HTML criar um icone de estaço
                    keyElement.innerHTML = createIconHTML("backspace");

                    // adicionando um evento em função
                    keyElement.addEventListener("click", () => {

                        console.log(this.properties.value);
                        console.log(this.properties.value.length);
                        //exclui a ultima letra, por isso o length -1
                        this.properties.value = this.properties.value.substring(0, this.properties.value.length - 1);
                        console.log(this.properties.value);
                        console.log(this.properties.value.length);

                        // rodar a função; ouvir mais sobre
                        this._triggerEvent("oninput");

                    });
                    break;

                case "caps":

                    // adicionar classe ao keyElement
                    keyElement.classList.add("keyboard__key--wide", "keyboard__key--activatable");

                    // inserir no HTML criar um icone de estaço
                    keyElement.innerHTML = createIconHTML("keyboard_capslock");

                    // adicionando um evento em função
                    keyElement.addEventListener("click", () => {
                        this._toggleCapsLock();
                        // toggle troca os valores um interruptor/ trocador
                        keyElement.classList.toggle("keyboard__key--active", this.properties.capsLock);

                    });
                    break;

                case "enter":

                    // adicionar classe ao keyElement
                    keyElement.classList.add("keyboard__key--wide");

                    // inserir no HTML criar um icone de estaço
                    keyElement.innerHTML = createIconHTML("keyboard_return");

                    // adicionando um evento em função
                    keyElement.addEventListener("click", () => {

                        // o valor declarado no keyboard += o \n que quebra a linha
                        this.properties.value += "\n";

                        // desencadear um evento 
                        this._triggerEvent("oninput");

                    });
                    break;

                case "space":

                    // adicionar classe ao keyElement
                    keyElement.classList.add("keyboard__key--extra-wide");

                    // inserir no HTML criar um icone de estaço
                    keyElement.innerHTML = createIconHTML("space_bar");

                    // adicionando um evento em função
                    keyElement.addEventListener("click", () => {

                        // pega o valor do obj propriets e adiciona o espaço
                        this.properties.value += " ";

                        // desencadear o evento  com o handler oninput
                        this._triggerEvent("oninput");

                    });
                    break;


                case "done":

                    // adicionar classe ao keyElement
                    keyElement.classList.add("keyboard__key--wide", "keyboard__key--dark");

                    // inserir no HTML criar um icone de estaço
                    keyElement.innerHTML = createIconHTML("check_circle");

                    // adicionando um evento em função
                    keyElement.addEventListener("click", () => {

                        // quando o botão for acionado, a função vai fechar o teclado
                        this.close();

                        // desencadear o evento com o handler onclose
                        // TrIgger
                        this._triggerEvent("onclose");

                    });
                    break;
                // Se nenhum dos valores forem satisfeitos então o default será executado.
                default:

                    // O elemento no container vai ter a chave me letras minusculas 
                    keyElement.textContent = key.toLowerCase();

                    // adicionando um evento em função
                    keyElement.addEventListener("click", () => {

                        // ? é um operador ternário if de uma linha
                        // condição ? verdade : false
                        // se o capslock estiver ativo, então .toUppercase, se não lowerCase
                        this.properties.value += this.properties.capslock ? key.toUpperCase() : key.toLowerCase();

                        // desencadear o evento com o handler oninput
                        this._triggerEvent("oninput");

                    });
                    break;
            }

            // fragment é um pequeno conatainer para as chaves (keys)
            fragment.appendChild(keyElement);

            if (insertLineBreak) {
                // O elemento br quebra a linha no HTML
                fragment.appendChild(document.createElement("br"));
            }

        });
        return fragment;
    },

    // function chamada: Evento desencadeador
    _triggerEvent(handlerName) {
        // se o tipo de evento especifico(typeOf) no eventHandlers for uma função
        if (typeof this.eventHandlers[handlerName] == "function") {

            // então providenciar o atual valor do teclado no código que está usando o teclado
            this.eventHandlers[handlerName](this.properties.value);

            //this.eventHandlers.oninput()
            console.log(this.eventHandlers[handlerName](this.properties.value));
            console.log(handlerName);
            console.log(this.properties.value);
        }
    },

    // function: alternando capslock
    _toggleCapsLock() {

        // negaçõa do capslock
        this.properties.capslock = !this.properties.capslock;

        // esse const key é outra coisa, poderia ser outro nome.
        for (const key of this.elements.keys) {

            // basicamente faz o check se a chave não tem o icon 
            // ou seja, é uma chave de letras, não de icon (capslock), por exemplo
            if (key.childElementCount === 0) {

                // a comparação condição ? true : false; 
                key.textContent = this.properties.capslock ? key.textContent.toUpperCase() : key.textContent.toLowerCase();
            }
        }
    },

    // aqui é onde todos os métodos serão realizados
    open(initialValue, oninput, onclose) {
        this.properties.value = initialValue || "";
        this.eventHandlers.oninput = oninput;
        this.eventHandlers.onclose = onclose;
        // remove a classe keyboard--hidden para que o teclado apareca
        this.elements.main.classList.remove("keyboard--hidden")
    },

    close() {

        // reset no valor
        this.properties.value = "";

        // porque colocar o 2, se ele só precisa fechar?
        this.eventHandlers.oninput = oninput;
        this.eventHandlers.onclose = onclose;

        // quando a classe for keyboard--hidden, o css vai desaparacer com o teclado
        this.elements.main.classList.add("keyboard--hidden");
    }

};
// dae start na function init
window.addEventListener("DOMContentLoaded", function () {
    keyboard.init();
    // keyboard.open("dcode", function (currentValue){
    //     console.log(currentValue);
    // }; function (currentValue){
    //     console.log("keyboard closed" + currentValue);
    // });
});

// pesquisar ação after no css
// minutos que não entendi bem a explicação: 
//22:53 até 23:35
//25:09 até 25:52
//30:44 até 31:33
// 40:00 até 40:35
// 46:32 até 47:00
// 49:38 até 49:45
// 53:48 até 53:47

// window.onload = () => {
//     console.log(keyboard);
// }
// window.onchange = () => {
//     console.log(keyboard);
// }