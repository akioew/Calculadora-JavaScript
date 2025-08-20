export const display = {
  upper: document.getElementById('linha-superior'),
  lower: document.getElementById('linha-inferior'),
  defaultFontSize: 96,

  update(current, previous = '', operator = '') {
    this.lower.textContent = current;
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

  clear() {
    this.lower.textContent = '0';
    this.upper.textContent = '';
  }
};
