import { cons } from '@hexlet/pairs';
import engineBasic from '../engine';
import { randomNumber, startNumber, endNumber } from '..';

const gameDescription = 'Find the greatest common divisor of given numbers.';

const findGCD = (a, b) => {
  let firstNum = a;
  let secondNum = b;
  if (firstNum === 0) {
    return secondNum;
  }
  while (secondNum !== 0) {
    if (firstNum > secondNum) firstNum -= secondNum;
    else secondNum -= firstNum;
  }
  return firstNum;
};

const makePairForGcdGame = () => {
  const randomNumberOne = randomNumber(startNumber, endNumber);
  const randomNumberTwo = randomNumber(startNumber, endNumber);
  const gameQuestion = `${randomNumberOne} ${randomNumberTwo}`;
  const rightAnswer = String(findGCD(randomNumberOne, randomNumberTwo));
  return cons(gameQuestion, rightAnswer);
};

export default () => {
  engineBasic(gameDescription, makePairForGcdGame);
};
