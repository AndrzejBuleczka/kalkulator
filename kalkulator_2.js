var operationsHistory = []

function calculate(a, b, sign) {
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

function printHistory(array) {
  array.forEach(function(element, index) {
    console.log(`Operacja nr ${index + 1}: ${element}`);
  });
}

do {
  var val1 = parseInt(prompt('Podaj pierwszą liczbę'));
  var val2 = parseInt(prompt('Podaj drugą liczbę'));
  var operation = prompt('Podaj działanie (+-*/).');

  var result = calculate(val1, val2, operation);
  console.log(result);
  operationsHistory.push(result)

  var choice = prompt('Czy chcesz kontynuować? Podaj N aby zakończyć działanie.');
} while(choice !== 'N');

printHistory(operationsHistory)