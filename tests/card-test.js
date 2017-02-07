import { expect } from 'chai';
import Card from '../scripts/card';

describe('flash cards', ()=> {
  it('should have a question', ()=> {
    let card = new Card({question:'Best movie of all time?', answer:'Top Gun'});
    expect(card.question).to.equal('Best movie of all time?');
  });

  it('should have an answer', ()=> {
    let card = new Card({question:'Best movie of all time?', answer:'Top Gun'});
    expect(card.answer).to.equal('Top Gun');
  });
});
