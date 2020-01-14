import { cons } from '@hexlet/pairs';
import engineBasic from '../engine';
import { randomNumber, startNumber, endNumber } from '..';

const gameDescription = 'What number is missing in the progression?';
const progressionLength = 10;

const findProgressionItem = (a, b, i) => a + b * i;

const getProgressionQuestion = (startItem, progressionStep, secretPosition) => {
  let question = '';
  for (let i = 0; i < progressionLength; i += 1) {
    const progressionItem = startItem + progressionStep * i;
    if (i !== secretPosition) {
      question = `${question} ${progressionItem}`;
    } else {
      question = `${question} ..`;
    }
  }
  return question.trim();
};

const makeDataForProgressionGame = () => {
  const randomStart = randomNumber(startNumber, endNumber);
  const randomStep = randomNumber(startNumber, endNumber);
  const randomPosition = randomNumber(startNumber, progressionLength - 1);
  const gameQuestion = getProgressionQuestion(randomStart, randomStep, randomPosition);
  const rightAnswer = String(findProgressionItem(randomStart, randomStep, randomPosition));
  return cons(gameQuestion, rightAnswer);
};

export default () => {
  engineBasic(gameDescription, makeDataForProgressionGame);
};
