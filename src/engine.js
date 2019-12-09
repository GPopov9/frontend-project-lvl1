import { car, cdr } from '@hexlet/pairs';

import readlineSync from 'readline-sync';

export default (message, func) => {
  console.log('Welcome to the Brain Games!');
  console.log(message);
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('');
  for (let i = 0; i < 3; i += 1) {
    const pair = func();
    console.log(`Question: ${car(pair)}`);
    const answer = readlineSync.question('Your answer: ');

    if (answer === cdr(pair)) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${cdr(pair)}'.\nLet's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
