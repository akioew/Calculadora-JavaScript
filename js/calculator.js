export class Calculator {
  constructor() {
    this.reset();
  }

  reset() {
    this.current = '0';
    this.previous = null;
    this.operator = null;
    this.memory = 0;
  }

  inputDigit(digit) {
    if (this.chegouNoLimiteDeCaracteres()) return;
    this.current = this.current === '0' ? digit : this.current + digit;
  }

  chegouNoLimiteDeCaracteres() {
    return this.current.replace('.','').length >= 16;
  }

  inputDecimal() {
    if (!this.current.includes('.')) this.current += '.';
  }

  toggleSign() {
    this.current = (parseFloat(this.current) * -1).toString();
  }

  setOperator(op) {
    if (this.operator && this.previous !== null) {
      this.calculate();
    }
    this.operator = op;
    this.previous = this.current;
    this.current = '0';
  }

  calculate() {
    const a = parseFloat(this.previous);
    const b = parseFloat(this.current);
    let result;

    switch (this.operator) {
      case '+': result = a + b; break;
      case '-': result = a - b; break;
      case 'x': result = a * b; break;
      case '÷': result = b !== 0 ? a / b : 'Erro'; break;
      case '%': result = a % b; break;
      default: return;
    }

    this.current = result.toString();
    this.previous = null;
    this.operator = null;
  }
}
