let firstCard;
let secondCard;
let cards = document.querySelectorAll(".memory-image");

const flipCards = function (clickedCard) {
  clickedCard.target.classList.add("visible-image");
  if (firstCard === undefined) {
    firstCard = clickedCard.target;
    console.log(firstCard);
  } else {
    secondCard = clickedCard.target;
    console.log(secondCard);
    for (let i = 0; i < cards.length; i++) {
      cards[i].removeAttribute("onclick");
    }

    setTimeout(function () {
      let matchedCards = matchCards();
      if (matchedCards === true) {
        firstCard.classList.add("matched");
        secondCard.classList.add("matched");
      } else {
        firstCard.classList.remove("visible-image");
        secondCard.classList.remove("visible-image");
      }
      firstCard = undefined;
      secondCard = undefined;
      let unmatchedCards = document.querySelectorAll(
        ".memory-image:not(.matched)"
      );
      console.log(unmatchedCards);
      for (let i = 0; i < unmatchedCards.length; i++) {
        unmatchedCards[i].setAttribute("onclick", "flipCards(event)");
      }
    }, 1500);
  }
};

let matchCards = function () {
  if (firstCard.innerHTML === secondCard.innerHTML) {
    return true;
  } else {
    return false;
  }
};

/*if (firstCard.dataset.animals === secondCard.dataset.animals) {
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
  }*/
