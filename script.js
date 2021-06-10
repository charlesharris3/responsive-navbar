

  function makeNavbarResponsive() {
    var navbar = document.getElementById("navbar");
    if (navbar.className === "navbar") {
      navbar.className += " responsive";
    } else {
      navbar.className = "navbar";
    }
  }

  /* Event Listeners */
  var menu = document.getElementById("menu-icon");
  menu.addEventListener("click",makeNavbarResponsive);
