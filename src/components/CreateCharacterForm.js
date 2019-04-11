import React, { PureComponent } from 'react';

class CreateCharacterForm extends PureComponent {

  state = {
    hidden:true,
    name:'',
    age:'',
    house:'',
    role:'',
    image1:'',
    image2:''
  }

  handleInputChange = (event) => {
    this.setState({
      [event.target.name]:event.target.value
    })
  }

  handleClickShow = (event) => {
    this.setState({
      hidden: !this.state.hidden
    })
  }

  characterSubmitFormInputs = (event) =>{
    this.props.characterSubmitHandler(event);
    this.setState({
      hidden:true,
      name:'',
      age:'',
      house:'',
      role:'',
      image1:'',
      image2:''
    });
  }

  render() {
    return (
      <div className="">

          <h4 onClick={this.handleClickShow}> Add New Character
            <small>
              {this.state.hidden? '(Show +)' : '(Hide -)'}
            </small>
          </h4>
          <form hidden={this.state.hidden} onSubmit={this.characterSubmitFormInputs} >
              <input required placeholder="Character Name" type="text" name="name" value={this.state.name} onChange={this.handleInputChange} />
              <input required placeholder="Character Age" type="number" name="age" value={this.state.age} onChange={this.handleInputChange} />
              <label htmlFor="house">Select House</label>
              <select required onChange={this.handleInputChange} value={this.state.house} name="house">
                <option defaultValue value="" >Select House</option>
                <option value="Hufflepuff" >Hufflepuff</option>
                <option value="Ravenclaw" >Ravenclaw</option>
                <option value="Slytherin" >Slytherin</option>
                <option value="Gryffindor" >Gryffindor</option>
              </select>
              <label htmlFor="role">Select Role</label>
              <select required onChange={this.handleInputChange} value={this.state.role} name="role">
                <option defaultValue value="" >Select Role</option>
                <option value="Student" >Student</option>
                <option value="Professor" >Professor</option>
                <option value="Headmaster" >Headmaster</option>
              </select>
              <input required placeholder="Character Image1" type="text" name="image1" value={this.state.image1} onChange={this.handleInputChange} />
              <input required placeholder="Character Image2" type="text" name="image2" value={this.state.image2} onChange={this.handleInputChange} />

              <input type="submit" value="Create"></input>
        </form>
      </div>
    );
  }
}

export default CreateCharacterForm;
