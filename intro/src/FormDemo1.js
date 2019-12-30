import React, { Component } from 'react'
import alertify from 'alertifyjs';

export default class FormDemo1 extends Component {
    state = {userName:"",city:""};
    onChangeHandler = (event)=>{
        // this.setState({userName:event.target.value});//Tek değerli veriler

        let name = event.target.name;
        let value = event.target.value;

        this.setState({[name]:value});//Birden çok değerler için
    }
    onSubmitHandler = (event)=>{
        event.preventDefault();
        alertify.success(this.state.userName);
    }
    render() {
        return (
            <div>
                <form onSubmit={this.onSubmitHandler}>
                    <h3>User Name:</h3>
                    <input name="userName" type="text" onChange={this.onChangeHandler}></input>
                    <h3>User Name is {this.state.userName}</h3>

                    <h3>City:</h3>
                    <input name="city" type="text" onChange={this.onChangeHandler}></input>
                    <h3>City is {this.state.city}</h3>
                    <button type="submit" value="save">Save</button>
                </form>
            </div>
        )
    }
}
