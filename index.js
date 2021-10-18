const cliente = require("./Cliente")
const contaCorrente = require("./ContaCorrente")


const cliente1 = new cliente() //instancia da classe
cliente1.nome = "Carol"
cliente1.cpf = 11122233309

const cliente2 = new cliente()
cliente2.nome = "Mikael"
cliente2.cpf = 32022233309

const contaCorrente1 = new contaCorrente()
contaCorrente1.agencia = 1001

contaCorrente1.depositar(100)
contaCorrente1.sacar(30)
console.log(contaCorrente1)