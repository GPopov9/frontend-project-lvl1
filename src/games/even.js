import { cons } from '@hexlet/pairs';
import engineBasic from '../engine';
import { randomNumber } from '..';

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => {
  if (num % 2 === 0) return true;
  return false;
};

const makePairEven = () => {
  const gameQuestion = randomNumber(100);
  const rightAnswer = (isEven(gameQuestion)) ? 'yes' : 'no';
  return cons(gameQuestion, rightAnswer);
};

export default () => {
  engineBasic(gameDescription, makePairEven);
};
