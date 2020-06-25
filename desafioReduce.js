const alunos = [
    {nome: 'João' , nota: 7.3 , bolsista: false},
    {nome: 'Maria' , nota: 9.2 , bolsista: true},
    {nome: 'Pedro' , nota: 9.8 , bolsista: false},
    {nome: 'Ana' , nota: 8.7 , bolsista: true}
]
const bolsistas = alunos.map(a => a.bolsista)
console.log(bolsistas)
const todosBolsistas = bolsistas.reduce(funcBolsaTrue(a,b){
    return a && b
} , true)
console.log(todosBolsistas)
