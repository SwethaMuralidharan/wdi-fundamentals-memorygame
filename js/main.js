

var cards=[
  {
    rank:"queen",
    suit:"hearts",
    cardImage:"images/queen-of-hearts.png"
  },
  {
    rank:"queen",
    suit:"diamonds",
    cardImage:"images/queen-of-diamonds.png"
  },
  {
    rank:"king",
    suit:"hearts",
    cardImage:"images/king-of-hearts.png"
  },
  {
    rank:"king",
    suit:"diamonds",
    cardImage:"images/king-of-diamonds.png"
  }
]
var cardsInPlay = [];
var score=0;

var checkForMatch=function()
{
  if(cardsInPlay.length>1)
  {
      if(cardsInPlay[0]===cardsInPlay[1])
      {
        alert("You found a match");
        score=score+10;
      }
      else
      {
        alert("Sorry.Try again!")
      }
  }
}

var showUserscore=function()
{
  document.getElementById('score').innerHTML=score;
}

var flipcard=function()
{
      var cardId=this.getAttribute('data-id');
      console.log("User flipped "+cards[cardId].rank);
      cardsInPlay.push(cards[cardId].rank);
      console.log(cards[cardId].cardImage);
      console.log(cards[cardId].suit);
      this.setAttribute('src',cards[cardId].cardImage);
      checkForMatch();
      showUserscore();
  }

  var createBoard=function()
  {
    for(var i=0;i<cards.length;i++)
    {
      var cardElement = document.createElement('img');
      cardElement.setAttribute('src', "images/back.png");
      cardElement.setAttribute('data-id',i);
      cardElement.addEventListener('click',flipcard);
      document.getElementById('game-board').appendChild(cardElement);
    }
  }

createBoard();

var resetgame=function()
{
  for(var i=0;i<cards.length;i++)
  {
     document.getElementsByTagName('img')[i].src="images/back.png";
  }
  while(cardsInPlay.length>0)
  {
    cardsInPlay.pop();
  }
}

document.getElementById('reset').addEventListener('click',resetgame);
