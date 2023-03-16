let arr=["freelancer" ,"youtuber","designer"]
let push=document.querySelector(".push")


i=0,p=0;
item=arr[i];


 setInterval(function(){
            if(p<=item.length){
                push.innerHTML=item.slice(0,p)+`<span>|</span>`
                p++;
            }
            else{
                i++;
                if(i==3){
                    i=0;
                }
                item=arr[i];
                p=0;
            }
},300)
        

      

