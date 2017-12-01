import React from 'react';
import Item from './Springfieldians';



class GameTable extends React.Component {
    constructor(props){
        super(props)
   
        this.handleGuess = this.handleGuess.bind(this)
    }

    handleGuess(e) {
        this.props.handleSubmit(e.target.value)
    }


    render() {
        let simpChars = this.props.characters.map((character, index) => {  
            return(
                    <li className="list-item" key={index}>
                        <div className="char_box">
                            <Item character={character}/>
                            <div className="d_value" value={this.handleGuess}></div>
                        </div>
                    </li>
            )
        })
        return (
            <div id="gameTable">
                <ul>
                    { simpChars }
                </ul>
            </div>         
        )
    }

}

export default GameTable;