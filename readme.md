# _Ping-Pong Count_

#### _This application returns a range of numbers up to the entered number with the word "ping", "pong", and/or "ping-pong" inserted where the number in the range meet the condition outlined below.  July 14, 2017_

#### By _**Kimberly Lu**_

## Description

_This application takes a number from a user and returns a range of numbers from one to the chosen number with the following exceptions:
  *numbers divisible by 3 are replaced with 'ping'_
  *numbers divisible by 5 are replaced with 'pong'_
  *numbers divisible by 15 are replaced with 'ping-pong'_

## Specifications:

  *_The entered number is not 1 or greater;
    _Input example: 0;
    _Output example: "Please enter a number greater than or equal to 1";
  *_The input is not a number:
    _Input example: "a";
    _Output example: "Please enter a valid number.";
  *_Count from 1 to the entered number:
    _Input example: 5;
    _Output example: 1, 2, 3, 4, 5;
  *_Return a range of numbers up to the entered number;
    _Input example: 10;
    -Output example:  1, 2, 3, 4, 5, 6, 7, 8, 9, 10;
  *_Return "ping" when the number is divisible by 3:
    _Input example: 3;
    _Output example: 'ping';
  *_Return "pong" when the number is divisible by 5:
    _Input example: 5;
    _Output example: 'pong';
  *_Return "ping-pong" when the number is divisible by 3 and 5:
    _Input example: 15;
    _Output example: "ping-pong";
  *_Return a range of numbers up to the input number with "ping,", "pong", and/or "ping-pong" inserted when one or more of the conditions are met.
    _Input example: 10
    _Output example: 1, 2, ping, 4, pong, 6, 7, 8, ping, pong.



## Setup:

* _Click on this link http://kchamp45.github.io/ping-pong_
* _Enter a number that you would like the computer to count to (i.e. the maximum)_
* _You can enter a different number and repeat the game_

## Support

_There are no known bugs at this time, but please let us know at khl@gmail.com if you should encounter one._

## Technologies Used

_I used HTML, CSS, Bootstrap, JQuery-3.2.1, and Javascript to create this application._

### License

*User may use this application under the MIT license.*

Copyright (c) 2017 **_Kimberly Lu_**
