var hr=0; //variable for hour
var min=0; //variable for minute
var sec=0; //variable for second
var count=0; //variable for 100th part of second


var timer = false; //if it is true , then timer is running

function start(){
    timer = true;
    stopwatch();

}

function stop() //will stop the stopwatch
{
      timer=false;
      

}

function reset()  //will reset the stopwatch
{
    timer=false;

    hr=0;
    min=0;
    sec=0;
    count=0;

    document.getElementById("hr").innerHTML="00";      //used for denoting double digit value of all parameters
    document.getElementById("min").innerHTML="00";
    document.getElementById("sec").innerHTML="00";
    document.getElementById("count").innerHTML="00";
}
 
function stopwatch(){

     if(timer==true)
     {
        count=count+1;  //after every 10ms , count value will increase
       
        if(count == 100)  
        {
            sec=sec+1;  //sec will get incremented , for every count reaches 100
            count =0;
        }
        if(sec ==60)
        {
            min=min+1;  //min will get incremented , for every sec reaches 60
            sec =0;
        }
        if(min ==60)
        {
            hr=hr+1;    //hr will get incremented , for every min reaches 60
            min =0;
            sec=0;
        }

        var hrString = hr;
        var minString = min;
        var secString = sec;
        var countString = count;

        if(hr < 10)
        {
            hrString = "0" + hrString ;
        }
        if(min < 10)
        {
            minString = "0" + minString ;
        }
        if(sec < 10)
        {
            secString = "0" + secString ;
        }
        if(count < 10)
        {
            countString = "0" + countString ;
        }

         
        document.getElementById("hr").innerHTML=hrString;
        document.getElementById("min").innerHTML=minString;
        document.getElementById("sec").innerHTML=secString;
        document.getElementById("count").innerHTML=countString;
        setTimeout("stopwatch()",10);
     }
}