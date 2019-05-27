/*
INTRODUCTION TO EVENTS
SOURCE: https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events
*/



var colourButton  = document.getElementById('cbutton');

function random(number) {
    return Math.floor(Math.random()*(number+1));
  }

function returnValue(){
  let values = ['wow', 'another', 'cool beans', 'change me !', 'amazing', 'cool', 'awesome'];
  let index = Math.floor(Math.random() * values.length);
  console.log(index);
  return values[index];
}


colourButton.onclick = function() {
    
    let randomColour = 'rgb(' + random(255) + ', ' + random(255) + ', ' + random(255) + ')';
    console.log(randomColour)
    document.body.style.backgroundColor = randomColour;
    colourButton.innerText = returnValue();
}