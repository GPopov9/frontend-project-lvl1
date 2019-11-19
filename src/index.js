import readlineSync from 'readline-sync';

export const gameMessage = (message) => console.log(message);

export const setName = () => {
  const userName = readlineSync.question('May I have your name? ');
  return userName;
};

const twoDiv = (num) => num % 2;

export const randomNum = (name) => {
  for (let i = 0; i < 3; i += 1) {
    const num = Math.floor(Math.random() * 101);
    let correctAnswer;
    if (twoDiv(num) === 0) {
      correctAnswer = 'yes';
    } else correctAnswer = 'no';
    gameMessage(`Question: ${num}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === correctAnswer) {
      gameMessage('Correct!');
    } else {
      gameMessage(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      gameMessage(`Let's try again, ${name}!`);
      return;
    }
  }
  gameMessage(`Congratulations, ${name}!`);
};
