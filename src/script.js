import Student from "./classes/Student.js";

document.addEventListener("DOMContentLoaded", () => {
//inputs
const marks = document.querySelectorAll(".marks");

//buttons
const calcBtn = document.querySelector(".calculate");

//variables
let marksValue = {};
let newStudent = new Student("Name", marksValue);

calcBtn.addEventListener("click", () => {
    marksValue = Array.from(marks).map(item => Number(item.value));
    console.log(marksValue.value);
});


});