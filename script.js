
var amzn = ["test1", "test2", "test3"]

function textsResult() {

    document.getElementById("result").innerHTML = amzn[Math.floor(Math.random()*amzn.length)];
    
  }
  
  textResult ();
  document.getElementById("button").onclick = textResult;






function myFunction() {
	var element = document.body;
	element.classList.toggle("dark-mode");
  }


  const toggleTag = document.querySelector("a.toggle-nav");
  const mainTag = document.querySelector("main");
  
  toggleTag.addEventListener("click", function () {
	mainTag.classList.toggle("open")
	
  });

  
