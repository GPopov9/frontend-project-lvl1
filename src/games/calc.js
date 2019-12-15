import { cons } from '@hexlet/pairs';
import engineBasic from '../engine';
import { randomNumber, operatorSet } from '..';

const gameDescription = 'What is the result of the expression?';

const buildString = (operator, numberOne, numberTwo) => {
  let calcResult = 0;
  switch (operator) {
    case '+':
      calcResult = numberOne + numberTwo;
      break;
    case '-':
      calcResult = numberOne - numberTwo;
      break;
    case '*':
      calcResult = numberOne * numberTwo;
      break;
    default:
      break;
  }
  return calcResult;
};

const makePairCalc = () => {
  const randomNumberOne = randomNumber();
  const randomNumberTwo = randomNumber();
  const randomOperator = operatorSet[Math.floor(Math.random() * operatorSet.length)];
  return cons((`${randomNumberOne} ${randomOperator} ${randomNumberTwo}`), buildString(randomOperator, randomNumberOne, randomNumberTwo));
};

export default () => {
  engineBasic(gameDescription, makePairCalc);
};
