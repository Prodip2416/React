import React, { Component } from 'react'
import Style from './MyStyle.module.css';

export class Forms extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userName: '',
            age: null,
            errorMessage: '',
            comments : ''
        }
    }
    onChangeHandler = (e) => {
        let nam = e.target.name;
        let val = e.target.value;
        let err = ''

        if (nam === "age") {
            if (!Number(val)) {
                err = <h3 className={Style.error}>Your age must be a number</h3>;
            }
        }

        this.setState({ errorMessage: err })
        this.setState({ [nam]: val });
        this.setState({ comments: e.target.textarea })
    }
    mySubmitHandler = (e) => {
        e.preventDefault();
        alert('You are submitting - name : ' + this.state.userName + ' age : ' + this.state.age)
    }
    render() {
        let header = ''
        // if (this.state.userName) {
        // header = <h2>Hello, {this.state.userName} </h2>
        // }
        // else if(this.state.age){
        //     headerFull = <h2> and your age : {this.state.age}</h2>
        // } 
        // else {
        //     headerFull = ''
        // }
        return (
            <div>
                <form onSubmit={this.mySubmitHandler}>
                    {this.state.errorMessage}<br />
        <h2>Hello! {this.state.userName}, your age : {this.state.age}, {this.state.comments}</h2>
                    {/* {header}  */}
                    <p>Enter your name:  <input type="text" name="userName" onChange={this.onChangeHandler} /></p>
                    <p>Enter your age: <input type="text" name="age" onChange={this.onChangeHandler} /></p>
                    <p>Comments : <textarea name="comments" onChange={this.onChangeHandler} /></p>
                    <p> Car Bands :<select>
                        <option value="Ford">Ford</option>
                        <option value="Volvo" selected>Volvo</option>
                        <option value="Fiat">Fiat</option>
                    </select></p>
                    <input type="submit" />

                </form>
            </div>
        )
    }
}

export default Forms
