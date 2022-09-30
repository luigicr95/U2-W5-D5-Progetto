//Dichiaro la variabile per le carte,
//Per gestire lo stato della carta girata,
//Per bloccare le carte
//Per le due carte che vado a girare

let memoryCards = document.querySelectorAll(".memory-image");
let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;

//Imposto una funzione da richiamare con l'EventListener onclick
//che "gira" per ogni (forEach) card di memoryCards (all'ultima riga del js)

function flipCards() {
  if (lockBoard) return;
  if (this === firstCard) return;

  this.classList.add("visible-image");

  if (!hasFlippedCard) {
    hasFlippedCard = true;
    firstCard = this;
    return;
  }

  secondCard = this;
  hasFlippedCard = false;

  checkForMatch();
}

function checkForMatch() {
  /*if (firstCard.dataset.animals === secondCard.dataset.animals) {
    disableCards();
    return;
  }
  unflipCards();*/
  let isMatch = firstCard.dataset.animals === secondCard.dataset.animals;
  isMatch ? disableCards() : unflipCards();
}

function disableCards() {
  firstCard.removeEventListener("click", flipCards);
  secondCard.removeEventListener("click", flipCards);
  firstCard.classList.add("green-background");
  secondCard.classList.add("green-background");
}

function unflipCards() {
  lockBoard = true;

  setTimeout(() => {
    firstCard.classList.remove("visible-image");
    secondCard.classList.remove("visible-image");

    lockBoard = false;
    resetBoard();
  }, 1500);
}

function resetBoard() {
  [hasFlippedCard, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
}

memoryCards.forEach((card) => card.addEventListener("click", flipCards));
