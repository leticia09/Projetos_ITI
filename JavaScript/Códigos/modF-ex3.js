function somar(n1=0, n2=0, n3=0){
    return n1 + n2 * n3;
}
console.log(somar(3, 5, 7));

var fun = function(x){
    return x*2;
}
console.log(fun(5));

//Para calcular o fatorial de um número. 3! = 3.2.1:
/*function fatorial(n){
    var fat = 1;
    for (var c = n; c > 1; c--){
        fat = fat * c;
    }
    return fat
}
console.log(fatorial(5));
*/
// resursividade
function fatorial(n){
    if (n == 1){
        return 1;
    } else {
        return n* fatorial(n-1)
    }
}
console.log(fatorial(5));