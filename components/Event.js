// import React from 'react'

// function Event() {
//     function shoot(){
//         alert('Great Shoot!')
//     }
//     return (
//         <div>
//             <h2>Hello from Event</h2>
//             <button onClick={shoot}>Click Me</button>
//         </div>
//     )
// }

// export default Event

import React, { Component } from 'react'

export class Event extends Component {
    // shoot(){
    //     alert('Great Shoot')
    // }
    shoot = () =>{
        alert(this)
    }
    render() {
        return (
            <div>
                <button onClick={this.shoot}>Take A Shoot</button>
            </div>
        )
    }
}

export default Event

