#!/usr/bin/env node
import readlineSync from 'readline-sync';

const brainEven = () => {
    const countOfQuestions = 3;
    const multiplyCoeff = 100;
    let num = undefined;
    
    console.log('Wellcome to the Brain Games!');
    const name = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${name}!`);
    console.log('Answer "yes" if the number is even, otherwise answer "no".');

    let i = 1;
    while (i <= countOfQuestions) {
        num = Math.floor(Math.random() * multiplyCoeff) + 1;
        let answer = readlineSync.question(`Question: ${num} `);
        if (num % 2 === 0) {
            if (answer === 'yes') {
                console.log('Correct!');
            } else {
                console.log(`"${answer}" is wrong answer ;(. Correct answer was 'yes'.`);
                console.log(`Let's try again, ${name}!`);
                return false;
            }
        } else {
            if (answer === 'no') {
                console.log('Correct!');
            } else {
                console.log(`"${answer}" is wrong answer ;(. Correct answer was 'no'.`);
                console.log(`Let's try again, ${name}!`);
                return false;
            }
        }
        i += 1;
    }
    console.log(`Congratulations, ${name}!`);
    return true;
};

brainEven();