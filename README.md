
Card Game React Application

This project is a simple card game implemented using React. It features two players competing with decks of cards, where the goal is to compare the top cards from each player's deck and determine the winner. The game also includes functionality to handle ties and provides a dynamic user interface for interacting with the cards.

Features

Deck Creation:
A deck of cards is split evenly between Player 1 and Player 2 at the start of the game.
Card Flipping:
Player 1 can click on their card to flip it over and reveal its value. Player 2's card flips automatically in response.
Game Logic:
The game compares the top cards of each player:
Player 1 Wins: Player 1 takes both cards and adds them to their deck.
Player 2 Wins: Player 2 takes both cards and adds them to their deck.
Tie: If the cards are equal, additional logic resolves the tie by displaying tied cards and requiring further interaction.
Tie Resolution:
In case of a tie:
The tied cards are displayed next to the current cards.
Players must click again to draw new cards and resolve the tie.
The winning player collects all tied cards and the new cards.
Dynamic UI:
Displays the number of cards remaining for each player.
Shows the tied cards during tie scenarios.
Provides alerts for game events (e.g., tie situations).
Responsive Design:
The layout is styled for readability and functionality, with a focus on a clean and user-friendly interface.
How to Play

Click the card in Player 1's section to reveal the top card for both players.
If there is a winner, the decks are updated automatically.
If there is a tie:
The tied cards are displayed.
Click Player 1's card again to draw additional cards and resolve the tie.
Repeat until one player runs out of cards.
Components

Create
The main component of the application. It:

Initializes the game state, including the decks for both players.
Handles player interactions (card clicks).
Displays the user interface, including the cards and game alerts.
ShowCard
A reusable component that renders a single card. It can display either the card's value or its back, depending on the game state.

Logic
Contains helper functions for the game logic:

compare: Compares two cards and returns the result.
updateDecks: Updates the decks based on the result of a card comparison.
CreateDeck
Provides utilities for creating and shuffling a standard deck of cards.

State Management

Decks (p1, p2): Stores the current cards in each player's deck.
Card Index (currentCardIndexP1, currentCardIndexP2): Tracks the top card for each player.
Tied Cards (tiedCardsP1, tiedCardsP2): Keeps track of tied cards during tie scenarios.
Alert State (showAlert, alertMessage): Controls and displays game alerts dynamically.
Card Flipping (isFlipped): Toggles the card's visibility during gameplay.
Future Improvements

Add animations for card flips and deck updates.
Implement additional game modes or rules.
Track player scores or rounds won.
Enhance the UI with more polished designs.
How to Run the Project

Clone the repository.
Install dependencies:
npm install
Start the development server:
npm start
Open your browser and navigate to http://localhost:3000.
Enjoy the game! 😊
