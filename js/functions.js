var P1_Input;
var P2_Input;

function main(){

  P1_Input=randomNumberGenerator();
  P2_Input=randomNumberGenerator();

  document.querySelector(".dice1").setAttribute("src","images/"+P1_Input+".png");
  document.querySelector(".dice2").setAttribute("src","images/"+P2_Input+".png");

  decideWinner();
}

function decideWinner(){

  if(P1_Input>P2_Input)
    changeTextContent(1);

  else if(P1_Input<P2_Input)
    changeTextContent(2);

  else
    document.querySelector(".bigHeading").textContent = "Draw.";
}

function randomNumberGenerator(){
  return Math.floor(1+(Math.random()*6));
}

function changeTextContent(player){
  document.querySelector(".bigHeading").textContent = "Player " + player + " wins! 🤘 ";
}
