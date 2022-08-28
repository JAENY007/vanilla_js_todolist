const formToDo = document.querySelector(".input-to-do");
const inputToDo = formToDo.querySelector("input");
const whatToDo = document.querySelector(".what-to-do");
const ToDoList = "toDoList";

let toDoList = [];

const createToDo = (event) => {
  event.preventDefault();
  const toDo = inputToDo.value;
  paintToDo(toDo);
  setToDo(toDo);
  inputToDo.value = "";
};

const paintToDo = (toDo) => {
  const li = document.createElement("li");
  const input = document.createElement("input");
  input.setAttribute("type", "checkbox");
  const label = document.createElement("label");
  label.innerHTML = toDo;
  const button = document.createElement("button");
  button.addEventListener("click", deleteToDo)
  button.innerHTML = "삭제";
  li.appendChild(input);
  li.appendChild(label);
  li.appendChild(button);
  li.id = toDoList.length + 1;
  whatToDo.appendChild(li);
}

const deleteToDo = (event) => {
  event.preventDefault();
  const li = event.target.parentNode;
  whatToDo.removeChild(li);
  toDoList = toDoList.filter((toDo) => toDo.id !== Number(li.id));
  sessionStorage.setItem(ToDoList, JSON.stringify(toDoList));
  console.log(toDoList);
}

const getToDo = () => {
  const loaded = sessionStorage.getItem(ToDoList);
  if (loaded !== null) {
    const parsed = JSON.parse(loaded);
    for (let toDo of parsed) {
      const {text} = toDo;
      paintToDo(text);
      setToDo(text);
    }
  }
}

const setToDo = (toDo) => {
  const obj = {
    text: toDo,
    id: toDoList.length + 1,
  }
  toDoList.push(obj);
  sessionStorage.setItem(ToDoList, JSON.stringify(toDoList));
}

const initToDo = () => {
  getToDo();
  formToDo.addEventListener("submit", createToDo);
}

initToDo();