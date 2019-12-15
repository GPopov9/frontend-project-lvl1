import { cons } from '@hexlet/pairs';
import engineBasic from '../engine';
import { randomNumber } from '..';

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) return 'no';
  }
  return 'yes';
};

const makePairPrime = () => {
  const randomNumberOne = randomNumber();
  return cons(randomNumberOne, isPrime(randomNumberOne));
};

export default () => {
  engineBasic(gameDescription, makePairPrime);
};
