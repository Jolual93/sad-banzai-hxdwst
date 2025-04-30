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
  "Foto en una carrera de cucharas y huevo",
  // Puedes seguir añadiendo los demás aquí
];

export default function App() {
  const [momentoActual, setMomentoActual] = useState("");
  const [foto, setFoto] = useState(null);

  function escogerMomento() {
    const random = Math.floor(Math.random() * momentos.length);
    setMomentoActual(momentos[random]);
    setFoto(null);
  }

  function handleFoto(e) {
    if (e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (ev) => setFoto(ev.target.result);
      reader.readAsDataURL(e.target.files[0]);
    }
  }

  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <button onClick={escogerMomento} style={{ padding: "10px 20px" }}>
        Sorpréndeme con un momento
      </button>

      {momentoActual && (
        <div
          style={{
            marginTop: "2rem",
            border: "1px solid #ccc",
            padding: "1rem",
            borderRadius: "10px",
          }}
        >
          <h2 style={{ fontSize: "20px", fontWeight: "bold" }}>
            {momentoActual}
          </h2>

          <input type="file" accept="image/*" onChange={handleFoto} />

          {foto && (
            <img
              src={foto}
              alt="Foto subida"
              style={{
                maxWidth: "100%",
                marginTop: "1rem",
                borderRadius: "8px",
              }}
            />
          )}
        </div>
      )}
    </div>
  );
}
