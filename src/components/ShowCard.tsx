import React from "react";
import CardBack from "../Images/blue_back.png"; // Importing the card back image

// Props definition for the ShowCard component
interface ShowCardProps {
  card: {
    suit: string;
    value: string;
  };
  isFlipped: boolean; // Prop to handle card flip state
}

const ShowCard: React.FC<ShowCardProps> = ({ card, isFlipped }) => {
  const [cardImage, setCardImage] = React.useState<string | null>(null);

  // Dynamically load the card image based on card value and suit
  React.useEffect(() => {
    if (card) {
      import(`../Images/${card.value}${card.suit.charAt(0)}.png`)
        .then((image) => {
          setCardImage(image.default); // Set the image in state
        })
        .catch((error) => {
          console.error("Card image not found", error);
        });
    }
  }, [card]);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "20px",
        cursor: "pointer",
        transformStyle: "preserve-3d", // Required for the 3D flip effect
        transform: isFlipped ? "rotateY(0deg)" : "rotateY(180deg)",
        transition: "transform 0.6s cubic-bezier(0.68, -0.55, 0.27, 1.55)", // Smooth left-to-right flip
      }}
    >
      <div
        style={{
          position: "relative",
          width: "150px",
          height: "auto",
          perspective: "1000px",
        }}
      >
        <div
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            backfaceVisibility: "hidden", // Prevent backface from being visible when flipped
          }}
        >
          {/* Front of the card */}
          {isFlipped ? (
            <img
              src={cardImage || ""}
              alt={`${card.value} of ${card.suit}`}
              style={{ width: "150px", height: "auto" }}
            />
          ) : (
            <img
              src={CardBack}
              alt="Card Back"
              style={{ width: "150px", height: "auto" }}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ShowCard;
