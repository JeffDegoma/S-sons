import React, { Component } from 'react';
import UserForm from './UserForm'
import GameTable from './GameTable'

let tasks = ['hey']


class App extends React.Component {

     constructor(props) {
        super(props);
        this.state = {
            
        }     
    }
   
    render(){
      return (
        <div className="container">
            {/*<h2 className="title">Eisenhower Method</h2>*/}
            <GameTable />
            <UserForm />
        </div>
      )
    }
}

export default App;