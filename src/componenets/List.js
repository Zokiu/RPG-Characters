const List = (heros) => {
  console.log(heros);
  return (
    <div>
      <div className="users">list componenet is loaded</div>
      {heros.characters.map((character) => (
        <div key={character.id} className="hero">
          <p>Name: {character.name} </p>
          <p>Class: {character.class} </p>
          <p>Strength: {character.strength} </p>
          <p>Attack: {character.attack} </p>
          <p>Defence: {character.defence} </p>
          <p>Intelligence: {character.intelligence} </p>
        </div>
      ))}
    </div>
  );
};

export default List;
