import React, { useState } from "react";
import { useLocation, useHistory } from "react-router-dom";
import { Card, createDeck } from "./CreateDeck";
import ShowCard from "./ShowCard";
import { compare, updateDecks } from "./Logic";

export const Create = () => {
  const location = useLocation();
  const history = useHistory();
  const player = location.state?.player || "Unknown Player";

  const deck = createDeck();
  const [p1, setP1] = useState<Card[]>(deck.slice(0, deck.length / 2)); // Player 1's deck
  const [p2, setP2] = useState<Card[]>(deck.slice(deck.length / 2)); // Player 2's deck

  const [currentCardIndexP1, setCurrentCardIndexP1] = useState(0);
  const [currentCardIndexP2, setCurrentCardIndexP2] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [showAlert, setShowAlert] = useState(false); // State to control alert display
  const [alertMessage, setAlertMessage] = useState(""); // State for dynamic alert message

  const topCardP1 = p1[currentCardIndexP1];
  const topCardP2 = p2[currentCardIndexP2];

  // Handle card click for Player 1
  const handleCardClickP1 = () => {
    setIsFlipped((prev) => {
      if (prev) {
        setShowAlert(false);
        // If flipping back, update both players' decks
        if (compare(topCardP1, topCardP2) === 0) {
          setAlertMessage("It's a tie!"); // Update the alert message
          setShowAlert(true); // Show the alert when there's a tie
        }
        const [updatedP1, updatedP2] = updateDecks(
          p1,
          p2,
          topCardP1,
          topCardP2
        );
        setP1(updatedP1);
        setP2(updatedP2);
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
            <div onClick={handleCardClickP1}>
              <ShowCard
                card={topCardP1}
                player="player1"
                isFlipped={isFlipped}
              />
            </div>
          ) : (
            <h4>No more cards!</h4>
          )}
          <h5 style={{ marginTop: "240px" }}>{player}</h5>
        </div>

        {/* Player 2's Section (Automatically Flips with Player 1's Card) */}
        <div style={{ textAlign: "center", marginTop: "20px" }}>
          <h3 style={{ marginBottom: "40px" }}>{`Cards Left: ${
            p2.length - currentCardIndexP2
          }`}</h3>
          {topCardP2 ? (
            <ShowCard card={topCardP2} player="player2" isFlipped={isFlipped} />
          ) : (
            <h4>No more cards!</h4>
          )}
          <h5 style={{ marginTop: "240px" }}>Spencer</h5>
        </div>
      </div>

      {/* Show the alert if it's a tie */}
      {showAlert && (
        <div className="alert alert-primary" role="alert">
          {alertMessage} {/* Display the dynamic message */}
        </div>
      )}
    </div>
  );
};
