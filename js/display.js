export const display = {
  upper: document.getElementById('linha-superior'),
  lower: document.getElementById('linha-inferior'),
  defaultFontSize: 96,

  update(current, previous = '', operator = '') {
    this.lower.textContent = this.formatarExibicaoInferior(current);
    this.upper.textContent = previous && operator ? `${previous} ${operator}` : '';
    this.atualizaFontePorLargura();
  },

  atualizaFontePorLargura() {
    const larguraMax = this.lower.clientWidth;
    let fontSize = this.defaultFontSize;
    this.lower.style.fontSize = `${fontSize}px`;
    while (this.lower.scrollWidth > larguraMax && fontSize > 20) {
      fontSize--;
      this.lower.style.fontSize = `${fontSize}px`;
    }
  },

  formatarExibicaoInferior(textoReferencia) {
    if (textoReferencia.length > 16) {
      const numero = parseFloat(textoReferencia);
      return numero.toExponential(5);
    }
    return this.adicionaDivisorMilhar(textoReferencia);
  },

  adicionaDivisorMilhar(textoReferencia) {
    const partes = textoReferencia.split('.');
    partes[0] = partes[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return partes.join('.');
  },

  clear() {
    this.lower.textContent = '0';
    this.upper.textContent = '';
  }
};
