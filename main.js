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

//resolucao da 1° pergunta
function parOuImpar(idInput, idResult) {
  let numero = parseInt(document.getElementById(idInput).value);
  let resultadoElement = document.getElementById(idResult);

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

//resolucao da 2° pergunta

function numeroMaior(idInput1, idInput2, idResult) {
  let numero1 = parseInt(document.getElementById(idInput1).value);
  let numero2 = parseInt(document.getElementById(idInput2).value);
  let resultadoElement = document.getElementById(idResult);
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

// resolucao da 3° pergunta

function votaOuNaoVota(idInput1, idResult) {
  let ano_Nascimento = parseInt(document.getElementById(idInput1).value);
  const resultadoElement = document.getElementById(idResult);
  let ano_Atual = 2023;
  let idade = ano_Atual - ano_Nascimento;

  if (!isNaN(ano_Nascimento)) {
    if (idade >= 16) {
      resultadoElement.textContent = 'A pessoa tem ' + idade + ' anos de idade e pode votar';
    } else {
      resultadoElement.textContent = 'A pessoa tem ' + idade + ' anos de idade e não pode votar';
    }
  } else {
    resultadoElement.textContent = 'Digite números válidos.';
  }
}

//resolucao da 4° pergunta

function reajusteSalarial(idInput1, idInput2, idResult) {
  let salario_Atual = parseInt(document.getElementById(idInput1).value);
  const porcentagem = parseInt(document.getElementById(idInput2).value);
  let resultadoElement = document.getElementById(idResult);
  if (!isNaN(salario_Atual) && !isNaN(porcentagem)) {
    if (porcentagem > 0) {
      resultadoElement.textContent = 'O reajuste é de R$'+(salario_Atual+ (porcentagem/100)*salario_Atual);
    }else {
      resultadoElement.textContent = 'A porcentagem esta incorreta.';
    }
  }
  else {
    resultadoElement.textContent = 'Digite números válidos.';
  }
}
//resolucao da 5°
function diaDaSemana(idInput,idResult)
{
  let dias = ['domingo',
  'segunda-feira',
  'terça-feira',
  'quarta-feira',
  'quinta-feira',
  'sexta-feira',
  'sabado'];
  let dia_selecionado = parseInt(document.getElementById(idInput).value);
  let resultadoElement = document.getElementById(idResult);


  if(dia_selecionado > 0 && dia_selecionado <= 7)
  {
    resultadoElement.textContent = 'O dia escolhido é :'+ dias[dia_selecionado-1];
  }else{
    resultadoElement.textContent = 'O dia escolhido não existe';
  }
}
//resolucao da 6°
function loopAteNumero(idInput,idResult) 
{
  let numero = parseInt(document.getElementById(idInput).value);
  let resultadoElement = document.getElementById(idResult);
  let numeros = Array();
  if(numero > 0)
  {
    for(let i = 0;i <= numero; i++)
    {
      numeros.push(i)
      resultadoElement.textContent = numeros;
    }

  }else{
    resultadoElement.textContent = 'O numero deve ser um inteiro POSITIVO!';
  }
}
//resolucao da 7°
function somaAteNumero(idInput,idResult) 
{
  let numero = parseInt(document.getElementById(idInput).value);
  let resultadoElement = document.getElementById(idResult);
  let numeros = Array();
  let soma = 0;
  if(numero > 0)
  {
    for(let i = 0;i < numero; i++)
    {
      soma = soma + i;
      numeros.push(i)
      resultadoElement.textContent = numeros+ ' = ' + soma;
    }

  }else{
    resultadoElement.textContent = 'O numero deve ser um inteiro POSITIVO!';
  }
}
//resolucao da 8°
function imparesAteNumero(idInput,idResult) 
{
  let numero = parseInt(document.getElementById(idInput).value);
  let resultadoElement = document.getElementById(idResult);
  let numeros = Array();
  if(numero > 0)
  { 
    for(let i = 0; i <= numero ; i++)
    {
      if(!(i%2 === 0))
      {
        numeros.push(i)
        resultadoElement.textContent = 'Os Impares sao esses ate o numero =' + numeros;
      }
    }
  }else{
    resultadoElement.textContent = 'O numero deve ser um inteiro POSITIVO!';
  }
}
//resolucao da 9°
function somaDosMenoresQ30(idInput,idResult) 
{
  let listaString = document.getElementById(idInput).value;
  let resultadoElement = document.getElementById(idResult);
  //verificar se o usuario digitou apenas numeros
  if(/^[0-9]+(-[0-9]+){4}$/.test(listaString))
  {
    //separar pela "-" e converter o resultado em um array do tipo number
    let listaNumeros = listaString.split('-').map(Number);
    //filtrar de acordo com os numeros que sao menores que 30
    let listaMenoresQ30 = listaNumeros.filter(num=>num<30);
    //somar todos os numeros dentro do array que so tem numeros menores que 30
    let soma = listaMenoresQ30.reduce((acc,num)=>acc+num,0);

    resultadoElement.textContent = 'a soma dos numeros menores que 30 é = '+ soma;
    
  }else
  {
    resultadoElement.textContent = 'A Lista deve conter apernas Numeros separados por um "-"!';
  }
}
