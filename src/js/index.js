/*     User Interface (UI) Logic     */
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './../css/styles.css';
import { gaussAlg } from './daycalc.js'; 

function handleForm(event) {
  event.preventDefault();
  const divResult = document.querySelector("div#weekday-output");
  divResult.innerText = null;
  divResult.classList.add("hidden");
  
  // const month = parseInt(document.querySelector('#length1').value);
  // const day = parseInt(document.querySelector('#length2').value);
  // const year = parseInt(document.querySelector('#length3').value);
  const dateInput = document.querySelector("input#date-input").value; 
  if(dateInput === ""){
    const pTag = document.createElement("p");
    divResult.classList.remove("hidden");
    divResult.append(pTag);
    pTag.append("Please input a valid date");
  } else {
    console.log("inputted date is at first formatted and read as such: " + dateInput);
    const date = new Date(dateInput); //NTS: double-check syntax 
    console.log('date variable is read as "typeof:"' + typeof date);
    console.log("Compared to 'dateInput', the Date object itself has this format: " + date);

    const response = gaussAlg(date.getUTCMonth(), date.getUTCDate(), date.getUTCFullYear())[1]; 
    const pTag = document.createElement("p");
    divResult.classList.remove("hidden");
    divResult.append(pTag);
    pTag.append(`Your result is: ${response}.`);
  }
}

window.addEventListener("load", function() { 
  document.querySelector("#date-form").addEventListener("submit", handleForm);
}); 