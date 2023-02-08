let hours=document.querySelector(".hours")
let minut=document.querySelector(".minut")

let second=document.querySelector(".second")
let mili=document.querySelector(".mili")
let start=document.querySelector(".start")
let pause=document.querySelector(".pause")
let reset=document.querySelector(".reset")
let data
let milisecond=0 ,minut_value=0,hours_value=0,second_value=0
console.log(start)
start.onclick=function(){
 data=setInterval(
    function(){
        milisecond+=1
        if(milisecond==1000){
            second_value+=1
            milisecond=0
            if(second_value==60){
                second_value=0
                minut_value+=1;
                if (minut_value==60){
                    minut_value=0
                    hours_value+=1
                }
            }

        }
        
        hours.innerHTML=hours_value<=9 ? "0"+hours_value :hours_value
        mili.innerHTML=milisecond<=9?"00"+milisecond:milisecond<100 ?"0"+milisecond :milisecond
        minut.innerHTML=minut_value<10 ?"0"+minut_value :minut_value 
        second.innerHTML=second_value<10?"0"+second_value :second_value


        
    }
    
    ,1)
}

pause.onclick=function(){
    clearInterval(data)
}
reset.onclick=function(){
    clearInterval(data)
    milisecond=0 ,minut_value=0,hours_value=0,second_value=0
    hours.innerHTML="00"
    mili.innerHTML="00)"
    minut.innerHTML="00"
    second.innerHTML="00"

}