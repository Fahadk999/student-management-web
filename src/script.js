import Student from "./classes/Student.js";

document.addEventListener("DOMContentLoaded", () => {
//elements
const list = document.querySelector(".student-list");
const percentText = document.querySelector("#percent");

//inputs
const name = document.querySelector(".s-name");
const marks = document.querySelectorAll(".marks");

//buttons
const calcBtn = document.querySelector(".calculate");

//variables
let marksValue = [];

calcBtn.addEventListener("click", () => {
    marksValue = Array.from(marks).map(item => Number(item.value));
    let newStudent = new Student(name.value, marksValue);
    let percentage = newStudent.GetPercentage().toFixed(2);
    percentText.innerText = String(percentage) + "%";
    AddToList(list, newStudent, percentage);
});

});

function AddToList (list, student, percentage) {
    // div w name marks and pecentage display gird
    const li = document.createElement("li");
    const div = document.createElement("div");
    const name = document.createElement("p");
    const percent = document.createElement("p");
    div.classList.add("student-card");
    name.classList.add("name");
    percent.classList.add("percent");

    name.innerText = student.name;
    percent.innerText = percentage + "%";
    div.appendChild(name);
    div.appendChild(percent);
    li.appendChild(div);
    list.appendChild(li);
}