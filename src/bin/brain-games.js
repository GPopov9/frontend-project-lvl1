#!/usr/bin/env node

import { gameMessage, setName } from '..';

gameMessage('Welcome to the Brain Games!\n');
const userName = setName();
gameMessage(`Hello, ${userName}!`);
