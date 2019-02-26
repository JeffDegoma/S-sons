import React from 'react';
import Item from './Springfieldians';
import Fader from './Fader';


class GameTable extends React.Component {
    constructor(props){
        super(props)
    }

    render() {
        let simpChars;
        let name;
        
        //while there's nothing submitted yet, set display
        if(this.props.charName === ''){
            simpChars = this.props.startingChars.map((character, index) => { 
            name = character.firstName !== this.props.text.toUpperCase().trim() ? `` : `${this.props.text}`
            
                return (
                    <div className="char_box" key={index}>
                        <Item character={character}/>
                        <input type="text" className="d_value" value={name} />
                    </div>
                )
            })
        } else {
            simpChars = this.props.characters.map((character, index) =>{
            name = character.firstName !== this.props.text.toUpperCase().trim() ? `` : `${this.props.text}`

                return (
                    <div className="char_box" key={index}>
                        <Item character={character}/>
                        <input className="d_value" value={name} />
                    </div>
                )
            })
        }

        return (
            <div id="gameTable">
                <ul>
                    <li>
                        <Fader>
                            { simpChars }
                        </Fader>
                    </li>
                </ul>
            </div>         
        )
    }

}

export default GameTable;