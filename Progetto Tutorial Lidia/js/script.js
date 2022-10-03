let firstCard;
let secondCard;
//let cards = document.querySelectorAll(".memory-image");

function flipCards(flip) {
  let flippedCards = flip.target;
  //flip.target.classList.add("visible-image");
  flippedCards.classList.add("visible-image");
  if (firstCard === undefined) {
    firstCard = flippedCards;
    console.log(firstCard);
  } else {
    secondCard = flippedCards;
    console.log(secondCard);
  }
  if (firstCard.dataset.animals === secondCard.dataset.animals) {
    firstCard.classList.add("matched");
    secondCard.classList.add("matched");
    firstCard.removeAttribute(onclick);
    secondCard.removeAttribute(onclick);
    firstCard = undefined;
    secondCard = undefined;
  } else {
    firstCard.classList.remove("visible-image");
    secondCard.classList.remove("visible-image");
    firstCard = undefined;
    secondCard = undefined;
  }
}
