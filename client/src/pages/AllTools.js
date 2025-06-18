import React, { useState, useEffect } from "react";
import api from "../api";
import ToolCard from "../components/ToolCard";

const AllTools = () => {
  const [tools, setTools] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [category, setCategory] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchTools = async () => {
      const res = await api.get("/tools");
      setTools(res.data);
      setFiltered(res.data);
    };
    fetchTools();
  }, []);

  useEffect(() => {
    let result = tools;

    if (category) {
      result = result.filter(tool =>
        tool.category.toLowerCase() === category.toLowerCase()
      );
    }

    if (search) {
      result = result.filter(tool =>
        tool.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    setFiltered(result);
  }, [tools, category, search]);

  return (
    <div style={{ padding: "20px" }}>
      <h2>All AI Tools</h2>

      <input
        type="text"
        placeholder="Search by name"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ marginRight: "10px", padding: "5px", width: "200px" }}
      />

      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        style={{ padding: "5px" }}
      >
        <option value="">All Categories</option>
        <option value="Writing">Writing</option>
        <option value="Image">Image</option>
        <option value="Marketing">Marketing</option>
      </select>

      <div style={{ marginTop: "20px" }}>
        {filtered.length === 0 ? (
          <p>No tools found.</p>
        ) : (
          filtered.map(tool => <ToolCard key={tool.id} tool={tool} />)
        )}
      </div>
    </div>
  );
};

export default AllTools;
