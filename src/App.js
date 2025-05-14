import React, { useState } from "react";

const categorias = {
  "❤️ Románticos": [
    "Beso al atardecer",
    "Abrazados bajo una manta",
    "Dándose un beso en la frente",
    "Caminando de la mano",
    "Mirándose a los ojos",
    "Cena con velas",
    "Compartiendo un café",
    "Sonriendo con los ojos cerrados",
    "En la cama, mirándose",
    "Acariciando el rostro del otro",
    "Escribiendo una carta de amor",
    "En la playa al anochecer",
    "Bailando lento",
    "Llevando flores",
    "En una banca del parque",
    "Dibujando un corazón juntos",
    "Poniéndose la mano en el pecho",
    "Tomados de la cintura",
    "Cantándose una canción",
    "Compartiendo un postre",
    "Tapándose con una sola bufanda",
    "Cruzando miradas cómplices",
    "Tocándose las narices",
    "Con una foto polaroid entre los labios",
    "Haciendo un picnic",
    "Leyendo juntos un libro de amor"
  ],
  "🤪 Locos": [
    "Imitando una escena de película",
    "Con la ropa del otro",
    "Bailando como locos en la calle",
    "Sacando la lengua los dos",
    "Usando disfraces ridículos",
    "Jugando con espuma de afeitar",
    "Posando como superhéroes",
    "Foto bajo la ducha con ropa",
    "Uno cargando al otro sin sentido",
    "Poniéndose caras de monstruo",
    "Sosteniendo objetos como micrófonos",
    "Con calcetines en las manos",
    "En la cocina haciendo un desastre",
    "Fotos con ropa al revés",
    "Jugando con pintura de dedos",
    "Enfundados en sábanas como fantasmas",
    "Con gafas gigantes",
    "Haciendo muecas extremas",
    "Usando filtros absurdos",
    "En el suelo como si se hubieran caído",
    "Imitando emojis",
    "En una posición de yoga imposible",
    "Simulando estar atrapados",
    "Como si fueran personajes de anime",
    "Como si acabaran de pelear (falsamente dramáticos)"
  ],
  "🌿 Naturales": [
    "Caminando por un sendero",
    "Tocando hojas o flores",
    "Bajo un árbol grande",
    "Sentados en una roca",
    "Mojándose con lluvia suave",
    "En la arena, sin zapatos",
    "Sosteniendo frutas del campo",
    "Entre plantas altas",
    "Al lado de un río",
    "Mirando al horizonte",
    "Con los pies sumergidos en agua",
    "En una hamaca",
    "Con el viento alborotando el cabello",
    "Junto a una fogata",
    "Tocando la corteza de un árbol",
    "Con un animalito silvestre",
    "Mirando las nubes tumbados",
    "Sosteniendo una flor",
    "Caminando descalzos",
    "Con hojas secas en las manos",
    "A la sombra de un árbol",
    "Acariciando la tierra",
    "Tocando el agua con los dedos",
    "Sentados sobre el pasto",
    "En una cabaña o lugar rústico"
  ],
  "😂 Divertidos": [
    "Haciendo burbujas de jabón",
    "Jugando a hacerse cosquillas",
    "Saltando juntos",
    "Foto en medio de una carcajada",
    "Corriendo con un globo",
    "Inflando los cachetes",
    "Comiendo algo y manchándose",
    "Simulando una pelea de almohadas",
    "Jugando con plastilina",
    "Con gafas de sol grandes",
    "Haciendo una torre humana",
    "Bailando en pijama",
    "Haciendo como si uno fuera un zombi",
    "Jugando a ver quién se ríe primero",
    "Tomando helado de forma exagerada",
    "Cantando a gritos",
    "Foto mientras juegan cartas o dados",
    "Simulando ser chefs famosos",
    "Riéndose de una caída falsa",
    "Disfrazados de abuelitos",
    "Jugando con confeti",
    "Haciendo una cara seria por competencia",
    "Haciendo una burbuja con chicle",
    "Tapándose los ojos el uno al otro",
    "Foto en una carrera de cucharas y huevo"
  ]
};

export default function App() {
  const [categoriaActual, setCategoriaActual] = useState("❤️ Románticos");
  const [momentoActual, setMomentoActual] = useState(null);
  const [imagenes, setImagenes] = useState({});
  const [imagenAmpliada, setImagenAmpliada] = useState(null);

  const obtenerMomento = () => {
    const disponibles = categorias[categoriaActual].filter(m => !imagenes[m]);
    const random = Math.floor(Math.random() * disponibles.length);
    setMomentoActual(disponibles[random]);
  };

  const handleImagen = (e) => {
    const file = e.target.files[0];
    if (file && momentoActual) {
      const reader = new FileReader();
      reader.onload = () => {
        setImagenes(prev => ({ ...prev, [momentoActual]: reader.result }));
        setMomentoActual(null);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div style={{ padding: 20, fontFamily: "sans-serif", backgroundColor: "#fff4f7", minHeight: "100vh" }}>
      <h1 style={{ textAlign: "center", color: "#c2185b" }}>Álbum de 101 Momentos 💖</h1>

      <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: 10, marginBottom: 20 }}>
        {Object.keys(categorias).map(cat => (
          <button
            key={cat}
            onClick={() => setCategoriaActual(cat)}
            style={{
              padding: "6px 14px",
              borderRadius: 20,
              border: "none",
              backgroundColor: cat === categoriaActual ? "#f06292" : "#ccc",
              color: "white",
              fontWeight: "bold",
              cursor: "pointer"
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      <div style={{ textAlign: "center" }}>
        <button
          onClick={obtenerMomento}
          style={{
            padding: "10px 22px",
            backgroundColor: "#f06292",
            border: "none",
            color: "white",
            borderRadius: 20,
            fontWeight: "bold",
            cursor: "pointer"
          }}
        >
          💖 Sorpréndeme con un momento
        </button>

        {momentoActual && (
          <div style={{ marginTop: 20 }}>
            <p style={{ fontWeight: "bold", color: "#880e4f" }}>{momentoActual}</p>
            <input type="file" onChange={handleImagen} />
          </div>
        )}
      </div>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
        gap: 10,
        marginTop: 30,
        maxWidth: 800,
        marginInline: "auto"
      }}>
        {categorias[categoriaActual].map((momento, idx) => (
          <div
            key={idx}
            style={{
              height: 100,
              backgroundColor: "#f0f0f0",
              borderRadius: 10,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              overflow: "hidden",
              position: "relative",
              cursor: imagenes[momento] ? "pointer" : "default"
            }}
            onClick={() => imagenes[momento] && setImagenAmpliada(imagenes[momento])}
          >
            {imagenes[momento] ? (
              <img src={imagenes[momento]} alt={momento} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            ) : (
              <span style={{ padding: 8, textAlign: "center", fontSize: ".9rem" }}>#{idx + 1}</span>
            )}
          </div>
        ))}
      </div>

      <div style={{ marginTop: 30 }}>
        <h3 style={{ color: "#c2185b" }}>Momentos completados:</h3>
        <ul style={{ columns: 2 }}>
          {categorias[categoriaActual].map((m, i) => (
            <li key={i} style={{ textDecoration: imagenes[m] ? "line-through" : "none" }}>{m}</li>
          ))}
        </ul>
      </div>

      {imagenAmpliada && (
        <div
          onClick={() => setImagenAmpliada(null)}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(0, 0, 0, 0.8)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 9999
          }}
        >
          <img
            src={imagenAmpliada}
            alt="ampliada"
            style={{ maxHeight: "90vh", maxWidth: "90vw", borderRadius: 12 }}
          />
        </div>
      )}
    </div>
  );
}



