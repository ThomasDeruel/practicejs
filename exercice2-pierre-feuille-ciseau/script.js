var cards = document.querySelectorAll('.card');
var value="";
var result=document.querySelectorAll('.result');
var flipped = document.querySelectorAll('.cardItem')
/*var aleatoire = function(rand,value)
{
  rand = Math.floor(Math.random()*100);
  if(rand <33 ){value = "pierre";}
  else if(rand >33 && rand <66){value = "Feuille";}
  else {value="ciseaux";}


}*/

for (let i= 0; i < cards.length; i++) {
  cards[i].addEventListener('click',function(){

    var card = cards[i];
    flipped[i].classList.add('flipped');


    /*flipped[i].classList.toggle('flipped');*/
    var rand = Math.floor(Math.random()*100);
    if(rand <33 ){value = "pierre";}
    else if(rand >33 && rand <66){value = "feuille";}
    else {value="ciseaux";}
    console.log("ordi :"+value);
    console.log("vous :"+card.dataset.type);
    if (cards[0]){
    if(value == card.dataset.type)
    {console.log('Egalité'); result[i].innerHTML = "Egalité";}
    else if(value == 'feuille'){result[i].innerHTML = "Perdu" ;}
    else{result[i].innerHTML = "Gagné";}
    }
    if (cards[1]){
    if(value == card.dataset.type)
    {console.log('Egalité'); result[i].innerHTML = "Egalité";}
    else if(value == 'ciseaux'){result[i].innerHTML = "Vous:"+value + "Perdu" ;}
    else{result[i].innerHTML = "Gagné";}
    }
    if (cards[2]){
    if(value == card.dataset.type)
    {console.log('Egalité'); result[i].innerHTML = "Egalité";}
    else if(value == 'pierre'){result[i].innerHTML = "Perdu" ;}
    else{result[i].innerHTML = "Gagné";}
  }
  flipped[i].addEventListener("transitionend", function(e) {
  flipped[i].classList.remove('flipped');
  });
  })
}
