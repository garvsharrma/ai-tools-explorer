import React, { useEffect, useState } from "react";
import api from "../api";
import Spinner from "../components/Spinner";

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchFavorites = async () => {
    try {
      const res = await api.get("/favorites");
      setFavorites(res.data);
    } catch (err) {
      console.error("Error loading favorites");
    } finally {
      setLoading(false);
    }
  };

  const removeFavorite = async (id) => {
    try {
      await api.delete(`/favorites/${id}`);
      setFavorites((prev) => prev.filter((tool) => tool.id !== id));
    } catch (err) {
      console.error("Failed to remove favorite");
    }
  };

  useEffect(() => {
    fetchFavorites();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>My Favorites</h2>
      {loading ? (
        <Spinner />
      ) : favorites.length === 0 ? (
        <p>No favorites yet.</p>
      ) : (
        favorites.map((tool) => (
          <div key={tool.id} style={{ border: "1px solid #ccc", padding: "10px", marginBottom: "10px" }}>
            <h3>{tool.name}</h3>
            <p>{tool.category}</p>
            <button onClick={() => removeFavorite(tool.id)}>❌ Remove</button>
          </div>
        ))
      )}
    </div>
  );
};

export default Favorites;
