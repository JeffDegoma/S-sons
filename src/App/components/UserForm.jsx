import React from 'react';

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

//App is the common owner of the state
//pass it down to the UserForm
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
      console.log("Props from UserForm", this.props)
      const name = [].concat(this.props.chars.map((character, index) => character.firstName))
        // if they get the name wrong
        // if(name.firstName !== this.props.text) {
        //   console.log('I don\'t know that character!...haw haw!' )
        //   return;
        // } 
        if(name.indexOf(this.props.text) === -1){
          console.log('I don\'t know that character!...haw haw!' )
          return;
        } else {
          this.props.characterChanged(this.props.text)
        }

        return name;
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


export default UserForm;