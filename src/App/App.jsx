import React, { Component } from 'react';


const tasks =  [
                {
                    taskDescription: 'apply for NPR',
                    priority: true,
                    importance: true
                },
                {
                    taskDescription: 'attend meetup',
                    priority: false,
                    importance: true

                },
                {
                    taskDescription: 'work on graphql',
                    priority: true,
                    importance: true

                },
                {
                    taskDescription: 'play zelda',
                    priority: false,
                    importance: false

                },
                {
                    taskDescription: 'social media',
                    priority: false,
                    importance: false

                },
                {
                    taskDescription: 'update grocery list',
                    priority: true,
                    importance: false
                }
            ]


class App extends React.Component {

     constructor(props) {
        super(props);
        this.state = {
            tasks,
        }     
    }
   
    render(){
      return (
        <div className="container">
            <h2 className="title">Eisenhower Method</h2>
            <div className="q-container">
                <div className="quadrants aqua pull-left"></div>
                <div className="quadrants blue pull-right" ></div>
                <div className="quadrants green pull-left bottom"></div>
                <div className="quadrants tan pull-right bottom"></div>
            </div>
        </div>
      )
    }
}

export default App;