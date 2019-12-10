import { cons } from '@hexlet/pairs';
import engineBasic from '../engine';
import { randomNumber } from '..';

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

const makePairEven = () => {
  const randomNumberOne = randomNumber();
  let result = randomNumberOne % 2;
  if (result === 0) {
    result = 'yes';
  } else result = 'no';
  const pair = cons(randomNumberOne, result);
  return pair;
};

export default () => {
  engineBasic(gameDescription, makePairEven);
};
