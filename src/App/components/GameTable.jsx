import React from 'react';
import characters from '../character';
import Item from './Springfieldians';



class GameTable extends React.Component {
    constructor(){
        super()
        this.state = {
            characters: [...characters]
        }
    }

    render(){
        let simpChars = this.state.characters.map((character, index) => {  
            return(
                    <td key={index}>
                        <div className="char_box">
                            <div className="d_extra">
                                <Item character={character}/>
                            </div>
                            <div className="d_value">{character.firstName} {character.lastName}</div>
                        </div>
                    </td>
            )
        })
        return (
            <table id="gameTable">
                <tbody>         
                <tr>
                   {simpChars}
                </tr>
                </tbody>
            </table>         
        )
    }

}

export default GameTable;