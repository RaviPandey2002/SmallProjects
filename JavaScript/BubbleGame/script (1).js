var randomHit = Math.floor(Math.random() * 10);
// var timer = 60;
var btn = document.createElement("div");
document.querySelector("#ptop").appendChild(btn);
btn.classList.add("btn");
btn.textContent = "START";

function letsBegin(){
  timer = 60;
  document.querySelector(".score").textContent = 0;
  makeBubble();
  generateHit();
  runTimer();
  btn.remove();
}
btn.addEventListener("click", function () {
  letsBegin();
});



document.querySelector("#pbtm").addEventListener("click", function (e) {
  if (Number(document.querySelector(".timer").textContent) > 0) {
    if (randomHit == e.target.textContent) {
      updateScore();
      generateHit();
    } else if (randomHit != e.target.textContent && e.target.textContent >= 0) {
      generateHit();
      decrementScore();
    }
  } 
});

function updateScore() {
  var currentScore = document.querySelector(".score").textContent;
  document.querySelector(".score").textContent = Number(currentScore) + 10;
  // console.log(document.querySelector(".score").textContent);
}
function decrementScore() {
  var currentScore = document.querySelector(".score").textContent;
  if (Number(currentScore) <= 0) return;
  document.querySelector(".score").textContent = Number(currentScore) - 5;
  // console.log(document.querySelector(".score").textContent);
}
function generateHit() {
  randomHit = Math.floor(Math.random() * 10);
  document.querySelector(".hit").textContent = randomHit;
}
function runTimer() {
  var timerInt = setInterval(function () {
    if (timer >= 0) {
      document.querySelector(".timer").textContent = timer;
      timer--;
    } else {
      var btn = document.createElement("div");
      document.querySelector("#ptop").appendChild(btn);
      btn.classList.add("btn");
      btn.textContent = "Restart";
      btn.classList.add("restart");
      var totalScore = Number(document.querySelector(".score").textContent);
      /*Difference in between innerHTML and textContent*/
      document.querySelector("#pbtm").innerHTML=`Game Over <br> Your Total Score is ${totalScore}`;
      
      document.querySelector(".restart").addEventListener("click",function(){
        letsBegin();
        document.querySelector(".restart").remove();
      });


      clearInterval(timerInt);
    }
  }, 1000);
}
function makeBubble() {
  var clutter = "";
  for (var i = 1; i <= 105; i++) {
    var rn = Math.floor(Math.random() * 10);
    clutter += `<div class="bubble"> ${rn} </div>`;
  }
  document.querySelector("#pbtm").innerHTML = clutter;
}
