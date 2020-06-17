// variabili dati degli utenti

var nome = document.getElementById('my-name').value;
var cognome = document.getElementById('my-surname').value;
var km = parseFloat(document.getElementById('my-km').value);
console.log(nome, cognome, km);

var prezzoAlKm = 0.21;
var prezzoTotale = parseFloat((prezzoAlKm * km).toFixed(2));
var prezzoMinor = parseFloat((prezzoTotale * (1 - 0.2)).toFixed(2));
var prezzoOver65 = parseFloat((prezzoTotale * (1 - 0.4)).toFixed(2));
console.log(prezzoTotale, prezzoMinor, prezzoOver65);

// var optMinor = document.getElementById('my-minor').value;
// var optMajor = document.getElementById('my-major').value;
// var optOver = document.getElementById('my-over').value;
// console.log(optMinor, optMajor, optOver);

var eta = document.getElementById('my-options').value;
console.log(eta);
// condizioni

if (eta == 'minorenne'){
  console.log('ciao1');
} else if (eta == 'over65') {
  console.log('ciao2');
} else {
  console.log('ciao3');
}
