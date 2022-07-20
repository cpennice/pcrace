
let cs=0;
let ps=0;
let choiceslist = ["piedra", "papel", "tijera"];
const para = document.querySelector ("#wlt")
const score1 = document.querySelector ("#score1")
const score2 = document.querySelector("#score2")



//funcion que genera el player vs getComputerChoice

function onPlayerSelect(clickID) {    
        const computerSelection = getComputerChoice (choiceslist)
        var audio = document.getElementById("audio");
        audio.play();
        getScore(ps, cs);
        document.getElementById("score1").innerHTML = ps;
        document.getElementById("score2").innerHTML = cs;
        playRound (clickID, computerSelection) // playround (slot 1 , slot)
}


//funcion donde se ejectuta el valor random de choiceslist
function getComputerChoice(itemslist){
        let itemelegido = itemslist [Math.floor(Math.random () * itemslist.length)];
        console.log(itemelegido);
        return itemelegido;
    
}

//funcion reinicia la pag cuando score (pc, cs) === 5

function getScore(ps, cs){
        if (ps === 5) {
                alert("Ganaste HelicopterBoe...!!")
                location.reload()
        }else if (cs===5){
                alert("Perdite concha la pelota... >(")
                location.reload()

        }





}



function playRound(playerSelection, computerSelection){
console.log (playerSelection)
console.log (computerSelection)
let result=0
if (computerSelection === "papel" && playerSelection === "piedra"){
        para.textContent = "You Lose! Paper beats Rock"
                 result = cs++;
}else if (computerSelection === "tijera" && playerSelection === "papel"){
        para.textContent = "You Lose! tijera beats papel"
                 result = cs++;
}else if (computerSelection === "piedra" && playerSelection === "tijera"){
        para.textContent = "You Lose! piedra beats tijera"
                 result = cs++;
}else if (computerSelection === "piedra" && playerSelection === "papel"){
        para.textContent = "You Win! piedra beats papel"
                 result = ps++;
}else if (computerSelection === "papel" && playerSelection === "tijera"){
        para.textContent = "You Win! papel beats tijera"
                 result = ps++;
}else if (computerSelection === "tijera" && playerSelection === "piedra"){
        para.textContent = "You Win! tijera beats piedra"
                 result = ps++;
}else {
        para.textContent = "You Tie!"}

}


// Get the video
var video = document.getElementById("myVideo");

// Get the button
var btn = document.getElementById("myBtn");

// Pause and play the video, and change the button text
function myFunction() {
  if (video.paused) {
    video.play();
    btn.innerHTML = "Pause";
  } else {
    video.pause();
    btn.innerHTML = "Play";
  }
}