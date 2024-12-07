import React from "react";
import { useHistory } from "react-router-dom";

export const Rules = () => {
  const history = useHistory();

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

      <h1>Rules</h1>
      <h2>Goal</h2>
      <p>The goal is to be the first player to win all 52 cards</p>
      <h2>The Deal</h2>
      <p>
        The deck is divided evenly, with each player receiving 26 cards, dealt
        one at a time, face down. Anyone may deal first. Each player places
        their stack of cards face down, in front of them.
      </p>
      <h2>The Play</h2>
      <p>
        Each player turns up a card at the same time and the player with the
        higher card takes both cards and puts them, face down, on the bottom of
        his stack. If the cards are the same rank, it is War. Each player turns
        up one card face down and one card face up. The player with the higher
        cards takes both piles (six cards). If the turned-up cards are again the
        same rank, each player places another card face down and turns another
        card face up. The player with the higher card takes all 10 cards, and so
        on.
      </p>
      <h2>How to Keep Score</h2>
      <p>The game ends when one player has won all the cards.</p>
      <h2>Player Selection</h2>
      <p>
        Select Brett or Bahman to be your player. You will be playing against
        Spencer.
      </p>
    </div>
  );
};
