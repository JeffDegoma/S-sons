import React from 'react'


const Item = ({character}) => {
    return (

    <img className='avatar' height='120px' width='120px' alt='avatar' src={character.imageUrl}/>

    );
}

export default Item;