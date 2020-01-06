<a href="https://codeclimate.com/github/GPopov9/frontend-project-lvl1/maintainability"><img src="https://api.codeclimate.com/v1/badges/a85e9647f125f1e873f1/maintainability" /></a> [![Build Status](https://travis-ci.org/GPopov9/frontend-project-lvl1.svg?branch=master)](https://travis-ci.org/GPopov9/frontend-project-lvl1)

# frontend-project-lvl1 (Hexlet.io)
Project contains set of console games **(Brain-Games)**. Completed as a part of exercises "FrontEnd JavaScript" profession on [Hexlet](https://hexlet.io/).   

Mentor [Sergey Karpuk](https://ru.hexlet.io/u/ck)

## Installation  
```
$ npm link
```
[![asciicast](https://asciinema.org/a/292120.svg)](https://asciinema.org/a/292120)

## Game: "Is the number even?"

**Prerequisites:**
* User get a random number 
* User must answer (type) "yes" (even number) or "no" 
* In case of correct answer - message "Correct", otherwise - message "Try Again!" 
* Game longs until 3 correct answers or 1 incorrect.

**Launch** 
```
$ brain-even
```
[![asciicast](https://asciinema.org/a/292127.svg)](https://asciinema.org/a/292127)

## Game: "Is the number prime?"

**Prerequisites:**
* User get a random number 
* User must answer (type) "yes" (prime number) or "no"
* In case of correct answer - message "Correct", otherwise - message "Try Again!" 
* Game longs until 3 correct answers or 1 incorrect.

**Launch** 
```
$ brain-prime
```
[![asciicast](https://asciinema.org/a/292133.svg)](https://asciinema.org/a/292133)









Running "Calculator Game" with all correct answers:

~/Documents/_Projects/5_Hexlet/frontend-project-lvl1$ brain-calc                                                                                                       
Welcome to the Brain Games!                                                                                                                                                        
What is the result of the expression?                                                                                                                                              
                                                                                                                                                                                   
May I have your name? George                                                                                                                                                       
Hello, George!                                                                                                                                                                     
                                                                                                                                                                                   
Question: 6 + 0                                                                                                                                                                    
Your answer: 6                                                                                                                                                                     
Correct!                                                                                                                                                                           
Question: 0 + 7                                                                                                                                                                    
Your answer: 7                                                                                                                                                                     
Correct!                                                                                                                                                                           
Question: 5 - 3                                                                                                                                                                    
Your answer: 2                                                                                                                                                                     
Correct!                                                                                                                                                                           
Congratulations, George!                                                                                                                                                           
~/Documents/_Projects/5_Hexlet/frontend-project-lvl1$ exit                                                                                                             
exit                                                        

-----

Running "Calculator Game" with the second wrong answer:

~/Documents/_Projects/5_Hexlet/frontend-project-lvl1$ brain-calc                                                                                                       
Welcome to the Brain Games!                                                                                                                                                        
What is the result of the expression?                                                                                                                                              
                                                                                                                                                                                   
May I have your name? George                                                                                                                                                       
Hello, George!                                                                                                                                                                     
                                                                                                                                                                                   
Question: 8 + 1                                                                                                                                                                    
Your answer: 9                                                                                                                                                                     
Correct!                                                                                                                                                                           
Question: 0 - 4                                                                                                                                                                    
Your answer: 1                                                                                                                                                                     
'1' is wrong answer ;(. Correct answer was '-4'.                                                                                                                                   
Let's try again, George!                                                                                                                                                           
~/Documents/_Projects/5_Hexlet/frontend-project-lvl1$ exit                                                                                                             
exit                                                          

-----

Running "GCD Game" with all correct answers

~/Documents/_Projects/5_Hexlet/frontend-project-lvl1$ brain-gcd                                                                                                        
Welcome to the Brain Games!                                                                                                                                                        
Find the greatest common divisor of given numbers.                                                                                                                                 
                                                                                                                                                                                   
May I have your name? George                                                                                                                                                       
Hello, George!                                                                                                                                                                     
                                                                                                                                                                                   
Question: 5 8                                                                                                                                                                      
Your answer: 1                                                                                                                                                                     
Correct!                                                                                                                                                                           
Question: 6 1                                                                                                                                                                      
Your answer: 1                                                                                                                                                                     
Correct!                                                                                                                                                                           
Question: 6 3                                                                                                                                                                      
Your answer: 3                                                                                                                                                                     
Correct!                                                                                                                                                                           
Congratulations, George!                                                                                                                                                           
~/Documents/_Projects/5_Hexlet/frontend-project-lvl1$ exit                                                                                                             
exit              

-----

Running "GCD Game" with the second wrong answer:

~/Documents/_Projects/5_Hexlet/frontend-project-lvl1$ brain-gcd                                                                                                        
Welcome to the Brain Games!                                                                                                                                                        
Find the greatest common divisor of given numbers.                                                                                                                                 
                                                                                                                                                                                   
May I have your name? George                                                                                                                                                       
Hello, George!                                                                                                                                                                     
                                                                                                                                                                                   
Question: 9 2                                                                                                                                                                      
Your answer: 1                                                                                                                                                                     
Correct!                                                                                                                                                                           
Question: 3 3                                                                                                                                                                      
Your answer: 1                                                                                                                                                                     
'1' is wrong answer ;(. Correct answer was '3'.                                                                                                                                    
Let's try again, George!                                                                                                                                                           
~/Documents/_Projects/5_Hexlet/frontend-project-lvl1$ exit                                                                                                             
exit                         

-----

Running "Progression Game" with all correct answers:

~/Documents/_Projects/5_Hexlet/frontend-project-lvl1$ brain-progression                                                                                                
Welcome to the Brain Games!                                                                                                                                                        
What number is missing in the progression?                                                                                                                                         
                                                                                                                                                                                   
May I have your name? George                                                                                                                                                       
Hello, George!                                                                                                                                                                     
                                                                                                                                                                                   
Question: 0 7 14 21 .. 35 42 49 56 63                                                                                                                                              
Your answer: 28                                                                                                                                                                    
Correct!                                                                                                                                                                           
Question: 8 8 8 8 8 8 8 .. 8 8                                                                                                                                                     
Your answer: 8                                                                                                                                                                     
Correct!                                                                                                                                                                           
Question: 9 13 .. 21 25 29 33 37 41 45                                                                                                                                             
Your answer: 17                                                                                                                                                                    
Correct!                                                                                                                                                                           
Congratulations, George!                                                                                                                                                           
~/Documents/_Projects/5_Hexlet/frontend-project-lvl1$ exit                                                                                                             
exit         

-----

Running "Progression Game" with the second wrong answer:

~/Documents/_Projects/5_Hexlet/frontend-project-lvl1$ brain-progression                                                                                                
Welcome to the Brain Games!                                                                                                                                                        
What number is missing in the progression?                                                                                                                                         
                                                                                                                                                                                   
May I have your name? George                                                                                                                                                       
Hello, George!                                                                                                                                                                     
                                                                                                                                                                                   
Question: 7 15 .. 31 39 47 55 63 71 79                                                                                                                                             
Your answer: 23                                                                                                                                                                    
Correct!                                                                                                                                                                           
Question: 7 13 19 25 31 37 43 49 .. 61                                                                                                                                             
Your answer: 1                                                                                                                                                                     
'1' is wrong answer ;(. Correct answer was '55'.                                                                                                                                   
Let's try again, George!                                                                                                                                                           
~/Documents/_Projects/5_Hexlet/frontend-project-lvl1$ exit                                                                                                             
exit     

----