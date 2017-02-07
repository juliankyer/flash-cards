require('./card');

class PlayerGuess {
  constructor({response, card}) {
    this.response = response;
    this.card = card;
    this.correct = this.response === card.answer ? true : false;
    this.feedback = this.correct ? 'Correct!' : 'Incorrect.'
  }
}

export default PlayerGuess;
