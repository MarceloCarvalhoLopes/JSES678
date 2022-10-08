var marcelo = {
    nome : "Marcelo Lopes",
    empresa : "Senior"
} //Verificar()


var jose = {
    nome : "José Maria",
    empresa : "Senior"
} //Verificar()


var users = [marcelo, jose];

var usuario = users.find(user => user.nome === "Marcelo Lopes"); //Verificar()

console.log(usuario);