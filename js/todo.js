const todoForm = document.querySelector("#todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.querySelector("#todo-list");

const TODOS_KEY = "todos";

let todos = [];

function saveTodos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
}

function deleteTodo(e) {
  const li = e.target.parentElement.parentElement;
  li.remove();
  todos = todos.filter((todo) => todo.id !== parseInt(li.id));
  saveTodos();
}

function paintTodo(newTodo) {
  const li = document.createElement("li");
  const button = document.createElement("button");
  const span = document.createElement("span");
  const div = document.createElement("div");

  li.setAttribute("draggable", "true");
  div.setAttribute("class", "todo-detail");
  li.id = newTodo.id;
  span.innerText = newTodo.text;
  button.innerText = "완료";
  button.addEventListener("click", deleteTodo);
  div.appendChild(span);
  div.appendChild(button);
  li.appendChild(div);
  todoList.appendChild(li);
}

function handleTodoSubmit(e) {
  e.preventDefault();
  const newTodo = todoInput.value;
  todoInput.value = "";
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  todos.push(newTodoObj);
  paintTodo(newTodoObj);
  saveTodos();
}

todoForm.addEventListener("submit", handleTodoSubmit);

const getTodos = localStorage.getItem(TODOS_KEY);

if (getTodos !== null) {
  const parseTodos = JSON.parse(getTodos);
  todos = parseTodos;
  parseTodos.forEach(paintTodo);
}
