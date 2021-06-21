#!/usr/bin/env node
import * as index from '../src/index.js';

const brainCalc = () => {
  const countOfQuestions = 3;

  const name = index.helloAndAskNameAndShowConditions('Wellcome to the Brain Games!', 'What is the result of the expression?');

  let i = 1;
  const questionsAndAnswers = [];
  while (i <= countOfQuestions) {
    const num1 = index.getNumber();
    const num2 = index.getNumber();
    const operator = index.getOperator();
    const question = `Question: ${num1} ${operator} ${num2}`;
    let answer = 0;
    if (operator === '-') {
      answer = num1 - num2;
    } else if (operator === '+') {
      answer = num1 + num2;
    } else {
      answer = num1 * num2;
    }
    const questionAndAnswer = [question, answer];
    questionsAndAnswers.push(questionAndAnswer);
    i += 1;
  }

  index.makeGame(questionsAndAnswers, name);
};

brainCalc();
