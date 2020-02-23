import React, { Component } from 'react'  
import Select from 'react-select';  
import axios from 'axios';  
  
export class Reactsel extends Component {  
        constructor(props) {  
                super(props)  
  
                this.state = {  
                        country: []  
                }  
        }  
        componentWillMount() {  
                axios.get('http://localhost:51983/Api/autoComplete/Countrylist').then(response => {  
                        console.log(response);  
                        this.setState({  
                                country: response.data  
  
                        })  
                })  
        }  
        Country() {  
                return (this.state.country.map(data => ({ label: data.Name, value: data.Id })))  
        }  
        render() {  
                return (  
                        <>  
                                <div style={{ margin: "10px" }} class="row" className="hdr">  
                                <div class="col-sm-12 btn btn-warning">  
                                 React Select  
                                 </div>  
                                </div>  
                                <div className="container">  
                                        <div className="row">  
                                                <div className="col-md-3"></div>  
                                                <div className="col-md-6">  
                                                        <Select options={this.Country()} />  
                                                </div>  
                                                <div className="col-md-4"></div>  
                                        </div>  
                                </div>  
                        </>  
                )  
        }  
}  
  
export default Reactsel