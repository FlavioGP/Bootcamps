
const mediaAlunos = [
    {aluno: 'Flavio', media: 6},
    {aluno: 'Jose', media: 5},
    {aluno: 'Olivia', media: 8},
    {aluno: 'Matheus', media: 2},
    {aluno: 'Mariana', media: 9},
    {aluno: 'Stela', media: 4},
]

function aprovados(alunos, mediaFinal){
    const aprovados = []
    alunos.forEach(aluno => {
        if(aluno.media >= mediaFinal) aprovados.push(aluno);
    }); 
    return aprovados;
}

console.log(aprovados(mediaAlunos, 6));