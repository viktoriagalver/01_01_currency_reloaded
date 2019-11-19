/*
 * CURRENCY CONVERTER RELOADED
 * Author: <your name here>
 * ---------------------------
 *
 * This converts currencies...somehow.
 *
 * A list of ressources you used, for example links:
 * [JavaScript Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference).
 */

/*
 *  Aufgabe: Baut einen neuen Währungsumrechner. Nachfolgend findet ihr Code der die 
 *  dafür notwendingen Eingabewerte von der Konsole entgegennimmt.
 * 
 *  Dafür müsst ihr das Script wie folgt aufrufen:
 *  npm start -- <Ausgangssumme> <Ausgangswährung-Code> <Zielwährung-Code>
 *  also z.B.
 *  npm start -- 10.0 USD EUR
 * 
 *  Die erwartete Ausgabe ist ein Text in folgender Form:
 *  "Ergebnis: <Ausgangssumme> <Ausgangswährung> = <Ergebnis> <Zielwährung>"
 *  also z.B.
 *  Ergebnis: 10.00 USD = 11.00 EUR
 *  
 *  Das Script soll mindestens drei verschiedene Währungen in beide Richtungen unterstützen
 */

let args = process.argv.slice(2);

let amount, originalCurrency, targetCurrency;

if (args.length < 3) {
  console.log('Error: Not enough input arguments given!');
} else {
  amount = args[0];
  originalCurrency = args[1];
  targetCurrency = args[2];
}

let output;

const currencies = {
  name: 'Currencies',
  EUR: {
    parity: 1,
    symbol: '€'
  },
  USD: {
    parity: 1.107,
    symbol: '$'
  },
  RUB: {
    parity: 70.46,
    symbol: '₽'
  },
  TL: {
    parity: 6.33,
    symbol: '₺'
  },
  ZL: {
    parity: 4.29,
    symbol: 'Zł'
  },
  PEN: {
    parity: 3.72,
    symbol: 'S/'
  },
  CZK: {
    parity: 25.56,
    symbol: 'Kč'
  }
}


const amountInEur = amount / currencies[originalCurrency].parity;

output = amountInEur * currencies[targetCurrency].parity;

console.log(amount + currencies[originalCurrency].symbol + ' = ' + output + currencies[targetCurrency].symbol)

