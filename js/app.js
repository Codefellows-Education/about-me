'use strict';

var score = 0;

//first question
function q1(){
var middle = prompt('Is my middle name Jane?');

if (middle.toLowerCase()==='yes' || middle.toLowerCase()==='y') {
  alert('nope - not even close');
} else {
  alert('Correct! My middle name is Elizabeth');
  score++;
}

console.log('is my middle name Jane? ' + middle);
}

//second question
function q2(){
var cats = prompt('Do I love Cats?');

if (cats.toLowerCase()==='yes' || cats.toLowerCase()==='y') {
  alert ('Of course I do! Who doesn\'t love those furry little muffins?');
  score++;
} else {
  alert('WRONG! Cats are amazing! What were you thinking?');
}

console.log('Do I love cats? ' + cats);
}

//third question
function q3(){
var travel = prompt('Have I ever been out of the cournty?');

if (travel.toLowerCase()==='yes' || travel.toLowerCase()==='y') {
  alert ('Correct! I\'ve alctually travelled all around the world - most recently to Africa');
  score++;
} else {
  alert('WRONG!');
}

console.log('Have I ever been out of the country? ' + travel);
}

//fourth questioh
function q4(){
var kids = prompt('Do I have kids?');

if(kids.toLowerCase() === 'no' || kids.toLowerCase() === 'n'){
  alert('Technically you are correct. I one ONE kid - although she is loud enough for four kids!');
  score++;
} else {
  alert('Ha! Trick question! I only have ONE kid - although if you met her, you\'d think you were around 10 kids!');
}

console.log('Do I have kids? ' + kids);
}

//fifth question
function q5(){
var sing = prompt('Do I sing karaoke?');

if(sing.toLowerCase() === 'no' || sing.toLowerCase() === 'n'){
  alert('Right you are! No one wants to hear me sing, trust me.');
  score++;
} else {
  alert('WRONG! No matter how drunk you get me, I will never get on that stage.');
}

console.log('Do I sing? ' + sing); 
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

function score(){
if (score < 4) {
  alert('You got ' + score + ' out of 7 correct. You must not know me at all! Let\'s get coffee and chat');
} else {
  alert('You got ' + score + ' out of 7 correct. You are a really good guesser or you know me. Either way, let\'s get coffee and chat');
}
}

q1();
q2();
q3();
q4();
q5();
q6();
q7();
score();





