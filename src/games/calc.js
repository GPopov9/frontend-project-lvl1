import { cons } from '@hexlet/pairs';
import engineBasic from '../engine';
import { randomNumber } from '..';
import { operatorSet } from '..';

const gameDescription = 'What is the result of the expression?';

const makePairCalc = () => {
  const randomNumberOne = randomNumber();
  const randomNumberTwo = randomNumber();
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
