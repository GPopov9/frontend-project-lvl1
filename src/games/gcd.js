import { cons } from '@hexlet/pairs';
import engineBasic from '../engine';
import { randomNumber } from '..';

const gameDescription = 'Find the greatest common divisor of given numbers.';

const pureGCD = (a, b) => {
  let firstNum = a;
  let secondNum = b;
  if (firstNum === 0) {
    return secondNum;
  }
  while (secondNum !== 0) {
    if (firstNum > secondNum) firstNum -= secondNum;
    else secondNum -= firstNum;
  }
  return String(firstNum);
};

const makePairGCD = () => {
  const randomNumberOne = randomNumber();
  const randomNumberTwo = randomNumber();
  const xTemp = randomNumberOne;
  const yTemp = randomNumberTwo;
  return cons((`${randomNumberOne} ${randomNumberTwo}`), pureGCD(xTemp, yTemp));
};

export default () => {
  engineBasic(gameDescription, makePairGCD);
};
