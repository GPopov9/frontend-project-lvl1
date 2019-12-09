import { cons } from '@hexlet/pairs';
import engineBasic from '../engine';

const gameDescription = 'Find the greatest common divisor of given numbers.';

// Fucnction for GCD (Non-export)
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
  const randomNumberOne = Math.floor(Math.random() * 101);
  const randomNumberTwo = Math.floor(Math.random() * 101);
  const xTemp = randomNumberOne;
  const yTemp = randomNumberTwo;
  const result = pureGCD(xTemp, yTemp);
  const pair = cons((`${randomNumberOne} ${randomNumberTwo}`), result);
  return pair;
};

export default () => {
  engineBasic(gameDescription, makePairGCD);
};
