var cards = document.querySelectorAll('.card');
var value = "";
var result = document.querySelectorAll('.result');
var flipped = document.querySelectorAll('.cardItem');
var win = 0;
var loose = 0;
var bg = {
  rock: "<img class='img'src='img/rock.png' alt='rock' >",
  paper: "<img class='img'src='img/paper.png' alt='paper' >",
  scissors: "<img class='img'src='img/scissors.png' alt='scissors' >"
}
var text = {
  win: "<h2 class='result'>Gagné</h2>",
  loose: "<h2 class='result'>Perdu</h2>"
}
var rock = document.querySelector('.rock');
var paper = document.querySelector('.paper');
var scissors = document.querySelector('.scissors');
start = true;

var random = function(flipped) {
  flipped.classList.add('flipped');
  var rand = Math.floor(Math.random() * 3) + 1;
  if (rand === 1) {
    value = "rock";
  } else if (rand === 2) {
    value = "paper";
  } else {
    value = "scissors";
  }
}

var game = function() {
  if(start ===true){
  console.log(start)
  for (let i = 0; i < cards.length; i++) {

    cards[i].addEventListener('click', function() {
      random(flipped[i]);
    });
  }


  rock.addEventListener('click', function() {

    if (value == rock.dataset.type) {
      result[0].innerHTML = "Egalité";
    } else if (value == 'paper') {
      result[0].innerHTML = text.loose + bg.paper;
      loose++;
    } else {
      result[0].innerHTML = text.win + bg.scissors;
      win++;
    }
  });

  paper.addEventListener('click', function() {
    if (value == paper.dataset.type) {
      result[1].innerHTML = "Egalité";
    } else if (value == 'scissors') {
      result[1].innerHTML = text.loose + bg.scissors;
      loose++;
    } else {
      result[1].innerHTML = text.win + bg.rock;
      win++;
    }
  });
  scissors.addEventListener('click', function() {

    if (value == scissors.dataset.type) {
      result[2].innerHTML = "Egalité";
    } else if (value == 'rock') {
      result[2].innerHTML = text.loose + bg.rock;
      loose++;
    } else {
      result[2].innerHTML = text.win + bg.paper;
      win++;
    }
  });

  for (let j = 0; j < flipped.length; j++) {
    flipped[j].addEventListener("transitionend", function() {
      flipped[j].classList.remove('flipped');
      start=false;
      if (win < 5) {
        document.querySelector('.player').innerHTML = "Vous: " + win + "/5";
      } else {
        document.querySelector('.player').innerHTML = "Vous: 5/5";
      }

      if (loose < 5) {
        document.querySelector('.ia').innerHTML = "IA: " + loose + "/5";
      } else {
        document.querySelector('.ia').innerHTML = "IA: 5/5";
      }
    })
  }
}
}


  game();
