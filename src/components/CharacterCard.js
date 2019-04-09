import React, { Component } from 'react';
import HouseChangeForm from './HouseChangeForm';

import Hufflepuff from '../assets/Hufflepuff.png';
import Ravenclaw from '../assets/Ravenclaw.png';
import Slytherin from '../assets/Slytherin.png';
import Gryffindor from '../assets/Gryffindor.png';

class CharacterCard extends Component  {

        state={
          clicked:false
        }

       houseImg = (house) => {
        if(house === "Hufflepuff"){
          return Hufflepuff
        } else if(house === "Ravenclaw"){
          return Ravenclaw
        } else if(house === "Slytherin"){
          return Slytherin
        } else if(house === "Gryffindor"){
          return Gryffindor
        }
      }

      handleClickedHouse = () =>{
        this.setState({
          clicked: !this.state.clicked
        })
      }

  render(){
    const {character:{name, image1, house}} = this.props;
    const displayImg = this.houseImg(house);
    return (
      <div className="character-div" >
        <div>
          <h4>{name}</h4>
          <img alt={name} className="character-div-img" src={image1} />
          <br/>
          <div className="img-house-div">
            <img onClick={this.handleClickedHouse} alt={house} height="100px" src={displayImg} />
            {this.state.clicked?
              <HouseChangeForm charactersImg1={image1} submitUpdateHandle={this.props.submitUpdateHandle} house={house} />
              : '' }

        </div>
        </div>
      </div>
    );
  }
}

export default CharacterCard;
