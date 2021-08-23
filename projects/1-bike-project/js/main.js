// //part 1

function changeTheme () {

let blueButton = document.querySelector("#blueBtn");
let orangeButton = document.querySelector("#orangeBtn");
let greenButton = document.querySelector("#greenBtn");

let jumbotron = document.querySelector(".jumbotron");
let donateButton = document.querySelector(".btn-primary");
let volunteerButton = document.querySelector(".btn-secondary");

blueButton.addEventListener("click", () => {
  jumbotron.style.background = "#588fbd";
  donateButton.style.background = "#ffa500";
  volunteerButton.style.background = "black";
  volunteerButton.style.color = "white";
});

orangeButton.addEventListener("click", () => {
   jumbotron.style.background = " #f0ad4e";
   donateButton.style.background = "#5751fd";
   volunteerButton.style.background = "#31b0d5";
   volunteerButton.style.color = "white";
});

greenButton.addEventListener("click", () => {
 
  jumbotron.style.background = "#87ca8a";
  donateButton.style.background = "black";  volunteer.style.background = "#8c9c08";
  volunteerButton.style.color = "black";
});

}

changeTheme ();

//part2 

function checkValidation () {
    let emailValidity = document.querySelector("#exampleInputEmail1");
    let nameValidity = document.querySelector("#example-text-input");
    let describeValidity = document.querySelector("#exampleTextarea");
    let submitButton = document.querySelector('button[type="submit"]');

    submitButton.addEventListener ("click" , (event) => {
        if (emailValidity.value === "" || !emailValidity.value.includes("@")) {
            emailValidity.style.backgroundColor = "red";
            event.preventDefault();
          } else if (nameValidity.value === "") {
            nameValidity.style.backgroundColor = "red";
            event.preventDefault();
          } else if (describeValidity.value === "") {
            describeValidity.style.backgroundColor = "red";
            event.preventDefault();
          } else {
            alert("Thanks for completing the form!");
            nameValidity.value = "";
            emailValidity.value = "";
            describeValidity.value = "";
          }
       

    });




};
