import { expect } from 'chai';
import Card from '../scripts/Card';
import CardGenerator from '../scripts/CardGenerator';

describe('loading text files', ()=> {
  it('should let you load a text file (with format of question?,answer) and convert it into an array of cards', ()=> {
    let cardGenerator = new CardGenerator({filepath: 'questions2.txt'});
    expect(cardGenerator.cards).to.deep.equal([{question:'What is 2 + 2?', answer:'4'}, {question:'What is 3 + 2?', answer:'5'}, {question:'What is the meaning of life?', answer:'Who knows'}]);
  });
});


// let cardGenerator = new CardGenerator({filepath: 'questions.txt'});
// console.log(cardGenerator);
// let cardGen2 = new CardGenerator({filepath:'questions2.txt'});
// console.log(cardGen2.cards);

// var fs = require('fs');
// let newQuestionsText = fs.readFileSync('./questions.txt', 'utf8').split('\n');
// 
// let questionArray = newQuestionsText.map((singleQuestion)=> {
//   let split = singleQuestion.split(',');
//   let newQ = split[0];
//   let newA = split[1];
//   return new Card({ question: newQ, answer: newA});
//   // console.log(newCard);
// })
// console.log(questionArray);
// console.log(newQuestionsText.length);
