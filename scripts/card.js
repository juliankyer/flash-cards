class Card {
  constructor({question, answer}) {
    this.question = question;
    this.answer = answer;
  }
}

// class PlayerGuess {
//   constructor({response, card}) {
//     this.response = response;
//     this.card = card;
//     this.correct = this.response === card.answer ? true : false;
//     this.feedback = this.correct ? 'Correct!' : 'Incorrect.'
//   }
// }

let card1 = new Card({question:'What is the best movie of all time?', answer: 'Top Gun'});
let card2 = new Card({question:'What is my name?', answer: 'Julian'});
let card3 = new Card({question:'What is the capitol of AK?', answer: 'Juneau'});



export default Card;
// export default PlayerGuess;
