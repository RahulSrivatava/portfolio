var typed = new Typed(".who-i-am", {
    strings: ["Software Developer", "\nCompetetive Programmer", "Converting Caffine to Code xD"],
    typeSpeed: 50,
    backSpeed: 50,
    cursorChar: '',
    loop: true
  });
  
  var e=document.getElementById("nav-list");
  function responsive_menu(){
    if(e.className === "align-center"){
      e.className += " responsive";
    }
    else e.className = "align-center";

  }