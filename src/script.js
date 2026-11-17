import Student from "./classes/Student.js";
import Manager from "./Manager.js";

const  manager = new Manager();

document.addEventListener("DOMContentLoaded", async () => {
    await manager.studentsDB.init();
    manager.MakeTable();
});

document.addEventListener("DOMContentLoaded", () => {
//elements
const list = document.querySelector(".student-list");
const percentText = document.querySelector("#percent");

//inputs
const name = document.querySelector(".name");
const age = document.querySelector(".age");
const marks = document.querySelectorAll(".marks");

//buttons
const calcBtn = document.querySelector(".calculate");

//variables
let marksValue = [];

calcBtn.addEventListener("click", () => {
    marksValue = Array.from(marks).map(item => Number(item.value));
    let newStudent = new Student(name.value, age.value, marksValue);
    let percentage = newStudent.GetPercentage();
    percentText.innerText = String(percentage) + "%";
    AddToList(list, newStudent, percentage);
});

});

function AddToList (list, student, percentage) {
    // div w name marks and pecentage display gird
    const li = document.createElement("li");
    const div = document.createElement("div");
    const name = document.createElement("p");
    const age = document.createElement("p");
    const bio = document.createElement("p");
    const chem = document.createElement("p");
    const phy = document.createElement("p");
    const percent = document.createElement("p");
    div.classList.add("student-card");
    name.classList.add("name", "header");
    age.classList.add("age", "header");
    bio.classList.add("bio", "obt", "header");
    chem.classList.add("chem", "obt", "header");
    phy.classList.add("phy", "obt", "header");
    percent.classList.add("percent");
    li.classList.add("data");

    if (student.name.length > 0) {
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

        manager.Insert([student.name, student.age], [...student.marks, student.percentage]);
        manager.GetAllData();
    } else {
        // add red txt to warn user later 
        alert("Fill in the name and age feild please!");
    }
}