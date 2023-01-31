let imges=document.querySelectorAll(".imag")

imges.forEach(item=>{
   
    item.addEventListener("mouseenter",function(){ 
        item.classList.add("back")
    })

    item.addEventListener("mouseleave",function(){
            item.classList.remove("back")
    })
    
})
 
