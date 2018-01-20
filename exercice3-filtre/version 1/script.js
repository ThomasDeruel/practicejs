var all = document.querySelector('.btn-all')
var btn = document.querySelectorAll('.btn-filter')
var box = document.querySelectorAll('.box')
var mobile = document.querySelectorAll(".mobile")
var table= document.querySelectorAll(".table")
var desktop= document.querySelector(".desktop")

btn[0].addEventListener('click',function(){

  for(var i=0;i<box.length;i++){
    if(!box[i].classList.contains('mobile')){
  box[i].style.display='none';
    }else{box[i].style.display='';}
  }
})

btn[1].addEventListener('click',function(){

  for(var i=0;i<box.length;i++){
    if(!box[i].classList.contains('icon')){
  box[i].style.display='none';
    }else{box[i].style.display='';}
  }
})

btn[2].addEventListener('click',function(){

  for(var i=0;i<box.length;i++){
    if(!box[i].classList.contains('desktop')){
  box[i].style.display='none';
    }else{box[i].style.display='';}
  }
})

btn[3].addEventListener('click',function(){

  for(var i=0;i<box.length;i++){
    if(!box[i].classList.contains('tablet')){
  box[i].style.display='none';
    }else{box[i].style.display='';}
  }
})
all.addEventListener('click',function(){
   for(var i=0;i<box.length;i++){
     box[i].style.display=""
   }
})
