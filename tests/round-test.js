import { expect } from 'chai';
import Card from '../scripts/card';
import Deck from '../scripts/deck';
import Guess from '../scripts/guess';
import Round from '../scripts/round';

describe('the rounds of cards', ()=> {
  it.only('should be able to create a new round with a deck', ()=> {
    let card1 = new Card({question:'What is the best movie of all time?', answer:'Top Gun'});
    let card2 = new Card({question:'What is my name?', answer: 'Julian'});
    let card3 = new Card({question:'What is the capitol of AK?', answer: 'Juneau'});
    let deck = new Deck([card1, card2, card3]);
    let round = new Round(deck);

    expect(round).to.be.an.instanceof(Round);
    expect(round.deck).to.equal(Deck {cards:[card1, card2, card3]});
    expect(round.guesses).to.equal([]);
  });

  it('should keep track of current card', ()=> {
    let card1 = new Card({question:'What is the best movie of all time?', answer:'Top Gun'});
    let card2 = new Card({question:'What is my name?', answer: 'Julian'});
    let card3 = new Card({question:'What is the capitol of AK?', answer: 'Juneau'});
    let deck = new Deck([card1, card2, card3]);
    let round = new Round(deck);

    expect(round.currentCard()).to.equal(Card {question:'What is the best movie of all time?', answer:'Top Gun'});
  });

  it('should record guesses', ()=> {
    let card1 = new Card({question:'What is the best movie of all time?', answer:'Top Gun'});
    let card2 = new Card({question:'What is my name?', answer: 'Julian'});
    let card3 = new Card({question:'What is the capitol of AK?', answer: 'Juneau'});
    let deck = new Deck([card1, card2, card3]);
    let round = new Round(deck);
    let guess = new Guess({response:'Hot Rod', card: card1});

    expect(round.recordGuess('Hot Rod')).to.equal(card: Card{question:'What is the best movie of all time?', answer:'Top Gun'}, response:'Hot Rod');
    expect(round.guesses.count).to.equal(1);
  });

  it('should record feedback to guesses', ()=> {
    let card1 = new Card({question:'What is the best movie of all time?', answer:'Top Gun'});
    let card2 = new Card({question:'What is my name?', answer: 'Julian'});
    let card3 = new Card({question:'What is the capitol of AK?', answer: 'Juneau'});
    let deck = new Deck([card1, card2, card3]);
    let round = new Round(deck);
    let guess = new Guess({response:'Top Gun', card: card1});

    expect(round.guesses[0].feedback).to.equal('Correct!');
    expect(round.numberCorrect).to.equal(1);

  })
});
