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

class UserForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(ev) {
        ev.preventDefault()
        const name = this.state.input
        alert(`${name}!`)
    }

    handleChange(ev) {
        this.setState({
            input: ev.target.value
        })
    }

    render() {
        return (
        <form onSubmit={this.handleSubmit}>
            <label>Type here, man:
            <input type="text" onChange={this.handleChange} value={this.state.input} name="submittedName" placeholder="Bart Simpson"/>
            </label>
            <input type="submit"/>
        </form>
        )
    }
}


export default UserForm;