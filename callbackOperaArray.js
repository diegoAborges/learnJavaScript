const vetTeste = [12, 13.5, 42, 0.25, 4.75]
Array.prototype.operArray = function(op, n) {
    const valor = n
    let newArray
    if(op == '+') {newArray = this.map(soma = e => (e+valor).toFixed(2))}
    else if(op == '-')  {newArray = this.map(sub = e => (e-valor).toFixed(2))}
    else if(op == '*') {newArray = this.map(mult = e => (e*valor).toFixed(2))}
    else if(op == '/') {newArray = this.map(div = e => (e/valor).toFixed(2))}
    return newArray
}
const arrayOperado = vetTeste.operArray('+', 0.5).operArray('*', 1.1)
console.log(arrayOperado)
