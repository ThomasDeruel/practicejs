var card=document.querySelectorAll('.card');
var memo;
var memovalue;
for(let i=0;i<card.length;i++)
  {
    card[i].addEventListener('click',function(){
     if(!memo){
       memo = this.dataset.value;
      memovalue= card[i];
      memovalue.innerHTML="<div class='verso'>"+memo+"</div>";
      return;
       }
      if((this.dataset.value === memo)&& (this!=memovalue))
        {
          card[i].innerHTML="<div class='verso'>"+memo+"</div>";
          memo=undefined;
        }
      else{
        memovalue.innerHTML="<div class='recto'></div>"+"<div class='verso'</div>";
        this.innerHTML="<div class='recto'></div>"+"<div class='verso'></div>";
       memo=undefined;
      }
    })
  }
