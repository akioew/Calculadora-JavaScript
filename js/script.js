import { Calculadora } from "./Calculadora.js";
const linhaSuperior = document.querySelector('#linha-superior');
const linhaInferior = document.querySelector('#linha-inferior');
const buttons = document.querySelectorAll('#teclas button');

const calc = new Calculadora(linhaSuperior, linhaInferior);

buttons.forEach((btn) => {
  btn.addEventListener('click', (evento) => {
    const valorClicado = evento.target.innerText;
    if (valorClicado >= 0 || valorClicado === '.') {
      if (calc.linhaInferior.innerText.length >= 7) {
        return; //Limita quantidade de digitos a 7 casa. Tá OK.
      }
      if (calc.linhaSuperior.innerText.includes('=')) {
        calc.processarOperacao('C');
        calc.insereDigito(valorClicado);
      } else {
        calc.insereDigito(valorClicado);
      }
    } else {
      calc.processarOperacao(valorClicado);
    }
  });
});

/*
import { Calculadora } from "./Calculadora.js";
const textoLinhaSuperior = document.querySelector('#linha-superior');
const textoLinhaInferior = document.querySelector('#linha-inferior');
const buttons = document.querySelectorAll('#teclas button');

const calc = new Calculadora(textoLinhaSuperior, textoLinhaInferior);

buttons.forEach((btn) => {
  btn.addEventListener('click', (evento) => {
    const valorClicado = evento.target.innerText;
    if (valorClicado >= 0 || valorClicado === '.') {
      if (calc.textoLinhaInferior.innerText.length >= 7) {
        return; //Limita quantidade de digitos a 7 casa. Tá OK.
      }
      if (calc.textoLinhaSuperior.innerText.includes('=')) {
        calc.processarOperacao('C');
        calc.insereDigito(valorClicado); //No caso da expressão já estar completa na linha superior (ex: '2 + 4 = ), zera todas as linhas e insere valor digitado sozinho.
      } else {
        calc.insereDigito(valorClicado);
      }
    } else {
      calc.processarOperacao(valorClicado);
    }
  });
});
*/
