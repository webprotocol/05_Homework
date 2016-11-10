

function wiChange(event) {
  var value = event.target.value;
  if (value == 'to top' || value == 'to left' || value == 'to right' || value == 'to bottom') {
    box1.style.background = 'linear-gradient(' + wi.value + ',' + wo.value + ')';
 } else {
    box1.style.background = 'linear-gradient(' + deg.value + 'deg,' + wo.value + ')';
    deg1.innerHTML = deg.value + 'º';
  }
}

function clChange(event) {
  var value = event.target.value;
  if (value == cp1.value || value == cp2.value) {
    box2.style.backgroundImage = 'radial-gradient(' + ch.value +' '+ cl.value +' at '+ cp1.value +'% '+ cp2.value +'% ,'+ co.value + ')';
    pas1.innerHTML = cp1.value;
    pas2.innerHTML = cp2.value;
  } else {
    box2.style.backgroundImage = 'radial-gradient(' + ch.value + ' ' + cl.value + ',' + co.value + ')';
  }
}
