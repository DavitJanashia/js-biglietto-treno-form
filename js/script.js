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
  console.log(prezzoMinor);
} else if (eta == 'over65') {
  console.log(prezzoOver65);
} else {
  console.log(prezzoTotale);
}

// math random

var minCar = 1;
var maxCar = 10;
var minTreno = 90000;
var maxTreno = 100000;

var numCar = Math.floor(Math.random()*(maxCar - minCar + 1) + minCar);
var numTreno = Math.floor(Math.random()*(maxTreno - minTreno + 1) + minTreno);

console.log(numCar, numTreno);

// bottoni: versione  con add/remove dei classi
var btnCrea = document.getElementById('my-create');
btnCrea.addEventListener('click', function () {

  document.getElementById('my-table-box').style.opacity = "1";

  if (eta == 'minorenne'){
    document.getElementById('my-age-tb').innerHTML = 'Minorenne';
    document.getElementById('my-text-sale-tb').innerHTML =  'Scontato del 20%';
    document.getElementById('my-price-tb').innerHTML = 'Prezzo: ' + prezzoMinor + ' €';
  } else if (eta == 'over65') {
    document.getElementById('my-age-tb').innerHTML = 'Senior';
    document.getElementById('my-text-sale-tb').innerHTML =  'Scontato del 40%';
    document.getElementById('my-price-tb').innerHTML =   'Prezzo: ' + prezzoOver65 + ' €';
  } else {
    document.getElementById('my-age-tb').innerHTML = 'Maggiorenne';
    document.getElementById('my-text-sale-tb').innerHTML =  'Prezzo intero';
    document.getElementById('my-price-tb').innerHTML =   'Prezzo: ' + prezzoTotale + ' €';
  }

  document.getElementById('my-name-tb').innerHTML = 'Nome: ' + nome;
  document.getElementById('my-surname-tb').innerHTML = 'Cognome: ' + cognome;
  document.getElementById('my-km-tb').innerHTML = 'km: ' + km;

  document.getElementById('my-num-treno-tb').innerHTML = 'Numero treno: ' + numTreno;
  document.getElementById('my-num-car-tb').innerHTML =  'Numero carrozza: ' + numCar;
})

var btnAnulla = document.getElementById('my-cancel');
btnAnulla.addEventListener('click', function () {
  document.getElementById('my-table-box').style.opacity = "0";
})



//bottoni: versione bonus (fatto la ricerca su internet)

// function myFunctionCrea() {
//   var myOptions = document.getElementById("my-table-box");
//   if (myOptions.style.opacity === "0") {
//     myOptions.style.opacity = "1";
//
//   } else {
//     myOptions.style.opacity = "1";
//   }
// }
//
// function myFunctionAnulla() {
//   var myOptions = document.getElementById("my-table-box");
//   if (myOptions.style.opacity === "1") {
//     myOptions.style.opacity = "0";
//   } else {
//     myOptions.style.opacity = "0";
//   }
// }
