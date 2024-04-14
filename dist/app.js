"use strict";
const nameDOM = document.getElementById("name");
const surnameDOM = document.getElementById("surname");
const salaryDOM = document.getElementById("salary");
const workersDOM = document.getElementById("workerlist");
const addBtn = document.getElementById("add");
const rezultatasDiv = document.getElementById("rezultatas");
class Workers {
    constructor(name, surname, salary) {
        this.name = name;
        this.surname = surname;
        this.salary = salary;
    }
    gpm() {
        return this.salary * 0.2;
    }
    psd() {
        return this.salary * 0.0698;
    }
    vsd() {
        return this.salary * 0.1252;
    }
}
let WorkerMas = [];
const showList = () => {
    workersDOM.innerHTML = '';
    WorkerMas.forEach((w, i) => {
        const li = document.createElement('li');
        li.textContent = `${i + 1}: ${w.name} ${w.surname} - Atlyginimas: ${w.salary}€,\nGPM: ${w.gpm()}€, PSD: ${w.psd()}€, VSD: ${w.vsd()}€`;
        workersDOM.appendChild(li);
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Ištrinti";
        // deleteBtn.className = "btn btn-primary float-end btn-sm";
        deleteBtn.onclick = () => {
            console.log(i);
            WorkerMas.splice(i, 1);
            showList();
        };
        workersDOM.appendChild(deleteBtn);
    });
};
const addWorker = () => {
    const name = nameDOM.value;
    const surname = surnameDOM.value;
    const salary = salaryDOM.valueAsNumber;
    nameDOM.value = '';
    surnameDOM.value = '';
    salaryDOM.value = '';
    WorkerMas.push(new Workers(name, surname, salary));
    showList();
};
addBtn.onclick = addWorker;
