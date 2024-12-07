# Card Game React Application

## Overview

This project is a simple card game implemented using React. It features two players competing with decks of cards, where the goal is to compare the top cards from each player's deck and determine the winner. The game also includes functionality to handle ties and provides a dynamic user interface for interacting with the cards.

## Features

1. **Deck Creation**:  
    - A deck of cards is split evenly between Player 1 and Player 2 at the start of the game.

2. **Card Flipping**:  
    - Player 1 can click on their card to flip it over and reveal its value. Player 2's card flips automatically in response.

3. **Game Logic**:  
    - The game compares the top cards of each player:  
        - **Player 1 Wins**: Player 1 takes both cards and adds them to the back of their deck.  
        - **Player 2 Wins**: Player 2 takes both cards and adds them to the back oftheir deck.  
        - **Tie**: If the cards are equal, three card are placed down and the whom ever has the higher fourth card takes all of the cards.

4. **Tie Resolution**:  
    - In case of a tie:  
        - Currenlty only backend logic

5. **Dynamic UI**:  
    - Displays the number of cards remaining for each player.  
    - Alerts that there has been a tie.
    - 
6. **Responsive Design**:  
    - The layout is styled for readability and functionality, with a focus on a clean and user-friendly interface.
  
7. **Rules**:  
    - There a section outlining the rules of the game
  
8. **Player Selection**:  
    - Selcting Which Limestone Emplyoee is Playing Bahman or Brett.

## How to Play

1. Click the card in Player 1's section to reveal the top card for both players.
2. If there’s a tie, the tied cards will appear next to the current cards.  
3. Continue flipping cards until a winner is determined.  
4. The winning player collects the cards and adds them to their deck.  
5. The game ends when one player runs out of cards.

## Future Features
1. Adding a tie animation, so the user can see the cards that were played and lost.
2. Adding a hotbar on the side to see history of cards won and lost
3. Anytime shuffle feature, which is a button which allows for the user to shuffle there deck at anytime

## Current Issues
1. Not fullying function frontend as user can't see card lost in a tie scenario
2. Cleaning up of code, I would like "Create.tsx" to be more of a hub and call on more packages to increace readability.
