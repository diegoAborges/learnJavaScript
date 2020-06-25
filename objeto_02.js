const statusCompra = ['espera de pagamento', 'pago', 'a caminho', 'entregue']

const pessoa = {
    nome: 'n',
    idade: 0,
    renda: 0,
    endereco: {
        logradouro: 'rua',
        numero: 2,
        cep: 2010344
    }
}

const cliente = {
    valorTotalGasto: 0,
    __proto__: pessoa,
    comprarP: comprarProd = (valorProd, taxaDesc, finalizar) => {
        let valorCompra = valorProd * taxaDesc
        let essaCompra
        let statusC = statusCompra
        if (finalizar){
            this.valorTotalGasto += valorCompra
            essaCompra = statusC[1]
        }
        else {
            essaCompra = statusC[0]
        }
        return `Valor da Compra: ${valorCompra}, com status: ${essaCompra}`
    }
}

const cliente001 = Object.create(cliente)
cliente001.nome = 'Ana'; cliente001.idade = 21; cliente001.renda = 3800; cliente.endereco = {logradouro: 'Rua doze', numero: 1, cep: 2505012};
