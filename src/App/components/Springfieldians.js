import React from 'react'


const Item = ({character}) => {
    return (
        <img className='avatar' height='150px' width='150px' alt='avatar' src={character.imageUrl}/>
    );
}

export default Item;