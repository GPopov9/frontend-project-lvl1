import { cons, car, cdr } from '@hexlet/pairs';
import engineBasic from '../engine';

const gameDescription = 'What number is missing in the progression?\n';
const make = (x, y) => cons(x, y);

const progression = (x, y, z) => {
  let string = (` ${x}`);
  const empty = '..';
  const secret = x + z * y;
  let sum = x;
  if (z === 0) string = empty;

  for (let i = 1; i <= 9; i += 1) {
    if (i !== z) {
      sum += y;
      string += (` ${sum}`);
    } else {
      string += (` ${empty}`);
      sum += y;
    }
  }
  const result = make(string, secret);
  return result;
};

const makePairProgression = () => {
  const randomStart = Math.floor(Math.random() * 10);
  const randomStep = Math.floor(Math.random() * 10);
  const randomPosition = Math.floor(Math.random() * 10);
  const final = progression(randomStart, randomStep, randomPosition);
  const pair = make((`${car(final)}`), (`${cdr(final)}`));
  return pair;
};

export default () => {
  engineBasic(gameDescription, makePairProgression);
};
