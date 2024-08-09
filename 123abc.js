function sortear() {
  let quantidade = parseInt(document.getElementById("quantidade").value);
  let de = parseInt(document.getElementById("de").value);
  let ate = parseInt(document.getElementById("ate").value);

//parte referente ao html, onde a gente pega os id's das linhas de texto na interface
//e atribui os espaços para preencher dentro de variaveis.

  let sorteados = [];
  let numero;

  for (let i = 0; i < quantidade; i++) {
    numero = gerarNumeroAleatorio(de, ate);
    sorteados.push(numero);
  }
  alert(sorteados);
}

// parte onde a gente seleciona quantos numeros serão sorteados e os adiciona dentro de uma
// lista par que não se repita e não fique um loop infinito

function gerarNumeroAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// função simples de gerador de numero aleatorio
