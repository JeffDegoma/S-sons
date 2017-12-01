import React, { Component } from 'react';
import UserForm from './UserForm'
import GameTable from './GameTable'
import characters from '../character';


class App extends React.Component {

     constructor(props) {
        super(props);
        this.state = {
            characters: [...characters],
            text: ''
        }  
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(text) {
      this.setState({
        text
      })
      console.log(text)
    }
      
    handleSubmit(ev) {
      ev.preventDefault()
      const name = [].concat(this.state.characters.map(character => character.firstName))
      
      //if they get the name wrong
      if(name.indexOf(this.state.text) === -1){
        console.log('I don\'t know that character!...haw haw!' )

      } 

    }

   
    render(){
      return (
        <div className="container">
            <h2 className="title">Can you name them all?</h2>
            <GameTable characters={this.state.characters}
                       handleGuess={this.handleSubmit}
            />
            <UserForm onTextChange={this.handleChange}
                      text={this.state.text}
                      handleSubmit={this.handleSubmit}
             />
        </div>
      )
    }
}

export default App;