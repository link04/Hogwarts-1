import React, { PureComponent } from 'react';
import HouseChangeForm from './HouseChangeForm';


class CharacterHouseCard extends PureComponent {

  state={
    clickedHouse:false
  }

  handleClickedHouse = () =>{
    console.log(this.state);
    console.log(this.props);

    this.setState({
      clickedHouse: !this.state.clickedHouse
    })
  }
  handleClickedImg = () =>{
    this.setState({
      clickedImg: !this.state.clickedImg
    })
  }

  render() {
    const {character:{name, image2, image1, house, age, role}} = this.props;
    return (
        <div className="character-div" >
          <div>
            <br/>
            <img alt={name} onClick={this.handleClickedImg} className="character-div-img-house" src={image2} />
          </div>
          {this.state.clickedImg ?
              <div>
                <h5>Name: {name}</h5>
                <h5>Age: {age}</h5>
                <h5>Role:{role}</h5>
                <h5 onClick={this.handleClickedHouse}>House:{house}</h5>
        {this.state.clickedHouse ?
          <HouseChangeForm  charactersImg1={image1} submitUpdateHandle={this.props.submitUpdateHandle}  />
          : '' }
              </div>
          :
            ''
          }

        </div>
    );
  }
}

export default CharacterHouseCard;
