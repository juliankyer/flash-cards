import { expect } from 'chai';
import Card from '../scripts/Card';
import Deck from '../scripts/Deck';

describe('the flashcard deck', ()=> {
  it('should store cards in an array', ()=> {
    let card1 = new Card({question:'What is the best movie of all time?', answer: 'Top Gun'});
    let card2 = new Card({question:'What is my name?', answer: 'Julian'});
    let card3 = new Card({question:'What is the capitol of AK?', answer: 'Juneau'});
    let deck = new Deck(card1, card2, card3);

    expect(Array.isArray(deck.cards)).to.be.true;
  });

  it('should allow you to pass in cards and have them be stored in the deck', ()=> {
    let card1 = new Card({question:'What is the best movie of all time?', answer: 'Top Gun'});
    let card2 = new Card({question:'What is my name?', answer: 'Julian'});
    let card3 = new Card({question:'What is the capitol of AK?', answer: 'Juneau'});
    let deck = new Deck(card1, card2, card3);

    expect(deck.cards).to.deep.equal([{question:'What is the best movie of all time?', answer: 'Top Gun'}, {question:'What is my name?', answer: 'Julian'}, {question:'What is the capitol of AK?', answer: 'Juneau'}]);
  });

  it('should keep track of the number of cards', ()=> {
    let card1 = new Card({question:'What is the best movie of all time?', answer: 'Top Gun'});
    let card2 = new Card({question:'What is my name?', answer: 'Julian'});
    let card3 = new Card({question:'What is the capitol of AK?', answer: 'Juneau'});
    let deck = new Deck(card1, card2, card3);

    expect(deck.count).to.equal(3);
  });
});