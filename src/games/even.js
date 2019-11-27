import { engineBasic } from '../engine.js';
import { cons, car, cdr, toString } from '@hexlet/pairs';

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".\n'

const make = (x,y) => cons(x,y);

export const brainEven = () => {
  engineBasic(gameDescription, makePairEven);
};

const makePairEven = () => {
    const randomNumberOne = Math.floor(Math.random() * 101)
    let result = randomNumberOne % 2;
    if (result === 0) {
      result = 'yes';
    } else result = 'no';
    const pair = make(randomNumberOne, result);
    return pair;
}; 


