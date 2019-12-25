import { cons, car, cdr } from '@hexlet/pairs';
import engineBasic from '../engine';
import randomNumber from '..';

const gameDescription = 'What number is missing in the progression?';
const length = 10;

const progression = (startItem, progressionStep, secretPosition) => {
  let stringQuestion = '';
  let secretItem;

  for (let i = 0; i < length; i += 1) {
    const progressionItem = startItem + progressionStep * i;
    if (i !== secretPosition) {
      stringQuestion = `${stringQuestion} ${progressionItem}`;
    } else {
      stringQuestion = `${stringQuestion} ..`;
      secretItem = progressionItem;
    }
  }
  return cons(stringQuestion, secretItem);
};

const makePairProgression = () => {
  const randomStart = randomNumber(1, 10);
  const randomStep = randomNumber(1, 10);
  const randomPosition = randomNumber(0, 9);
  const progressionCalc = progression(randomStart, randomStep, randomPosition);
  const gameQuestion = car(progressionCalc);
  const rightAnswer = String(cdr(progressionCalc));
  return cons(gameQuestion, rightAnswer);
};

export default () => {
  engineBasic(gameDescription, makePairProgression);
};
