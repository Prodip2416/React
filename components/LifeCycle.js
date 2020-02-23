// import React, { Component } from 'react'

// class LifeCycle extends Component {
//     constructor(props) {
//         super(props)

//         this.state = {
//              color:'Yellow'
//         }
//     }
//     componentDidMount(){
//         setTimeout(() => {
//             this.setState({
//                 color: 'Gray'
//             })
//         }, 5000);
//     }

//     render() {
//         return (
//             <div>
//                 <hy>My Fact color Is : {this.state.color}</hy>
//             </div>
//         )
//     }
// }

// export default LifeCycle

import React, { Component } from 'react'

class LifeCycle extends Component {
    constructor(props) {
      super(props);
      this.state = {favoritecolor: "red"};
    }
    // static getDerivedStateFromProps(props, state) {
    //   return {favoritecolor: props.favcol };
    // }
    changeColor = () => {
      this.setState({favoritecolor: "blue"});
    }
    render() {
      return (
        <div>
        <h1>My Favorite Color is {this.state.favoritecolor}</h1>
        <button type="button" onClick={this.changeColor}>Change color</button>
        </div>
      );
    }
  }
  
  export default LifeCycle