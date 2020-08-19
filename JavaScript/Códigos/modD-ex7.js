function carregar(){
    var data = new Date();
    var ano = data.getFullYear();
    var f_ano = document.getElementById('idade');
    var res = document.getElementById('res');
    
    if (f_ano.value.length == 0 || Number(f_ano.value) > 2020){
        window.alert('Verificar dados');
    } else{
        var f_sex = document.getElementsByName('sexo');
        var idade = ano - Number(f_ano.value);
        var genero = '';
        var img = document.createElement('img');
        img.setAttribute('id', 'foto')
        if (f_sex[0].checked){
            genero = 'homem'
            if (idade <= 10 ){
                img.setAttribute('src','menino.jpg')
            } else if (idade <= 16){
                img.setAttribute('src','adoleH.jpg')
            } else if(idade < 60) {
                img.setAttribute('src','adultoH.jpg')
            } else{
                img.setAttribute('src', 'idoso.jpg')
            }
        } else{
            genero = 'mulher'
            if (idade <= 10 ){
                img.setAttribute('src', 'menina.jpg')
            } else if (idade <= 16){
                img.setAttribute('src','adoleM.jpg')
            } else if(idade < 60) {
                img.setAttribute('src','adultaM.jpg')
            } else{
                img.setAttribute('src', 'idosa.jpg')
            }
        }
     
        res.innerHTML = `Detectamos ${genero}, sua idade é ${idade} anos`;
        res.appendChild(img)
    }
}