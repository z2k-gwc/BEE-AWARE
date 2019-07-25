const nav = document.querySelector('#topnav');
const navTop = nav.offsetTop;

function stickyNavigation() {
  console.log('navTop = ' + navTop);
  console.log('scrollY = ' + window.scrollY);

  if (window.scrollY >= navTop) {
    // nav offsetHeight = height of nav
    document.body.style.paddingTop = nav.offsetHeight + 'px';
    document.body.classList.add('fixed-nav');
  } else {
    document.body.style.paddingTop = 0;
    document.body.classList.remove('fixed-nav');
  }
}

window.addEventListener('scroll', stickyNavigation);
// for about us buttons
function myFunction() {
  var x = document.getElementById("infoaboutZ");
  if (x.style.display === "none") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
function myFunction() {
  var x = document.getElementById("infoaboutZosia");
  if (x.style.display === "none") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
function myFunction() {
  var x = document.getElementById("infoaboutKen");
  if (x.style.display === "none") {
    x.style.display = "none";
  } else {
    x.style.display = "black";
  }
}
