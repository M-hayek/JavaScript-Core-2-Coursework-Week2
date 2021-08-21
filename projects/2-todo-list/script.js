function populateTodoList(todos) {
  // let list = document.getElementById("todo-list");
  let list =  document.querySelector("#todo-list");
  // Write your code to create todo list elements with completed and delete buttons here, all todos should display inside the "todo-list" element.
 
    todos.forEach(addTodo);
    // console.log(list);
}

// function addTodo (todo) {
//   console.log(todo.task);

//   let li= document.createElement ("li");
//   li.innerText = todo.task;
//   list.appendChild (li);

// }

function addTodo (todo) {
  let list= document.querySelector("#todo-list");
  let li= document.createElement ("li");
  li.innerText = todo.task;
  li.className = "list-group-item d-flex justify-content-between align-items-center";
  list.appendChild (li);
  let span = document.createElement ("span");
  li.appendChild (span);
  span.className = "badge bg-primary rounded-pill";
  let i = document.createElement ("i");
  span.appendChild(i);
  i.className= "fa fa-check";
  let iTrash= document.createElement ("i");
  span.appendChild(iTrash);
  iTrash.className= "fa fa-trash";

}

function addTask(todo) {
  let span = document.createElement("span");
  span.className = "badge bg-primary rounded-pill";

  let completedButton = document.createElement("i");
  completedButton.className = "fa fa-check";

  let deleteButton = document.createElement("i");
  deleteButton.className = "fa fa-trash";

  span.appendChild(completedButton);
  span.appendChild(deleteButton);

  let task = document.createElement("li");
  task.className =
    "list-group-item d-flex justify-content-between align-items-center";
  task.innerText = todo.task;
  task.appendChild(span);

  if (todo.completed) {
    task.style = "text-decoration: line-through;";
  }

  let list = document.getElementById("todo-list");
  list.appendChild(task);
}
// These are the same todos that currently display in the HTML
// You will want to remove the ones in the current HTML after you have created them using JavaScript
let todos = [
  { task: "Wash the dishes, Maha", completed: false },
  { task: "Do the shopping, Maha", completed: false },
];

populateTodoList(todos);

// This function will take the value of the input field and add it as a new todo to the bottom of the todo list. These new todos will need the completed and delete buttons adding like normal.
function addNewTodo(event) {
  // The code below prevents the page from refreshing when we click the 'Add Todo' button.
  event.preventDefault();
  // Write your code here... and remember to reset the input field to be blank after creating a todo!
  let todoInput = document.querySelector ("#todoInput");
  if (todoInput.value != "") {
    let newTask = { task: todoInput.value, completed:false};
 addTask (newTask);
}
}

// Advanced challenge: Write a fucntion that checks the todos in the todo list and deletes the completed ones (we can check which ones are completed by seeing if they have the line-through styling applied or not).
function deleteAllCompletedTodos() {
  // Write your code here...


}
