#!/usr/bin/env node

import { gameMessage, setName } from '../index';

gameMessage('Welcome to the Brain Games!\n');
const userName = setName();
gameMessage(`Hello, ${userName}!`);
