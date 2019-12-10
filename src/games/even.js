import { cons } from '@hexlet/pairs';
import engineBasic from '../engine';
import { randomNumber } from '..';

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => (number % 2 === 0) ? 'yes' : 'no';

const makePairEven = () => {
  const randomNumberOne = randomNumber();  
  return cons(randomNumberOne,isEven(randomNumberOne))
};

export default () => {
  engineBasic(gameDescription, makePairEven);
};
