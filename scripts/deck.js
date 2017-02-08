require('./card');

class Deck {
  constructor(...cards) {
    this.cards = cards;
    this.count = cards.length;
  }
}

export default Deck;
