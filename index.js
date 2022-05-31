var radomnum1=Math.floor(Math.random()*6)+1;
var randomimg1="dice"+radomnum1+".png"
var randimgsrc1="images/"+randomimg1;
var img1=document.querySelectorAll("img")[0];
img1.setAttribute("src",randimgsrc1)


var radomnum2=Math.floor(Math.random()*6)+1;
var randomimg2="dice"+radomnum2+".png"
var randimgsrc2="images/"+randomimg2;
var img2=document.querySelectorAll("img")[1];
img2.setAttribute("src",randimgsrc2)



if(radomnum1>radomnum2)
document.querySelector("h1").innerHTML="Player 1 wins";
else if(radomnum1<radomnum2)
document.querySelector("h1").innerHTML="Player 2 wins";
else
document.querySelector("h1").innerHTML="Draw :)";
