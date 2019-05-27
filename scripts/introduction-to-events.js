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

// A Function to change the body colour
function changeColour() {
  let randomColour = 'rgb(' + random(255) + ', ' + random(255) + ', ' + random(255) + ')';
  console.log(randomColour);
  document.body.style.backgroundColor = randomColour;
}



// A method to apply function onclick event of button element
colourButton.onclick = changeColour;



// Another way of doing same thing using event listener
colourButton.addEventListener('click', changeColour);



// Selecting multiple elements and applying one function
toggleButton = document.querySelector('#notification-toggle');

var toggle = 0
function hideDivs() {
  let divs = document.querySelectorAll('.notification');
  
  if ((toggle==0)){ 
    for (let item of divs) {
      item.style.backgroundColor = 'yellow';
      item.style.color = 'black';
      item.style.display = 'none';
    }

    toggle = 1;
  } else {
    for (let item of divs) {
      item.style.backgroundColor = 'red';
      item.style.color = 'white';
      item.style.display = 'block';
    }
    toggle = 0;
  }
  

}

toggleButton.onclick = hideDivs;