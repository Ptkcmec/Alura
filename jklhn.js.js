function sortear() {
  let quantidade = parseInt(document.getElementById("quantidade").value);
  let de = parseInt(document.getElementById("de").value);
  let ate = parseInt(document.getElementById("ate").value);

  //parte referente ao html, onde a gente pega os id's das linhas de texto na interface
  //e atribui os espaços para preencher dentro de variaveis.

  if (de >= ate) {
    alert(
      'Campo "Do número" deve ser inferior ao campo "Até o número". Verifique!'
    );
    return;
  }

  // isto é uma verificação para que o numero de cima seja sempre inferior ao
  // numero de baixo, e asssim dar sentido ao jogo

  if (quantidade > ate - de + 1) {
    alert(
      'Campo "Quantidade" deve ser menor ou igual ao intervalo informado no campo "Do número" até o campo "Até o número". Verifique!'
    );
    return;
  }

  // verificação para que tenha quantidade de numeros a ser sorteados e não caia
  // em um looping infinito, assim limitando os erros da pagina

  let sorteados = [];
  let numero;

  for (let i = 0; i < quantidade; i++) {
    numero = gerarNumeroAleatorio(de, ate);

    while (sorteados.includes(numero)) {
      numero = obterNumeroAleatorio(de, ate);
      alert("Tentando obter número inédito");
    }

    sorteados.push(numero);
  }
  let resultado = document.getElementById("resultado");
  resultado.innerHTML = `<label class="texto__paragrafo">Numeros Sorteados: ${sorteados}</label>`;
  alterarStatusBotao();
}

// parte onde a gente seleciona quantos numeros serão sorteados e os adiciona dentro de uma
// lista par que não se repita e não fique um loop infinito

function gerarNumeroAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// função simples de gerador de numero aleatorio

function alterarStatusBotao() {
  let botao = document.getElementById("btn-reiniciar");
  if (botao.classList.contains("container__botao-desabilitado")) {
    botao.classList.remove("container__botao-desabilitado");
    botao.classList.add("container__botao");
  } else {
    botao.classList.remove("container__botao");
    botao.classList.add("container__botao-desabilitado");
  }
}

// uma função para desativar e ativar o botão reiniciar usando o
// classlist, e fazer com que ele tenha funcionalidade no html

function reiniciar() {
  document.getElementById("quantidade").value = "";
  document.getElementById("de").value = "";
  document.getElementById("ate").value = "";
  document.getElementById(
    "resultado"
  ).innerHTML = `<label class="texto__paragrafo">Numeros Sorteados: nenhum até o momento.</label>`;
  alterarStatusBotao();
}

// aqui foi criada uma função para reiniciar a label e os numeros que
// estão dentro dos espaços no html, assim dando restart por completo
// no jogo
