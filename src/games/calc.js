import { engineMessage, engineBasic } from '../engine.js';
import { cons, car, cdr, toString } from '@hexlet/pairs';

const gameDescription = 'What is the result of the expression?\n'

const make = (x,y) => cons(x,y);

export const brainCalc = () => {
    engineBasic(gameDescription, makePairCalc);
};


const makePairCalc = () => {
    const randomNumberOne = Math.floor(Math.random() * 101);
    const randomNumberTwo = Math.floor(Math.random() * 101);
    const operatorSet = ['+','-','*'];
    const randomOperator = operatorSet[Math.floor(Math.random() * operatorSet.length)];
    let result = eval((`${randomNumberOne}${randomOperator}${randomNumberTwo}`));
    const pair = make((`${randomNumberOne}${randomOperator}${randomNumberTwo}`),result);
    return pair;
}; 
