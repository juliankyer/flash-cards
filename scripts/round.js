import Card from '../scripts/Card';
import Deck from '../scripts/Deck';
import Guess from '../scripts/Guess';

class Round {
  constructor(deck) {
    this.deck = deck;
    this.guesses = [];
    this.numberCorrect = 0;
  }

  currentCard() {
    return this.deck.cards.shift();
  }

  recordGuess(guess) {
    this.guesses.push(guess);
    if(guess.response === guess.card.answer) {
      this.numberCorrect++;
    }
  }

  percentCorrect() {
    return (this.numberCorrect / this.guesses.length) * 100;
  }
}

export default Round;