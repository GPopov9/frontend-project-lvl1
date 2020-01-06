import { cons } from '@hexlet/pairs';
import engineBasic from '../engine';
import { randomNumber, startNumber, endNumber } from '..';

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0;

const makePairForEvenGame = () => {
  const gameQuestion = randomNumber(startNumber, endNumber);
  const rightAnswer = (isEven(gameQuestion)) ? 'yes' : 'no';
  return cons(gameQuestion, rightAnswer);
};

export default () => {
  engineBasic(gameDescription, makePairForEvenGame);
};
