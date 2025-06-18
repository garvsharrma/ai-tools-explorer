import React, { useState } from "react";
import api from "../api";
import confetti from "canvas-confetti";

const ToolCard = ({ tool }) => {
  const [message, setMessage] = useState("");

const cardStyle = {
  border: "1px solid #ccc",
  borderRadius: "8px",
  padding: "16px",
  marginBottom: "16px",
  background: "white",
};

const handleFavorite = async () => {
  try {
    await api.post("/favorites", { toolId: tool.id });
    setMessage("❤️ Saved!");
    confetti(); // simple burst!
  } catch (err) {
    setMessage(err.response?.data?.message || "Error");
  }
};

    return (
    <div style={cardStyle}>
      <h3>{tool.name}</h3>
      <p>{tool.category}</p>
      <button onClick={handleFavorite}>❤️ Favorite</button>
        {message && <p style={{ color: "green" }}>{message}</p>}
    </div>
  );
};

export default ToolCard;


