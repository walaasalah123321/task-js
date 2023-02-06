let allimage=document.querySelector(".allimage")
let images=document.querySelectorAll("img")
let logo=document.querySelector(".logo")
let web=document.querySelector(".web")
let all=document.querySelector(".all")
let mobile=document.querySelector(".mobile")
all.onclick=function(){
    allimage.innerHTML=""
    images.forEach(item=>{
        allimage.innerHTML+=`
            <img class="${item.getAttribute("class")}" src="${item.getAttribute("src")}">
            `
    })
    console.log(allimage)
}
logo .onclick=function(){
    allimage.innerHTML=""

    images.forEach(item=>{
        if(item.classList.contains("logo")){
            allimage.innerHTML+=`
            <img class="logo" src="${item.getAttribute("src")}">
            `
        }
    })
}
web.onclick=function(){
    allimage.innerHTML=""

    images.forEach(item=>{
        if(item.classList.contains("design")){
            allimage.innerHTML+=`
            <img class="design" src="${item.getAttribute("src")}">
            `
        }
    })
}
 mobile.onclick=function(){
    allimage.innerHTML=""

    images.forEach(item=>{
        if(item.classList.contains("mob")){
            allimage.innerHTML+=`
            <img class="mob" src="${item.getAttribute("src")}">
            `
        }
    })
}