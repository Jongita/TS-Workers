const nameDOM = <HTMLInputElement>document.getElementById("name");
const surnameDOM = <HTMLInputElement>document.getElementById("surname");
const salaryDOM = <HTMLInputElement>document.getElementById("salary");
const workersDOM = <HTMLUListElement>document.getElementById("workerlist")
const addBtn = document.getElementById("add")!;
const rezultatasDiv = document.getElementById("rezultatas")!;


class Workers {
  constructor(public name: string, public surname: string, public salary: number) {

  }

  public gpm(): number {
    return this.salary * 0.2;
  }

  public psd(): number {
    return this.salary * 0.0698;
  }

  public vsd(): number {
    return this.salary * 0.1252;
  }
}

let WorkerMas: Workers[] = [];


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

}

const addWorker = () => {
  const name = nameDOM.value;
  const surname = surnameDOM.value;
  const salary = salaryDOM.valueAsNumber;
  nameDOM.value = '';
  surnameDOM.value = '';
  salaryDOM.value = '';
  WorkerMas.push(new Workers(name, surname, salary));
 
  showList();
}

addBtn.onclick = addWorker;
