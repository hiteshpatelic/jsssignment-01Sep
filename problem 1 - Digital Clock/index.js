const clockText = document.getElementById('clocktime');
const dateInDom = document.getElementById('date');

function setDate(){
    var date = new Date();
    var month = date.getMonth();
    var curruntday = date.getDay();
    var year = date.getFullYear();
    dateInDom.innerHTML = ` ${curruntday}/${month}/${year}`
}
setDate()

    
var timer = setInterval(myTimer, 1000);

function start(){
    timer = setInterval(myTimer, 1000)
 }
 
function myTimer (){
    var time = new Date();
    var t = time.toLocaleTimeString();
    clockText.innerHTML= t;
}

function stop(){
    clearInterval(timer);
}






// console.log(hours, minits, seconds);