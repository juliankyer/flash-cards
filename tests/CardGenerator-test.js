import { expect } from 'chai';
import Card from '../scripts/Card';
import CardGenerator from '../scripts/CardGenerator';

describe('loading text files', ()=> {
  it('should return an array of cards, with a length equal to the number of lines in the text file', ()=>{
    let cardGenerator = new CardGenerator({filepath: 'questions2.txt'});
    expect(cardGenerator.cards.length).to.equal(3);
  });
  
  it('should let you load a text file (with format of question?,answer) and convert it into an array of cards', ()=> {
    let cardGenerator = new CardGenerator({filepath: 'questions2.txt'});
    expect(cardGenerator.cards).to.deep.equal([{question:'What is 2 + 2?', answer:'4'}, {question:'What is 3 + 2?', answer:'5'}, {question:'What is the meaning of life?', answer:'Who knows'}]);
  });
  
  it('should return cards', ()=> {
    let cardGenerator = new CardGenerator({filepath: 'questions2.txt'});
    expect(cardGenerator.cards[0]).to.be.an.instanceof(Card);
  });
});

