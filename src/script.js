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
    const bio = document.createElement("p");
    const chem = document.createElement("p");
    const phy = document.createElement("p");
    const percent = document.createElement("p");
    div.classList.add("student-card");
    name.classList.add("name", "obt", "header");
    bio.classList.add("bio", "obt", "header");
    chem.classList.add("chem", "obt", "header");
    phy.classList.add("phy", "header");
    percent.classList.add("percent");
    li.classList.add("data");

    name.innerText = student.name;
    bio.innerText = String(student.marks[0]);
    chem.innerText = String(student.marks[1]);
    phy.innerText = String(student.marks[2]);
    percent.innerText = percentage + "%";
    div.appendChild(name);
    div.appendChild(bio);
    div.appendChild(chem);
    div.appendChild(phy);
    div.appendChild(percent);
    li.appendChild(div);
    list.appendChild(li);
}