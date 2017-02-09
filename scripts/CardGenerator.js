import Card from '../scripts/Card';
import fs from 'fs';

class CardGenerator {
  constructor({filepath}) {
    this.cards = this.splitter(filepath);
  }
  
  splitter(filepath) {
    let newQuestionsText = fs.readFileSync(`./${filepath}`, 'utf8').split('\n');
    return newQuestionsText.map((singleQuestion)=> {
      let split = singleQuestion.split(',');
      let newQ = split[0];
      let newA = split[1];
      return new Card({ question: newQ, answer: newA});
    });
  }
}

export default CardGenerator;