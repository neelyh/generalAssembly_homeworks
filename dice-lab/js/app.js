/*

Create a page where every time the user hits the "Roll Dice"
button, the screen randomly updates the two dice. Review the HTML and CSS code
included in the starter code. You will need to write only JavaScript 
code to complete this exercise.

1) Create code that does the following:
* generate a random number between 1 - 6 and store to a variable, random1
* generate a random number between 1 - 6 and store to a variable, random2
* combine 'dice-' and random1 to form the CSS class name to use for the first
  die, firstDie
* combine 'dice-' and random2 to form the CSS class name to use for the second
  die, secondDie
* get the first die by ID and update the CSS class name to firstDie
* get the first die by ID and update the CSS class name to secondDie

2) Create code that runs the function you created whenever the button with the
   ID value 'roll-dice' is clicked.

*/

let random1 = Math.floor(Math.random() * 7);
let random2 = Math.floor(Math.random() * 7);

let firstDie = document.getElementById("first-die");
firstDie.className = "firstDie"
let secondDie = document.getElementById("second-die");
secondDie.className = "secondDie"

const button = document.getElementById("roll-dice")

button.onclick = () => {
  if (random1 === 1) {
    firstDie.className = "dice-1"
  } else if (random1 === 2){
    firstDie.className = "dice-2"
  }
  else if (random1 === 3){
    firstDie.className = "dice-3"
  }
  else if (random1 === 4){
    firstDie.className = "dice-4"
  }
  else if (random1 === 5){
    firstDie.className = "dice-5"
  }
  else if (random1 === 6){
    firstDie.className = "dice-6"
  }

  if (random2 === 1) {
    secondDie.className = "dice-1"
  } else if (random2 === 2){
    secondDie.className = "dice-2"
  }
  else if (random2 === 3){
    secondDie.className = "dice-3"
  }
  else if (random2 === 4){
    secondDie.className = "dice-4"
  }
  else if (random2 === 5){
    secondDie.className = "dice-5"
  }
  else if (random2 === 6){
    secondDie.className = "dice-6"
  }
}