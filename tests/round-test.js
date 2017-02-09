import { expect } from 'chai';
import Card from '../scripts/Card';
import Deck from '../scripts/Deck';
import Guess from '../scripts/Guess';
import Round from '../scripts/Round';

describe('the rounds of cards', ()=> {
  it('should be able to create a new round with a deck', ()=> {
    let card1 = new Card({question:'What is the best movie of all time?', answer:'Top Gun'});
    let card2 = new Card({question:'What is my name?', answer: 'Julian'});
    let card3 = new Card({question:'What is the capitol of AK?', answer: 'Juneau'});
    let deck = new Deck(card1, card2, card3);
    let round = new Round(deck);

    expect(round).to.be.an.instanceof(Round);
    expect(round.deck).to.deep.equal({cards:[card1, card2, card3], count: 3});
    expect(round.guesses).to.deep.equal([]);
  });

  it('should keep track of current card', ()=> {
    let card1 = new Card({question:'What is the best movie of all time?', answer:'Top Gun'});
    let card2 = new Card({question:'What is my name?', answer: 'Julian'});
    let card3 = new Card({question:'What is the capitol of AK?', answer: 'Juneau'});
    let deck = new Deck(card1, card2, card3);
    let round = new Round(deck);

    expect(round.currentCard()).to.deep.equal({question:'What is the best movie of all time?', answer:'Top Gun'});
    expect(round.currentCard()).to.deep.equal({question:'What is my name?', answer:'Julian'});
  });

  it('should record guesses', ()=> {
    let card1 = new Card({question:'What is the best movie of all time?', answer:'Top Gun'});
    let card2 = new Card({question:'What is my name?', answer: 'Julian'});
    let card3 = new Card({question:'What is the capitol of AK?', answer: 'Juneau'});
    let deck = new Deck(card1, card2, card3);
    let round = new Round(deck);
    let guessA = new Guess({response:'Hot Rod', card: card1});

    round.recordGuess(guessA);

    expect(round.guesses).to.deep.equal([{card: {question:'What is the best movie of all time?', answer:'Top Gun'}, response:'Hot Rod', correct: false, feedback:'Incorrect.'}]);
    expect(round.guesses.length).to.equal(1);
  });

  it('should record multiple guesses', ()=> {
    let card1 = new Card({question:'What is the best movie of all time?', answer:'Top Gun'});
    let card2 = new Card({question:'What is my name?', answer: 'Julian'});
    let card3 = new Card({question:'What is the capitol of AK?', answer: 'Juneau'});
    let deck = new Deck(card1, card2, card3);
    let round = new Round(deck);
    let guessA = new Guess({response:'Hot Rod', card: card1});
    let guessB = new Guess({response:'Julian', card: card2});

    round.recordGuess(guessA);
    round.recordGuess(guessB);

    expect(round.guesses).to.deep.equal([{card: {question:'What is the best movie of all time?', answer:'Top Gun'}, response:'Hot Rod', correct: false, feedback:'Incorrect.'},
                                         {card: {question:'What is my name?', answer:'Julian'}, response:'Julian', correct: true, feedback:'Correct!'} ]);
    expect(round.guesses.length).to.equal(2);
  });

  it('should record feedback to guesses', ()=> {
    let card1 = new Card({question:'What is the best movie of all time?', answer:'Top Gun'});
    let card2 = new Card({question:'What is my name?', answer: 'Julian'});
    let card3 = new Card({question:'What is the capitol of AK?', answer: 'Juneau'});
    let deck = new Deck(card1, card2, card3);
    let round = new Round(deck);
    let guessA = new Guess({response:'Hot Rod', card: card1});
    let guessB = new Guess({response:'Julian', card: card2});
    
    round.recordGuess(guessA);
    round.recordGuess(guessB);

    expect(round.guesses[0].feedback).to.equal('Incorrect.');
    expect(round.guesses[1].feedback).to.equal('Correct!');
  });

  it('should track number of correct guesses', ()=> {
    let card1 = new Card({question:'What is the best movie of all time?', answer:'Top Gun'});
    let card2 = new Card({question:'What is my name?', answer: 'Julian'});
    let deck = new Deck(card1, card2);
    let round = new Round(deck);
    let guessA = new Guess({response:'Hot Rod', card: card1});
    let guessB = new Guess({response:'Julian', card: card2});

    round.recordGuess(guessA);
    round.recordGuess(guessB);

    expect(round.numberCorrect).to.equal(1);
  });

  it('should have function that calculates percentage of correct guesses', ()=> {
    let card1 = new Card({question:'What is the best movie of all time?', answer:'Top Gun'});
    let card2 = new Card({question:'What is my name?', answer: 'Julian'});
    let deck = new Deck(card1, card2);
    let round = new Round(deck);
    let guessA = new Guess({response:'Hot Rod', card: card1});
    let guessB = new Guess({response:'Julian', card: card2});

    round.recordGuess(guessA);
    round.recordGuess(guessB);

    expect(round.percentCorrect()).to.equal(50);
  });
});
