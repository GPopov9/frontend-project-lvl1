import { cons } from '@hexlet/pairs';
import engineBasic from '../engine';
import { randomNumber, startNumber, endNumber } from '..';

const gameDescription = 'What number is missing in the progression?';
const progressionLength = 10;

const hiddenElement = (a, b, i) => a + b * i;

const makeProgression = (startItem, progressionStep, secretPosition) => {
  let stringQuestion = '';
  for (let i = 0; i < progressionLength; i += 1) {
    const progressionItem = startItem + progressionStep * i;
    if (i !== secretPosition) {
      stringQuestion = `${stringQuestion} ${progressionItem}`;
    } else {
      stringQuestion = `${stringQuestion} ..`;
    }
  }
  return stringQuestion;
};

const makeDataForProgressionGame = () => {
  const randomStart = randomNumber(startNumber, endNumber);
  const randomStep = randomNumber(startNumber, endNumber);
  const randomPosition = randomNumber(startNumber, progressionLength - 1);
  const progression = makeProgression(randomStart, randomStep, randomPosition);
  const gameQuestion = progression.trim();
  const rightAnswer = String(hiddenElement(randomStart, randomStep, randomPosition));
  return cons(gameQuestion, rightAnswer);
};

export default () => {
  engineBasic(gameDescription, makeDataForProgressionGame);
};
