let todoList = [];
let todoItemHTML = '';


const todoInput = document.querySelector('.js-name-todo');
const dateDue = document.querySelector('.js-date-input');
const commentText = document.querySelector('.js-comment-text');
const addBtn = document.querySelector('.js-add-btn');

// getFromStorage();
// document.addEventListener('DOMContentLoaded', getFromStorage()); 

addBtn.addEventListener("click", function () {
  todoList.push({
    name: todoInput.value,
    dueDate: dateDue.value,
    comments: commentText.value
  });
    
  addTodo();
  addToLocalStorage();

  todoInput.value = '';
  dateDue.value = '';
  commentText.value = '';
  console.log(todoList);
}
);

function addTodo() {
  let todoContainer = document.getElementById
    ('todo-item-container');
  todoItemHTML = '';

  todoList.forEach((todo) => {
    todoItemHTML += `
      <div class="todo-item">
            <h1>${todo.name}</h1>
            <span>Due: </span><span>${todo.dueDate}</span>
            <p>Comments: </p><span>${todo.comments}</span>
          </div>
    `;
    
  });
  todoContainer.innerHTML = todoItemHTML;
};

function addToLocalStorage(todo) {
  localStorage.setItem("todoList", JSON.stringify(todo));
};
function getFromStorage() {
  const storedTodos = JSON.parse(localStorage.getItem("todoList"));

  if (storedTodos) {
    todoList = storedTodos;
  };
};
console.log(todoList);

