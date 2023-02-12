let text=document.querySelector("input")
let btn=document.querySelector(".btn")
let list=document.querySelector(".list")

btn.onclick=function(){
    if(text.value.length != 0){
        list.innerHTML+=
            `
            <div>
                <div class="flex">
                
                                <p class="par ">${text.value}</p>
                                <button  ><i class="fas fa-trash"></i></button>
                </div>
                <hr>
            <div>
                
            `
   
    text.value=""

    let pargraph=document.querySelectorAll(".par")
    pargraph.forEach(item=>{
        
        item.addEventListener("click",function(){
                 item.classList.toggle("undarline")
                 console.log(item)
        })
    })

    let del =document.querySelectorAll(".flex button")
    del.forEach(item=>{
        item.addEventListener("click",function(){
            item.parentNode.parentNode.remove()

        })
    })

}}



