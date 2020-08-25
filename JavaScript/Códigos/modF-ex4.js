// adicionar o numero no vetor
// colocar valores invalidos. acima de 100 ou numeros repetido;

var num = document.getElementById('analise');
var lista = document.getElementById('lista');
var res = document.getElementById('res');
var valores = [];

function isNumero(n){
   // console.log(n, Number(n));
    if(Number(n) >= 1 && Number(n) <= 100){
        return true;
    } else{
        return false;
    }
}
function inLista(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true;
    } else{
        return false;
    }
}

function adicionar(){
    if(isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `valor ${num.value} adicionado`
        lista.appendChild(item)
    }else {
        window.alert('ERRO');
    }
    num.value = '';
    num.focus();
}

//Análise dos valores do vetor
function finalizar(){
    if(valores.length == 0){
        window.alert('Adicione valores para finalizar');
    } else {
        var total = valores.length;
        res.innerHTML ='';
        res.innerHTML += `São ${total} elementos cadastrados`;
    }
}
