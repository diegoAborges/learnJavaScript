// Exercicios

// -----------------------------------------------------------------------------------------
soma = (a,b) => a+b 
subt = (a,b) => a-b
mult = (a,b) => a*b
div = (a,b) => a/b
rest = (a,b) => a%b
matBasic = (n1, n2, op='t') => {
    let resp
    if (op == '+'){
        resp = soma(n1, n2)
    } else if (op == '-'){
        resp = subt(n1,n2)
    } else if (op == '*'){
        resp = mult(n1,n2)
    } else if (op == '/'){
        resp = div(n1,n2)
    } else if (op == '^'){
        resp = Math.pow(n1,n2)
    } else if (op == '%'){
        resp = rest(n1,n2)
    } else if (op == 'T' || 't'){
        resp = [soma(n1,n2), subt(n1,n2), mult(n1,n2), div(n1,n2), Math.pow(n1,n2), rest(n1,n2)]
    } else { resp = 'invalido'}
    return resp
}

// ----------------------------------------------------------------------------------------------
reescreveValor = (n1,n2) => {
    let soma = n1 + n2
    let somaT = Math.trunc(soma)
    let decimal = Math.trunc((soma-somaT)*100)
    console.log('R$ ' + somaT + ',' + decimal)
}
// ----------------------------------------------------------------------------------------------
jurosSimples = (capIn, taxa, t) => {
    let capFim
    capFim = capIn*taxa*t+capIn
    return capFim
}
jurosComposto = (capIn, taxa, t) => {
    let capFim
    capFim = capIn* Math.pow((1+taxa),t)
    return capFim
}
// ------------------------------------------------------------------------------------------------
funcSegundoGrau = (a,b,c) => {
    // ax^2 + bx +c
    let delta = (b*b)-(4*a*c)
    let resp = []
    let x1
    let x2
    if(delta >= 0){
        x1 = (-b + Math.sqrt(delta)) / (2*a)
        x2 = (-b - Math.sqrt(delta)) / (2*a)
        resp = [x1,x2]
        return resp
    } else {
        delta = -delta
        x1 = (-b + Math.sqrt(delta)) / (2*a)
        x2 = (-b - Math.sqrt(delta)) / (2*a)
        resp = [x1 + '*i',x2 + '*i']
        return resp
    }
}
// -------------------------------------------------------------------------------------------
funcContJogos = (a) => {
    let jogosVec = []
    jogosVec = a.split(' ')
    let record = Number(jogosVec[0])
    let quebRecord = 0
    let pior = Number(jogosVec[0])
    for (i=0; i<jogosVec.length; i++){
        if (Number(jogosVec[i]) > record){ quebRecord++ }
        if (Number(jogosVec[i]) < pior){ pior = jogosVec[i]}
    }
    return 'Nº de quebra de record: ' + quebRecord + ', pontuação do pior jogo: ' + pior 
}
// ------------------------------------------------------------------------------------
aluno = (nome,nota) => {return [nome,nota,'à avaliar']}
funcResult = (a) => {
    let tempT
    let tempA
    let resp = a
    for(i=0; i<a.length; i++){
        if(a[i][1]<38){
            resp[i][2]='reprovado'
        }
        else{resp[i][2]='aprovado'
            tempT = Math.trunc(a[i][1]/10)
            tempA = a[i][1]-10*tempT
            if(tempA >= 8) {
                resp[i][1] = 10*tempT+10
            }
            else if(tempA >= 3){
                resp[i][1] = 10*tempT+5
            }
            else if(tempA < 3){
                resp[i][1] = 10*tempT
            }
        }
    }
    return resp 
}
funcResult([['João',66,'a'],['Maria',91,'a'],['Bianca',37,'a'],['Rebeca',38,'a']])
funcResult([aluno('Pedro',37), aluno('Aline', 38), aluno('Tiago', 41), aluno('Mig', 89), aluno('Luiza', 74), aluno('Bia', 52)]) 

// -----------------------------------------------------------------------------
funcDivby3 = (n) =>{
    let num = Math.trunc(n)
    let rest = num % 3
    if(rest === 0){return true}
    else { return false}
}

// ---------------------------------------------------------------------------------
funcAnoBissex = (ano) => {
    let r4 = ano%4
    let r100 = ano%100
    let r400 = ano%400
    if(r4 === 0) return true
    else if(r100 === 0) return true
    else if (r400 === 0) return true
    else return false
}

// -------------------------------------------------------------------------------------
funcFotorial = (n) => {
    let temp = Math.trunc(n)
    let fact = 1
    while (temp > 0){
        fact *= temp
        temp--
    }
    return fact
}

// -----------------------------------------------------------------------------------------
funcTrocoMin = (valor) => {
    let tempV = Math.trunc(valor)
    let n100 = Math.trunc(tempV/100)
    let r100 = tempV%100
    let n50 = Math.trunc(r100/50)
    let r50 = r100%50
    let n10 = Math.trunc(r50/10)
    let r10 = r50%10
    let n1 = r10
    return 'troco fornecido: '+n100+' notas de R$100, '+n50+' notas de R$50, '+n10+' notas de R$10, e '+n1+' notas de R$1'
}

// --------------------------------------------------------------------------------
funcMulta = (n) =>{
    let valor = 100
    let tAtraso = n-1
    let juros = 5/100
    return jurosComposto(valor, juros, tAtraso)
}

// --------------------------------------------------------------------------------
funcCalcMedia = (id, n1, n2, n3) =>{
    let mediaNota
    if(n1>n2 && n1>n3) mediaNota = (4*n1+3*n2+3*n3)/(4+3+3)
    else if(n2>n3) mediaNota = (3*n1+4*n2+3*n3)/(4+3+3)
    else mediaNota = (3*n1+3*n2+4*n3)/(4+3+3)
    return 'A media final de '+vecAluno2[id][1]+' foi de '+mediaNota
}
vecAluno2 = [[0,'João'],[1,'Maria'],[2,'Bia'],[3,'Luiz'],[4,'Mig'],[5,'Beca'],[6,'Heitor'],[7,'Dri'],[8,'Diana']]

// ------------------------------------------------------------------------------------
funcProgG = (a1, r, n) => {
    let vecG = []
    for (i=0;i<n;i++){
        vecG[i] = a1*(r**i)
    }
    return vecG
}
funcProgA = (a1, r, n) => {
    let vecA = []
    for (i=0;i<n;i++){
        vecA[i] = a1+(r*i)
    }
    return vecA
}
