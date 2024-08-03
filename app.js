alert('Boletim!');
const notaDeCorte = ['60']
let resposta = prompt('INFORME SUA NOTA:')

if (resposta >= notaDeCorte ){
    alert('aprovado')
}else
    if (resposta < notaDeCorte){
        alert('reprovado')
}