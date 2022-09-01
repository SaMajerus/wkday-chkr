/*     User Interface (UI) Logic     */
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
//import './css/styles.css';
import { gaussAlg } from './daycalc.js'; 

function handleForm(event) {
  event.preventDefault();
  document.querySelector('div#weekday-output').innerText = null;
  // const month = parseInt(document.querySelector('#length1').value);
  // const day = parseInt(document.querySelector('#length2').value);
  // const year = parseInt(document.querySelector('#length3').value);
  const dateInput = document.querySelector("input#date-input").value;
  console.log("inputted date is formatted as such: " + dateInput);
  // const inputStr = (`${month} ${day}, ${year}`); 
  // console.log("String inputted in the Date object is: " + inputStr); 
  // const date = new Date(inputStr); //NTS: double-check syntax 

  // const response = gaussAlg(date.getUTCMonth(), date.getUTCDay(), date.getUTCFullYear())[1]; 
  // const pTag = document.querySelector("div#weekday-output").createElement("p");
  // pTag.append(`Your result is: ${response}.`);
  // document.querySelector('div#weekday-output').append(pTag);
}

window.addEventListener("load", function() { 
  document.querySelector("#date-form").addEventListener("submit", handleForm);
}); 