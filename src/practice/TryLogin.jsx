import React from 'react';

class TLogin extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name : '',
            pass : ''
        }
    }
    toEnter = (event) => {
        let key = event.target.name;
        let value = event.target.value;
        this.setState({[key]:value});
    }
    login = (event) => {
        if(this.state.name == "")
            alert("Enter Name")
        else if(this.state.pass == "")
            alert("Enter Password")
        else
            alert("Hello !! "+this.state.name);
    }
    render(){
        return(
        <form>
            <h1>Login</h1>
            <p>Enter Name : {this.state.name} 
            <input type = "text" name = "name" onChange = {this.toEnter}></input></p>
            <p>Enter Password : 
            <input type = "password" name = "pass" onChange = {this.toEnter}></input></p>
            {/* <p><select>
                <option value = "male">Male</option>
                <option value = "female">Female</option>
                </select></p><br/><br/> */}
            <button onClick = {this.login}>Login</button>
        </form>
        );
    }
}

export  default TLogin