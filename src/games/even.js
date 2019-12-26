import { cons } from '@hexlet/pairs';
import engineBasic from '../engine';
import randomNumber from '..';

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => {
  return (num % 2 === 0);
};


const makePairEven = () => {
  const gameQuestion = randomNumber(0, 20);
  const rightAnswer = (isEven(gameQuestion)) ? 'yes' : 'no';
  return cons(gameQuestion, rightAnswer);
};

export default () => {
  engineBasic(gameDescription, makePairEven);
};
