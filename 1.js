var colors=[];
var num=6;
var picked;
var h1 = document.querySelector("h1");
var showncolor=document.getElementById("colordisplay")
var resetbtn=document.getElementById("reset");
var messageDisplay=document.getElementById("message");
var squares=document.querySelectorAll(".square");
init();

function init(){
  setsqaures();
  reset();

}
function setsqaures(){
for(var i=0;i<squares.length;i++)
{
  squares[i].style.backgroundColor=colors[i];
  squares[i].addEventListener("click",function(){
    var clicked=this.style.backgroundColor;
    if(clicked===picked)
    {
      console.log("dfvbsd");
      change(clicked);
      h1.style.backgroundColor=clicked;
      document.getElementById('ss').style.backgroundColor=clicked;
      messageDisplay.textContent="Correct!!";
      resetbtn.textContent="Play Again?";

    }
    else {
      this.style.backgroundColor="#232323";
      messageDisplay.textContent="Try Again";
    }

  });
}
}
function change(color){
  for(var i=0;i<squares.length;i++)
  {
    squares[i].style.background=color;
  }
}
resetbtn.addEventListener("click",function(){
  reset();
})
function reset(){
	colors = generateRandomColors(num);
	picked = pickColor();
	showncolor.textContent = picked;
	resetbtn.textContent = "New Colors"
	messageDisplay.textContent = "";
	for(var i = 0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.display = "block"
			squares[i].style.background = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
	h1.style.background = "steelblue";
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}
function generateRandomColors(n)
{
  var arr=[];
  for(var i=0;i<n;i++)
  {
    arr.push(randomColor());
  }
  return arr;
}
function randomColor(){
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}
