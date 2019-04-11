import React, { Component } from 'react';
import CharactersList from './CharactersList';
import CharactersHouseContainer from './CharactersHouseContainer';
import CreateCharacterForm from './CreateCharacterForm';
import SearchForm from './SearchForm';

class CharactersContainer extends Component {

  state = {
    characters:[],
    filteredCharacters:[],
    seachParams: ''
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
    if(foundCharacter.house !== newHouse){
      foundCharacter.house = newHouse;
      this.setState({
          characters: charactersCopy
        }, () => this.filterCharactersDisplayed())
    }
  }

  characterSubmitHandler = (event) => {
    event.preventDefault();
    const character = {
      name: event.target.name.value,
      age: event.target.age.value,
      house: event.target.house.value,
      role: event.target.role.value,
      image1: event.target.image1.value,
      image2:event.target.image2.value
    }

    this.setState({
        characters: [character, ...this.state.characters]
      }, () => this.filterCharactersDisplayed());
    }

    filterCharactersDisplayed = () => {
      const copyToFilter = [...this.state.characters];
      const filteredCopy  = copyToFilter.filter(character => {
        if(character.name.toLowerCase().startsWith(this.state.seachParams.toLowerCase()) || character.house.toLowerCase().startsWith(this.state.seachParams.toLowerCase())){
          return character
        }
      })
      this.setState({
        filteredCharacters:filteredCopy
      })

    }

    handleSearchChange = (event) => {
      this.setState({
        seachParams: event.target.value
      }, () => this.filterCharactersDisplayed())
    }




  render() {

    return (
      <section>
        <h1>Hogwarts</h1>
          <SearchForm handleSearchChange={this.handleSearchChange} />
          <CreateCharacterForm characterSubmitHandler={this.characterSubmitHandler}/>
          <CharactersList submitUpdateHandle={this.submitUpdateHandle} characters={this.state.filteredCharacters} />
          <CharactersHouseContainer submitUpdateHandle={this.submitUpdateHandle} characters={this.state.filteredCharacters} />
     </section>
    );
  }

}

export default CharactersContainer;
