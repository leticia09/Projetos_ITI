const keyboard = {

    elements: {
        main: null,
        keysContainer: null,
        keys: []
    },

    eventHandlers: {
        oninput: null,
        onclose: null
    },

    properties: {
        value: "",
        capslock: false
    },

    init(){
        // criar os principais elementos do teclado
        this.elements.main = document.createElement("div");
        this.elements.keysContainer = document.createElement("div");

        // configutação principal dos elementos
        this.elements.main.classList.add("keyboard", "1keyboard--hidden")
    },

    _createKeys(){

    },

    _triggerEvent(handleName){
        console.log("Event Triggered! Event none: " + handleName);
    },

    _toggleCapsLock(){
        console.log("Caps Lock Toggled!");

    },

    open(initialValue, oninput, onclose){

    },

    close(){

    }

};

window.addEventListener("DOMContentLoaded", function(){
    keyboard.init();
});