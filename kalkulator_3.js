function Calculator() {
  this.operationHistory = [];
}

Calculator.prototype.calculate = function(a, b, sign) {
  if(isNaN(a) || isNaN(b)) return 'Niepoprawne wartości. Musisz podać liczby'

  switch(sign) {
    case '+': return `${a} + ${b} = ${a + b}`;
    case '-': return `${a} - ${b} = ${a - b}`;
    case '*': return `${a} * ${b} = ${a * b}`;
    case '/': {
      if(b === 0) return 'Nie możesz dzielić przez 0!!!';
      return `${a} / ${b} = ${a / b}`;
    };
    default: return 'Nieobsługiwana operacja';
  }
}

Calculator.prototype.addToHistory = function(result) {
  this.operationHistory.push(result)
}

Calculator.prototype.printHistory = function() {
  this.operationHistory.forEach(function(operation, index) {
    console.log(`Operacja nr ${index + 1}: ${operation}`);
  })
}

Calculator.prototype.run = function() {
  do {
    var val1 = parseInt(prompt('Podaj pierwszą liczbę'));
    var val2 = parseInt(prompt('Podaj drugą liczbę'));
    var operation = prompt('Podaj działanie (+-*/).');

    var result = this.calculate(val1, val2, operation);
    console.log(result);
    this.addToHistory(result);

    var choice = prompt('Czy chcesz kontynuować? Podaj N aby zakończyć działanie.');
  } while(choice !== 'N');

  this.printHistory();
}

var calculator = new Calculator();
calculator.run();

var calculator2 = new Calculator();
calculator2.run();