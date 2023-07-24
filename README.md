# js_desafios

## **Funções JavaScript do Projeto**

A seguir, uma breve descrição das funções presentes no arquivo `main.js`, que fazem parte do projeto:

1. `exibirQuestao(numeroQuestao)`: Esta função é responsável por exibir a questão correspondente ao número informado. Ela adiciona a classe 'ativa' à questão desejada, tornando-a visível, enquanto oculta as demais.

2. `proximaQuestao()`: Esta função é acionada para exibir a próxima questão, caso exista uma próxima questão disponível.

3. `anteriorQuestao()`: Similar à função anterior, esta é acionada para exibir a questão anterior, caso exista.

4. `parOuImpar(idInput, idResult)`: Função que verifica se um número inserido em um campo de input é par ou ímpar e exibe a informação em um elemento específico no DOM.

5. `numeroMaior(idInput1, idInput2, idResult)`: Função que compara dois números inseridos em campos de input e informa qual deles é o maior.

6. `votaOuNaoVota(idInput1, idResult)`: Essa função calcula a idade de uma pessoa com base em um ano de nascimento fornecido em um campo de input e informa se ela pode ou não votar.

7. `reajusteSalarial(idInput1, idInput2, idResult)`: Essa função calcula um reajuste salarial com base em um salário atual e uma porcentagem fornecidos em campos de input.

8. `diaDaSemana(idInput, idResult)`: Função que recebe um número representando um dia da semana e informa qual dia é (domingo, segunda-feira, etc).

9. `loopAteNumero(idInput, idResult)`: Função que cria um array com números sequenciais até o número informado em um campo de input.

10. `somaAteNumero(idInput, idResult)`: Função que cria um array com números sequenciais até o número informado em um campo de input e exibe a soma desses números.

11. `imparesAteNumero(idInput, idResult)`: Função que cria um array com números ímpares até o número informado em um campo de input.

12. `somaDosMenoresQ30(idInput, idResult)`: Função que recebe uma lista de números em uma string separados por "-" e retorna a soma dos números menores que 30.

Essas funções têm como objetivo resolver diferentes questões e exercícios, apresentando os resultados na interface do usuário (DOM) após a interação do usuário com o projeto.



Sobre o patern que utilizei na 9° questao para fazer a verificação se o usuario digitou apenas numeros e nao letras.

^: Representa o início da string. Isso significa que o padrão deve começar no início da string.
[0-9]+: Representa um ou mais dígitos numéricos. O caractere [0-9] é uma classe de caracteres que corresponde a qualquer dígito de 0 a 9. O + indica que deve haver pelo menos um dígito, mas pode haver mais.
(-[0-9]+): Representa um hífen seguido por um ou mais dígitos numéricos. O hífen é um caractere literal que corresponde a ele mesmo. O (-[0-9]+) indica que deve haver um hífen seguido por pelo menos um dígito numérico, mas pode haver mais.
{4}: Representa que a sequência (-[0-9]+) deve ocorrer exatamente quatro vezes. Isso significa que deve haver quatro conjuntos de hífen seguido por um ou mais dígitos numéricos.
$: Representa o final da string. Isso significa que o padrão deve terminar no final da string.

ex: "10-20-30-40-50"