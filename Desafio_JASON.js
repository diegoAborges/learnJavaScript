const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 13.90}',
    '{"nome": "Kit de Lapis", "preco": 41.22}',
    '{"nome": "Caneta", "preco": 7.50}'
]

// metodo mais simples
const paraObj = (jason) => {return JSON.parse(jason)}
const pegaPreco = (prod) => {return prod.preco}
const myArrayObj = carrinho.map(paraObj)
console.log(myArrayObj)
const myPreco = myArrayObj.map(pegaPreco)
console.log(myPreco)

// metodo funcional implementado por mim
function divElemento (a) {
    let vet00 = []
    let vet01 = []
    let vet02 = []
    let strTemp = 'a'
    let n
    for(var i=0; i<a.length; i++){
        n = a[i].length
        strTemp = a[i].substr(1,n-2)
        vet00[i] = strTemp.split(",")
        vet00[i] = String(String(vet00[i]).split(":")).split(",")
        vet01[i] = vet00[i][3]
        strTemp = String(vet01[i]).replace(',','')
        vet02[i] = Number(strTemp)
        vet01[i] = vet00[i][1]
        
    }
    console.log(vet00)
    console.log(vet01)
    console.log(vet02)
    return vet01
}
divElemento(carrinho)
