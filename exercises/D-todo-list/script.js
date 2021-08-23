function todoList(todos) {
  // Write your code here...

  let content = document.querySelector ("#content");
  let list = document.createElement ("ul");
  content.appendChild(list);

  todos.forEach ((add) => { let entry = document.createElement("li");
  list.appendChild(entry);
  entry.innerText=add.todo;
  
  entry.addEventListener ("click", () => {
    if (entry.style.textDecoration === "none") {
      entry.style.textDecoration = "line-through  black";
    } else {
      entry.style.textDecoration = "none";
    }
  });
});
}

const todos = [
  {todo: "wash the dishes"}, 
  {todo: "walk the dog"}, 
  {todo: "learn javascript"}, 
  {todo: "go shopping"}
];

todoList(todos);