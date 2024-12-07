import { useState } from "react";
import { Card } from "./CreateDeck";
import ShowTie from "./ShowTie";
import ShowCard from "./ShowCard";

export function updateDecks(
  p1Deck: Card[],
  p2Deck: Card[],
  topCardP1: Card,
  topCardP2: Card
): [Card[], Card[]] {
  // Example logic to update the deck
  if (compare(topCardP1, topCardP2) == 1) {
    p1Deck = p1Deck.slice(1); // Remove the top card from p1Deck
    p2Deck = p2Deck.slice(1); // Remove the top card from p2Deck
    p2Deck = [...p2Deck, topCardP1, topCardP2]; // Player 1 wins, add both cards to p2Deck
    return [p1Deck, p2Deck];
  }

  if (compare(topCardP1, topCardP2) == 2) {
    p2Deck = p2Deck.slice(1); // Remove the top card from p2Deck
    p1Deck = p1Deck.slice(1); // Remove the top card from p1Deck
    p1Deck = [...p1Deck, topCardP2, topCardP1]; // Player 2 wins, add both cards to p1Deck
    return [p1Deck, p2Deck];
  }

  // If there is a tie, handle it
  const tempP1 = p1Deck.slice(0, 4); // Take the first 4 cards from p1Deck
  const tempP2 = p2Deck.slice(0, 4); // Take the first 4 cards from p2Deck
  p1Deck = p1Deck.slice(4); // Remove the first 4 cards from p1Deck
  p2Deck = p2Deck.slice(4); // Remove the first 4 cards from p2Deck

  // Compare the fourth card from both decks
  if (getCardValue(tempP1[3]) > getCardValue(tempP2[3])) {
    p1Deck = [...p1Deck, ...tempP1, ...tempP2]; // Player 1 wins, add all cards to p1Deck
  } else if (getCardValue(tempP1[3]) < getCardValue(tempP2[3])) {
    p2Deck = [...p2Deck, ...tempP1, ...tempP2]; // Player 2 wins, add all cards to p2Deck
  } else {
    // Handle the case if it's still a tie for the fourth cards (optional)
  }

  return [p1Deck, p2Deck];
}

export function compare(p1: Card, p2: Card) {
  if (getCardValue(p1) < getCardValue(p2)) return 1;
  if (getCardValue(p1) > getCardValue(p2)) return 2;
  return 0;
}

const getCardValue = (card: Card): number => {
  // Define the mapping for card values
  const valueMapping: { [key: string]: number } = {
    "2": 2,
    "3": 3,
    "4": 4,
    "5": 5,
    "6": 6,
    "7": 7,
    "8": 8,
    "9": 9,
    "10": 10,
    J: 11, // Jack is 11
    Q: 12, // Queen is 12
    K: 13, // King is 13
    A: 14, // Ace is 14 (this can vary based on game rules)
  };

  // Return the numeric value of the card
  return valueMapping[card.value] || 0; // If card value is invalid, return 0
};
