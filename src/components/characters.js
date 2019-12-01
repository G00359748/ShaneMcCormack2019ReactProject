import React from 'react';
import CharacterItem from './characteritem';

class Characters extends React.Component{

    render(){
        return this.props.myCharacters.map((character)=>{
            //console.log({character});
            return <CharacterItem key={character._id} character={character}></CharacterItem>
        });
    }
}
export default Characters;