let outputResult = document.getElementById("result")
//row one
let buttontujuh = document.getElementById("tujuh")
buttontujuh.addEventListener("click", tujuhHandler);

function tujuhHandler() {
  if (outputResult.innerHTML.length < 12) {
    outputResult.innerHTML += '7';
  }
}
let buttondelapan = document.getElementById("delapan")
buttondelapan.addEventListener("click", delapanHandler);

function delapanHandler() {
  if (outputResult.innerHTML.length < 12) {
    outputResult.innerHTML += '8';
  }
}
let buttonsembilan = document.getElementById("sembilan")
buttonsembilan.addEventListener("click", sembilanHandler);

function sembilanHandler() {
  if (outputResult.innerHTML.length < 12) {
    outputResult.innerHTML += '9';
  }
}
let buttonDivide = document.getElementById("divide")
buttonDivide.addEventListener("click", divideHandler);

function divideHandler() {
  if (outputResult.innerHTML.length < 12) {
    outputResult.innerHTML += '/';
  }
}
//row two
let buttonempat = document.getElementById("empat")
buttonempat.addEventListener("click", empatHandler);

function empatHandler() {
  if (outputResult.innerHTML.length < 12) {
  outputResult.innerHTML += '4';
  }
}
let buttonlima = document.getElementById("lima")
buttonlima.addEventListener("click", limaHandler);

function limaHandler() {
  if (outputResult.innerHTML.length < 12) {
    outputResult.innerHTML += '5';
  }
}
let buttonenam = document.getElementById("enam")
buttonenam.addEventListener("click", enamHandler);

function enamHandler() {
  if (outputResult.innerHTML.length < 12) {
    outputResult.innerHTML += '6';
  }
}
let buttonkali = document.getElementById("kali")
buttonkali.addEventListener("click", kaliHandler);

function kaliHandler() {
  if (outputResult.innerHTML.length < 12) {
    outputResult.innerHTML += '*';
  }
}
//row three
let buttonOne = document.getElementById("satu")
buttonOne.addEventListener("click", oneHandler);

function oneHandler() {
  if (outputResult.innerHTML.length < 12) {
    outputResult.innerHTML += '1';
  }
}
let buttonTwo = document.getElementById("dua")
buttonTwo.addEventListener("click", twoHandler);

function twoHandler() {
  if (outputResult.innerHTML.length < 12) {
    outputResult.innerHTML += '2';
  }
}
let buttonThree = document.getElementById("tiga")
buttonThree.addEventListener("click", threeHandler);

function threeHandler() {
  if (outputResult.innerHTML.length < 12) {
    outputResult.innerHTML += '3';
  }
}
let buttonbagi = document.getElementById("bagi")
buttonbagi.addEventListener("click", bagiHandler);

function bagiHandler() {
  if (outputResult.innerHTML.length < 12) {
    outputResult.innerHTML += '-';
  }
}
//row empat
let buttonZero = document.getElementById("zero")
buttonZero.addEventListener("click", zeroHandler);

function zeroHandler() {
  if (outputResult.innerHTML.length < 12) {
    outputResult.innerHTML += '0';
  }
}
let buttondesimal = document.getElementById("desimal")
buttondesimal.addEventListener("click", desimalHandler);

function desimalHandler() {
  if (outputResult.innerHTML.length < 12) {
    outputResult.innerHTML += '.';
  }
}
let buttonAdd = document.getElementById("tambah")
buttonAdd.addEventListener("click", addHandler);

function addHandler() {
  if (outputResult.innerHTML.length < 12) {
    outputResult.innerHTML += '+';
  }
}

//samadengan
let buttonsamadengan = document.getElementById("samadengan")
buttonsamadengan.addEventListener("click", samadenganHandler);

function samadenganHandler() {
  // outputResult.innerHTML;
  let equation = outputResult.innerHTML;
  console.log(equation);
  let result = eval(equation);
  console.log(result);
  if (result%1 === 0){
    outputResult.innerHTML = result
  } else
  outputResult.innerHTML = result.toFixed(5);
}


//clear
let buttonClear = document.getElementById("clear")
buttonClear.addEventListener("click", clearHandler);

function clearHandler() {
  outputResult.innerHTML = '';
}

//mode 1
function myFunctionA() {
  var element = document.body;
  element.classList.toggle("temaA");
}

//mode 2
function myFunctionB() {
  var element = document.body;
  element.classList.toggle("temaB");
}

//mode 3
function myFunctionC() {
  var element = document.body;
  element.classList.toggle("temaC");
}
function toggleTheme(value) {
  
  // Obtain the name of stylesheet 
  // as a parameter and set it 
  // using href attribute.
  var sheets = document
      .getElementsByTagName('link');

  sheets[0].href = value;
}