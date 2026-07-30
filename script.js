let popup = document.getElementById("popup");

document.getElementById("openLogin").onclick=function(){

window.location.href="login.html";

}

document.querySelector(".loginBtn").onclick=function(){

window.location.href="login.html";

}

document.getElementById("close").onclick = function(){

popup.style.display = "none";

}

window.onclick = function(e){

if(e.target==popup){

popup.style.display="none";

}

}