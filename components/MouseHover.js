import React, { Component } from 'react'

export class MouseHover extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
        // this.Increment = this.Increment.bind(this)
    }
    //    Increment(){
    //     this.setState({ count: this.state.count + 1 })
    //     }
    Increment = () => {
        this.setState(prevSatte => {
            return { count: prevSatte.count + 1 }
        })
    }

    render() {
        const { count } = this.state
        return (
            <div>
                <h2 onMouseOver={this.Increment}>Mouse Hover {count} Times</h2>
            </div>
        )
    }
}

export default MouseHover
