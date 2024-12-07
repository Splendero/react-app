export interface Card {
  suit: string;
  value: string;
}

const suits = ["H", "D", "C", "S"];
const values = [
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K",
  "A",
];

// Function to create a deck of 52 cards
export function createDeck(): Card[] {
  let deck: Card[] = [];

  for (let suit of suits) {
    for (let value of values) {
      deck.push({
        suit,
        value,
      });
    }
  }

  return shuffleDeck(deck);
}

// Function to shuffle the deck randomly
export function shuffleDeck(deck: Card[]): Card[] {
  for (let i = deck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [deck[i], deck[j]] = [deck[j], deck[i]]; // Swap cards
  }
  return deck;
}

// Function to split the shuffled deck into two halves
export function splitDeck(deck: Card[]): [Card[], Card[]] {
  const shuffledDeck = shuffleDeck(deck);

  // Split the deck into two halves
  const half1 = shuffledDeck.slice(0, shuffledDeck.length / 2);
  const half2 = shuffledDeck.slice(shuffledDeck.length / 2);

  return [half1, half2];
}
