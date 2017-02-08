require('./card');

class Guess {
  constructor({response, card}) {
    this.response = response;
    this.card = card;
    this.correct = this.response === card.answer ? true : false;
    this.feedback = this.correct ? 'Correct!' : 'Incorrect.';
  }
}

export default Guess;
