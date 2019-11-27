import { cons } from '@hexlet/pairs';
import engineBasic from '../engine';

const gameDescription = 'What is the result of the expression?\n';
const make = (x, y) => cons(x, y);

const makePairCalc = () => {
  const randomNumberOne = Math.floor(Math.random() * 101);
  const randomNumberTwo = Math.floor(Math.random() * 101);
  const operatorSet = ['+', '-', '*'];
  const randomOperator = operatorSet[Math.floor(Math.random() * operatorSet.length)];
  const result = eval((`${randomNumberOne}${randomOperator}${randomNumberTwo}`));
  const pair = make((`${randomNumberOne}${randomOperator}${randomNumberTwo}`), result);
  return pair;
};

export default () => {
  engineBasic(gameDescription, makePairCalc);
};
