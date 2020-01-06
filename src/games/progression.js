import { cons, car, cdr } from '@hexlet/pairs';
import engineBasic from '../engine';
import { randomNumber, startNumber, endNumber } from '..';

const gameDescription = 'What number is missing in the progression?';
const progressionLength = 10;

const makeProgression = (startItem, progressionStep, secretPosition) => {
  let stringQuestion = '';
  let secretItem;

  for (let i = 0; i < progressionLength; i += 1) {
    const progressionItem = startItem + progressionStep * i;
    if (i !== secretPosition) {
      stringQuestion += `${progressionItem} `;
    } else {
      stringQuestion += '.. ';
      secretItem = progressionItem;
    }
  }
  return cons(stringQuestion, secretItem);
};

const makePairForProgressionGame = () => {
  const randomStart = randomNumber(startNumber, endNumber);
  const randomStep = randomNumber(startNumber, endNumber);
  const randomPosition = randomNumber(startNumber, progressionLength - 1);
  const progressionCalc = makeProgression(randomStart, randomStep, randomPosition);
  const gameQuestion = car(progressionCalc);
  const rightAnswer = String(cdr(progressionCalc));
  return cons(gameQuestion, rightAnswer);
};

export default () => {
  engineBasic(gameDescription, makePairForProgressionGame);
};
