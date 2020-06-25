const escola = [
    {
        turma: '1A',
        mediaT: 0,
        alunos: [
            {
                nome: 'Tiago',
                nota1: 8.1,
                nota2: 8.3,
                media: 0,
                status: 'analize',
                bolsa: false
            },
            {
                nome: 'Bianca',
                nota1: 5.6,
                nota2: 6.7,
                media: 0,
                status: 'analize',
                bolsa: false
            },
            {
                nome: 'Miguel' ,  
                nota1: 9.8,
                nota2: 7.9,
                media: 0,
                status: 'analize',
                bolsa: true
            },
            {
                nome: 'Julia',
                nota1: 3.5,
                nota2: 2.1,
                media: 0,
                status: 'analize',
                bolsa: true
            }
        ]   
    },
    {
        turma: '1B',
        mediaT: 0,
        alunos: [
            {
                nome: 'Belcristi' ,
                nota1: 7.7,
                nota2: 6.8,
                media: 0,
                status: 'analize',
                bolsa: true
            },
            {
                nome: 'Pedro',
                nota1: 9.9,
                nota2: 9.5,
                media: 0,
                status: 'analize',
                bolsa: false
            },
            {
                nome: 'Jose',
                nota1: 5.9,
                nota2: 5.2,
                media: 0,
                status: 'analize',
                bolsa: true
            }
        ]
    },
    {
        turma: '2A',
        mediaT: 0,
        alunos: [
            {
                nome: 'Mariana',
                nota1: 8.7,
                nota2: 5.2,
                media: 0,
                status: 'analize',
                bolsa: false
            },
            {
                nome: 'Adriana',
                nota1: 7,
                nota2: 6.1,
                media: 0,
                status: 'analize',
                bolsa: false
            },
            {
                nome: 'Helena',
                nota1: 9.1,
                nota2: 8.9,
                media: 0,
                status: 'analize',
                bolsa: true
            },
            {
                nome: 'Barbara',
                nota1: 7.8,
                nota2: 4.5,
                media: 0,
                status: 'analize',
                bolsa: false
            }
        ]
    }
]

function modStatusAluno (aluno) { // *** com base na media preenche o status
    if(aluno.media >= 6){aluno.status = 'aprovado'}
    else if(aluno.media < 4){aluno.status = 'reprovado'}
    else {aluno.status = 'vai p/ recureração'}
}
function somaMediaAlunos(mAluno) { // *** calcula a media dos alunos e retorna o campo media preenchido
    mAluno.media = ((mAluno.nota1+mAluno.nota2)/2).toFixed(1)  
    return mAluno
}
function altBolsa(aluno) {//*** remove bolsa daqueles q tiraram menos q 6 e concede à quem tiraram mais q 9
    if(aluno.media<6 && aluno.bolsa){
        aluno.bolsa = false
    }
    else if(aluno.media>=9 && !aluno.bolsa){
        console.log(aluno.nome)
        aluno.bolsa = true
    }
    return aluno
}
function calcMediaTurma(turma) {
        turma.mediaT = somaMediaAlunos(turma)
}

const escDivByAluno = escola.map((a) => a.alunos)
const escDivByAlunoMed = escDivByAluno.map((m) => {
    for(let i=0; i<m.length; i++){
        somaMediaAlunos(m[i])
    }
    return m
})
const escDivByAlunoSts = escDivByAlunoMed.map((sts) => {
    for(let i=0; i<sts.length; i++){
        modStatusAluno(sts[i])
    }
    return sts
})
const escDivByAlunosBol = escDivByAlunoSts.map((med) => {
    for(let i=0; i<med.length; i++){
        altBolsa(med[i])
    }
    return med
})

console.log(escDivByAlunosBol)
