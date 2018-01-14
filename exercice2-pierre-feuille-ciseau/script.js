var cards = document.querySelectorAll('.card');
var value="";
var result=document.querySelectorAll('.result');
var flipped = document.querySelectorAll('.cardItem');
var win =0;
var loose =0;
var bg ={pierre:"<img class='img'src='pierre.png' alt='pierre' >",
        feuille:"<img class='img'src='feuille.png' alt='feuille' >",
        ciseaux:"<img class='img'src='ciseaux.png' alt='ciseaux' >"}
var text = {win:"<h2 class='result'>Gagné</h2>",
           loose:"<h2 class='result'>Perdu</h2>"}
var pierre = document.querySelector('.pierre');
var feuille = document.querySelector('.feuille');
var ciseaux = document.querySelector('.ciseaux');

for (let i= 0; i < cards.length; i++) {

  cards[i].addEventListener('click',function(){
    flipped[i].classList.add('flipped');
    var rand = Math.floor(Math.random()*3)+1;
    if(rand ===1 ){value = "pierre";}
    else if(rand ===2){value = "feuille";}
    else {value="ciseaux";}
  });
  }
  pierre.addEventListener('click',function(){
    if(value == pierre.dataset.type)
    { result[0].innerHTML = "Egalité";}
    else if(value == 'feuille'){result[0].innerHTML = text.loose + bg.feuille;loose++;}
    else{result[0].innerHTML = text.win+bg.ciseaux;win++;}
  });

  feuille.addEventListener('click',function(){
    if(value == feuille.dataset.type)
    { result[1].innerHTML = "Egalité";}
    else if(value == 'ciseaux'){result[1].innerHTML = text.loose + bg.ciseaux;loose++;}
    else{result[1].innerHTML = text.win+bg.pierre;win++;}
  });
  ciseaux.addEventListener('click',function(){

    if(value == ciseaux.dataset.type)
    { result[2].innerHTML = "Egalité";}
    else if(value == 'pierre'){result[2].innerHTML = text.loose + bg.pierre;loose++;}
    else{result[2].innerHTML = text.win+bg.feuille; win++;}
  });



for (let j = 0; j < flipped.length; j++) {
  flipped[j].addEventListener("transitionend", function() {
  flipped[j].classList.remove('flipped');
  if(win<5 || loose<5)
  {
  document.querySelector('.player').innerHTML = "Vous: " + win+"/5";
  document.querySelector('.ia').innerHTML = "IA: " +loose+"/5" ;
  }
  else{  document.querySelector('.player').innerHTML = "Vous: 5/5";
    document.querySelector('.ia').innerHTML = "IA: 5/5" ;}

})
}
