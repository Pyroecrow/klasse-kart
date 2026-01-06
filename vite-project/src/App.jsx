import { useState } from "react";
import "./App.css";

const elever = [
  "Anna", "Emil", "Sara", "Jonas", "Maja", "Noah",
  "Linnea", "Oskar", "Ida", "Lucas", "Thea", "Markus", "Alexander","Henrik", "Mohamed"
];

const ANTALL_PULTER = 15;

// Stokker liste tilfeldig
function shuffleArray(array) {
  const newArray = [...array];

  for (let i = newArray.length - 1; i > 0; i--) {
    const r = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[r]] = [newArray[r], newArray[i]];
  }

  return newArray;
}

// Sørger for at ingen sitter alene
function fordelElever(elever) {
  const shuffled = shuffleArray(elever);

  // Fyll opp med null slik at alle pulter finnes
  while (shuffled.length < ANTALL_PULTER) {
    shuffled.push(null);
  }

  return shuffled;
}

function App() {
  const [klassekart, setKlassekart] = useState(
    fordelElever(elever)
  );

  function lagNyttKlassekart() {
    setKlassekart(fordelElever(elever));
  }

  // Del opp i sider
  const venstreSide = klassekart.slice(0, 6); // 3 rader × 2
  const hoyreSide = klassekart.slice(6);      // 3 rader × 3

  return (
    <div className="container">
      <h1>Klassekart</h1>

      <div className="rom">
        {/* Venstre side */}
        <div className="side toPulter">
          {venstreSide.map((elev, index) => (
            <div className="pult" key={index}>
              {elev ?? "Tom pult"}
            </div>
          ))}
        </div>

        {/* Høyre side */}
        <div className="side trePulter">
          {hoyreSide.map((elev, index) => (
            <div className="pult" key={index}>
              {elev ?? "Tom pult"}
            </div>
          ))}
        </div>
      </div>

      <button onClick={lagNyttKlassekart}>
        Lag nytt klassekart
      </button>
    </div>
  );
}

export default App;
