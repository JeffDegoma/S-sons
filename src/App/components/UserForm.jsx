import React from 'react';
import swal from 'sweetalert';


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
    alreadyGuessed() {
        let guessedName = [].concat(this.props.alreadyGuessed)
        // guessedName.map((character, index) => {
        //     console.log(character)
        // })
        console.log(guessedName)
    }


    handleSubmit(ev) {
        ev.preventDefault()
        let name = this.props.chars.filter((character, index) => {
            if (character.firstName === this.props.text.toUpperCase().trim() || character.fullName === this.props.text.toUpperCase().trim()){
               return character.guessed = !character.guessed
            }
        })
        if(name.length !== 0){
            this.props.handleSubmit(this.props.text)
        }else{
            swal(`Doh! ${this.props.text.toUpperCase()} doesn\'t exist!`)
        }
        //functionality to handle duplicate guesses
        //if name is in the array..
        

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