import "./styles.css";
import characters from "./componenets/Characters.js";
import CharacterCreation from "./componenets/CreateCharacter";
import List from "./componenets/List";
import { useState, useRef } from "react";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [heros, setHeros] = useState([
    {
      name: "Boro",
      class: "Mage",
      strength: "12",
      attack: "3",
      defence: "1",
      intelligence: "1",
      id: uuidv4()
    },
    {
      name: "Miro",
      class: "Warrior",
      strength: "9",
      attack: "4",
      defence: "3",
      intelligence: "9",
      id: uuidv4()
    },
    {
      name: "Babo",
      class: "Necromancer",
      strength: "20",
      attack: "16",
      defence: "13",
      intelligence: "0",
      id: uuidv4()
    },
    {
      name: "Luka",
      class: "No class",
      strength: "6",
      attack: "2",
      defence: "22",
      intelligence: "66",
      id: uuidv4()
    }
  ]);

  console.log("App console " + heros);
  return (
    <div className="App">
      <h1>🧙 RPG Characters</h1>
      <h2>Add, edit or remove attritubtes and traits!!</h2>
      <CharacterCreation hero={(heros, setHeros)} />
      <List characters={heros} />
      <div>
        <p>map test </p>
        {heros.map((hero) => (
          <div key={hero.id}>
            <p>{hero.name}</p>
            <p>{hero.class}</p>
            <button disabled> remove char </button>
          </div>
        ))}
      </div>
    </div>
  );
}
export default App;
