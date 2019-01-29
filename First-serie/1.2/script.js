
// import some polyfill to ensure everything works OK
import "babel-polyfill"

// import bootstrap's javascript part
import 'bootstrap';

// import the style
import "./style.scss";

/*
  Put the JavaScript code you want below.
*/
let number1;
let number2;
let answer;
function takevalues() {
number1 = parseFloat(document.querySelector('#firstnumber').value);
number2 = parseFloat(document.querySelector('#secondnumber').value);
};
function writeAnswer() {
  document.querySelector('#answer').innerText = "The answer is : " + answer;
};
function addition() {
  takevalues();
  answer = number1 + number2;
  writeAnswer();
};
function subtraction() {
  takevalues();
  answer = number1 - number2;
  writeAnswer();
};
function multiplication() {
  takevalues();
  answer = number1 * number2;
  writeAnswer();
};
function division() {
  takevalues();
  answer = number1 / number2;
  writeAnswer();
};
document.querySelector('#plus').addEventListener('click', () => {
  addition();
});
document.querySelector('#minus').addEventListener('click', () => {
  subtraction();
});
document.querySelector('#multiply').addEventListener('click', () => {
  multiplication();
});
document.querySelector('#divide').addEventListener('click', () => {
  division();
});
