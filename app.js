//const
const app = {name: "App"};

//let and scope
var nome = "José" //global
let nome2 = "João" //global

function func1(){
    var sobrenome = "Maria" //local
    let sobrenome2 = "Pedro" //local
    console.log(nome + " " + sobrenome);    
}

function func2(){
    console.log(nome);    
    //console.log(nome + " " + sobrenome);   //ReferenceError: sobrenome is not defined 
    //console.log(nome + " " + sobrenome2);   //ReferenceError: sobrenome2 is not defined 
}

func1();
func2();

console.log("==========================================================");
let a = 10; //global
let test = true;

//block
if(test){
    let b = 20; 
    console.log(a + b);
}

{
    let c = 30;
}
//console.log(a + b); //ReferenceError: b is not defined
//var => global and local 
//let => global, local and block

console.log("==========================================================");

