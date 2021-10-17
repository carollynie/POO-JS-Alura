class cliente {
    nome
    cpf
}

class contaCorrente {
    agencia
    _saldo = 0  //o saldo é privado, e só pode ser mudado a partir da função e o valor inicial é zero

    sacar(valor) {
        if (this._saldo >= valorSacado) { //o this deixarar dinômico a conta corrente que queremos fazer o saque
            this._saldo -= valorSacado //subtrai valor do saldo
        }
    }
    depositar(valor){
        if(valor>0){
            this._saldo+=valor
        }
    }
}




const cliente1 = new cliente() //instancia da classe
cliente1.nome = "Carol"
cliente1.cpf = 11122233309

const cliente2 = new cliente()
cliente2.nome = "Mikael"
cliente2.cpf = 32022233309

const contaCorrente1 = new contaCorrente()
contaCorrente1.agencia = 1001

contaCorrente1.depositar(100)
console.log(contaCorrente1)