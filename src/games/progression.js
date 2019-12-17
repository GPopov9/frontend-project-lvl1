import { cons, car, cdr } from '@hexlet/pairs';
import engineBasic from '../engine';
import { randomProgression, toString } from '..';

const gameDescription = 'What number is missing in the progression?';

const progression = (x, y, z) => {
  const length = 10;
  let stringQuestion = '';
  let secretItem = 0;

  for (let i = 1; i <= length; i += 1) {
    const progressionItem = x + y * (i - 1);
    if (i !== z) {
      stringQuestion = `${stringQuestion} ${progressionItem}`;
    } else {
      stringQuestion = `${stringQuestion} ..`;
      secretItem = progressionItem;
    }
  }
  return cons(stringQuestion, secretItem);
};

const makePairProgression = () => {
  const randomStart = randomProgression();
  const randomStep = randomProgression();
  const randomPosition = randomProgression();
  const progressionCalc = progression(randomStart, randomStep, randomPosition);
  const gameQuestion = car(progressionCalc);
  const rightAnswer = toString(cdr(progressionCalc));
  return cons(gameQuestion, rightAnswer);
};

export default () => {
  engineBasic(gameDescription, makePairProgression);
};
