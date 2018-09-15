'use strict';

var score = 0;

alert('Let\'s play a game. See how well you know me.');

var questionArray = [
  'Is my middle name Jane?', 
  'Do I love Cats?',
  'Have I ever been out of the cournty?', 
  'Do I have kids?',
  'Do I sing karaoke?'
];

var answerArray = [
  'no',
  'yes',
  'yes',
  'no',
  'no'
];

var correctResponse = [
  'Correct! My middle name is Elizabeth',
  'Of course I do! Who doesn\'t love those furry little muffins?',
  'Correct! I\'ve alctually travelled all around the world - most recently to Africa',
  'Technically you are correct. I one ONE kid - although she is loud enough for four kids!',
  'Right you are! No one wants to hear me sing, trust me.'
];

var incorrectResponse = [
  'nope - not even close',
  'WRONG! Cats are amazing! What were you thinking?',
  'WRONG!',
  'Ha! Trick question! I only have ONE kid - although if you met her, you\'d think you were around 10 kids!',
  'WRONG! No matter how drunk you get me, I will never get on that stage.'
];


//questions 1-5
for (var i=0; i < questionArray.length; i++) {
  var answer = prompt(questionArray[i]);
  if (answer.toLowerCase()[0] === answerArray[i][0]) {
    alert(correctResponse[i]);
    score++;
    console.log('question ' + i + ' response is ' + answer);
  } else {
    alert(incorrectResponse[i]);
    console.log('question ' + i + ' response is ' + answer);
  }
}

//sixth question
function q6(){
  var guessNumber = 0;

  while (guessNumber < 4){
    var favNumber = prompt('Guess what my favorite number is.');
    if (favNumber === '8' || favNumber === 'eight') {
      alert('You got it right! Eight is GREAT - and it is a sideways infinity');
      score++;
      console.log('my favorite number guesses: ' + favNumber);
      break;
    } else if (favNumber < 8) {
      alert('A little bit higher');
      console.log('my favorite number guesses: ' + favNumber);
    } else if (favNumber > 8) {
      alert('Too high! Try Again');
      console.log('my favorite number guesses: ' + favNumber);
    }
    if(guessNumber === 3){
      alert('You\'re out of guesses, you loose!');
    }

    guessNumber++;
  }
}

//seventh question

function q7(){
  var countriesArray = ['thailand', 'france', 'greece', 'italy', 'rwanda', 'england', 'germany'];

  var guessCountries = 0;
  var answer = false;

  while (guessCountries < 6) {
    var countries = prompt('what countries have I visited?');

    for (var i=0; i < countriesArray.length; i++) {
      if (countries.toLowerCase() === countriesArray[i]) {
        answer = true;
        console.log('what countries I have visited: ' + countries);
        break;      //this is the hack spot change to i=7;
      } 
    }
    if (answer) {
      alert('Great guess! You\'re right!');
      guessCountries = 7;
    } else {
      alert('I haven\'t been there yet but it\'s on my list! Try again.');
      console.log('what countries I have visited: ' + countries);
    }
    guessCountries++;
  }

  alert('I have traveled all over the world. I\'ve been to Germany, England, Italy, Greece, France, Thailand, and Rwanda');
}

function totalScore(){
  if (score < 4) {
    alert('You got ' + score + ' out of 7 correct. You must not know me at all! Let\'s get coffee and chat');
  } else {
    alert('You got ' + score + ' out of 7 correct. You are a really good guesser or you know me. Either way, let\'s get coffee and chat');
  }
}


q6();
q7();
totalScore();





