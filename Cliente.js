class cliente {
    nome
    _cpf

    get cpf() { 
        this._cpf
    }

    constructor(nome, cpf) {  //no momento em que construirmos um objeto, passaremos a referência necessária de nome e cpf e dispensaremos a existência de um assessor do tipo set
     this.nome = nome
     this._cpf = cpf
    }
}

module.exports = cliente
