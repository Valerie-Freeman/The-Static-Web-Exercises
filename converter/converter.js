function toCelsius () {
    
}
    
function toFahrenheit () {
    
}
    
// Get a reference to the button element in the DOM
let tempInput = document.getElementById("input");
let tempSelect = document.getElementById("select").value;
let button = document.getElementById("converter");
let clear = document.getElementById("clear");
let tempOutput = document.getElementById("output");
    
// This function should determine which conversion should
// happen based on which radio button is selected.
function determineConverter (clickEvent) {
      console.log("event", clickEvent);
}
    
// Assign a function to be executed when the button is clicked
// button.addEventListener("click", determineConverter);

button.addEventListener("click", function() {
    console.log(tempInput.value);
    console.log(tempSelect);   
});
