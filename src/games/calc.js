import { cons } from '@hexlet/pairs';
import engineBasic from '../engine';
import { randomNumber, toString } from '..';

const gameDescription = 'What is the result of the expression?';
const operatorSet = ['+', '-', '*'];

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
  const gameQuestion = `${randomNumberOne} ${randomOperator} ${randomNumberTwo}`;
  const rightAnswer = toString(buildString(randomOperator, randomNumberOne, randomNumberTwo));
  return cons(gameQuestion, rightAnswer );
};

export default () => {
  engineBasic(gameDescription, makePairCalc);
};
