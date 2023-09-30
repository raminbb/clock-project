
    // get system time
let mySystemTime= new Date();
let hours = mySystemTime.getHours();
let digitHours = mySystemTime.getHours()
let minute = mySystemTime.getMinutes();
let second=mySystemTime.getSeconds();


function myClock(){
//for showing Hours at pm,am mode
if(hours>12){
    hours-=12;
}
    //for showing hours in table cells
   for (let i=1; i<=12; i++){
    if (document.getElementById(`${i}`).innerHTML ==hours){
        
        document.getElementById(`${i}`).style.backgroundColor="red";
    }
} 
//for showing minutes in table cells
    for(let j=1;j<=12;j++){
        if (document.getElementById(`${j}`).innerHTML ==Math.floor(minute/5)){
            document.getElementById(`${j}`).style.backgroundColor="green"

        } 
       
    }
    setTimeout(myClock, 1000);
    myTime();

}

myClock();

//add zero befor single character numbers
function addZero(number){
    if (hours <=9 || minute<=9 || second<=9){
            return String(number).padStart(2,"0");
        }
}
// show digital clock below the graphical clock;
function myTime(){
    const d = new Date();
    let hour = d.getHours();
    let fhour= addZero(hour);
    let minutes = d.getMinutes();
    let fminutes = addZero(minutes);
    let seconds = d.getSeconds();
    let fseconds = addZero(seconds);
    document.getElementById("time").innerHTML = `${fhour}: ${fminutes}: ${fseconds}`;
    setTimeout(myTime, 1000);
    }
    




