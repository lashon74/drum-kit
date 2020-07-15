
// Detects button press
var numberOfDrums = document.querySelectorAll(".drum").length;

for(var i = 0; i < numberOfDrums;  i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function (){

      var buttonInnerHTML = this.innerHTML;
      // Used to play relivant sounds
      makeSound(buttonInnerHTML);
// button buttonAnimation
      buttonAnimation(buttonInnerHTML);


});

}

// Detects keyboard press using anonymous function and event.key
// Use keydown not ketpress
document.addEventListener("keydown", function(event){
    // finds the key that was pressed
  makeSound(event.key);
// button animation
  buttonAnimation(event.key);

});

function makeSound(key){

        switch (key) {
        case "w":
        var tom1 = new Audio('sounds/tom-1.mp3');
        tom1.play();
        break;

        case "a":
        var tom2 = new Audio('sounds/tom-2.mp3');
        tom2.play();
        break;

        case "s":
        var tom3 = new Audio('sounds/tom-3.mp3');
        tom3.play();
        break;

        case "d":
        var tom4 = new Audio('sounds/tom-4.mp3');
        tom4.play();
        break;

        case "j":
        var crash = new Audio('sounds/crash.mp3');
        crash.play();
        break;

        case "k":
        var kick = new Audio('sounds/kick-bass.mp3');
        kick.play();
        break;

        case "l":
        var snare = new Audio('sounds/snare.mp3');
        snare.play();
        break;


        default: console.log(buttonInnerHTML);

      }
}
/* function thats gives buttons animation, sets variable for the items selected,
then adds a class style that we created. Add the function to keydown and click
*/
function buttonAnimation(currentKey){
  var activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");





setTimeout(function(){
  activeButton.classList.remove("pressed");
}, 100);

}
