import React from 'react'
import Characters from './characters';
import axios from 'axios';


class Read extends React.Component{

    state = {
        characters: []
    };

    componentDidMount() {
        axios.get('http://localhost:4000/api/characters')
        .then((response)=>{
            this.setState({characters: response.data.characters})
        })
        .catch((error)=>{
            console.log(error);
        });
    }

    render(){
        return(
            <div>
                <h1>Hello from Read Component</h1>
                <Characters myCharacters={this.state.characters}></Characters>
            </div>
        );
    }
}
export default Read;