// 1 Escreva uma função que lê um nº inteiro de um campo e mostre uma mensagem indicando se este número é par ou ímpar.

let number_;

function parOuImpar (number_){

number_%2 === 0 ? console.log('O numero é par') : console.log('O numero é Impar');

}
parOuImpar(12);

// 2 Escreva uma função que lê dois nº inteiros diferentes e mostre uma mensagem indicando qual é o maior.


let n1;
let n2;

function numeroMaior (n1, n2){
if(n1 === n2)
  {

       console.log('Os numeros sao iguais!');

       return;

  }
  n1>n2 ? console.log('O 1° numero é Maior') : console.log('O 2° numero é Maior');

}
numeroMaior(23, 42);

// 3 Escreva uma função que lê o ano de nascimento de uma pessoa. Mostre uma mensagem que diga se ela poderá ou não votar este ano (não é necessário considerar o mês em que a pessoa nasceu).

let ano_Nascimento;
let ano_Atual = 2023;

function votaOuNaoVota(ano_Nascimento)
{
  let idade = ano_Atual - ano_Nascimento;
  idade >= 16 ? console.log('A pessoa tem '+ idade +' anos de idade e pode votar') : console.log('A pessoa tem '+ idade +' anos de idade e não pode votar');
}
votaOuNaoVota(1990);