// Import lib for asking name
import readlineSync from 'readline-sync';
import { cons, car, cdr, toString } from '@hexlet/pairs';

// 1. Welcome message
export const welcomeMessage = () => console.log('Welcome to the Brain Games!');

// 2. Message With game description 
export const anyMessage = (message) => console.log(message);

// 3. Ask a name 
export const askQuestion = (message) => readlineSync.question(message);

// 4. Personal hello 
export const personalHello = (name) => console.log(`Hello, ${name}!\n`);

// ------- END OF BASICS ------

// 5. Question message with Random 
export const questionM = (condition) => console.log('Question: ');

//const randomData = () => Math.floor(Math.random() * 101)


const randomNumberTwo = Math.floor(Math.random() * 101)
const operatorSet = ['+','-','*'];


const rand1 = Math.floor(Math.random()*101);
export const correctRandom = () => {
  if (rand1 % 2 === 0) {
    return 'yes'
  }
  return 'no';
};

const rand2 = Math.floor(Math.random()*101);

const make = (x,y) => cons(x,y);

export const makePairEven = () => {
  const randomNumberOne = Math.floor(Math.random() * 101)
  let result = randomNumberOne % 2;
  if (result === 0) {
    result = 'yes';
  } else result = 'no';
  const pair = make(randomNumberOne, result);
  return pair;

} 
//export const makeName = make('May I have your name? ', name)



export const questionMessage = (option) => {
  const randomNumberOne = Math.floor(Math.random() * 101)
  const randomNumberTwo = Math.floor(Math.random() * 101)
  const operatorSet = ['+','-','*'];
  const randomOperator = operatorSet[Math.floor(Math.random() * operatorSet.length)];
  let resultString = '';

  switch (option) {
    case 1: 
      resultString = (`${randomNumberOne}`);
      break;
    
    case 2:
      resultString = (`${randomNumberOne} ${randomOperator} ${randomNumberTwo}`);
      
  }
  
  //console.log(`Question: ${resultString}`);
  return resultString;
};

// export const correctAns =  


// Function for messages
export const gameMessage = (message) => console.log(message);

// Function name ask 



// Function for setting up name of user
export const setName = () => {
  const userName = readlineSync.question('May I have your name? ');
  return userName;
};


const twoDiv = (num) => num % 2;





/* export const randomNum = (name) => {
  for (let i = 0; i < 3; i += 1) {
    const num = randomNumber;
    let correctAnswer;
    if (twoDiv(num) === 0) {
      correctAnswer = 'yes';
    } else correctAnswer = 'no';
    gameMessage(`Question: ${num}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === correctAnswer) {
      gameMessage('Correct!');
    } else {
      gameMessage(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${name}!`);
      return;
    }
  }
  gameMessage(`Congratulations, ${name}!`);
}; */
