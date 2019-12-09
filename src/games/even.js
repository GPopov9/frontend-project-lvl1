import { cons } from '@hexlet/pairs';
import engineBasic from '../engine';

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';
const make = (x, y) => cons(x, y);

const makePairEven = () => {
  const randomNumberOne = Math.floor(Math.random() * 101);
  let result = randomNumberOne % 2;
  if (result === 0) {
    result = 'yes';
  } else result = 'no';
  const pair = make(randomNumberOne, result);
  return pair;
};

export default () => {
  engineBasic(gameDescription, makePairEven);
};
