let random_num=Math.floor(Math.random()*10)
console.log(random_num)
let input=document.querySelector("input")
let but=document.querySelector("button")
let diplay=document.querySelector(".none")
let count=document.querySelector(".count")
let border=document.querySelector(".center")

but.addEventListener("click",function(){

    diplay.classList.add("visible")
    count.innerHTML-=1;
    if(input.value==random_num){
        diplay.innerHTML="Well Done :)"
        but.disabled="false"
        input.disabled="false"
        
    }
    else{
        console.log(count.innerHTML)
        if(count.innerHTML=='0'){
            but.disabled="false"
            input.disabled="false"
            border.classList.add("border")
            diplay.innerHTML="Game Over :]" 
        }
        else  diplay.innerHTML="Try Again :]"
    }

    input.value=""
   
    
})
