function soma(a,b){
    return a + b;
}

var mult = function(a,b){
    console.log(a * b);
}

var mult2 = (a,b) => {
    console.log(a * b)
}

var mult3 = (a) => (a * 3);

var resultado = soma(5,8);
console.log(resultado);