//this is what I want to store and render once I open the page
const todoList = JSON.parse(localStorage.getItem('todoList')) || [
  { name: "make dinner", dueDate: "02-26-2024" },
  { name: "wash dishes", dueDate: "02-26-2024" },
];

renderTodoList();

function renderTodoList() {
  let todoListHTML = "";

  for (let i = 0; i < todoList.length; i++) {
    const todoObject = todoList[i];
    const { name, dueDate } = todoObject;


    const html = `
    <div>${name}</div> 
    <div>${dueDate}</div>
    <button onclick="
      todoList.splice(${i}, 1)
      renderTodoList()
      saveTodoList ()
    " class="delete-todo-button">Delete</button>`;
    // below is shorthand for todoList = todoListHTML + html; which adds above html to empty string
    todoListHTML += html;
  }

  document.querySelector(".js-todo-list").innerHTML = todoListHTML;

}

function addTodo() {
  const inputElement = document.querySelector(".js-name-input");
  const name = inputElement.value;

  const dateInputElement = document.querySelector(".js-due-date-input");
  const dueDate = dateInputElement.value;

  todoList.push({ name, dueDate });

  inputElement.value = "";

  renderTodoList();
  saveTodoList ()
}

function saveTodoList (){
  localStorage.setItem('todoList', JSON.stringify(todoList));
}