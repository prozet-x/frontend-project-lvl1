#!/usr/bin/env node
import * as index from '../src/index.js';

const brainProgr = () => {
  const countOfQuestions = 3;

  const name = index.helloAndAskNameAndShowConditions('Wellcome to the Brain Games!', 'What number is missing in the progression?');

  const countOfNumbers = 10;
  let i = 1;
  const questionsAndAnswers = [];
  while (i <= countOfQuestions) {
    const startOfProgr = index.getNumber(2);
    const stepOfProgr = index.getNumber(1);
    const posOfMissingNumber = index.getNumber(1);
    const progr = [];
    let answer = '';
    let question = 'Question:';
    let j = 0;
    while (j < countOfNumbers) {
      if (j === posOfMissingNumber) {
        progr.push('..');
        answer = String(startOfProgr + j * stepOfProgr);
      } else {
        progr.push(String(startOfProgr + j * stepOfProgr));
      }
      question += ` ${progr[j]}`;
      j += 1;
    }
    const questionAndAnswer = [question, answer];
    questionsAndAnswers.push(questionAndAnswer);
    i += 1;
  }

  index.makeGame(questionsAndAnswers, name);
};

brainProgr();
