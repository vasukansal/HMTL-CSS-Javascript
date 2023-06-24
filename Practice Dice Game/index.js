var p1=(Math.random()*6);
p1=Math.floor(p1)+1;
var p2=(Math.random()*6);
p2=Math.floor(p2)+1;

if(p1==1){
    document.querySelectorAll("img")[0].setAttribute("src","images/dice1.png");
}
if(p1==2){
    document.querySelectorAll("img")[0].setAttribute("src","images/dice2.png");
}
if(p1==3){
    document.querySelectorAll("img")[0].setAttribute("src","images/dice3.png");
}
if(p1==4){
    document.querySelectorAll("img")[0].setAttribute("src","images/dice4.png");
}
if(p1==5){
    document.querySelectorAll("img")[0].setAttribute("src","images/dice5.png");
}
if(p1==6){
    document.querySelectorAll("img")[0].setAttribute("src","images/dice6.png");
}

if(p2==1){
    document.querySelectorAll("img")[1].setAttribute("src","images/dice1.png");
}
if(p2==2){
    document.querySelectorAll("img")[1].setAttribute("src","images/dice2.png");
}
if(p2==3){
    document.querySelectorAll("img")[1].setAttribute("src","images/dice3.png");
}
if(p2==4){
    document.querySelectorAll("img")[1].setAttribute("src","images/dice4.png");
}
if(p2==5){
    document.querySelectorAll("img")[1].setAttribute("src","images/dice5.png");
}
if(p2==6){
    document.querySelectorAll("img")[1].setAttribute("src","images/dice6.png");
}

if(p1>p2){
    document.querySelector("h1").innerHTML="✨ Player 1 Wins!";
}
if(p1<p2){
    document.querySelector("h1").innerHTML="Player 2 Wins! ✨";
}
if(p1==p2){
    document.querySelector("h1").innerHTML="✨ DRAW ✨";
}