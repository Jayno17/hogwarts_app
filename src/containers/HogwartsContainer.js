import React from 'react';
import HouseSelector from '../components/HouseSelector';
import CharacterSelector from '../components/CharacterSelector';
import CharacterDetail from '../components/CharacterDetail';
import Hogwarts from './Hogwarts.css';

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
        <h2>Welcome To Hogwarts</h2>
        <HouseSelector />
        <CharacterSelector characters={this.state.characters} onCharacterSelected={this.handleCharacterSelected} />
        <CharacterDetail character={selectedCharacter} />
      </>
    );
  }
}

export default HogwartsContainer;
