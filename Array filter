// teste com array.filter
const prodVendas = [
    { nome: 'notebook', preco: 2725.50, fragil: true },
    { nome: 'ipad', preco: 3600, fragil: true },
    { nome: 'cama_casal', preco: 1525.50, fragil: false },
    { nome: 'ar_condicionado', preco: 980, fragil: true },
    { nome: 'carteira_escolar', preco: 120, fragil: false },
    { nome: 'ifone_5', preco: 5200, fragil: true },
    { nome: 'cadeira_gamer', preco: 2500.25, fragil: false } 
]
prodFragil = prod => prod.fragil 
prodCaro = prod => prod.preco >= 1000
const caroFragil = prodVendas.filter(prodFragil).filter(prodCaro)
console.log(caroFragil)
