import React, { useState } from "react";

const momentos = [
  "Beso al atardecer",
  "Abrazados bajo una manta",
  "Dándose un beso en la frente",
  "Caminando de la mano",
  "Sacando la lengua los dos",
  "Usando disfraces ridículos",
  "En la arena, sin zapatos",
  "Saltando juntos",
  "Foto en medio de una carcajada",
  "Bailando en pijama",
  "Jugando con confeti",
  "Foto en una carrera de cucharas 🥄"
];

export default function App() {
  const [momentoActual, setMomentoActual] = useState(null);

  const obtenerMomento = () => {
    const random = Math.floor(Math.random() * momentos.length);
    setMomentoActual(momentos[random]);
  };

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff4f7",
        fontFamily: "sans-serif",
        textAlign: "center"
      }}
    >
      <h1 style={{ color: "#c2185b", fontSize: "2rem", marginBottom: 30 }}>
        Bienvenidos a su historia de amor ❤️‍🔥
      </h1>
      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        <span style={{ fontSize: "2rem" }}>🐿️</span>
        <button
          onClick={obtenerMomento}
          style={{
            padding: "14px 28px",
            fontSize: "1.1rem",
            backgroundColor: "#f06292",
            border: "none",
            borderRadius: "30px",
            color: "white",
            fontWeight: "bold",
            boxShadow: "0 6px 12px rgba(0, 0, 0, 0.2)",
            cursor: "pointer",
            transition: "transform 0.2s"
          }}
          onMouseOver={(e) => (e.target.style.transform = "scale(1.07)")}
          onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
        >
          💖 Sorpréndeme con un momento 💖
        </button>
        <span style={{ fontSize: "2rem" }}>🐱</span>
      </div>
      {momentoActual && (
        <div
          style={{
            marginTop: 40,
            padding: 24,
            borderRadius: 20,
            backgroundColor: "#ffe3ec",
            color: "#880e4f",
            fontSize: "1.5rem",
            fontWeight: "bold",
            maxWidth: 320,
            textAlign: "center",
            boxShadow: "0 4px 8px rgba(0,0,0,0.1)"
          }}
        >
          {momentoActual}
        </div>
      )}
    </div>
  );
}
