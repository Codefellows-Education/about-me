'use strict';

/* //first question
var middle = prompt('Is my middle name Jane?');

if (middle.toLowerCase()==='yes' || middle.toLowerCase()==='y') {
  alert('nope - not even close');
} else {
  alert('Correct! My middle name is Elizabeth');
}

console.log('is my middle name Jane? ' + middle);

//second question
var cats = prompt('Do I love Cats?');

if (cats.toLowerCase()==='yes' || cats.toLowerCase()==='y') {
  alert ('Of course I do! Who doesn\'t love those furry little muffins?');
} else {
  alert('WRONG! Cats are amazing! What were you thinking?');
}

console.log('Do I love cats? ' + cats);

//third question
var travel = prompt('Have I ever been out of the cournty?');

if (travel.toLowerCase()==='yes' || travel.toLowerCase()==='y') {
  alert ('Correct! I\'ve alctually travelled all around the world - most recently to Africa');
} else {
  alert('WRONG!');
}

console.log('Have I ever been out of the country? ' + travel);

//fourth questioh
var kids = prompt('Do I have kids?');

if(kids.toLowerCase() === 'no' || kids.toLowerCase() === 'n'){
  alert('Technically you are correct. I one ONE kid - although she is loud enough for four kids!');
} else {
  alert('Ha! Trick question! I only have ONE kid - although if you met her, you\'d think you were around 10 kids!');
}

console.log('Do I have kids? ' + kids);

//fifth question
var sing = prompt('Do I sing karaoke?');

if(sing.toLowerCase() === 'no' || sing.toLowerCase() === 'n'){
  alert('Right you are! No one wants to hear me sing, trust me.');
} else {
  alert('WRONG! No matter how drunk you get me, I will never get on that stage.');
}

console.log('Do I sing? ' + sing); */

//sixth question

var guessNumber = 0;

while (guessNumber < 4){
  var favNumber = prompt('Guess what my favorite number is.');
  if (favNumber === '8' || favNumber === 'eight') {
    alert('You got it right! Eight is GREAT - and it is a sideways infinity');
    break;
  } else if (favNumber < 8) {
    alert('A little bit higher');
  } else if (favNumber > 8) {
    alert('Too high! Try Again');
  }
  guessNumber++;
}

//seventh question

for (var i=0; i < 6; i++) {
  var countries = prompt ('what countries have I visited?');

  switch (countries.toLowerCase()) {
  case 'thailand':
    alert('Yes! Thailand is my favorite placce in the world!');
    i=7;
    break;

  case 'france':
    alert('you got it! France was my first international trip ever.');
    i=7;
    break;

  case 'greece':
    alert('Yep! I have family in Greece that I\'m lucky enough to get to visit');
    i=7;
    break;

  case 'italy':
    alert('Yes! My family and I drove through Tuscany four years ago.');
    i=7;
    break;

  case 'rwanda':
    alert('Good guess! I went to Rwanda two years ago on a humanitary aid photography trip.');
    i=7;
    break;

  case 'england':
    alert('Yes! I spend a quarter of college there studying Shakesphere.');
    i=7;
    break;

  case 'germany':
    alert('Yep - My family and I lived in Germany for a year when my daughter was 2');
    i=7;
    break;

  default:
    alert('not yet, but it\'s on my list! Try again.');
  }
}

