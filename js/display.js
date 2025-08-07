export const display = {
  upper: document.getElementById('linha-superior'),
  lower: document.getElementById('linha-inferior'),

  update(current, previous = '', operator = '') {
    this.lower.textContent = current;
    this.upper.textContent = previous && operator ? `${previous} ${operator}` : '';
    this.atualizaFontePorLargura();
  },

  atualizaFontePorLargura() {
    let fontSize = parseInt(window.getComputedStyle(this.lower).fontSize);
    const larguraMax = this.lower.clientWidth;
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
