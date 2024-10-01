const dice = document.getElementById('dice-btn');

function dicegame() {
    // Dice 1
    var randomDice = (Math.floor(Math.random()*6)+1)
    var diceLocation = "images/" + "dice-"+ 0 + randomDice+".svg"
    var img1 = document.querySelectorAll("img")[0]
   img1.setAttribute("src" , diceLocation)

    // Dice 2
    var randomDice2 = (Math.floor(Math.random()*6)+1)
    var diceLocation2 = "images/" + "dice-" + 0 + randomDice2 +".svg"
    var img2 = document.querySelectorAll("img")[1]
   img2.setAttribute("src" , diceLocation2)

   if(randomDice>randomDice2){
    document.querySelector("h2").innerHTML="🏆PLAYER 1 WIN!"
   }else if(randomDice<randomDice2){
    document.querySelector("h2").innerHTML="🏆PLAYER 2 WIN!"
   }else if(randomDice=randomDice2){
    document.querySelector("h2").innerHTML="MATCH DRAW!" 
   }else{
    document.querySelector("h2").innerHTML="Something Error..."
   }
//button text change
dice.innerHTML = "PLAY AGAIN!"

}