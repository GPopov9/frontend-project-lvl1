import { cons } from '@hexlet/pairs';
import engineBasic from '../engine';
import randomNumber from '..';

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  for (let divisor = 2; divisor < number; divisor += 1) {
    if (number % divisor === 0) return false;
  }
  return true;
};

const makePairPrime = () => {
  const gameQuestion = randomNumber(0, 20);
  const rightAnswer = (isPrime(gameQuestion)) ? 'yes' : 'no';
  return cons(gameQuestion, rightAnswer);
};

export default () => {
  engineBasic(gameDescription, makePairPrime);
};
