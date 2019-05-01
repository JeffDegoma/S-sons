import React, { Component } from 'react';
import UserForm from './UserForm'
import GameTable from './GameTable'


class App extends React.Component {
     constructor(props) {
        super(props);
        this.state = {
            text: '',
            characterName: '',
            characters: {},
            guessedChars:{}//real data should come from a database
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
      let guessedArr = [].concat(this.props.chars.filter(character => character.guessed === true))
      this.setState({
          characterName: text,
          characters: arr,
          text: '',
          guessedChars: guessedArr//store correct guesses in a separate array and pass to userform
      })
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
                      alreadyGuessed={this.state.guessedChars}
             />
        </div>
      )
    }
}

export default App;