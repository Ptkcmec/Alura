alert('Bom dia !');
const diasDaSemana = ['sabado','domingo']
let resposta = prompt('Qual dia da semana é hoje?').toLowerCase()

// if (diasDaSemana.includes(resposta)){
//     alert('Bom final de semana!')
// } else {
//     alert('boa semana!')
// }
if(resposta=== 'sabado'||resposta=== 'domingo'){
    alert('bom final de semana!')
}else{
    alert('boa semana!')
};
