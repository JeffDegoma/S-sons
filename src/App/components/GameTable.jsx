import React from 'react';
import Item from './Springfieldians';



class GameTable extends React.Component {
    constructor(props){
        super(props)
    }

    //use people prop and guessed prop?
    render() {
        let simpChars = this.props.characters.map((character, index) => { 
        let name = character.firstName !== this.props.people ? `` : `${this.props.people}`
            return(
                    <li className="list-item" key={index}>
                        <div className="char_box">
                            <Item character={character}/>
                            <div className="d_value" value={this.props.people}>{name}</div>
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