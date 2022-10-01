let firstCard;
let secondCard;
//let cards = document.querySelectorAll(".memory-image");

function flipCards(gennaro) {
  let flippedCards = gennaro.target;
  //gennaro.target.classList.add("visible-image");
  flippedCards.classList.add("visible-image");
  if (firstCard === undefined) {
    firstCard = flippedCards;
    console.log(firstCard);
  } else {
    secondCard = flippedCards;
    console.log(secondCard);
  }
  if (firstCard.dataset == secondCard.dataset) {
    flippedCards.classList.add("matched");
  }
}

/*for (let i = 0; i < cards.length; i++) {
  function flipCards() {
    cards[i].classList.add("visible-image");
  }
}*/
