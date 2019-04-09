import React, { PureComponent } from 'react';

class HouseChangeForm extends PureComponent {

  constructor(props){
    super(props)
    this.state = {
      house: this.props.house
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]:event.target.value
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={ (event) => this.props.submitUpdateHandle(this.props.charactersImg1,event)}>
          <select onChange={this.handleChange} value={this.state.house} name="house">
            <option value="Hufflepuff" >Hufflepuff</option>
            <option value="Ravenclaw" >Ravenclaw</option>
            <option value="Slytherin" >Slytherin</option>
            <option value="Gryffindor" >Gryffindor</option>
          </select>
          <input type="submit" value="Switch!"></input>
        </form>
      </div>
    );
  }
}

export default HouseChangeForm;
