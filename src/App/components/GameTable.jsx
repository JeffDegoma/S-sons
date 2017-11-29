import React from 'react'




class GameTable extends React.Component {



    render(){
        return (
            <table id="gameTable">
                <tbody>         
                <tr>
                    <td>
                        <div className="char_box">
                            <div className="d_extra"></div>
                            <div className="d_value">name</div>
                        </div>
                    </td>
                </tr>
                </tbody>
            </table>         
        )
    }

}

export default GameTable;