import { cons } from '@hexlet/pairs';
import engineBasic from '../engine';
import randomNumber from '..';

const gameDescription = 'What is the result of the expression?';
const operatorSet = ['+', '-', '*'];

const buildString = (operator, numberOne, numberTwo) => {
  let calcResult;
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
  const randomNumberOne = randomNumber(10);
  const randomNumberTwo = randomNumber(10);
  const randomOperator = operatorSet[Math.floor(Math.random() * operatorSet.length)];
  const gameQuestion = `${randomNumberOne} ${randomOperator} ${randomNumberTwo}`;
  const rightAnswer = String((buildString(randomOperator, randomNumberOne, randomNumberTwo)));
  return cons(gameQuestion, rightAnswer);
};

export default () => {
  engineBasic(gameDescription, makePairCalc);
};
