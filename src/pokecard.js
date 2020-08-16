import React from 'react';
const Pokecard = (props) => {
    return (
        <React.Fragment>
            <div className='pokemon-card'>
                <h3 className='poke-name'> {props.name}</h3>
                <img className='poke-img' src={props.img} alt=''></img>
                <p className='poke-type'>{props.type}</p>
                <p className='poke-experience'>{props.EXP}</p>
            </div>
        </ React.Fragment>

    )

}

export default Pokecard