import { cons } from '@hexlet/pairs';
import engineBasic from '../engine';

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".\n';
const make = (x, y) => cons(x, y);

const makePairPrime = () => {
  const randomNumberOne = Math.floor(Math.random() * 101);
  let result = 'yes';
  if (randomNumberOne > 2) {
    for (let i = 3; i < randomNumberOne; i += 1) {
      if (randomNumberOne % i === 0) result = 'no';
    }
  }
  const pair = make(randomNumberOne, result);
  return pair;
};

export default () => {
  engineBasic(gameDescription, makePairPrime);
};
