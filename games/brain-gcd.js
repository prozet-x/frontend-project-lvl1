#!/usr/bin/env node
import * as index from '../src/index.js';

const brainGcd = () => {
  const countOfQuestions = 3;

  const name = index.helloAndAskNameAndShowConditions('Wellcome to the Brain Games!', 'Find the greatest common divisor of given numbers.');

  let i = 1;
  const questionsAndAnswers = [];
  while (i <= countOfQuestions) {
    const num1 = index.getNumber(2);
    const num2 = index.getNumber(2);
    const question = `Question: ${num1}  ${num2}`;
    let answer = '';
    let a = num1;
    let b = num2;
    while (a !== b) {
      if (a > b) {
        a -= b;
      } else {
        b -= a;
      }
    }
    answer = a;
    const questionAndAnswer = [question, answer];
    questionsAndAnswers.push(questionAndAnswer);
    i += 1;
  }

  index.makeGame(questionsAndAnswers, name);
};

brainGcd();
