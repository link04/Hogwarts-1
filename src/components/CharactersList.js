import React, { PureComponent } from 'react';
import CharacterCard from './CharacterCard';

class CharactersList extends PureComponent {

    // state = {
    //   nameFilter: '',
    //   houseFilter:''
    // }

  render() {

      const charactersToDisplay = this.props.characters.map(character =>
        <CharacterCard submitUpdateHandle={this.props.submitUpdateHandle} key={character.name + character.id} character={character} />
      )



    return (
      <div className="character-container">
        {charactersToDisplay}
      </div>
    );
  }
}

export default CharactersList;
