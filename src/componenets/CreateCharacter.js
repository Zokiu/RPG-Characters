import { useState, useRe, useEffect } from "react";
import React from "react";
import { v4 as uuidv4 } from "uuid";
//wont work unless react is imported!

function CreateCharacter(heros, setHeros, hero) {
  console.log("firist heros " + { heros });
  console.log("second hero " + hero);
  console.log(JSON.stringify(heros));
  const usernameInputRef = React.useRef();

  formHandler = (event, heros, setHeros, hero) => {
    console.log("formHandler " + heros);
    event.preventDefault();
    //load data from id to console?
    // const value = event.target.elements.name.value;
    // console.log(event.target.elements.name.value);
    // data.push(...value)
    console.log(usernameInputRef.current.value);
    let heroname = usernameInputRef.current.value;
    const updateHeros = [
      ...heros,
      {
        id: uuidv4(),
        name: heroname
      }
    ];
    setHeros(updateHeros);
  };
  return (
    <div>
      <p>Character creation</p>
      <form onSubmit={formHandler} className="charCreation">
        <label>
          Name:
          <input ref={usernameInputRef} id="name" type="text" />
        </label>
        <label>
          Class:
          <input type="text" id="class" />
        </label>
        <input type="submit" value="Create ✨" />
      </form>
    </div>
  );
}
export default CreateCharacter;
