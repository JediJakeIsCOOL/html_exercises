 var dealerhand = []
 var playerhand = []
 var deck = []
 var playerhandpoints = 0
 var dealerhandpoints = 0
 
 function deckMaker(deck){   
    for (var i = 1; i <= 13; i++){
        deck.push({point:i, suit:"hearts"});
        deck.push({point:i, suit:"diamonds"});
        deck.push({point:i, suit:"clubs"});
        deck.push({point:i, suit:"spades"});

    }
}

function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
}


function Dealing(deck){
    dealerhand.push(deck.pop())
    playerhand.push(deck.pop())
    dealerhand.push(deck.pop())
    playerhand.push(deck.pop())
}
function addCardToDom(card){}
// to add card from object to dealing

function CountHands(dHand, pHand){
    for (var i = 0; i < dealerhand.length; i++){
        if (dHand[i].point <= 10 && dHand[i].point>1 ){
           dealerhandpoints = dealerhandpoints + dHand[i].point   
        }
        if (dHand[i].point > 10){
            dealerhandpoints = dealerhandpoints + 10
        }
        if (dHand[i].point === 1){
            dealerhandpoints = dealerhandpoints + 11
        }
     }
     for (var j= 0; j < playerhand.length; j++){
         if (pHand[j].point <= 10 && pHand[j].point > 1){
             playerhandpoints = playerhandpoints + pHand[j].point
         }
         if (pHand[j].point > 10){
             playerhandpoints = playerhandpoints + 10
         }
         if (pHand[j].point === 1){
             playerhandpoints = playerhandpoints + 11
         }
         }
        }     
     

function main(){
    deckMaker(deck)
    shuffle(deck)
    console.log(deck)
    Dealing(deck)
    console.log(playerhand)
    console.log(dealerhand)
    CountHands(dealerhand, playerhand)
    console.log(dealerhandpoints)
    console.log(playerhandpoints)
}
main();

//something that displays points, start off with them at 0 then uses the dealing function to count the points and display the counted points

//need to assign cards in array to image urls somehow

//need to inject the assigned cards images based on which cards are dealt in the game

//need to be able to "hit" and add other cards to player hand then to dealer hand after the player chooses to stay or not while removing the cards from the deck

//need to be able to choose if someone goes over 21 and busts to end the game









document.getElementById("btnDeal").addEventListener("click", function(){
    //write dealer logic here
});

 

// document.getElementById("hit-button").addEventListener("click", function(){
//     //write "hit" logic here
// });

 

// document.getElementById("btnStand").addEventListener("click", function(){
//     //write "Stand" logic here
// });