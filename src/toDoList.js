/** 
 * QuerySelect for input Form eventListener
 * @type {Element}
 */ 
const FormToDo = document.querySelector(".input-to-do");

/** 
 * QuerySelect for input eventListener
 * @type {Element}
 */
const InputToDo = FormToDo.querySelector("input");

/** 
 * QuerySelect for ul to paint Element eventListener
 * @type {Element}
 */
const WhatToDo = document.querySelector(".what-to-do");


/** 
 * sessionStorage data keyName
 * @type {string}
 */
const ToDoList = "toDoList";

/** 
 * sessionStorage data valueName
 * @type {Array}
 */
let toDoList = [];

/** 
 * create 함수: input의 이벤트처리
 * @param {Event} event submit 이벤트
 */
const createToDo = (event) => {
  event.preventDefault();
  const toDo = InputToDo.value;
  paintToDo(toDo);
  setToDo(toDo);
  InputToDo.value = "";
};

/** 
 * paint 함수: 실질적으로 화면에 그리기
 * @param {String} toDo input에 넣은 text(할 일)
 */
const paintToDo = (toDo) => {
  const li = document.createElement("li");
  const input = document.createElement("input");
  input.setAttribute("type", "checkbox");
  input.addEventListener("click", checkToDo)
  const label = document.createElement("label");
  label.innerHTML = toDo;
  const button = document.createElement("button");
  button.addEventListener("click", deleteToDo)
  button.innerHTML = "삭제";
  li.appendChild(input);
  li.appendChild(label);
  li.appendChild(button);
  li.id = toDoList.length + 1;
  WhatToDo.appendChild(li);
}


/** 
 * list 내에 checkbox 이벤트 처리:
 * 할일 처리상태 => label text-decoration
 * @param {Event} event 체크박스 클릭이벤트
 */
const checkToDo = (event) => {
  const label = event.target.nextSibling;
  if (event.target.checked) {
    label.setAttribute("class", "checked-label")
  } else {
    label.setAttribute("class", "unchecked-label")
  }
}

/** 
 * list 내에 button을 통한 이벤트 처리:
 * parentNode를 이용해 list 삭제 + sessionStorage 최신화
 * @param {Event} event 삭제버튼 클릭이벤트
 */
const deleteToDo = (event) => {
  event.preventDefault();
  const li = event.target.parentNode;
  WhatToDo.removeChild(li);
  toDoList = toDoList.filter((toDo) => toDo.id !== Number(li.id));
  sessionStorage.setItem(ToDoList, JSON.stringify(toDoList));
  console.log(toDoList);
}

/** 
 * sessionStorage에 데이터가 있을 경우
 * 초기화면에 그려주는 역할
 */
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

/** 
 * sessionStorage에 데이터를 추가하여
 * 새로고침시에도 데이터가 남아있게 해줌
 * @param {String} toDo input에 넣은 text(할 일)
 */
const setToDo = (toDo) => {

/** 
 * sessionStorage에 넣을 value 정제
 * @type {{text: String, id: Number}}
 */
  const obj = {
    text: toDo,
    id: toDoList.length + 1,
  }

  toDoList.push(obj);
  sessionStorage.setItem(ToDoList, JSON.stringify(toDoList));
}

/** 
 * 초기화면 및 form event 처리
 */
const initToDo = () => {
  getToDo();
  FormToDo.addEventListener("submit", createToDo);
}

initToDo();