import { car, cdr } from '@hexlet/pairs';

import readlineSync from 'readline-sync';

export default (gameDescription, func) => {
  console.log('Welcome to the Brain Games!');
  console.log(gameDescription);
  console.log('');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('');
  for (let i = 0; i < 3; i += 1) {
    const answersPair = func();
    console.log(`Question: ${car(answersPair)}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer === cdr(answersPair)) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${cdr(answersPair)}'.\nLet's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
