var operationsHistory = []

do {

  var val1 = parseInt(prompt('Podaj pierwszą liczbę'));
  var val2 = parseInt(prompt('Podaj drugą liczbę'));
  var operation = prompt('Podaj działanie (+-*/).');
  var result;

  if (isNaN(val1) || isNaN(val2)) {
    result = "Niepoprawne wartości"
  } else {
    if(operation === '+') {
      result = val1 + ' + ' + val2 + ' = ' + (val1 + val2)
    }
    else if(operation === '-') {
      result = val1 + ' - ' + val2 + ' = ' + (val1 - val2)
    }
    else if(operation === '*') {
      result = val1 + ' * ' + val2 + ' = ' + (val1 * val2)
    }
    else if(operation === '/') {
      if(val2 === 0) {
        result = "Nie możesz dzielić przez 0!!!"
      } else {
        result = val1 + ' / ' + val2 + ' = ' + (val1 / val2)
      }
    } else {
      result = "Niepoprawna operacja"
    }
    }

  console.log(result);
  operationsHistory.push(result)
  var choice = prompt('Czy chcesz obliczać dalej? Wpisz N aby zakńczyć działanie.')
} while(choice !== "N");
console.log(operationsHistory);