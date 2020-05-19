import React from 'react';

const HouseSelector = (props) => {
  const options = props.characters.map(character => {
    return<option value={character.name} key={character.name}>
    {character.name}
    </option>
  })

  return (
    <select name="character-selector" id="character-selector">
      <option>
        Choose a character...
      </option>
        {options}
    </select>
  )
};

export default HouseSelector;
