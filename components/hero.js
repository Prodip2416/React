import React from 'react'

function hero(props) {
    const {heroName} = props
    if(props.heroName === "Joker"){
        throw new Error("Not a hero.");
        
    }
    return (
        <div>
            hy {heroName}
        </div>
    )
}

export default hero
