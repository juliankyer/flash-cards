import { expect } from 'chai';
import Card from '../scripts/Card'
import Guess from '../scripts/Guess';

describe('user guess check', ()=> {
  it('should create new guesses', ()=> {
    let card1 = new Card({question:'Who are the top 5 rappers of all time?', answer:'Dylan, Dylan, Dylan, Dylan, and Dylan'});
    let guess = new Guess({response:'Ice T', card: card1});

    expect(guess).to.be.an.instanceof(Guess);
  });

  it('should be able to take in a user response and the card being shown', ()=> {
    let card1 = new Card({question:'Who are the top 5 rappers of all time?', answer:'Dylan, Dylan, Dylan, Dylan, and Dylan'});
    let guess = new Guess({response:'Ice T', card: card1});

    expect(guess.response).to.equal('Ice T');
    expect(guess.card).to.equal(card1);
  });

  it('should be able to give feedback to incorrect responses', ()=> {
    let card1 = new Card({question:'Best movie of all time?', answer:'Top Gun'});
    let guess = new Guess({response:'Hot Rod', card: card1});

    expect(guess.card).to.deep.equal({question:'Best movie of all time?', answer:'Top Gun'});
    expect(guess.response).to.equal('Hot Rod');
    expect(guess.correct).to.equal(false);
    expect(guess.feedback).to.equal('Incorrect.')
  });

  it('should be able to give feedback to correct responses', ()=> {
    let card1 = new Card({question:'Best movie of all time?', answer:'Top Gun'});
    let guess = new Guess({response:'Top Gun', card: card1});
    
    expect(guess.response).to.equal('Top Gun');
    expect(guess.correct).to.be.true;
    expect(guess.feedback).to.equal('Correct!')
  });
});
