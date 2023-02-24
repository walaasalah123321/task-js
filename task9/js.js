let btn=document.querySelector(".btn")
let input=document.querySelectorAll("input")
let allData=localStorage.getItem("data") ? JSON.parse(localStorage.getItem("data") ):[]
let password=localStorage.getItem("pass") ? JSON.parse(localStorage.getItem("pass")) :[]
btn.onclick=function(){
    input.forEach(item =>{
        item.parentElement.parentElement.childNodes[3].classList.remove("color_div")
        if(item.getAttribute("placeholder")=="Confirm Password"){

        item.parentElement.parentElement.childNodes[5].classList.remove("color_div")
        }
        if(item.getAttribute("placeholder")=="Email"){

            item.parentElement.parentElement.childNodes[5].classList.remove("color_div")
        }
        
    })
    let s=0,n=0,v=0
    let pass=""

    input.forEach(item =>{
      
        if(item.value.length==0){
         item.parentElement.parentElement.childNodes[3].classList.add("color_div")
         s++
        } 
        else if(item.getAttribute("placeholder")=="Password"){
            pass=item.value
        }
        else if(item.getAttribute("placeholder")=="Confirm Password"){
            if(pass!=item.value && pass!=null){
                item.parentElement.parentElement.childNodes[5].classList.add("color_div")
            }
            else{
                n=1;
            }
            
        }
        else if(item.getAttribute("placeholder")=="Email"){
            if(item.value.includes("@")){
                v=1;
            }
            else{
                item.parentElement.parentElement.childNodes[5].classList.add("color_div")
            }
        }
    })
 

    if(s==0&&n&&v){
        input.forEach(item =>{
            if(item.getAttribute("class")=="name"){
            
                 allData.push(item.value)
                 localStorage.setItem("data",JSON.stringify(allData))
            }
            if(item.getAttribute("class")=="pass"){
                password=[...password,item.value]
                localStorage.setItem("pass",JSON.stringify(password))
           }

            item.value=""
        })
    }
    

}



