import { useState, useEffect } from "react";

const PokeDex = () => {
  const getOnePokemon = async (id) => {
    // const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);
    // const jsonData = await response.json();
    // setName(jsonData.name.toUpperCase());
    // console.log(name);
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
      .then(response => response.json())
      .then(data => setName(data.name.toUpperCase()))
      .catch(error => console.log(error));

    // return jsonData;
  }

  const [index, setIndex] = useState(1);
  const [name, setName] = useState("Bulbasaur");

  const handleClick = (index) => {
    setIndex(index);
    getOnePokemon(index);
  }

  useEffect(() => {
    getOnePokemon(index);
  }, []);

  return (
    <div>
      <h1>PokeDex</h1>
      {/* select a pokemon */}

      {/* display it's name */}
      <h2>{name}</h2>
      {/* button to go back a pokemon, button to move forward */}
      <div>
        <button disabled={index===1} onClick={() => handleClick(index-1)}>
          Back
        </button>
        <button disabled={index===151} onClick={() => handleClick(index+1)}>
          Forward
        </button>
      </div>
    </div>
  )
}

export default PokeDex;