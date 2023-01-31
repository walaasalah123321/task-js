let increase=document.querySelector(".increase")
let decrease=document.querySelector(".decrease")
let rest=document.querySelector(".reset")
let count=document.querySelector(".counter")
console.log(increase)




increase.addEventListener("click",function(){
    
    count.innerHTML=(count.innerHTML-'0'+1);
    if((count.innerHTML)>0){
        count.className="postive";
    }
    if((count.innerHTML)==0){
        count.classList.remove("negative")
    }
})
rest.addEventListener("click",function(){
    count.innerHTML=0;

        count.classList.remove("negative")
        count.classList.remove("postive")
})
decrease.addEventListener("click",function(){
   
    count.innerHTML-=1;
    if(count.innerHTML<0){
        count.className="negative"; //count.classList.add("negative")
    }
    if((count.innerHTML)==0){
        count.classList.remove("postive")
    }
    
    
    

})