

function roll(){
    var randomNumber1 = Math.floor((Math.random()*6))+1;
var randomNumber2 = Math.floor((Math.random()*6))+1;

console.log(randomNumber1);
console.log(randomNumber2);


document.querySelector(".img1").setAttribute("src","images/dice"+randomNumber1+".png");
document.querySelector(".img2").setAttribute("src","images/dice"+randomNumber2+".png");


if(randomNumber1>randomNumber2){

    document.querySelector("h1").innerHTML=" <iframe src='https://giphy.com/embed/KB8MHRUq55wjXVwWyl' width='120' height='120' frameBorder='0' class='giphy-embed' allowFullScreen></iframe>  Player 1 Wins! ";

}
else if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML=" Player 2 Wins!       <iframe src='https://giphy.com/embed/KB8MHRUq55wjXVwWyl' width='100' height='100' frameBorder='0' class='giphy-embed' allowFullScreen></iframe> ";

}
else{
    document.querySelector("h1").style.fontSize="4.8rem";

    document.querySelector("h1").innerHTML="Ohh NO! Match was DRAW!";
    

}


}


