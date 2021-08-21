function shoppingList(items) {
  // Write your code here...
let content = document.querySelector ("#content");
let unorderedList = document.createElement("ul");
content.appendChild (unorderedList);

for (let i = 0; i<items.length; i++) {
  let listItem =  document.createElement ("li");
  unorderedList.appendChild(listItem);
  listItem.textContent = items[i];
}


}

let shopping = ["Milk", "Bread", "Eggs", "A Dinosaur", "Cake", "Sugar", "Tea"];

shoppingList(shopping);


