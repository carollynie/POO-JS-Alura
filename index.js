const cliente = require("./Cliente")
const contaCorrente = require("./ContaCorrente")


const cliente1 = new cliente("Carol",32198534850) //instancia da classe
const cliente2 = new cliente("Mikael",32022233309)

const contaCorrente1 = new contaCorrente(cliente1,1001)
const contaCorrente2 = new contaCorrente(cliente2,2003)


contaCorrente1.depositar(100)
contaCorrente1.sacar(30)
contaCorrente1.transferir(30, contaCorrente2)


//console.log(contaCorrente1)
//console.log(contaCorrente2)