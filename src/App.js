import React, { useState } from "react";

const momentos = [
  "Beso al atardecer",
  "Abrazados bajo una manta",
  "Dándose un beso en la frente",
  "Caminando de la mano",
  "Saltando juntos",
  "Bailando en pijama"
];

export default function App() {
  const [momentoActual, setMomentoActual] = useState("");
  const [foto, setFoto] = useState(null);
  const [galeria, setGaleria] = useState([]);

  const escogerMomento = () => {
    const random = Math.floor(Math.random() * momentos.length);
    setMomentoActual(momentos[random]);
  };

  const subirFoto = (e) => {
    const file = e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setFoto(url);
      setGaleria([...galeria, { momento: momentoActual, src: url }]);
    }
  };

  return (
    <div className="min-h-screen bg-pink-50 p-4 flex flex-col items-center font-sans">
      <button
        onClick={escogerMomento}
        className="bg-pink-200 text-pink-800 font-semibold py-2 px-4 rounded-full shadow hover:bg-pink-300 transition"
      >
        💖 Sorpréndeme con un momento 💖
      </button>

      {momentoActual && (
        <div className="bg-white rounded-xl shadow-md mt-6 p-6 text-center w-full max-w-md">
          <h2 className="text-2xl font-bold text-pink-700 mb-2">
            {momentoActual} 💞
          </h2>
          <input
            type="file"
            accept="image/*"
            onChange={subirFoto}
            className="file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-pink-100 file:text-pink-700 hover:file:bg-pink-200"
          />
          {foto && <img src={foto} alt="subida" className="mt-4 rounded-lg shadow-md" />}
        </div>
      )}

      {galeria.length > 0 && (
        <div className="mt-10 w-full max-w-4xl">
          <h3 className="text-xl font-semibold text-pink-800 mb-4">
            📸 Nuestro álbum de recuerdos 💗
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {galeria.map((foto, index) => (
              <div
                key={index}
                className="bg-white p-2 rounded-xl shadow flex flex-col items-center"
              >
                <img
                  src={foto.src}
                  alt={`Momento ${index + 1}`}
                  className="rounded-md mb-2 w-full object-cover h-32"
                />
                <p className="text-xs text-pink-600 text-center">{foto.momento}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
