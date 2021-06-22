#!/usr/bin/env node
import * as index from '../src/index.js';

const brainEven = () => {
  const countOfQuestions = 3;

  const name = index.helloAndAskNameAndShowConditions('Wellcome to the Brain Games!', 'Answer "yes" if the number is even, otherwise answer "no".');

  let i = 1;
  const questionsAndAnswers = [];
  while (i <= countOfQuestions) {
    const num = index.getNumber(2);
    const question = `Question: ${num} `;
    let answer = '';
    if (num % 2 === 0) {
      answer = 'yes';
    } else {
      answer = 'no';
    }
    const questionAndAnswer = [question, answer];
    questionsAndAnswers.push(questionAndAnswer);
    i += 1;
  }

  index.makeGame(questionsAndAnswers, name);
};

brainEven();
