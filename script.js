
var rays = ["FIRED FOR ORGANIZING A UNION", "support amazon workers", "amazon workers <br> shut it down<br>clean it up<br> unionize", "if we are essential treat us as such", "fired for organizing a union", "unionize amazon solidarity with bessemer workers"]

function rayResult() {

  document.getElementById("result").innerHTML = rays[Math.floor(Math.random()*rays.length)];
  
}

rayResult ();
document.getElementById("button").onclick = rayResult;



  
