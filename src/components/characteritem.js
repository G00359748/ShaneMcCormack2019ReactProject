import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { Link } from 'react-router-dom';


class CharacterItem extends React.Component{

  constructor(){
    super();
    this.DeleteCharacter = this.DeleteCharacter.bind(this);
  }

  DeleteCharacter(e){
    console.log("Delete Clicked");
    axios.delete("http://localhost:4000/api/characters/"+this.props.character._id)
    .then()
    .catch();

  }

    render(){
        return(
          <div>

          {/* <h4>{this.props.movie.Title}</h4>

          <p>{this.props.movie.Year}</p>

          <img src={this.props.movie.Poster}></img> */}


  <Card  border="primary" style={{ width: '28rem' }}>
  <Card.Header>{this.props.character.name}</Card.Header>
  <Card.Body>
    <blockquote className="blockquote mb-0">
    <img src={this.props.character.image}></img>
      <footer>
      {this.props.character.actor}
      </footer>
    </blockquote>
  </Card.Body>
  <Button variant="danger" onClick={this.DeleteCharacter}>Delete</Button>
<Link to={"/edit/" + this.props.character._id} className="btn btn-primary">Edit</Link>
</Card>
            </div>
        )
    }
}
export default CharacterItem;