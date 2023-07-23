let questaoAtual = 1;
const totalQuestoes = 12;

  function exibirQuestao(numeroQuestao) {
    const questoes = document.querySelectorAll('.questao');
    questoes.forEach(questao => questao.classList.remove('ativa'));
    document.getElementById(`questao${numeroQuestao}`).classList.add('ativa');
    
    questoes.forEach(questao => questao.style.display = questao.classList.contains('ativa') ? 'block' : 'none');
    }

  function proximaQuestao() {
    if (questaoAtual < totalQuestoes) {
      questaoAtual++;
      exibirQuestao(questaoAtual);
    }
  }

  function anteriorQuestao() {
    if (questaoAtual > 1) {
      questaoAtual--;
      exibirQuestao(questaoAtual);
    }
  }
  // Exibir a primeira questão inicialmente
  exibirQuestao(questaoAtual);

  function parOuImpar(idInput, idResultado) {
    const numero = parseInt(document.getElementById(idInput).value);
    const resultadoElement = document.getElementById(idResultado);

    if (!isNaN(numero)) {
      if (numero % 2 === 0) {
        resultadoElement.textContent = "O número é par.";
      } else {
        resultadoElement.textContent = "O número é ímpar.";
      }
    } else {
      resultadoElement.textContent = "Digite um número válido.";
    }
  }
  function numeroMaior(idInput1,idInput2, idResultado) {
    const numero1 = parseInt(document.getElementById(idInput1).value);
    const numero2= parseInt(document.getElementById(idInput2).value);
    const resultadoElement = document.getElementById(idResultado);
    if (!isNaN(numero1) && !isNaN(numero2)) {
      if (numero1 === numero2) {
        resultadoElement.textContent = 'Os números são iguais!';
      } else {
        resultadoElement.textContent = numero1 > numero2 ? 'O 1° número é maior' : 'O 2° número é maior';
      }
    } else {
      resultadoElement.textContent = 'Digite números válidos.';
    }
    
  }



  // 2 Escreva uma função que lê dois nº inteiros diferentes e mostre uma mensagem indicando qual é o maior.


  // function numeroMaior(idn1, idn2, idresult2) {

  //   let n1 = parseInt(document.getElementById(idn1).value);
  //   let n2 = parseInt(document.getElementById(idn2).value);
  //   let result2 = document.getElementById(idresult2);
    // }

  // 3 Escreva uma função que lê o ano de nascimento de uma pessoa. Mostre uma mensagem que diga se ela poderá ou não votar este ano (não é necessário considerar o mês em que a pessoa nasceu).

  
  // function votaOuNaoVota(numero1) {
  //   let ano_Nascimento = parseInt(document.getElementById(numero1).value);
  //   let ano_Atual = 2023;
  //   let idade = ano_Atual - ano_Nascimento;
  //   idade >= 16 ? console.log('A pessoa tem ' + idade + ' anos de idade e pode votar') : console.log('A pessoa tem ' + idade + ' anos de idade e não pode votar');
  // }