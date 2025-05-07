import React, { useState } from "react";

const momentos = `
Beso al atardecer
Abrazados bajo una manta
Dándose un beso en la frente
Caminando de la mano
Mirándose a los ojos
Cena con velas
Compartiendo un café
Sonriendo con los ojos cerrados
En la cama, mirándose
Acariciando el rostro del otro
Escribiendo una carta de amor
En la playa al anochecer
Bailando lento
Llevando flores
En una banca del parque
Dibujando un corazón juntos
Poniéndose la mano en el pecho
Tomados de la cintura
Cantándose una canción
Compartiendo un postre
Tapándose con una sola bufanda
Cruzando miradas cómplices
Tocándose las narices
Con una foto polaroid entre los labios
Haciendo un picnic
Leyendo juntos un libro de amor
Imitando una escena de película
Con la ropa del otro
Bailando como locos en la calle
Sacando la lengua los dos
Usando disfraces ridículos
Jugando con espuma de afeitar
Posando como superhéroes
Foto bajo la ducha con ropa
Uno cargando al otro sin sentido
Poniéndose caras de monstruo
Sosteniendo objetos como micrófonos
Con calcetines en las manos
En la cocina haciendo un desastre
Fotos con ropa al revés
Jugando con pintura de dedos
Enfundados en sábanas como fantasmas
Con gafas gigantes
Haciendo muecas extremas
Usando filtros absurdos
En el suelo como si se hubieran caído
Imitando emojis
En una posición de yoga imposible
Simulando estar atrapados
Como si fueran personajes de anime
Como si acabaran de pelear (falsamente dramáticos)
Caminando por un sendero
Tocando hojas o flores
Bajo un árbol grande
Sentados en una roca
Mojándose con lluvia suave
En la arena, sin zapatos
Sosteniendo frutas del campo
Entre plantas altas
Al lado de un río
Mirando al horizonte
Con los pies sumergidos en agua
En una hamaca
Con el viento alborotando el cabello
Junto a una fogata
Tocando la corteza de un árbol
Con un animalito silvestre
Mirando las nubes tumbados
Sosteniendo una flor
Caminando descalzos
Con hojas secas en las manos
A la sombra de un árbol
Acariciando la tierra
Tocando el agua con los dedos
Sentados sobre el pasto
En una cabaña o lugar rústico
Haciendo burbujas de jabón
Jugando a hacerse cosquillas
Saltando juntos
Foto en medio de una carcajada
Corriendo con un globo
Inflando los cachetes
Comiendo algo y manchándose
Simulando una pelea de almohadas
Jugando con plastilina
Con gafas de sol grandes
Haciendo una torre humana
Bailando en pijama
Haciendo como si uno fuera un zombi
Jugando a ver quién se ríe primero
Tomando helado de forma exagerada
Cantando a gritos
Foto mientras juegan cartas o dados
Simulando ser chefs famosos
Riéndose de una caída falsa
Disfrazados de abuelitos
Jugando con confeti
Haciendo una cara seria por competencia
Haciendo una burbuja con chicle
Tapándose los ojos el uno al otro
Foto en una carrera de cucharas y huevo
`.split("\n").filter(m => m.trim() !== "");

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
        fontFamily: "sans-serif"
      }}
    >
      <h1 style={{ color: "#c2185b", fontSize: "1.8rem" }}>
        Bienvenidos a su historia de amor ❤️🔥
      </h1>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          marginTop: 20
        }}
      >
        <span style={{ fontSize: "1.8rem", animation: "bounce 2s infinite" }}>🐿️</span>
        <button
          onClick={obtenerMomento}
          style={{
            padding: "12px 24px",
            fontSize: "1rem",
            backgroundColor: "#f06292",
            border: "none",
            borderRadius: "25px",
            color: "white",
            fontWeight: "bold",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
            cursor: "pointer",
            transition: "transform 0.2s"
          }}
          onMouseOver={(e) => (e.target.style.transform = "scale(1.05)")}
          onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
        >
          💖 Sorpréndeme con un momento 💖
        </button>
        <span style={{ fontSize: "1.8rem", animation: "bounce 2s infinite" }}>🐱</span>
      </div>

      <input type="file" style={{ marginTop: 20 }} />

      {momentoActual && (
        <div
          style={{
            marginTop: 30,
            padding: 20,
            borderRadius: 15,
            backgroundColor: "#ffe3ec",
            color: "#880e4f",
            fontSize: "1.4rem",
            fontWeight: "bold",
            maxWidth: 300,
            textAlign: "center"
          }}
        >
          {momentoActual}
        </div>
      )}
    </div>
  );
}

