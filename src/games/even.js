import { cons } from '@hexlet/pairs';
import engineBasic from '../engine';
import { randomNumber } from '..';

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

const makePairEven = () => {
  const randomNumberOne = randomNumber();
  const isEven = (randomNumberOne % 2 === 0) ? 'yes' : 'no';
  return cons(randomNumberOne, isEven);
};

export default () => {
  engineBasic(gameDescription, makePairEven);
};
