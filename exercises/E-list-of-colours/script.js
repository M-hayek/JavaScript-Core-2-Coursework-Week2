function listOfColours(colours) {
  // Write your code here...
 let content = document.querySelector ("#content");
 let selectColor = document.createElement ("select");
  let text= document.createElement ("p");
 content.appendChild(selectColor);
 content.appendChild(text);

 
 colours.forEach (color => {
  let optionColor = document.createElement ("option");
  selectColor.appendChild(optionColor);
  optionColor.innerText = color;
  optionColor.value=color;
 });

 selectColor.onchange = function () {
   text.innerText = " You selected " + selectColor.value;
   text.style.color = selectColor.value;



 }


}

const colours = ["red", "blue", "green", "yellow", "pink", "brown"];

listOfColours(colours);
