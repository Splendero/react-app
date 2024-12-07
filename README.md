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
        - **Player 1 Wins**: Player 1 takes both cards and adds them to their deck.  
        - **Player 2 Wins**: Player 2 takes both cards and adds them to their deck.  
        - **Tie**: If the cards are equal, additional logic resolves the tie by displaying tied cards and requiring further interaction.

4. **Tie Resolution**:  
    - In case of a tie:  
        - The tied cards are displayed next to the current cards.  
        - Players must click again to draw new cards and resolve the tie.  
        - The winning player collects all tied cards and the new cards.

5. **Dynamic UI**:  
    - Displays the number of cards remaining for each player.  
    - Shows the tied cards during tie scenarios.  
    - Provides alerts for game events (e.g., tie situations).

6. **Responsive Design**:  
    - The layout is styled for readability and functionality, with a focus on a clean and user-friendly interface.

## How to Play

1. Click the card in Player 1's section to reveal the top card for both players.
2. If there’s a tie, the tied cards will appear next to the current cards.  
3. Continue flipping cards until a winner is determined.  
4. The winning player collects the cards and adds them to their deck.  
5. The game ends when one player runs out of cards.
