//traigo el input del dom
const input = document.querySelector("input");
//traigo el boton de añadir tarea del dom
const addBtn = document.querySelector(".btn-add");
//traigo la ul del dom
const ul = document.querySelector("ul");
//traigo la leyenda empty del dom
const empty = document.querySelector(".empty");
//creo una lista para agregar tareas realizadas
const tareas = [];
const tareasElim = [];
//traigo el elemento del dom
const tareasR = document.querySelector("#tareasRealizadas");
const historial = document.querySelector("#historial");

addBtn.addEventListener("click", (e) => {

    e.preventDefault();

    //creo una constante y le asigno el texto del input
    const text = input.value;

    //si es valida, creo una lista y un p en el dom
    if (text !== "") {

        const li = document.createElement("li");
        const p = document.createElement("p");

        //al p le cargo el texto del input
        p.textContent = text;

        //le agrego el elemento p a la li
        li.appendChild(p);
        //le agrego el li al ul del dom
        ul.appendChild(li);

        //agrego los botones a la li
        li.appendChild(addDeleteBtn());
        li.appendChild(addDoneBtn());

        input.value = "";
        empty.style.display = "none";

        tareas.push(text);
        historialTareas();
    }
});

function addDeleteBtn() {

    const deleteBtn = document.createElement("button");

    deleteBtn.textContent = "X";
    deleteBtn.className = "btn-delete";

    deleteBtn.addEventListener("click", (e) => {

        const item = e.target.parentElement;

        ul.removeChild(item);
    historialTareas();
        })
        


    const items = document.querySelectorAll("li");

    if (items.length === 0) {
        empty.style.display = "block";
    }

    return deleteBtn;
}


function addDoneBtn() {

    const doneBtn = document.createElement("button");

    doneBtn.textContent = "V";
    doneBtn.className = "btn-done";

    doneBtn.addEventListener("click", (e) => {

        const item = e.target.parentElement;
        ul.removeChild(item);
        tareasHechas();

        const items = document.querySelectorAll("li");

        if (items.length === 0) {
            empty.style.display = "block";
        }

    });


    return doneBtn;
}

function tareasHechas(nuevo) {

    const tarea = document.createElement("p");
  tarea.textContent = nuevo;
  historial.appendChild(tarea);

    const li = document.createElement("li");
    const p = document.createElement("p");

    //al p le cargo el texto del input
    p.textContent = tareas[tareas.length - 1];

    //le agrego el elemento p a la li
    li.appendChild(p);
    //le agrego el li al ul del dom
    tareasR.appendChild(li);
    /*  const p = document.createElement("p");
     p.textContent = tareas.sort();
     tareasR.replaceChild(p); */


};

function historialTareas() {

    historial.innerHTML = "<h3>Historial de Tareas (últimas 5)</h3>";

    const tar = tareas.slice(-5);

    tar.forEach((t) => {
        const p = document.createElement("p");
        p.textContent = t;
        historial.appendChild(p);
    });

}