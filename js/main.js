import { Calculator } from './calculator.js';
import { display } from './display.js';

const calc = new Calculator();
const teclas = document.getElementById('teclas');

teclas.addEventListener('click', (e) => {
  const key = e.target;
  if (!key.matches('button')) return;

  const text = key.textContent;

  if (key.classList.contains('numero')) {
    if (text === '+/-') {
      calc.toggleSign();
    } else if (text === '.') {
      calc.inputDecimal();
    } else {
      calc.inputDigit(text);
    }
  } else {
    switch (text) {
      case 'C': calc.reset(); break;
      case '=': calc.calculate(); break;
      case '⌫': calc.current = calc.current.slice(0, -1) || '0'; break;
      case 'M+': calc.memory += parseFloat(calc.current); break;
      case 'MR': calc.current = calc.memory.toString(); break;
      case 'MS': calc.memory = parseFloat(calc.current); break;
      case '√': calc.current = Math.sqrt(parseFloat(calc.current)).toString(); break;
      default: calc.setOperator(text); break;
    }
  }

  display.update(calc.current, calc.previous, calc.operator);
});
