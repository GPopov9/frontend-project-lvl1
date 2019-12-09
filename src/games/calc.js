import { cons } from '@hexlet/pairs';
import engineBasic from '../engine';

const gameDescription = 'What is the result of the expression?';

const makePairCalc = () => {
  const randomNumberOne = Math.floor(Math.random() * 101);
  const randomNumberTwo = Math.floor(Math.random() * 101);
  const operatorSet = ['+', '-', '*'];
  const randomOperator = operatorSet[Math.floor(Math.random() * operatorSet.length)];
  let result = '';
  switch (randomOperator) {
    case '+':
      result = String(randomNumberOne + randomNumberTwo);
      break;
    case '-':
      result = String(randomNumberOne - randomNumberTwo);
      break;
    case '*':
      result = String(randomNumberOne * randomNumberTwo);
      break;
    default:
      break;
  }
  const pair = cons((`${randomNumberOne}${randomOperator}${randomNumberTwo}`), result);
  return pair;
};

export default () => {
  engineBasic(gameDescription, makePairCalc);
};
