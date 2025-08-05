export const display = {
  upper: document.getElementById('linha-superior'),
  lower: document.getElementById('linha-inferior'),

  update(current, previous = '', operator = '') {
    this.lower.textContent = current;
    this.upper.textContent = previous && operator ? `${previous} ${operator}` : '';
  },

  clear() {
    this.lower.textContent = '0';
    this.upper.textContent = '';
  }
};
