import { welcomeMessage, anyMessage, /* makePairEven as func, */ askQuestion, personalHello, questionMessage, correctRandom, questionM, makePairRandom} from '../src/index';
import readlineSync from 'readline-sync';
import { cons, car, cdr, toString } from '@hexlet/pairs';
//import { makePairEven } from '../src/games/even';

const make = (x,y) => cons(x,y);

export const engineBasic = (message, func) => {
    welcomeMessage();
    anyMessage(message);
    const name = readlineSync.question('May I have your name? ');
    anyMessage(`Hello, ${name}!\n`);
   
    for (let i = 0; i < 3; i += 1) {
        let pair = func();
        anyMessage(`Question: ${car(pair)}`);
        anyMessage(cdr(pair));
        let answer = readlineSync.question('Your answer: ');

        if (answer == cdr(pair)) {
            anyMessage('Correct!');
        } else {
            anyMessage(`'${answer}' is wrong answer ;(. Correct answer was '${cdr(pair)}'.\nLet's try again, ${name}!`);
            return;       
        }
    }
};
