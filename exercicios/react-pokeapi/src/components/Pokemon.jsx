import React, {useEffect, useState} from "react";

export default function Pokemon ({data}) {
    const [pokemon, setPokemon] = useState({name: '', exp: '', img: ''}) 
    useEffect(() => {
        fetch(data.url)
        .then(response => response.json())
        .then(data => {
            setPokemon({
                name: data.name,
                exp: data.base_experience,
                img: data.sprites.front_default
            })
        })
        .catch(error => console.log(error))
    }, []);
    return(
        <div style={{display: 'flex', alignItems: 'center'}}>
        <img src={pokemon.img} style={{width: 50}} />
        <span style={{fontSize: 20, marginRight: 10}}>{pokemon.name}</span>
        <span>{pokemon.exp} Exp</span>
        </div>
    )
}
