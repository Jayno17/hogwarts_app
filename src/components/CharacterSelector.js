import React from 'react';

const CharacterSelector = (props) => {
  const options = props.characters.map(character => {
    return<option value={character.name} key={character.name}>
    {character.name}
    </option>
  })

  function handleChange(event) {
    props.onCharacterSelected(event.target.value);
  }

  return (
    <div class="custom-select">
    <select name="character-selector" onChange={handleChange} defaultValue="default">
      <option disabled value="defaultValue">
        Choose a character...
      </option>
        {options}
    </select>
    </div>
  )
};

export default CharacterSelector;
