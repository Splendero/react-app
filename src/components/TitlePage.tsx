import React from "react";
import { useHistory } from "react-router-dom";

interface Props {
  title: string;
  subtitle: string;
  names: string[];
}

export const TitlePage = ({ title, subtitle, names }: Props) => {
  const history = useHistory();

  const handleButtonClick = (player: string) => {
    history.push("/create", { player });
  };

  const handleRulesButtonClick = () => {
    history.push("/rules");
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1 style={{ textDecoration: "underline" }}>{title}</h1>
      <h2>{subtitle}</h2>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "20px",
        }}
      >
        <button
          style={{
            padding: "10px 2%",
            fontSize: "16px",
            flexGrow: 1,
            margin: "0 10px",
            maxWidth: "200px",
          }}
          onClick={() => handleButtonClick(names[0])}
        >
          {names[0]}
        </button>

        <button
          style={{
            padding: "10px 2%",
            fontSize: "16px",
            flexGrow: 1,
            margin: "0 10px",
            maxWidth: "200px",
          }}
          onClick={() => handleButtonClick(names[1])}
        >
          {names[1]}
        </button>
      </div>

      {/* Rules button underneath the player names */}
      <div style={{ marginTop: "20px" }}>
        <button
          style={{
            padding: "10px 2%",
            fontSize: "16px",
            maxWidth: "200px",
            margin: "10px",
          }}
          onClick={handleRulesButtonClick}
        >
          Rules
        </button>
      </div>
    </div>
  );
};
