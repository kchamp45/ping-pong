# _Ping-Pong Count_

#### _This application returns a range of numbers up to the entered number with the word "ping", "pong", and/or "ping-pong" inserted where the number in the range meet the condition outlined below.  July 14, 2017_

#### By _**Kimberly Lu**_

## Description

_This application takes a number from a user and returns a range of numbers from one to the chosen number with the following exceptions:
  *_numbers divisible by 3 are replaced with 'ping'_
  *_numbers divisible by 5 are replaced with 'pong'_
  *_numbers divisible by 15 are replaced with 'ping-pong'_

## Specifications:

  * _Count from 1 to 2:_
    * _Input example: 2;_
    * _Output example: 1, 2;_
  * _Count from 2 to 3 and replace 3 with 'ping':_
      * _Input example: 3;_
      * _Output example: 1, 2, 'ping';_
  * _Count from 4 to 5 and replace 5 with 'pong':_
      * _Input example: 5;_
      * _Output example: 1, 2, ping, 4, 'pong';_      
  * _Return 'ping' when the number is divisible by 3:_
    * _Input example: 6;_
    * _Output example: 1, 2, 'ping', 4, 'pong', 'ping';_
  * _Return 'pong' when the number is divisible by 5:_
    * _Input example: 10;_
    * _Output example: 1, 2, 'ping', 4, 'pong', 'ping', 7, 8, 'ping', 'pong';_
  * _Return "ping-pong" when the number is divisible by 3 and 5:_
    * _Input example: 15;_
    * _Output example: 1, 2, 'ping', 4, 'pong', 'ping', 7, 8, 'ping', 'pong', 11, 'ping', 13, 14, 'ping-pong';_
  * _Return a range of numbers up to the input number with 'ping', 'pong', and/or 'ping-pong' replacing numbers that meet one or more of the conditions._
    * _Input example: 10_
    * _Output example: 1, 2, 'ping', 4, 'pong', 6, 7, 8, 'ping', 'pong'._
  * _The entered number is not 1 or greater;_
    * _Input example: 0;_
    * _Output example: "Please enter a valid number";_
  * _The input is not a number:_
    * _Input example: "a";_
    * _Output example: "Please enter a valid number.";_


## Setup:

* _Click on this link http://kchamp45.github.io/ping-pong._
* _Enter a number that you would like the computer to count to (i.e. the maximum)._
* _You can enter a different number and repeat the game._

## Support

_There are no known bugs at this time, but please let us know at khl@gmail.com if you should encounter one._

## Technologies Used

_I used HTML, CSS, Bootstrap, JQuery-3.2.1, and Javascript to create this application._

### License

*You may use this application under the MIT license.*

Copyright (c) 2017 **_Kimberly Lu_**
