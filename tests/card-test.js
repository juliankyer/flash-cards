import { expect } from 'chai';
import Card from '../scripts/card';
// import PlayerGuess from '../scripts/index';

describe('flash cards', ()=> {
  ////////////CARD
  it('should have a question', ()=> {
    let card = new Card({question:'Best movie of all time?', answer:'Top Gun'});
    expect(card.question).to.equal('Best movie of all time?');
  });

  it('should have an answer', ()=> {
    let card = new Card({question:'Best movie of all time?', answer:'Top Gun'});
    expect(card.answer).to.equal('Top Gun');
  });
  ///////////GUESS
  it('should be able to check guesses', ()=> {
    let card1 = new Card({question:'Best movie of all time?', answer:'Top Gun'});
    let guess = new PlayerGuess({response:'Hot Rod', card1: card});
    expect(guess.card).to.equal({question:'Best movie of all time?', answer:'Top Gun'});
    expect(guess.response).to.equal('Hot Rod');
    expect(guess.correct).to.equal(false);
    expect(guess.feedback).to.equal('Incorrect.')
  })
});
