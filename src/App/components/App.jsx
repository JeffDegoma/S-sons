import React, { Component } from 'react';
import UserForm from './UserForm'
import GameTable from './GameTable'


class App extends React.Component {

     constructor(props) {
        super(props);
        this.state = {
            text: '',
            characterName: '',
            guessed: false
        }  
        this.handleChange = this.handleChange.bind(this)
        this.handleCharacterChange = this.handleCharacterChange.bind(this)
        // this.handleSubmit = this.handleSubmit.bind(this)
    }

    //takes in a text input and sets state.text
    handleChange(text) {
      this.setState({
        text
      })
      // console.log(text)
    }

    handleCharacterChange(text) {
        this.setState({
            characterName: text,
            guessed: !this.state.guessed
        })
        console.log("From App", text)
    }
      

   
    render(){
      return (
        <div className="container">
            <h2 className="title">Can you name them all?</h2>
            <GameTable characters={this.props.chars}
                       people={this.state.characterName}

            />
            <UserForm onTextChange={this.handleChange}
                      text={this.state.text}
                      chars={this.props.chars} 
                      characterChanged={this.handleCharacterChange}

             />
        </div>
      )
    }
}

export default App;