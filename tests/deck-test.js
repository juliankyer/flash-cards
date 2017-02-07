import { expect } from 'chai';

describe('the flashcard deck', ()=> {
  it('should store cards in an array', ()=> {
    let deck = new Deck([]);
    expect(Array.isArray(deck)).to.be.true;
  });
  it('should allow you to pass in cards and have them be stored in the deck', ()=> {
    let deck = new Deck([card1, card2, card3]);
    let card1 = new FlashCard({question:'What is the best movie of all time?', answer: 'Top Gun'});
    let card2 = new FlashCard({question:'What is my name?', answer: 'Julian'});
    let card3 = new FlashCard({question:'What is the capitol of AK?', answer: 'Juneau'});

    expect(deck.cards).to.equal([card1, card2, card3]);
    expect(deck.count).to.equal(3);
  })
})
