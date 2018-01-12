var cards = document.querySelectorAll('.card');
var value="";
var result=document.querySelectorAll('.result');
var flipped = document.querySelectorAll('.cardItem');
var score= {
  player:0,
  ia:0
};
var bg ={pierre:"<img class='img'src='pierre.png' alt='pierre' >",
  feuille:"<img class='img'src='feuille.png' alt='feuille' >",
  ciseaux:"<img class='img'src='ciseaux.png' alt='ciseaux' >"
}
var text = {
  win:"<h2 class='result'>Gagné</h2>",
  loose:"<h2 class='result'>Perdu</h2>"
}

/*var aleatoire = function(value)
{
    var rand = Math.floor(Math.random()*100);
  if(rand <33 ){ value = "pierre";}
  else if(rand >33 && rand <66){ value = "Feuille";}
  else { value="ciseaux";}


}*/

for (let i= 0; i < cards.length; i++) {
  cards[i].addEventListener('click',function(){

    var card = cards[i];
    flipped[i].classList.add('flipped');

    var rand = Math.floor(Math.random()*100);
    if(rand <33 ){value = "pierre";}
    else if(rand >33 && rand <66){value = "feuille";}
    else {value="ciseaux";}

    console.log("ordi :"+value);
    console.log("vous :"+card.dataset.type);
    if (cards[0]){// pierre
    if(value === card.dataset.type)
    { result[i].innerHTML = "Egalité";}
    else if(value == 'feuille'){result[i].innerHTML = text.loose + bg.feuille; return score.ia++;}
    else{result[i].innerHTML = text.win+bg.ciseaux; return score.player++;}
    console.log(score.player);
    }
    if (cards[1]){//feuille
    if(value === card.dataset.type)
    { result[i].innerHTML = "Egalité";}
    else if(value == 'ciseaux'){result[i].innerHTML = text.loose+bg.ciseaux ;return score.ia++;}
    else{result[i].innerHTbg.pierre;return  score.player++;}
    console.log(score.player);
    }
    if (cards[2]){//ciseaux
    if(value === card.dataset.type)
    { result[i].innerHTML = "Egalité";}
    else if(value == 'pierre'){result[i].innerHTML = text.loose+bg.pierre ;return score.ia++;}
    else{result[i].innerHTML = text.win+bg.feuille;return score.player++;}
    console.log(score.player);
    }

  })
  flipped[i].addEventListener("transitionend", function(e) {
  document.querySelector('.player').innerHTML = "Vous: " + score.player+"/5";
  document.querySelector('.ia').innerHTML = "IA: " +score.ia+"/5" ;

  flipped[i].classList.remove('flipped');
  });
}
