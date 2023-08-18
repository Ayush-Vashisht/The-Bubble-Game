var hitNum=0;
var timer=60;
var score=0;


makeBubble = () => {
    var clutter = "";

    for (var i = 1; i < 190; i++) {
        var num = Math.floor(Math.random() * 10);
        clutter += `<div class="bubble">${num}</div>`
    } document.querySelector("#pbtm").innerHTML = clutter;

}
// run timer decreases the timer by 1 each second
runTimer=()=>{
    var time=setInterval(()=>{
        // if timer value becomes 0 nd again if it decreases it will be -ve but we have to stop at 0 only therefor this staement 
        if(timer>0){
            timer--;
            document.querySelector("#timeInterval").textContent=timer;
        }
        // after timer becomes 0 then interval is cleared otherwise the timer will go on decreasing and it will take space and time 
        else {
            clearInterval(time);
            document.querySelector("#pbtm").innerHTML=
            `<h1>Game Over!!</h1>
            <h2>Your Score: ${score}</h2>`
        }
    },1000);
}

getNewHit=()=>{
    hitNum=Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent=hitNum;
}
increaseScore=()=>{
    score+=10;
    document.querySelector("#scoreval").textContent=score;
}
document.querySelector("#pbtm").addEventListener("click",function(dets){
    var clickedNum=Number(dets.target.textContent);
    console.log(clickedNum);
    if(clickedNum===hitNum){
        console.log("boom");
        increaseScore();
        makeBubble();
        getNewHit();
    }
});
getNewHit();
runTimer();
makeBubble();