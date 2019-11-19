#!/usr/bin/env node

import { gameMessage, setName, randomNum } from '../index';

gameMessage('Welcome to the Brain Games!');
gameMessage('Answer "yes" if the number is even, otherwise answer "no".\n');
const userName = setName();
gameMessage(`Hello, ${userName}!\n`);
randomNum(userName);
