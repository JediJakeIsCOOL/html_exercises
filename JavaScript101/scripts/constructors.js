

function Card(point, suit, score){
    this.point = point
    this.suit = suit
    this.score = score 
}

Card.prototype.getImageUrl = function(){
    if (this.point >= 2 && this.point <= 10){
    return 'JavaScript101/scripts/images/'+this.point+this.suit+'.jpg'
    }
    if (this.point === 11){
        return 'JavaScript101/scripts/images/J'+this.suit+'.jpg'
    }
    if (this.point === 12){
        return 'JavaScript101/scripts/images/Q'+this.suit+'.jpg'
    }
    if (this.point === 13){
        return 'JavaScript101/scripts/images/K'+this.suit+'.jpg'
    }
    if (this.point === 14){
        return 'JavaScript101/scripts/images/A'+this.suit+'.jpg'
    }
}

function Hand(){
    this.card = []
    this.score = 0
    

}
Hand.prototype.addCard = function(card){
    this.card.push(card)
    this.score = this.score + card.score
}
Hand.prototype.getPoints = function(){
        return this.score

    
}
function Checkpoint(){
    if (dealerHand.getPoints() === 21){
        return document.getElementById('dealer-points').innerHTML = 'Dealer Wins!'
        
    
    }
    if (dealerHand.getPoints() > 21){
        return document.getElementById('dealer-points').innerHTML = 'Dealer Busts'
        
    }
    if (myHand.getPoints() === 21){
        return document.getElementById('player-points').innerHTML = 'Player Wins!'
    
    }
    if (myHand.getPoints() > 21){
        return document.getElementById('player-points').innerHTML = 'Player Busts'

    }
}


    // reset hand  reset points and remove child use play again button 



function Deck(){

this.myDeck = []

for (var j = 0; j < 4; j++){
    if (j === 0){
        suit = 'H'
    }
    else if (j === 1){
        suit = 'D'
    }
    else if (j === 2){
        suit = 'C'
    }
    else if (j === 3){
        suit = 'S'
    }

    for (var i = 2; i < 11; i++){
       
        this.myDeck.push(new Card(i, suit, i))
}
}

this.myDeck.push(new Card(11, 'H', 10))
this.myDeck.push(new Card(11, 'D', 10))
this.myDeck.push(new Card(11, 'S', 10))
this.myDeck.push(new Card(11, 'C', 10))

this.myDeck.push(new Card(12, 'H', 10))
this.myDeck.push(new Card(12, 'D', 10))
this.myDeck.push(new Card(12, 'S', 10))
this.myDeck.push(new Card(12, 'C', 10))

this.myDeck.push(new Card(13, 'H', 10))
this.myDeck.push(new Card(13, 'D', 10))
this.myDeck.push(new Card(13, 'S', 10))
this.myDeck.push(new Card(13, 'C', 10))

this.myDeck.push(new Card(14, 'H', 11))
this.myDeck.push(new Card(14, 'D', 11))
this.myDeck.push(new Card(14, 'S', 11))
this.myDeck.push(new Card(14, 'C', 11))
}







Deck.prototype.shuffle = function(){
    for (var i = this.myDeck.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = this.myDeck[i];
        this.myDeck[i] = this.myDeck[j];
        this.myDeck[j] = temp;
    }  
}
Deck.prototype.draw = function (){
    return this.myDeck.pop()
}
Deck.prototype.numCardsLeft = function (){
    return this.myDeck.length
}






var deck = new Deck()
deck.shuffle()
console.log(deck)
var myHand = new Hand()
var dealerHand = new Hand()

document.getElementById("hit-button").disabled = true;
document.getElementById("stand-button").disabled = true;
document.getElementById('play-button').disabled = true;

//hit function
document.getElementById("hit-button").addEventListener("click", function(){
    var newImages = deck.draw()
    
    myHand.addCard(newImages)
    var imageElement = document.createElement('IMG')
    imageElement.setAttribute('src', newImages.getImageUrl())
    imageElement.setAttribute('width', '115px' )
    imageElement.setAttribute('height', '115px')

    var navContainer = document.getElementById('player-cards');
    navContainer.appendChild(imageElement)
    
    document.getElementById('player-points').innerHTML = myHand.getPoints()
    Checkpoint()
    if (myHand.getPoints() >= 21){
        document.getElementById("stand-button").disabled = true;
        document.getElementById("hit-button").disabled = true;
    }
    if (myHand.getPoints === dealerHand.getPoints && dealerHand.getPoints >= 17){
        
    }
    //if the player hits and ties the dealer while dealer is greater than 17 then its a tie
})
//stand button starts dealer hits
document.getElementById("stand-button").addEventListener("click", function(){
    //var newImages = deck.draw()
while (true) {   
    if (dealerHand.getPoints() < 17){    //only adding 1 card multiple times with no images, need a new card added each time with a new image
        var newImages = deck.draw()           
        dealerHand.addCard(newImages)
        var imageElement = document.createElement('IMG')
        imageElement.setAttribute('src', newImages.getImageUrl())
        imageElement.setAttribute('width', '115px' )
        imageElement.setAttribute('height', '115px')
    
        var navContainer = document.getElementById('dealer-cards');
        navContainer.appendChild(imageElement)
    }
    if (dealerHand.getPoints() >= 17){
        break
    }
    }
   

    document.getElementById('dealer-points').innerHTML = dealerHand.getPoints()
    document.getElementById("stand-button").disabled = true;
    document.getElementById("hit-button").disabled = true;
    Checkpoint()
})

//deal function
document.getElementById("deal-button").addEventListener("click", function(){
    var newImages = deck.draw()
    var newImages2 = deck.draw()
    var newImages3 = deck.draw()
    var newImages4 = deck.draw()
    myHand.addCard(newImages3)
    myHand.addCard(newImages4)
    dealerHand.addCard(newImages)
    dealerHand.addCard(newImages2)

    var imageElement = document.createElement('IMG')
    imageElement.setAttribute('src', newImages.getImageUrl())
    imageElement.setAttribute('width', '115px' )
    imageElement.setAttribute('height', '115px')
    var navContainer = document.getElementById('dealer-cards');
    navContainer.appendChild(imageElement)

    var imageElement2 = document.createElement('IMG')
    imageElement2.setAttribute('src', newImages2.getImageUrl())
    imageElement2.setAttribute('width', '115px' )
    imageElement2.setAttribute('height', '115px')
    var navContainer = document.getElementById('dealer-cards');
    navContainer.appendChild(imageElement2)

    var imageElement3 = document.createElement('IMG')
    imageElement3.setAttribute('src', newImages3.getImageUrl())
    imageElement3.setAttribute('width', '115px' )
    imageElement3.setAttribute('height', '115px')
    var navContainer = document.getElementById('player-cards');
    navContainer.appendChild(imageElement3)

    var imageElement4 = document.createElement('IMG')
    imageElement4.setAttribute('src', newImages4.getImageUrl())
    imageElement4.setAttribute('width', '115px' )
    imageElement4.setAttribute('height', '115px')
    var navContainer = document.getElementById('player-cards');
    navContainer.appendChild(imageElement4)

    document.getElementById('dealer-points').innerHTML = dealerHand.getPoints()
    document.getElementById('player-points').innerHTML = myHand.getPoints()

    document.getElementById("deal-button").disabled = true;
    document.getElementById("hit-button").disabled = false;
    document.getElementById("stand-button").disabled = false;
    document.getElementById('play-button').disabled = false;
    Checkpoint()
})
//play again button
document.getElementById("play-button").addEventListener("click", function(){
    window.location.reload()
})


//need something that checks if u both win in a draw
//need to stop the hit if hitter gets 21 or busts