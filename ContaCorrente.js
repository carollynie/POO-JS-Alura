class contaCorrente {
    agencia
    _saldo = 0  //o saldo é privado, e só pode ser mudado a partir da função e o valor inicial é zero

    sacar(valor) {
        if (this._saldo >= valor) { //o this deixarar dinômico a conta corrente que queremos fazer o saque
            this._saldo -= valor //subtrai valor do saldo
            return valor
        }
    }
    depositar(valor) {
        if (valor <= 0) {// se a condição for verdadeira saimos da função (early return)
            return
        }
        this._saldo += valor

    }
}

module.exports = contaCorrente