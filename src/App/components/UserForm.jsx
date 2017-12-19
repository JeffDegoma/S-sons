import React from 'react';
import Fader from './Fader';
import swal from 'sweetalert';

// const onSubmit = ev => {
//     ev.preventDefault();
//     const nameReturn = ev.target.submittedName.value;

//     alert(`you submitted ${nameReturn}`)

// }


// const UserForm = () => {
//     return(
//         <form onSubmit={onSubmit}>
//             <label>Type here, man:
//             <input type="text" name="submittedName" placeholder="Bart Simpson"/>
//             </label>
//             <input type="submit"/>
//         </form>
//     )
// }

class UserForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(ev) {
        this.props.onTextChange(ev.target.value)
    }

    handleSubmit(ev) {
        ev.preventDefault()
        let name = [].concat(this.props.chars.filter((character, index) => {
            if (character.firstName === this.props.text.toUpperCase() || character.fullName === this.props.text.toUpperCase()){
               return character.guessed = !character.guessed
            }
        }))
        if(name.length !== 0){
                this.props.handleSubmit(this.props.text) 
            }else{
                swal(`DOH! ${this.props.text} doesn\'t exist!`)
            }
    }

    render() {
        return (
        <form onSubmit={this.handleSubmit}>
            <label>Type here, man:
            <input type="text" onChange={this.handleChange} value={this.props.text} name="submittedName" placeholder="Bart Simpson"/>
            </label>
            <input type="submit"/>
        </form>
        )
    }
}

//if user guesses the same person already



export default UserForm;