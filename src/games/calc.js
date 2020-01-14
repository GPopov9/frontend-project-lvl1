import { cons } from '@hexlet/pairs';
import engineBasic from '../engine';
import { randomNumber, startNumber, endNumber } from '..';

const gameDescription = 'What is the result of the expression?';
const operators = ['+', '-', '*'];
const operatorsCount = operators.length;

const getCalculatorResult = (operator, numberOne, numberTwo) => {
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

const makeDataForCalculatorGame = () => {
  const randomNumberOne = randomNumber(startNumber, endNumber);
  const randomNumberTwo = randomNumber(startNumber, endNumber);
  const randomOperator = operators[randomNumber(startNumber, operatorsCount - 1)];
  const gameQuestion = `${randomNumberOne} ${randomOperator} ${randomNumberTwo}`;
  const rightAnswer = String(getCalculatorResult(randomOperator, randomNumberOne, randomNumberTwo));
  return cons(gameQuestion, rightAnswer);
};

export default () => {
  engineBasic(gameDescription, makeDataForCalculatorGame);
};
