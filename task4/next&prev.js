let next=document.querySelector(".next")
let prev=document.querySelector(".prev")
let active=document.querySelectorAll(".num")
let after=document.querySelectorAll(".after")
let number=1
let c=0
next.onclick=function(){
    if(number==active.length-1){
        next.classList.remove("activeiten")
        next.classList.add("notactiv")
    }
    prev.classList.remove("notactiv")
    prev.classList.add("activeiten")
   
        if( number<active.length ){
            active[number].classList.add("active")
            number=number+1
        }
        if( c<active.length-1 ){
            after[c].classList.add("active")
            c=c+1
        }
}

prev.onclick=function(){
    
   if(number==2){
    prev.classList.remove("activeiten")
    prev.classList.add("notactiv")}

    next.classList.remove("notactiv")
    next.classList.add("activeiten")

        if( number>1 ){   
            number=number-1; 
            active[number].classList.remove("active")
           
        }

           if(c>0){
                c=c-1
            
                after[c].classList.remove("active") 
            }
    
}


