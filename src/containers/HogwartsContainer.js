import React from 'react';
import HouseSelector from '../components/HouseSelector';

class HogwartsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: [],
      selectedCharacterName: ''
    };
    this.handleCharacterSelected = this.handleCharacterSelected.bind(this);
  }

  componentDidMount(){
    const url = 'http://hp-api.herokuapp.com/api/characters';

    fetch(url)
      .then(res => res.json())
      .then(characters => this.setState({ characters: characters }))
      .catch(err => console.error);
  }

  handleCharacterSelected(name) {
    this.setState({selectedCharacterName: name})
  }


  render(){
    const selectedCharacter = this.state.characters.find(character =>
    character.name === this.state.selectedCharacterName)

    return(
      <>
        <h2>Hogwarts Container</h2>
        <HouseSelector characters={this.state.characters} onCharacterSelected={this.handleCharacterSelected} />

      </>
    );
  }
}

export default HogwartsContainer;
