import { car, cdr } from '@hexlet/pairs';

import readlineSync from 'readline-sync';
import { welcomeMessage, anyMessage } from './index';

export default (message, func) => {
  welcomeMessage();
  anyMessage(message);
  const name = readlineSync.question('May I have your name? ');
  anyMessage(`Hello, ${name}!\n`);
  for (let i = 0; i < 3; i += 1) {
    const pair = func();
    anyMessage(`Question: ${car(pair)}`);
    anyMessage(cdr(pair));
    const answer = readlineSync.question('Your answer: ');

    if (answer == cdr(pair)) {
      anyMessage('Correct!');
    } else {
      anyMessage(`'${answer}' is wrong answer ;(. Correct answer was '${cdr(pair)}'.\nLet's try again, ${name}!`);
      return;
    }
  }
  anyMessage(`Congratulations, ${name}!`);
};
