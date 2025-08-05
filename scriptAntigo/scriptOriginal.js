const textoLinhaSuperior = document.querySelector('#linha-superior');
const textoLinhaInferior = document.querySelector('#linha-inferior');
const buttons = document.querySelectorAll('#teclas button');

class Calculadora {
  constructor(textoLinhaSuperior, textoLinhaInferior) {
    this.textoLinhaSuperior = textoLinhaSuperior;
    this.textoLinhaInferior = textoLinhaInferior;
    this.operacaoAtual = '';
    // this.operadoresMatematicos = ['+', '-', 'x', '÷'];
    this.acabouDeFazerOperacao = false;
  }

  insereDigito(digito) {
    if (digito === '.' && this.textoLinhaInferior.innerText.includes('.')) {
      return;
    }
    if (this.textoLinhaInferior.innerText === '0') {
      this.textoLinhaInferior.innerText = '';
    }
    // if (this.textoLinhaSuperior.innerText.includes(...this.operadoresMatematicos) && this.acabouDeFazerOperacao) {
    if (
      this.textoLinhaSuperior.innerText.includes('+') ||
      this.textoLinhaSuperior.innerText.includes('-') ||
      this.textoLinhaSuperior.innerText.includes('x') ||
      this.textoLinhaSuperior.innerText.includes('÷')
    ) {
      this.textoLinhaInferior.innerText = '';
      this.acabouDeFazerOperacao = false;
    }
    this.operacaoAtual = digito;
    this.atualizaTela();
  }

  atualizaTela(valorOperacao = null, operacao = null, valorAtual = null, valorAnterior = null) {
    console.log(valorOperacao, operacao, valorAtual, valorAnterior);

    if (valorOperacao === null) {
      this.textoLinhaInferior.innerText += this.operacaoAtual;
    } else {
      if (valorAnterior === 0) {
        valorOperacao = valorAtual;
      }
      this.textoLinhaSuperior.innerText = `${valorOperacao} ${operacao}`;
      this.textoLinhaInferior.innerText = valorOperacao;
    }
  }

  // trocaPontoPorVirgula(texto) {
  //   texto = texto.replace('.', ',');
  //   return texto;
  // }

  // trocaVirgulaPorPonto(texto) {
  //   texto = texto.replace(',', '.');
  //   return +texto;
  // }

  processarOperacao(operacao) {
    let valorOperacao;
    const valorAnterior = +this.textoLinhaSuperior.innerText.split(' ')[0];
    const valorAtual = +this.textoLinhaInferior.innerText;
    // const valorAnterior = +this.textoLinhaSuperior.innerText.split(' ')[0];
    // const valorAtual = this.trocaVirgulaPorPonto(this.textoLinhaInferior.innerText);

//BUG: Se linha superior estiver com formula completa (ex: 3 - 6 =), não é possível usar o resultado da linha 2 como próxima conta.
//BUG: Se operação ainda estiver incompleta (ex: linha sup 3 - / linha inf 3) e apertar outro sinal, ele executa a segunda operação com os números da tela. O correto seria executar a operação do jeito que foi escrita na primeira vez e reutilizar o resultado para fazer a nova operação.

    switch (operacao) {
      case '+':
        if (this.acabouDeFazerOperacao) {
          return;
        } else {
          valorOperacao = valorAnterior + valorAtual;
          this.atualizaTela(valorOperacao, operacao, valorAtual, valorAnterior);
          this.acabouDeFazerOperacao = true;
          break;
        }
        //BUG: se continuar subtraindo com IGUAL, os sinais ficam se invertendo.
      case '-':
        if (this.acabouDeFazerOperacao) {
          return;
        } else {
          valorOperacao = valorAnterior - valorAtual;
          this.atualizaTela(valorOperacao, operacao, valorAtual, valorAnterior);
          this.acabouDeFazerOperacao = true;
          break;
        }
      case 'x':
        if (this.acabouDeFazerOperacao) {
          return;
        } else {
          valorOperacao = valorAnterior * valorAtual;
          this.atualizaTela(valorOperacao, operacao, valorAtual, valorAnterior);
          this.acabouDeFazerOperacao = true;
          break;
        }
        //BUG: Continuar a operação usando IGUAL.
      case '÷':
        if (this.acabouDeFazerOperacao) {
          return;
        } else {
          valorOperacao = valorAnterior / valorAtual;
          this.atualizaTela(valorOperacao, operacao, valorAtual, valorAnterior);
          this.acabouDeFazerOperacao = true;
          break;
        }

      case 'C':
        this.limparTela();
        this.acabouDeFazerOperacao = false;
        break;
      case '⌫':
        this.deletar();
        break;
      case '=':
        this.igual();
        this.acabouDeFazerOperacao = true;
        break;
      default:
        return;
    }
  }

  limparTela() {
    this.textoLinhaSuperior.innerText = '';
    this.textoLinhaInferior.innerText = '0';
  }

  deletar() {
    if (textoLinhaInferior.innerText.length === 1) {
      this.textoLinhaInferior.innerText = '0';
    } else {
      this.textoLinhaInferior.innerText = this.textoLinhaInferior.innerText.slice(0, -1);
    }
  }

  igual() {
    if (this.textoLinhaSuperior.innerText.includes('=')) {
      const operacaoCompleta = `${this.textoLinhaInferior.innerText} ${this.textoLinhaSuperior.innerText.slice(2)}`;
      this.textoLinhaSuperior.innerText = `${this.textoLinhaSuperior.innerText.split(' ')[2]} ${
        this.textoLinhaSuperior.innerText.split(' ')[1]
      }`;
      console.log('opCompleta: ', operacaoCompleta);
      const operador = this.textoLinhaSuperior.innerText.split(' ')[1];
      this.acabouDeFazerOperacao = false;
      this.processarOperacao(operador);
      this.textoLinhaSuperior.innerText = operacaoCompleta;
    } else {
      const operacaoCompleta = `${this.textoLinhaSuperior.innerText} ${textoLinhaInferior.innerText} =`;
      const operador = this.textoLinhaSuperior.innerText.split(' ')[1];
      this.acabouDeFazerOperacao = false;
      this.processarOperacao(operador);
      this.textoLinhaSuperior.innerText = operacaoCompleta;
    }
  }
}

const calc = new Calculadora(textoLinhaSuperior, textoLinhaInferior);

buttons.forEach((btn) => {
  btn.addEventListener('click', (evento) => {
    const valorClicado = evento.target.innerText;
    if (valorClicado >= 0 || valorClicado === '.') {
      //BUG: Limite de 7 números não deixa executar a conta (ex: digitei 7 números, quando aperto algum operador, a tela deveria ser limpa)
      if (calc.textoLinhaInferior.innerText.length >= 7) {
        return;
      }
      if (calc.textoLinhaSuperior.innerText.includes('=')) {
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

