var nome = "Jose";
var profissao = "Programador";
var idade = 41;

var empresa = {
    name: "Guia do programador",
    city: "Araçatuba",
    site: "www.google.com",
    email: "gmail@gmail.com"


}

var user = {
    nome,
    profissao,
    idade,
    ...empresa
}

console.log(user);