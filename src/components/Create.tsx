import React, { useState } from "react";
import { useLocation, useHistory } from "react-router-dom";
import { Card, createDeck } from "./CreateDeck";
import ShowCard from "./ShowCard";
import { compare, updateDecks } from "./Logic";
import Action from "./Action";

// Define the location type interface
interface LocationState {
  player: string;
}

export const Create = () => {
  const location = useLocation<LocationState>(); // Explicitly typing location to match state shape
  const history = useHistory();
  const player = location.state?.player || "Unknown Player"; // Get the player name from the state

  const deck = createDeck();
  const [p1, setP1] = useState<Card[]>(deck.slice(0, deck.length / 2)); // Player 1's deck
  const [p2, setP2] = useState<Card[]>(deck.slice(deck.length / 2)); // Player 2's deck

  const [currentCardIndexP1, setCurrentCardIndexP1] = useState(0);
  const [currentCardIndexP2, setCurrentCardIndexP2] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [tie, setTie] = useState(0);

  // State to track lost and gained cards for both players
  const [lostCardsP1, setLostCardsP1] = useState<Card[]>([]);
  const [lostCardsP2, setLostCardsP2] = useState<Card[]>([]);
  const [gainedCardsP1, setGainedCardsP1] = useState<Card[]>([]);
  const [gainedCardsP2, setGainedCardsP2] = useState<Card[]>([]);

  const topCardP1 = p1[currentCardIndexP1];
  const topCardP2 = p2[currentCardIndexP2];

  // Handle card click for Player 1
  const handleCardClickP1 = () => {
    setIsFlipped((prev) => {
      if (prev) {
        if (compare(topCardP1, topCardP2) === 0 && tie === 0) {
          setTie(1);
          while (tie >= 1) {
            if (
              p1.length > currentCardIndexP1 + 4 * tie &&
              p2.length > currentCardIndexP2 + 4 * tie
            ) {
              if (
                p1[currentCardIndexP1 + 4 * tie] ===
                p2[currentCardIndexP2 + 4 * tie]
              ) {
                setTie(tie + 1);
              }
            }
          }
          return !prev;
        }

        setTie(0);
        const [updatedP1, updatedP2] = updateDecks(
          p1,
          p2,
          topCardP1,
          topCardP2
        );
        setP1(updatedP1);
        setP2(updatedP2);

        // Update lost and gained cards based on the comparison
        if (compare(topCardP1, topCardP2) === 1) {
          setGainedCardsP1((prev) => [topCardP1, ...prev]); // Add to the top
          setLostCardsP2((prev) => [topCardP2, ...prev]); // Add to the top
        } else if (compare(topCardP1, topCardP2) === 2) {
          setGainedCardsP2((prev) => [topCardP2, ...prev]); // Add to the top
          setLostCardsP1((prev) => [topCardP1, ...prev]); // Add to the top
        }
      }
      return !prev;
    });
  };

  const handleBackButtonClick = () => {
    history.push("/");
  };

  return (
    <div>
      {/* Back Button */}
      <button
        onClick={handleBackButtonClick}
        style={{
          position: "absolute",
          top: "10px",
          right: "10px",
          padding: "10px 20px",
          fontSize: "16px",
          backgroundColor: "#4CAF50",
          color: "white",
          border: "none",
          borderRadius: "5px",
        }}
      >
        Back to Home
      </button>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "50px",
          marginTop: "50px",
        }}
      >
        {/* Player 1's Section (Clickable Card) */}
        <div style={{ textAlign: "center", marginTop: "20px" }}>
          <h3 style={{ marginBottom: "40px" }}>{`Cards Left: ${
            p1.length - currentCardIndexP1
          }`}</h3>
          {topCardP1 ? (
            tie ? (
              <div
                onClick={handleCardClickP1}
                style={{
                  display: "flex",
                  flexDirection: "row", // Ensure cards are aligned horizontally
                  justifyContent: "flex-start", // Align cards to the left
                  alignItems: "center",
                }}
              >
                {/* First, render the top card, which should be on the left */}
                <div style={{ marginRight: "5px" }}>
                  <ShowCard card={topCardP1} isFlipped={isFlipped} />
                </div>

                {/* Render additional cards from p1 starting from the current index */}
                {[...Array(tie)].map((_, index) => (
                  <div key={index} style={{ marginRight: "5px" }}>
                    <ShowCard
                      card={p1[currentCardIndexP1 + (index + 1) * 3]}
                      isFlipped={isFlipped}
                    />
                  </div>
                ))}
              </div>
            ) : (
              <div
                onClick={handleCardClickP1}
                style={{
                  display: "flex",
                  flexDirection: "row", // Ensure cards are aligned horizontally
                  justifyContent: "flex-start", // Align cards to the left
                  alignItems: "center",
                }}
              >
                {/* Only the top card displayed on the left */}
                <div style={{ marginRight: "5px" }}>
                  <ShowCard card={topCardP1} isFlipped={isFlipped} />
                </div>
              </div>
            )
          ) : (
            <h4>No more cards!</h4>
          )}

          <h5 style={{ marginTop: "340px" }}>{player}</h5>
        </div>

        {/* Player 2's Section (Automatically Flips with Player 1's Card) */}
        <div style={{ textAlign: "center", marginTop: "20px" }}>
          <h3 style={{ marginBottom: "40px" }}>{`Cards Left: ${
            p2.length - currentCardIndexP2
          }`}</h3>
          {topCardP2 ? (
            <div style={{ display: "flex", alignItems: "center" }}>
              {[...Array(tie)].map((_, index) => (
                <div key={index}>
                  <ShowCard
                    card={p2[currentCardIndexP2 + (index + 1) * 3]}
                    isFlipped={isFlipped}
                  />
                </div>
              ))}
              <div style={{ display: "flex", alignItems: "center" }}>
                <ShowCard card={topCardP2} isFlipped={isFlipped} />
              </div>
            </div>
          ) : (
            <h4>No more cards!</h4>
          )}

          <h5 style={{ marginTop: "340px" }}>Spencer</h5>
        </div>
      </div>
    </div>
  );
};
