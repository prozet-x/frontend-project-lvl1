import readlineSync from 'readline-sync';

export const getNumber = () => {
  const multiplyCoeff = 100;
  return Math.floor(Math.random() * multiplyCoeff);
};

export const getOperator = () => {
  const multiplyCoeff = 100;
  const num = Math.floor(Math.random() * multiplyCoeff);
  let operator = '';
  if (num < 34) {
    operator = '+';
  } else if (num < 67) {
    operator = '-';
  } else {
    operator = '*';
  }
  return operator;
};

export const helloAndAskNameAndShowConditions = (helloText, conditionsText) => {
  console.log(helloText);
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(conditionsText);
  return name;
};

export const makeGame = (questionsAndAnswers, name) => {
  let i = 0;
  while (i < questionsAndAnswers.length) {
    console.log(questionsAndAnswers[i][0]);
    const answer = readlineSync.question('Your answer: ');
    if (String(answer) !== String(questionsAndAnswers[i][1])) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${questionsAndAnswers[i][1]}'`);
      console.log(`Let's try again, ${name}!`);
      return false;
    }
    console.log('Correct!');
    i += 1;
  }
  console.log(`Congratulations, ${name}!`);
  return true;
};
