export let todoList = [];
todoList = localStorage.getItem("todoList") ? JSON.parse(localStorage.getItem("todoList")) : []


let todoItemHTML = '';
const todoInput = document.querySelector('.js-name-todo');
const dateDue = document.querySelector('.js-date-input');
const commentText = document.querySelector('.js-comment-text');
let addBtn = document.querySelector('.js-add-btn');
let todoContainer = document.getElementById
  ('todo-item-container');
let todoContainerParent = document.querySelector('#todo-list-container-create');



addBtn.addEventListener("click", function (){
  pushTodo();
  addTodo();
  todoInput.value = '';
  dateDue.value = '';
  commentText.value = '';
  console.log(todoList);
}
);
function pushTodo() {
  todoList.push({
    name: todoInput.value,
    dueDate: dateDue.value,
    comments: commentText.value
  });
  localStorage.setItem("todoList", JSON.stringify(todoList))
};
function addTodo() {
  let displayTodos = todoList.length == 0 ? todoContainerParent.style.display = 'none' : todoContainerParent.style.display = 'flex';
  

  console.log(todoList);
  let todoContainer = document.getElementById
    ('todo-item-container');
  todoItemHTML = '';

  todoList.forEach((todo, index) => {
    todoItemHTML += `
      <div class="todo-item">
            <h1>${todo.name}</h1>
            <span>Due: </span><span>${todo.dueDate}</span>
            <p>Comments: </p><span>${todo.comments}</span>
            <div id="button-container">
            <button class="remove-todo"><i class="fa-solid fa-x"></i></button>
            <button class="edit-todo"><i class="fa-regular fa-pen-to-square"></i></button>
            </div>
          </div>
    `;
  });
  todoContainer.innerHTML = todoItemHTML;
  activateDeleteListeners();
};
addTodo();
// reference for learning to do remove buttons https://youtu.be/SeKQSQDUMDQ?si=izR-w6yIRFMvsHH2
function activateDeleteListeners() {
  let removeBtn = document.querySelectorAll('.remove-todo');
  removeBtn.forEach((deleteB, i) => {
    deleteB.addEventListener("click", () => { deleteItem(i);})
  })
}

function deleteItem(i) {
  todoList.splice(i, 1);
  localStorage.setItem("todoList", JSON.stringify(todoList))
  addTodo()
}
function activateEditListeners() {
  const editBtn = document.querySelectorAll('.edit-todo');
  editBtn.forEach((editB, i) => {
    editB.addEventListener("click", () => {
      editButton(i);
    })
  })
}
function editButton(i) {
  
}


