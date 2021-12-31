var zeit = 1000;
var huegel = document.getElementsByName("huegel");
var maulwurf = document.getElementsByName("maulwurf");
var scoreDisplay = document.getElementById("score");
var failTimeout = null;
var aktuellerHuegel = 0;
var score = -1;
for(let i in huegel){
	if(huegel[i].style){
		huegel[i].style.left = (5 + i * 100) + "px";
		maulwurf[i].addEventListener("click",_=>check(i))
		}
	}
next();
function check(nr){
	if(nr == aktuellerHuegel){
		next();
		}
	}
function next(){
	score++;
	scoreDisplay.innerHTML = score;
	maulwurf[aktuellerHuegel].style.visibility = "hidden";
	aktuellerHuegel = Math.floor(Math.random()*huegel.length);
	maulwurf[aktuellerHuegel].style.visibility = "visible";
	clearTimeout(failTimeout);
	failTimeout = setTimeout(fail,zeit);
	}
function fail(){
	alert("Game Over! Score: "+score);
	location.reload();
	}
