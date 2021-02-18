// ------- start METHOD 1 - very succinct
// document.querySelectorAll(".drum").forEach(function(item){ item.addEventListener("click",handleClick )});
// function handleClick(){
// alert("I GOT CLICKED !");
// }
//  -------end METHOD 1 - very succinct

//  ------- start METHOD 2 - very clear

// var wSound = new Audio("sounds/crash.mp3");
// var aSound = new Audio("sounds/kick-bass.mp3");
// var sSound = new Audio("sounds/snare.mp3");
// var dSound = new Audio("sounds/tom-1.mp3");
// var jSound = new Audio("sounds/tom-2.mp3");
// var kSound = new Audio("sounds/tom-3.mp3");
// var lSound = new Audio("sounds/tom-4.mp3");
// var tom = new Audio("sounds/tom-4.mp3");
//
// document.querySelectorAll(".drum").forEach(setListener);
//
// function setListener(item){item.addEventListener("click",function(){
//   tom.play();
//   alert("I GOT CLICKED !");
// }, false);

//  ------- end METHOD 2 - very clear

//  ------- start METHOD 3 - test

var wSound = new Audio("sounds/crash.mp3");
var aSound = new Audio("sounds/kick-bass.mp3");
var sSound = new Audio("sounds/snare.mp3");
var dSound = new Audio("sounds/tom-1.mp3");
var jSound = new Audio("sounds/tom-2.mp3");
var kSound = new Audio("sounds/tom-3.mp3");
var lSound = new Audio("sounds/tom-4.mp3");
var tom = new Audio("sounds/tom-4.mp3");

// document.querySelectorAll(".drum").forEach(function(item){ item.addEventListener("click",function(){
// // tom.play();
//                         switch (this.innerHTML){
//                           case "w":
//                             wSound.play();
//                             break;
//                           case "a":
//                             aSound.play();
//                             break;
//                           case "s":
//                               sSound.play();
//                               break;
//                           case "d":
//                             dSound.play();
//                             break;
//                             case "j":
//                               jSound.play();
//                               break;
//                           case "k":
//                             kSound.play();
//                             break;
//                           case "l":
//                               lSound.play();
//                               break;
//                         // this.style.color= "#fff";
//                         }
//  })});
// document.addEventListener("keydown",function(event){
//   // console.log(event.key)
//             switch (event.key){
//               case "w":
//                 wSound.play();
//                 break;
//               case "a":
//                 aSound.play();
//                 break;
//               case "s":
//                   sSound.play();
//                   break;
//               case "d":
//                 dSound.play();
//                 break;
//                 case "j":
//                   jSound.play();
//                   break;
//               case "k":
//                 kSound.play();
//                 break;
//               case "l":
//                   lSound.play();
//                   break;
//     }
//
//  });
//  ------- end METHOD 2 - very clear
//  ------- start METHOD 4 - vomplex
document.querySelectorAll(".drum").forEach(function(item){ item.addEventListener("click",function(){makesound(this.innerHTML)})});
 document.addEventListener("keydown", function(event){makesound(event.key)});


 function buttonAnimation(currentkey){
   var activeButton = document.querySelector("." + currentkey);
    activeButton.classList.add("pressed");
    setTimeout(function(){
      activeButton.classList.remove("pressed");
    },100);
 }

function makesound(key){
   buttonAnimation(key)
  // buttonAnimation(key);
  // alert(key);
  switch (key){
    case "w":
      wSound.play();
      break;
    case "a":
      aSound.play();
        document.querySelector("footer").style.backgroundColor ="red";
      break;
    case "s":
        sSound.play();
        document.querySelector("footer").style.backgroundColor ="green";
        break;
    case "d":
      dSound.play();
      break;
      case "j":
        jSound.play();
        document.querySelector("footer").style.backgroundColor ="blue";
        break;
    case "k":
      kSound.play();
      break;
    case "l":
        lSound.play();
        break;
}}

//  ------- end METHOD 4 - complex
