"use client";
import { useState } from "react";

export default function AdminPage() {
  const [prescription, setPrescription] = useState("");
  const [alternatives, setAlternatives] = useState([
    { name: "", source: "", use: "", dosage: "" }
  ]);

  const addAlternative = () => {
    setAlternatives([...alternatives, { name: "", source: "", use: "", dosage: "" }]);
  };

  const updateAlternative = (index, field, value) => {
    const updated = [...alternatives];
    updated[index][field] = value;
    setAlternatives(updated);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("/api/add-remedy", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prescription, alternatives })
    });

    const data = await res.json();
    if (data.success) {
      alert("Remedy added successfully!");
      setPrescription("");
      setAlternatives([{ name: "", source: "", use: "", dosage: "" }]);
    } else {
      alert("Error: " + data.error);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Add New Prescription</h1>
      <form onSubmit={handleSubmit}>
        <label>Prescription Name:</label>
        <input
          value={prescription}
          onChange={(e) => setPrescription(e.target.value)}
          required
        />

        <h3>Alternatives</h3>
        {alternatives.map((alt, i) => (
          <div key={i}>
            <input placeholder="Name" value={alt.name} onChange={(e) => updateAlternative(i, "name", e.target.value)} />
            <input placeholder="Source" value={alt.source} onChange={(e) => updateAlternative(i, "source", e.target.value)} />
            <input placeholder="Use" value={alt.use} onChange={(e) => updateAlternative(i, "use", e.target.value)} />
            <input placeholder="Dosage" value={alt.dosage} onChange={(e) => updateAlternative(i, "dosage", e.target.value)} />
          </div>
        ))}

        <button type="button" onClick={addAlternative}>+ Add Alternative</button>
        <br /><br />
        <button type="submit">Save</button>
      </form>
    </div>
  );
}
