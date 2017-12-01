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
    }


    handleChange(ev) {
        this.props.onTextChange(ev.target.value)
    }

    render() {
        return (
        <form onSubmit={this.props.handleSubmit}>
            <label>Type here, man:
            <input type="text" onChange={this.handleChange} value={this.props.text} name="submittedName" placeholder="Bart Simpson"/>
            </label>
            <input type="submit"/>
        </form>
        )
    }
}


export default UserForm;