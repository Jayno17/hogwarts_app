import React from 'react';

const HouseSelector= (props) => {

  return (
    <div class="custom-select">
    <select name="house-selector" id="house-selector">
      <option>Choose a House</option>
      <option value="gryffindor">Gryffindor</option>
      <option value="hufflepuff">Hufflepuff</option>
      <option value="ravenclaw">Ravenclaw</option>
      <option value="slytherin">Slytherin</option>

    </select>
    </div>
    )
  };

export default HouseSelector;
