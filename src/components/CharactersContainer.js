import React, { Component } from 'react';
import CharactersList from './CharactersList';

class CharactersContainer extends Component {

  state = {
    characters:[],
    filteredCharacters:[],
    nameFilter: '',
    houseFilter:''
  }

  componentDidMount(){
    fetch('http://localhost:3001/potterStuff')
    .then(reponse => reponse.json())
    .then(parsedReponse => {
      this.setState({
        characters: parsedReponse,
        filteredCharacters:parsedReponse
      })
    })
  }

  submitUpdateHandle = (id, event) => {
    event.preventDefault();
    const newHouse = event.target.house.value;
    const charactersCopy = [...this.state.characters];

    const foundCharacter = charactersCopy.find(character =>
        character.image1 === id || character.image2 === id
    );
    console.log(newHouse);
    console.log(foundCharacter);

    if(foundCharacter.house !== newHouse){

      foundCharacter.house = newHouse;

      this.setState({
          characters: charactersCopy,
          filteredCharacters: charactersCopy,
        }, () => console.log(this.state.characters))

    }
  }

  render() {

    return (
      <section>
          <CharactersList submitUpdateHandle={this.submitUpdateHandle} characters={this.state.filteredCharacters} />
      </section>
    );
  }

}

export default CharactersContainer;
