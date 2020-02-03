setTimeout(
  function(){ 
    if (confirm("Hey le site xxxvidsxxx est trop bien. Viens dessus stp please")) {
      document.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
    }
  }
, 10000);

function changeMode() {
  document.body.style.backgroundColor = "magenta";
  var p = document.getElementsByTagName("p");
  for (var i = 0; i < p.length; i++) { 
    p[i].style.color = "blue";
    p[i].style.fontFamily = "courier";
  }
  var h1 = document.getElementsByTagName("h1");
  for (var i = 0; i < h1.length; i++) { 
    h1[i].style.color = "green";
    h1[i].style.fontFamily = "Comic Sans MS"; 
    
  }
  var h2 = document.getElementsByTagName("h2");
  for (var i = 0; i < h2.length; i++) { 
    h2[i].style.color = "green";
    h2[i].style.fontFamily = "Comic Sans MS";
  }
  var h3 = document.getElementsByTagName("h3");
  for (var i = 0; i < h3.length; i++) { 
    h3[i].style.color = "green";
    h3[i].style.fontFamily = "Comic Sans MS";
  }
}
