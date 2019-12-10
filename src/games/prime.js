import { cons } from '@hexlet/pairs';
import engineBasic from '../engine';
import { randomNumber } from '..';

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const makePairPrime = () => {
  const randomNumberOne = randomNumber();
  let result = 'yes';
  if (randomNumberOne > 2) {
    for (let i = 3; i < randomNumberOne; i += 1) {
      if (randomNumberOne % i === 0) result = 'no';
    }
  }
  const pair = cons(randomNumberOne, result);
  return pair;
};

export default () => {
  engineBasic(gameDescription, makePairPrime);
};
