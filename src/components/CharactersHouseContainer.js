import React, { PureComponent } from 'react';
import CharacterHouseCard from './CharacterHouseCard';

import Hufflepuff from '../assets/Hufflepuff.png';
import Ravenclaw from '../assets/Ravenclaw.png';
import Slytherin from '../assets/Slytherin.png';
import Gryffindor from '../assets/Gryffindor.png';


class CharactersHouseContainer extends PureComponent {

    houseCharacterMapper = (array) => {
      return array.map(character =>
        <CharacterHouseCard submitUpdateHandle={this.props.submitUpdateHandle} key={character.image1} character={character} />
      )
    }

  render() {
    const houses = ['Hufflepuff', 'Ravenclaw', 'Slytherin', 'Gryffindor'];
    let housesObject = {
      hufflepuff:  [],
      ravenclaw : [],
      slytherin : [],
      gryffindor:  []
    }

    houses.forEach(house =>
      housesObject[house.toLowerCase()] = this.props.characters.filter(character =>
        character.house === house
      )
    )

    return (
      <div >
        <h1>Houses</h1>
        { housesObject.hufflepuff.length > 0 ?
        <div >
          <img src={Hufflepuff} width="100px" />
          <h3 style={{marginTop: '0px'}} >{houses[0]}</h3>
            <div className="character-container" >
              {this.houseCharacterMapper(housesObject.hufflepuff)}
            </div>
        </div>
        : ''}
        { housesObject.ravenclaw.length > 0 ?
        <div>
          <img src={Ravenclaw} width="100px" />
          <h3 style={{marginTop: '0px'}} >{houses[1]}</h3>
            <div className="character-container">
              {this.houseCharacterMapper(housesObject.ravenclaw)}
            </div>
        </div>
        : ''}
        { housesObject.slytherin.length > 0 ?
        <div >
          <img src={Slytherin} width="100px" />
          <h3 style={{marginTop: '0px'}} >{houses[2]}</h3>
            <div className="character-container">
              {this.houseCharacterMapper(housesObject.slytherin)}
            </div>
        </div>
        : ''}
        { housesObject.gryffindor.length > 0 ?
        <div>
          <img src={Gryffindor} width="100px" />
          <h3 style={{marginTop: '0px'}} >{houses[3]}</h3>
            <div className="character-container">
              {this.houseCharacterMapper(housesObject.gryffindor)}
            </div>
        </div>
        : ''}
      </div>
    );
  }
}

export default CharactersHouseContainer;
