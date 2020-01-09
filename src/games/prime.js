import { cons } from '@hexlet/pairs';
import engineBasic from '../engine';
import { randomNumber, startNumber, endNumber } from '..';

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if (number < 2) return false;
  for (let divisor = 2; divisor <= number / 2; divisor += 1) {
    if (number % divisor === 0) return false;
  }
  return true;
};

const makeDataForPrimeGame = () => {
  const gameQuestion = randomNumber(startNumber, endNumber);
  const rightAnswer = (isPrime(gameQuestion)) ? 'yes' : 'no';
  return cons(gameQuestion, rightAnswer);
};

export default () => {
  engineBasic(gameDescription, makeDataForPrimeGame);
};
