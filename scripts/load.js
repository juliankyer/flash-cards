const questions = 'questions.txt';
require('./card');

class CardGenerator {
  constructor(newQuestions) {
    this.newQuestions = newQuestions;
  }
}

var fs = require('fs');
let words = fs.readFileSync('./scripts/something.txt').split('/n')
