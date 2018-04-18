
$(document).ready(function() {
  recordOnLoad();
  lightson();
  lightsoff();
  stickyNav();
});
//on load sends CSS record off screen
function recordOnLoad () {
  //creates a 2 second delay
    var delayInMilliseconds = 1500; //2 second
    setTimeout(function() { //makes it delay two seconds
     $('.welcomerecord').animate({
        left: '-550%' //sends it off the screen
    });

}, delayInMilliseconds);
}
//theme switcher one switches theme to a brighter layout
function lightson() {
  document.getElementById("light-mode").addEventListener("click", function() {
      var x = document.getElementById("intro-box");
    x.style.backgroundColor = "white";
    x.style.color = "black";
    x.style.borderBottom = "5px black solid";
    document.body.style.backgroundColor = "white";
     document.body.style.color = "#000";
  });
}
//theme switcher for a darker layout, more friendly in dark rooms
function lightsoff() {
  document.getElementById("night-mode").addEventListener("click", function() {
      var x = document.getElementById("intro-box");
    x.style.backgroundColor = "black";
    x.style.color = "#fff";
    x.style.borderBottom = "5px white solid";
     document.body.style.backgroundColor = "black";
     document.body.style.color = "#fff";
  });
}

//keeps the nav bar at the top of the screen
function stickyNav() {
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("nav-bar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } 
}
}