import { cons } from '@hexlet/pairs';
import engineBasic from '../engine';
import { randomNumber } from '..';

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

const makePairEven = () => {
  const gameQuestion = randomNumber();
  const rightAnswer = (gameQuestion % 2 === 0) ? 'yes' : 'no';
  return cons(gameQuestion, rightAnswer);
};

export default () => {
  engineBasic(gameDescription, makePairEven);
};
