import React from 'react';
import swal from 'sweetalert';
import { isArray } from 'util';
class UserForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.alreadyGuessed = this.alreadyGuessed.bind(this)
    }
  
    handleChange(ev) {
        this.props.onTextChange(ev.target.value)
    }

    //if user guesses the same person already
    alreadyGuessed(guessedAgain) {
        let guessedName = this.props.alreadyGuessed
        guessedName.map(character => {
             if(character.firstName === guessedAgain.toUpperCase()){
                swal(`Whoops, ${guessedAgain.toUpperCase().trim()} was already guessed!`)
             }
        })
        
    }
    handleSubmit(ev) {
        ev.preventDefault()
        let name = this.props.chars.filter((character, index) => {
            if (character.firstName === this.props.text.toUpperCase().trim() || character.fullName === this.props.text.toUpperCase().trim()){
               return character.guessed = true
            }
        })
        if(name.length !== 0){
            console.log(name)
            this.props.handleSubmit(this.props.text)
        }else {
            swal(`Doh! ${this.props.text.toUpperCase()} doesn\'t exist!`)
        }
        
        //functionality to handle duplicate guesses
        this.alreadyGuessed(this.props.text)
    }
    render() {
        return (
        <form onSubmit={this.handleSubmit}>
            <label>Type here:
            <input type="text" onChange={this.handleChange} value={this.props.text} name="submittedName" placeholder="apu"/>
            </label>
            <input type="submit"/>
        </form>
        )
    }
}
export default UserForm;