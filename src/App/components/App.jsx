import React, { Component } from 'react';
import UserForm from './UserForm'
import GameTable from './GameTable'
import Fader from './Fader';
import ReactDOM from 'react-dom';


class App extends React.Component {

     constructor(props) {
        super(props);
        this.state = {
            text: '',
            characterName: '',
            characters: {}
        }  
        this.handleChange = this.handleChange.bind(this)
        this.handleCharacterSubmit = this.handleCharacterSubmit.bind(this)
    }

    handleChange(text) {
      this.setState({
        text
      })
    }

    handleCharacterSubmit(text) {
      let arr = [].concat(this.props.chars.filter(character => character.guessed !== true))
        this.setState({
            characterName: text,
            characters: arr,
            text: ''
        })
    }

    charsGuessedProp() {
      //if they're all true?
      let arr = [].concat(this.props.chars.filter(character => character.guessed === true))
      console.log('charsGuessed?', arr)
    }
   
    render(){
      return (
        <div className="container">
            <h2 className="title">Can you name them all???</h2>
            <GameTable characters={this.state.characters}
                       charName={this.state.characterName}
                       startingChars={this.props.chars}
                       text={this.state.text}
                       onTextChange={this.handleChange}

            />
            <UserForm onTextChange={this.handleChange}
                      text={this.state.text}
                      chars={this.props.chars} 
                      handleSubmit={this.handleCharacterSubmit}
             />
        </div>
      )
    }
}

export default App;