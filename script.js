//make khaali dabba (clutter)
function makebubble(){
var clutter = "";

for(let i=1;i<=210;i++){
    //create random number
    var randomnumber = Math.floor(Math.random()*10);//this line of code generate random no.
    clutter += `<div class="bubble">${randomnumber}</div>`;
}
document.querySelector(".pbtm").innerHTML = clutter;
}
  
 var hitrn = 0;
function getrandomhit(){
    hitrn = Math.floor(Math.random()*10);//this line of code generate random no.
    document.querySelector("#hit").textContent = hitrn;
}

var timer = 60;
function runtimer(){
 var timerint = setInterval(()=>{
    if(timer>0){
    timer--;
    document.querySelector("#timer").textContent = timer;
    }
    else{
        document.querySelector(".pbtm").innerHTML = `<h1>Game Over</h1> <h2>Your Score is ${score}</h2> `;
        document.querySelector(".pbtm").style.flexDirection ="column";
        document.querySelector(".restart").style.display = "block";
        clearInterval(timerint);//for stopping time
    }
},1000)}

function restartgame(){
  var restart = document.querySelector(".restart");
  restart.addEventListener("click",()=>{
    location.reload();
   })
}
   

var score = 0;
function increasescore(){
    score+=10;
    document.querySelector("#score").textContent = score;
 }
 document.querySelector(".pbtm").addEventListener("click",(event)=>{
       if(event.target.textContent == hitrn){
        increasescore();
        makebubble();
        getrandomhit();
       } //event.target give all information about bubble that lie on pbtm and ftextcontent give no. inside bubble
 })

runtimer();
getrandomhit();
makebubble();
restartgame();