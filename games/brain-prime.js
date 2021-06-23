#!/usr/bin/env node
import * as index from '../src/index.js';

const brainPrime = () => {
  const countOfQuestions = 3;

  const name = index.helloAndAskNameAndShowConditions('Wellcome to the Brain Games!', 'Answer "yes" if given number is prime. Otherwise answer "no".');

  let i = 1;
  const questionsAndAnswers = [];
  while (i <= countOfQuestions) {
    const num = index.getNumber(3);
    const question = `Question: ${num}`;
    let answer = 'yes';
    if (num < 2) {
      answer = 'no';
    } else if (num % 2 === 0) {
      answer = 'no';
    } else {
      let j = 3;
      const border = num / 2 + 1;
      while ((j <= border) && (answer !== 'no')) {
        if (num % j === 0) {
          answer = 'no';
        }
        j += 2;
      }
    }
    const questionAndAnswer = [question, answer];
    questionsAndAnswers.push(questionAndAnswer);
    i += 1;
  }
  index.makeGame(questionsAndAnswers, name);
};

brainPrime();
