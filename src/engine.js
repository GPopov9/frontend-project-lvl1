import { car, cdr } from '@hexlet/pairs';

import readlineSync from 'readline-sync';

const questionsCount = 3;


export default (gameDescription, func) => {
  console.log('Welcome to the Brain Games!');
  console.log(gameDescription);
  console.log('');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('');
  for (let i = 0; i < questionsCount; i += 1) {
    const answersPair = func();
    const questionMessage = car(answersPair);
    const rightAnswer = cdr(answersPair);
    console.log(`Question: ${questionMessage}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer === rightAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
