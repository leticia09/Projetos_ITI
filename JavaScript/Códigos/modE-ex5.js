function contar() {
    var tabu = document.getElementById('tabu');
    var res = document.getElementById('res');
    var tab = document.getElementById('seltab')
    console.log(tabu);
    var t = Number(tabu.value);
    var s = 1;
    if (t == 0) {
        window.alert('ERRO!')
    }
    //res.innerHTML = '';
    // while (s <= 10) {
    //     var c = s * t;
    //     res.innerHTML += `\n ${t} x ${s} = ${c}<br> `;
    //     s++;
    // }
    // com o option
    while (s <= 10) {
       // var item = document.createElement('div');
        var item = document.createElement('option');
        item.textContent = ` ${t} x ${s} = ${t*s}`;
         item.value = `tab${s}`
        tab.appendChild(item);
        s++;
    }
}