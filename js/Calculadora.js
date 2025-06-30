export class Calculadora {
  constructor(linhaSuperior, linhaInferior) {
    this.linhaSuperior = linhaSuperior;
    this.linhaInferior = linhaInferior;
  }

  insereDigito(digito) {
    if (digito === '.' && this.linhaInferior.innerText.includes('.')) return;
    if (this.linhaInferior.innerText === '0') this.linhaInferior.innerText = '';
    if (
      this.linhaSuperior.innerText.includes('+') ||
      this.linhaSuperior.innerText.includes('-') ||
      this.linhaSuperior.innerText.includes('x') ||
      this.linhaSuperior.innerText.includes('÷')
    ) {
      this.linhaInferior.innerText = '';
    }
    this.linhaInferior.innerText += digito;
  }

processarOperacao(operacao){
  
}

}



/* export class Calculadora {
  constructor(textoLinhaSuperior, textoLinhaInferior) {
    this.textoLinhaSuperior = textoLinhaSuperior;
    this.textoLinhaInferior = textoLinhaInferior;
    this.operacaoAtual = ''; //verificar se porque preciso disso
  }

  insereDigito(digito) {
    if (digito === '.' && this.textoLinhaInferior.innerText.includes('.')) return; //Se digitar "ponto" já existir "ponto" na linha inferior, retornar.
    if (this.textoLinhaInferior.innerText === '0') this.textoLinhaInferior.innerText = ''; //Se linha inferior for "0", apaga tudo para receber números digitados.
    if (
      this.textoLinhaSuperior.innerText.includes('+') ||
      this.textoLinhaSuperior.innerText.includes('-') ||
      this.textoLinhaSuperior.innerText.includes('x') ||
      this.textoLinhaSuperior.innerText.includes('÷')
    ) {
      this.textoLinhaInferior.innerText = ''; // Se linha superior tiver algum operador (+,-,x,÷), apaga linha inferior para receber novo digito.
    }
    this.operacaoAtual = digito;
    console.log(this.operacaoAtual);
    this.atualizaTela();
  }

  atualizaTela(resultadoOperacao = null, operacao = null, expressaoParte2 = null, expressaoParte1 = null) {
    console.log(resultadoOperacao, operacao, expressaoParte2, expressaoParte1);

    if (resultadoOperacao === null) {
      this.textoLinhaInferior.innerText += this.operacaoAtual;
    } else {
      if (expressaoParte1 === 0) {
        //NÃO ENTENDI
        resultadoOperacao = expressaoParte2;
      }
      this.textoLinhaSuperior.innerText = `${resultadoOperacao} ${operacao}`;
      this.textoLinhaInferior.innerText = resultadoOperacao;
    }
  }

  processarOperacao(operacao) {
    let resultadoOperacao;
    const expressaoParte1 = +this.textoLinhaSuperior.innerText.split(' ')[0];
    const expressaoParte2 = +this.textoLinhaInferior.innerText;

    switch (operacao) {
      case '+':
        this.atualizaTela(resultadoOperacao, operacao, expressaoParte2, expressaoParte1);

      //processarOperacao - Não precisam de alteração
      case 'C':
        this.limparTela();
        break;
      case '⌫':
        this.deletar();
        break;
      case '=':
        this.igual();
        break;
      default:
        return;
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

  //Métodos OK (São simples e não precisam de alteração)

  limparTela() {
    this.textoLinhaSuperior.innerText = '';
    this.textoLinhaInferior.innerText = '0';
  }

  deletar() {
    if (this.textoLinhaInferior.innerText.length === 1) {
      this.textoLinhaInferior.innerText = '0';
    } else {
      this.textoLinhaInferior.innerText = this.textoLinhaInferior.innerText.slice(0, -1);
    }
  }
} */
