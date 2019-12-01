import React from 'react';
import axios from 'axios';
import { newExpression } from '@babel/types';

class Create extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      Name: '',
      Actor: '',
      Image: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCharacterNameChange = this.handleCharacterNameChange.bind(this);
    this.handleCharacterActorChange = this.handleCharacterActorChange.bind(this);
    this.handleCharacterImageChange = this.handleCharacterImageChange.bind(this);
  }

  handleCharacterNameChange(e) {
    this.setState({ Name: e.target.value });
  }

  handleCharacterActorChange(e) {
    this.setState({ Actor: e.target.value });
  }

  handleCharacterImageChange(e) {
    this.setState({ Image: e.target.value });
  }

  handleSubmit(e) {
    alert(this.state.Name + "      " + this.state.Actor
      + "       " + this.state.Image);
    e.preventDefault();


    const newCharacter = {
      name: this.state.Name,
      year: this.state.Actor,
      image: this.state.Image
    };
    axios.post('http://localhost:4000/api/characters', newCharacter)
      .then()
      .catch();


    this.setState({
      Name: '',
      Actor: '',
      Image: ''
    });
  }

  render() {
    return (
      <div>
        <h1>Hello from Create component</h1>
        <form onSubmit={this.handleSubmit}>
          <div className='form-group'>
            <label>Name</label>
            <input
              type='text'
              className='form-control'
              value={this.state.Name}
              onChange={this.handleCharacterNameChange}
            ></input>
          </div>
          <div className='form-group'>
            <label>Actor</label>
            <input
              type='text'
              className='form-control'
              value={this.state.Actor}
              onChange={this.handleCharacterActorChange}
            ></input>
          </div>
          <div className='form-group'>
            <label>Image</label>
            <textarea
              row='3'
              className='form-control'
              value={this.state.Image}
              onChange={this.handleCharacterImageChange}
            ></textarea>
          </div>
          <div>
            <input
              type="submit"
              value="Add Character">
            </input>
          </div>
        </form>
      </div>
    );
  }
}

export default Create;