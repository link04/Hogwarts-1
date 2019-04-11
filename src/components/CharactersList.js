import React, { PureComponent } from 'react';
import CharacterCard from './CharacterCard';

const CharactersList = (props) => {

    const charactersToDisplay = props.characters.map(character =>
      <CharacterCard submitUpdateHandle={props.submitUpdateHandle} key={character.name + character.id} character={character} />
    )

    return (
      <div className="character-container">
        {charactersToDisplay}
      </div>
    );
}

export default CharactersList;
