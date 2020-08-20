function contar() {
    var tabu = document.getElementById('tabu');
    var res = document.getElementById('res');

    var t = Number(tabu.value);
    var s = 1;
    if (t == 0) {
        window.alert('ERRO!')
    }
    res.innerHTML = '';
    while (s <= 10) {
        var c = s * t;
        res.innerHTML += `\n ${t} x ${s} = ${c}<br> `;
        s++;
    }
    // com o option
    // while (s <= 10) {
    //     var item = document.createElement('option');
    //     item.text = ` ${t} x ${s} = ${t*c}`;
    //      item.value = `tab${c}`
    //     tab.appendChild(item);
    //     c++;
    // }
}