import React from 'react'

function MultipleComponents() {
    const numbers=[1,2,3]
    const listNum = numbers.map((number)=>
    <li>{number}</li>
    )
    return (
        <div>
            <ul>
                {listNum}
            </ul>
        </div>
    )
}

export default MultipleComponents
