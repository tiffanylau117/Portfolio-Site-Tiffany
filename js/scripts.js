//  alert("Welcome to my portfolio");
//  console.log("Hi folks")

function menuToggle() {
  var x = document.getElementById('navtoggle');
  if (x.className === 'myNavtoggle') {
    x.className += ' responsive';
  } else {
    x.className = 'myNavtoggle';
  }
}
